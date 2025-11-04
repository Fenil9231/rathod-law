import nodemailer from 'nodemailer';

// Validate required environment variables at runtime (not during import)
const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'ADMIN_EMAIL'];
const ensureEmailEnv = () => {
  const missing = requiredEnvVars.filter((varName) => !process.env[varName]);
  if (missing.length > 0) {
    return {
      ok: false,
      missing,
      message: `Missing required environment variables: ${missing.join(', ')}`,
    };
  }
  return { ok: true };
};

// Email configuration with enhanced security
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // Your email
    pass: process.env.SMTP_PASS, // Your email password or app password
  },
  // Additional security options
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === 'production'
  },
  // Connection timeout
  connectionTimeout: 60000, // 60 seconds
  greetingTimeout: 30000, // 30 seconds
  socketTimeout: 60000, // 60 seconds
};

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport(emailConfig);
};

// Send email function with retry logic
export const sendEmail = async ({
  to,
  subject,
  html,
  text,
  cc = null,
  bcc = null,
  attachments = null
}, retries = 3) => {
  // Ensure env vars are present at runtime
  const envStatus = ensureEmailEnv();
  if (!envStatus.ok) {
    console.error(envStatus.message);
    return { success: false, error: envStatus.message, attempts: 0 };
  }

  let lastError;
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const transporter = createTransporter();
      
      // Verify transporter configuration on first attempt
      if (attempt === 1) {
        await transporter.verify();
        console.log('SMTP server connection verified successfully');
      }
      
      const mailOptions = {
        from: `"Rathod Law Firm" <${process.env.SMTP_USER}>`,
        to: Array.isArray(to) ? to.join(', ') : to,
        subject,
        html,
        text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for text version if not provided
        ...(cc && { cc }),
        ...(bcc && { bcc }),
        ...(attachments && { attachments }),
        // Additional headers for better deliverability
        headers: {
          'X-Mailer': 'Rathod Law Firm Contact System',
          'X-Priority': '3',
        },
      };

      const result = await transporter.sendMail(mailOptions);
      console.log(`Email sent successfully on attempt ${attempt}:`, {
        messageId: result.messageId,
        to: mailOptions.to,
        subject: mailOptions.subject,
        timestamp: new Date().toISOString()
      });
      
      return { success: true, messageId: result.messageId, attempt };
    } catch (error) {
      lastError = error;
      console.error(`Email sending attempt ${attempt} failed:`, {
        error: error.message,
        code: error.code,
        command: error.command,
        timestamp: new Date().toISOString()
      });
      
      // If this is not the last attempt, wait before retrying
      if (attempt < retries) {
        const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  console.error('All email sending attempts failed:', lastError.message);
  return { success: false, error: lastError.message, attempts: retries };
};

// Send contact form email
export const sendContactFormEmail = async (formData) => {
  const { name, email, phone, subject, message, service } = formData;
  
  // Email to admin
  const adminEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #1a365d; margin: 0;">Rathod Law Firm</h1>
        <p style="color: #666; margin: 5px 0 0 0;">New Contact Form Submission</p>
      </div>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #1a365d; margin-top: 0;">Contact Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Name:</td>
            <td style="padding: 8px 0; color: #666;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
            <td style="padding: 8px 0; color: #666;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
            <td style="padding: 8px 0; color: #666;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Service:</td>
            <td style="padding: 8px 0; color: #666;">${service || 'General Inquiry'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Subject:</td>
            <td style="padding: 8px 0; color: #666;">${subject}</td>
          </tr>
        </table>
      </div>
      
      <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
        <h3 style="color: #1a365d; margin-top: 0;">Message:</h3>
        <p style="color: #333; line-height: 1.6; margin: 0;">${message}</p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
        <p style="color: #666; font-size: 14px; margin: 0;">This email was sent from the Rathod Law Firm contact form.</p>
      </div>
    </div>
  `;
  
  // Email to client (confirmation)
  const clientEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #1a365d; margin: 0;">Rathod Law Firm</h1>
        <p style="color: #666; margin: 5px 0 0 0;">Thank you for contacting us!</p>
      </div>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #1a365d; margin-top: 0;">Dear ${name},</h2>
        <p style="color: #333; line-height: 1.6;">Thank you for reaching out to Rathod Law Firm. We have received your inquiry and will respond within 24 hours.</p>
        
        <h3 style="color: #1a365d; margin-bottom: 10px;">Your Submission Details:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Subject:</td>
            <td style="padding: 8px 0; color: #666;">${subject}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Service:</td>
            <td style="padding: 8px 0; color: #666;">${service || 'General Inquiry'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Message:</td>
            <td style="padding: 8px 0; color: #666;">${message}</td>
          </tr>
        </table>
      </div>
      
      <div style="background-color: #1a365d; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: white;">Contact Information</h3>
        <p style="margin: 5px 0; color: #e2e8f0;">📧 Email: info@rathodlaw.com</p>
        <p style="margin: 5px 0; color: #e2e8f0;">📞 Phone: +1-647-490-7051</p>
        <p style="margin: 5px 0; color: #e2e8f0;">🏢 Serving Brampton & Scarborough</p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
        <p style="color: #666; font-size: 14px; margin: 0;">This is an automated confirmation email from Rathod Law Firm.</p>
      </div>
    </div>
  `;
  
  try {
    // Send email to admin
    const adminResult = await sendEmail({
      to: process.env.ADMIN_EMAIL || 'info@rathodlaw.com',
      subject: `New Contact Form: ${subject}`,
      html: adminEmailHtml,
      text: `New contact form submission from ${name} (${email}). Subject: ${subject}. Message: ${message}`
    });
    
    // Send confirmation email to client
    const clientResult = await sendEmail({
      to: email,
      subject: 'Thank you for contacting Rathod Law Firm',
      html: clientEmailHtml,
      text: `Dear ${name}, Thank you for contacting Rathod Law Firm. We have received your inquiry and will respond within 24 hours.`
    });
    
    return {
      success: adminResult.success && clientResult.success,
      adminEmail: adminResult,
      clientEmail: clientResult
    };
  } catch (error) {
    console.error('Error sending contact form emails:', error);
    return { success: false, error: error.message };
  }
};

// Send consultation booking email
export const sendConsultationEmail = async (formData) => {
  const { name, email, phone, date, time, service, message } = formData;
  
  // Email to admin
  const adminEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #1a365d; margin: 0;">Rathod Law Firm</h1>
        <p style="color: #666; margin: 5px 0 0 0;">New Consultation Booking</p>
      </div>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #1a365d; margin-top: 0;">Consultation Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Name:</td>
            <td style="padding: 8px 0; color: #666;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
            <td style="padding: 8px 0; color: #666;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
            <td style="padding: 8px 0; color: #666;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Preferred Date:</td>
            <td style="padding: 8px 0; color: #666;">${date}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Preferred Time:</td>
            <td style="padding: 8px 0; color: #666;">${time}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Service:</td>
            <td style="padding: 8px 0; color: #666;">${service}</td>
          </tr>
        </table>
      </div>
      
      ${message ? `
      <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
        <h3 style="color: #1a365d; margin-top: 0;">Additional Information:</h3>
        <p style="color: #333; line-height: 1.6; margin: 0;">${message}</p>
      </div>
      ` : ''}
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
        <p style="color: #666; font-size: 14px; margin: 0;">Please contact the client to confirm the consultation appointment.</p>
      </div>
    </div>
  `;
  
  // Email to client (confirmation)
  const clientEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #1a365d; margin: 0;">Rathod Law Firm</h1>
        <p style="color: #666; margin: 5px 0 0 0;">Consultation Request Received</p>
      </div>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #1a365d; margin-top: 0;">Dear ${name},</h2>
        <p style="color: #333; line-height: 1.6;">Thank you for requesting a consultation with Rathod Law Firm. We have received your request and will contact you within 24 hours to confirm your appointment.</p>
        
        <h3 style="color: #1a365d; margin-bottom: 10px;">Your Consultation Request:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Service:</td>
            <td style="padding: 8px 0; color: #666;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Preferred Date:</td>
            <td style="padding: 8px 0; color: #666;">${date}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Preferred Time:</td>
            <td style="padding: 8px 0; color: #666;">${time}</td>
          </tr>
        </table>
      </div>
      
      <div style="background-color: #1a365d; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: white;">What to Expect</h3>
        <ul style="color: #e2e8f0; margin: 0; padding-left: 20px;">
          <li>We will call you to confirm the appointment time</li>
          <li>Initial consultation is typically 30-60 minutes</li>
          <li>Please prepare any relevant documents</li>
          <li>Free consultation for most services</li>
        </ul>
      </div>
      
      <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1a365d; margin-top: 0;">Contact Information</h3>
        <p style="margin: 5px 0; color: #333;">📧 Email: info@rathodlaw.com</p>
        <p style="margin: 5px 0; color: #333;">📞 Phone: +1-647-490-7051</p>
        <p style="margin: 5px 0; color: #333;">🏢 Serving Brampton & Scarborough</p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
        <p style="color: #666; font-size: 14px; margin: 0;">This is an automated confirmation email from Rathod Law Firm.</p>
      </div>
    </div>
  `;
  
  try {
    // Send email to admin
    const adminResult = await sendEmail({
      to: process.env.ADMIN_EMAIL || 'info@rathodlaw.com',
      subject: `New Consultation Booking: ${service} - ${name}`,
      html: adminEmailHtml,
      text: `New consultation booking from ${name} (${email}, ${phone}) for ${service} on ${date} at ${time}.`
    });
    
    // Send confirmation email to client
    const clientResult = await sendEmail({
      to: email,
      subject: 'Consultation Request Confirmed - Rathod Law Firm',
      html: clientEmailHtml,
      text: `Dear ${name}, Thank you for requesting a consultation with Rathod Law Firm. We will contact you within 24 hours to confirm your appointment for ${service} on ${date} at ${time}.`
    });
    
    return {
      success: adminResult.success && clientResult.success,
      adminEmail: adminResult,
      clientEmail: clientResult
    };
  } catch (error) {
    console.error('Error sending consultation emails:', error);
    return { success: false, error: error.message };
  }
};

export default { sendEmail, sendContactFormEmail, sendConsultationEmail };