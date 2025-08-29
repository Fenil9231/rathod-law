// API endpoint for handling form submissions and sending emails
// This endpoint handles all form types and sends emails to both admin and customers

import nodemailer from 'nodemailer';
import emailConfig from '../../config/email';
import { getAdminEmailTemplate } from '../../templates/adminEmailTemplate';
import { getCustomerEmailTemplate } from '../../templates/customerEmailTemplate';
import { withApiMiddleware } from '../../middleware/apiMiddleware';

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter(emailConfig.smtp);
};

// Main API handler
async function handler(req, res) {

  // Check if email is enabled
  if (!emailConfig.settings.enabled) {
    // In development mode, return success without sending emails
    if (process.env.NODE_ENV === 'development') {
      return res.status(200).json({
        success: true,
        message: 'Form submitted successfully (development mode - no email sent)',
        data: {
          formType: formData.formType || 'contact',
          name: formData.name,
          email: formData.email,
          subject: emailConfig.subjects[formData.formType || 'contact'] || emailConfig.subjects.general
        }
      });
    }
    
    return res.status(503).json({
      success: false,
      message: 'Email service is currently disabled'
    });
  }

  try {
    const formData = req.body;
    const formType = formData.formType || 'contact';

    // Additional validation beyond middleware
    if (!formData.message && !formData.phone && !formData.subject) {
      return res.status(400).json({ 
        error: 'At least one of message, phone, or subject is required' 
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify transporter configuration
    await transporter.verify();

    // Prepare emails
    const adminSubject = emailConfig.templates.subjects[formType] || emailConfig.templates.subjects.general;
    const customerSubject = emailConfig.templates.confirmationSubjects[formType] || emailConfig.templates.confirmationSubjects.general;

    const adminEmailOptions = {
      from: emailConfig.addresses.from,
      to: emailConfig.addresses.admin,
      subject: adminSubject,
      html: getAdminEmailTemplate(formData, formType)
    };

    const customerEmailOptions = {
      from: emailConfig.addresses.from,
      to: formData.email,
      subject: customerSubject,
      html: getCustomerEmailTemplate(formData, formType)
    };

    // Send emails
    const emailPromises = [transporter.sendMail(adminEmailOptions)];
    
    if (emailConfig.settings.sendCustomerCopy) {
      emailPromises.push(transporter.sendMail(customerEmailOptions));
    }

    await Promise.all(emailPromises);

    // Close transporter
    transporter.close();

    return res.status(200).json({
      success: true,
      message: 'Emails sent successfully'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    return res.status(500).json({
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}

// Export with middleware
export default withApiMiddleware(handler, {
  methods: ['POST'],
  rateLimit: { limit: 5, windowMs: 60000 }, // 5 emails per minute
  validation: {
    required: ['name', 'email'],
    email: true
  }
});