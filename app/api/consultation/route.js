import { sendConsultationFormEmail } from '@/lib/emailService';
import { NextResponse } from 'next/server';

// Rate limiting helper (simple in-memory store for demo)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 consultation requests per window

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
      console.warn(`Consultation rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { error: 'Too many consultation requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, service, preferredDate, preferredTime, message } = body;

    // Enhanced validation
    const errors = [];
    
    if (!name || name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long');
    }
    
    if (!email || email.trim().length === 0) {
      errors.push('Email is required');
    }
    
    if (!service || service.trim().length === 0) {
      errors.push('Service selection is required');
    }
    
    // Email validation with more comprehensive regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (email && !emailRegex.test(email.trim())) {
      errors.push('Please provide a valid email address');
    }
    
    // Phone validation (required for consultations)
    if (!phone || phone.trim().length === 0) {
      errors.push('Phone number is required for consultation booking');
    } else {
      const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/;
      if (!phoneRegex.test(phone.trim().replace(/\s/g, ''))) {
        errors.push('Please provide a valid phone number');
      }
    }
    
    // Date validation (if provided)
    if (preferredDate && preferredDate.trim().length > 0) {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(preferredDate.trim())) {
        errors.push('Please provide a valid date in YYYY-MM-DD format');
      } else {
        const selectedDate = new Date(preferredDate.trim());
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
          errors.push('Preferred date cannot be in the past');
        }
      }
    }
    
    if (errors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // Send consultation email
    const emailResult = await sendConsultationFormEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service: service.trim(),
      preferredDate: preferredDate?.trim() || null,
      preferredTime: preferredTime?.trim() || null,
      message: message?.trim() || null
    });

    if (emailResult.success) {
      const processingTime = Date.now() - startTime;
      console.log(`Consultation request processed successfully in ${processingTime}ms for IP: ${clientIP}`);
      
      return NextResponse.json(
        { 
          message: 'Consultation request submitted successfully. We will contact you within 24 hours to confirm your appointment.',
          success: true
        },
        { status: 200 }
      );
    } else {
      console.error('Consultation email sending failed:', {
        error: emailResult.error,
        ip: clientIP,
        timestamp: new Date().toISOString()
      });
      
      return NextResponse.json(
        { 
          error: 'Failed to send consultation request. Please try again or contact us directly.',
          success: false
        },
        { status: 500 }
      );
    }
  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error('Consultation booking error:', {
      error: error.message,
      stack: error.stack,
      ip: clientIP,
      processingTime,
      timestamp: new Date().toISOString()
    });
    
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
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}