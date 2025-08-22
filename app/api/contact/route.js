import { NextResponse } from 'next/server';
import { sendContactFormEmail } from '@/lib/emailService';

// Rate limiting helper (simple in-memory store for demo)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 requests per window

function checkRateLimit(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;
  
  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, []);
  }
  
  const requests = rateLimitStore.get(ip).filter(time => time > windowStart);
  
  if (requests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  requests.push(now);
  rateLimitStore.set(ip, requests);
  return true;
}

export async function POST(request) {
  const startTime = Date.now();
  let clientIP = 'unknown';
  
  try {
    // Get client IP for rate limiting
    clientIP = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'localhost';
    
    // Rate limiting check
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, subject, message, service } = body;

    // Enhanced validation
    const errors = [];
    
    if (!name || name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long');
    }
    
    if (!email || email.trim().length === 0) {
      errors.push('Email is required');
    }
    
    if (!subject || subject.trim().length < 3) {
      errors.push('Subject must be at least 3 characters long');
    }
    
    if (!message || message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long');
    }
    
    // Email validation with more comprehensive regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (email && !emailRegex.test(email.trim())) {
      errors.push('Please provide a valid email address');
    }
    
    // Phone validation (optional but if provided, should be valid)
    if (phone && phone.trim().length > 0) {
      const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/;
      if (!phoneRegex.test(phone.trim().replace(/\s/g, ''))) {
        errors.push('Please provide a valid phone number');
      }
    }
    
    if (errors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // Send emails with timeout
    const emailPromise = sendContactFormEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || '',
      subject: subject.trim(),
      message: message.trim(),
      service: service?.trim() || ''
    });
    
    // Add timeout to email sending
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Email sending timeout')), 30000)
    );
    
    const emailResult = await Promise.race([emailPromise, timeoutPromise]);

    if (emailResult.success) {
      const processingTime = Date.now() - startTime;
      console.log(`Contact form processed successfully in ${processingTime}ms for IP: ${clientIP}`);
      
      return NextResponse.json(
        { 
          message: 'Contact form submitted successfully. We will get back to you within 24 hours.',
          success: true
        },
        { status: 200 }
      );
    } else {
      console.error('Email sending failed:', emailResult.error, `IP: ${clientIP}`);
      return NextResponse.json(
        { 
          error: 'Failed to send email. Please try again or contact us directly.',
          success: false
        },
        { status: 500 }
      );
    }
  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error(`Contact form error after ${processingTime}ms:`, error, `IP: ${clientIP}`);
    
    // Handle specific error types
    if (error.message === 'Email sending timeout') {
      return NextResponse.json(
        { 
          error: 'Request timeout. Please try again.',
          success: false
        },
        { status: 408 }
      );
    }
    
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { 
          error: 'Invalid request format. Please check your data.',
          success: false
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Internal server error. Please try again later.',
        success: false
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
        ? process.env.ALLOWED_ORIGINS || 'https://yourdomain.com'
        : '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400', // 24 hours
    },
  });
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to submit contact form.' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to submit contact form.' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to submit contact form.' },
    { status: 405 }
  );
}