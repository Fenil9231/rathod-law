// Email Configuration
// This file manages all email-related settings and credentials
// Update this file to change email settings for both development and production

const { config: envConfig } = require('./env');

const emailConfig = {
  // SMTP Configuration
  smtp: {
    host: envConfig.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(envConfig.SMTP_PORT) || 587,
    secure: envConfig.SMTP_SECURE === 'true',
    auth: {
      user: envConfig.SMTP_USER,
      pass: envConfig.SMTP_PASS
    }
  },

  // Email Addresses
  addresses: {
    // Admin email where form submissions will be sent
    admin: envConfig.ADMIN_EMAIL,
    // From address for outgoing emails (should match SMTP_USER for Gmail)
    from: envConfig.FROM_EMAIL || envConfig.SMTP_USER,
    // Support email for customer inquiries
    support: envConfig.SUPPORT_EMAIL
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
    enabled: envConfig.EMAIL_ENABLED !== 'false' && (envConfig.NODE_ENV === 'production' || process.env.VERCEL === '1'),
    // Send copy to customer
    sendCustomerCopy: envConfig.SEND_CUSTOMER_COPY !== 'false',
    // Rate limiting (emails per minute)
    rateLimit: parseInt(envConfig.EMAIL_RATE_LIMIT) || 10
  }
};

module.exports = emailConfig;