// Email Configuration
// This file manages all email-related settings and credentials
// Update this file to change email settings for both development and production

const emailConfig = {
  // SMTP Configuration
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com', // Corrected from smatp.gmail.com
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true' || false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'fenil.kothiya88@gmail.com',
      pass: process.env.SMTP_PASS || process.env.SMTP_PASSWORD || 'your-app-password'
    }
  },

  // Email Addresses
  addresses: {
    // Admin email where form submissions will be sent
    admin: process.env.ADMIN_EMAIL || 'rathod@hplaw.org',
    // From address for outgoing emails (should match SMTP_USER for Gmail)
    from: process.env.FROM_EMAIL || process.env.SMTP_USER || 'fenil.kothiya88@gmail.com',
    // Support email for customer inquiries
    support: process.env.SUPPORT_EMAIL || 'rathod@hplaw.org'
  },

  // Email Templates Configuration
  templates: {
    // Subject lines for different form types
    subjects: {
      contact: 'New Contact Form Submission - Rathod Law Firm',
      schedule: 'New Schedule Call Request - Rathod Law Firm',
      faq: 'New FAQ Question - Rathod Law Firm',
      blog: 'New Blog Comment - Rathod Law Firm',
      general: 'New Form Submission - Rathod Law Firm'
    },
    
    // Customer confirmation subjects
    confirmationSubjects: {
      contact: 'Thank you for contacting Rathod Law Firm',
      schedule: 'Your call has been scheduled - Rathod Law Firm',
      faq: 'Thank you for your question - Rathod Law Firm',
      blog: 'Thank you for your comment - Rathod Law Firm',
      general: 'Thank you for contacting us - Rathod Law Firm'
    }
  },

  // Company Information
  company: {
    name: 'Rathod Law Firm',
    address: '123 Main Street, Suite 456, Toronto, ON M5V 3A8, Canada',
    phone: '(647) 654-9454',
    alternatePhone: '(437) 880-9656',
    email: 'rathod@hplaw.org',
    website: 'https://rathodlaw.com',
    logo: 'https://rathodlaw.com/assets/images/logo/logo.png'
  },

  // Email Settings
  settings: {
    // Enable/disable email sending (enabled by default in production, can be disabled with EMAIL_ENABLED=false)
    enabled: process.env.EMAIL_ENABLED !== 'false' && (process.env.NODE_ENV === 'production' || process.env.VERCEL === '1'),
    // Send copy to customer
    sendCustomerCopy: process.env.SEND_CUSTOMER_COPY !== 'false',
    // Rate limiting (emails per minute)
    rateLimit: parseInt(process.env.EMAIL_RATE_LIMIT) || 10
  }
};

module.exports = emailConfig;