// Test endpoint to verify email configuration
// This endpoint can be used to test if email sending is working properly

import nodemailer from 'nodemailer';
import emailConfig from '../../config/email';
import { withApiMiddleware } from '../../middleware/apiMiddleware';

async function handler(req, res) {
  try {
    // Create transporter with current config
    const transporter = nodemailer.createTransporter(emailConfig.smtp);

    // Verify SMTP connection
    await transporter.verify();

    // Send test email
    const testEmailOptions = {
      from: emailConfig.addresses.from,
      to: emailConfig.addresses.admin,
      subject: 'Email Configuration Test - Rathod Law Firm',
      html: `
        <h2>Email Configuration Test</h2>
        <p>This is a test email to verify that the email configuration is working properly.</p>
        <p><strong>SMTP Host:</strong> ${emailConfig.smtp.host}</p>
        <p><strong>SMTP Port:</strong> ${emailConfig.smtp.port}</p>
        <p><strong>SMTP User:</strong> ${emailConfig.smtp.auth.user}</p>
        <p><strong>Email Enabled:</strong> ${emailConfig.settings.enabled}</p>
        <p><strong>Environment:</strong> ${process.env.NODE_ENV}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `
    };

    await transporter.sendMail(testEmailOptions);
    transporter.close();

    return res.status(200).json({
      success: true,
      message: 'Test email sent successfully',
      config: {
        host: emailConfig.smtp.host,
        port: emailConfig.smtp.port,
        user: emailConfig.smtp.auth.user,
        enabled: emailConfig.settings.enabled,
        environment: process.env.NODE_ENV
      }
    });

  } catch (error) {
    console.error('Email test error:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Email test failed',
      details: error.message,
      config: {
        host: emailConfig.smtp.host,
        port: emailConfig.smtp.port,
        user: emailConfig.smtp.auth.user,
        enabled: emailConfig.settings.enabled,
        environment: process.env.NODE_ENV
      }
    });
  }
}

export default withApiMiddleware(handler, {
  methods: ['POST']
});