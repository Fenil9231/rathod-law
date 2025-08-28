// Enhanced Customer Confirmation Email Template with Theme-Matching UI/UX
// This template provides a professional, welcoming email design for customer confirmations

const getCustomerEmailTemplate = (formData, formType) => {
  const customerName = formData.name || formData.firstName || 'Valued Client';
  const firstName = customerName.split(' ')[0];
  
  // Customize content based on form type
  const formTypeContent = {
    contact: {
      title: 'Thank You for Contacting Us',
      subtitle: 'Your inquiry is important to us',
      nextSteps: [
        'Our legal team will review your case details within 24 hours',
        'A qualified attorney will contact you to discuss your legal needs',
        'We\'ll schedule a free consultation at your convenience',
        'You\'ll receive a detailed assessment of your case'
      ],
      responseTime: '24 hours',
      icon: '📧'
    },
    schedule: {
      title: 'Call Scheduled Successfully',
      subtitle: 'We look forward to speaking with you',
      nextSteps: [
        'You will receive a calendar invitation shortly',
        'Our attorney will call you at the scheduled time',
        'Please prepare any relevant documents or questions',
        'The consultation is completely free and confidential'
      ],
      responseTime: '2 hours',
      icon: '📞'
    },
    faq: {
      title: 'Thank You for Your Question',
      subtitle: 'We appreciate your interest in our services',
      nextSteps: [
        'Our legal experts will review your question',
        'You\'ll receive a detailed response within 48 hours',
        'If needed, we\'ll suggest a consultation to discuss further',
        'Feel free to ask additional questions anytime'
      ],
      responseTime: '48 hours',
      icon: '❓'
    },
    blog: {
      title: 'Thank You for Your Comment',
      subtitle: 'We value your engagement with our content',
      nextSteps: [
        'Your comment will be reviewed and published shortly',
        'You\'ll be notified when there are replies to your comment',
        'Check out our other blog posts for more legal insights',
        'Subscribe to our newsletter for regular updates'
      ],
      responseTime: '12 hours',
      icon: '💬'
    },
    general: {
      title: 'Thank You for Reaching Out',
      subtitle: 'We\'re here to help with your legal needs',
      nextSteps: [
        'Our team will review your submission carefully',
        'A legal professional will contact you soon',
        'We\'ll provide you with expert guidance',
        'Your consultation will be completely confidential'
      ],
      responseTime: '24 hours',
      icon: '⚖️'
    }
  };

  const content = formTypeContent[formType] || formTypeContent.general;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${content.title} - Rathod Law Firm</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          background-color: #f8f9fa; 
        }
        .email-container { 
          max-width: 650px; 
          margin: 20px auto; 
          background-color: #ffffff; 
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        .header { 
          background: linear-gradient(135deg, #1a365d 0%, #2d5a87 50%, #4a90b8 100%); 
          color: white; 
          padding: 40px 30px; 
          text-align: center;
          position: relative;
        }
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
        }
        .header-content { position: relative; z-index: 1; }
        .logo { 
          width: 80px; 
          height: 80px; 
          background-color: rgba(255,255,255,0.2);
          border-radius: 50%;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
          border: 3px solid rgba(255,255,255,0.3);
        }
        .header h1 { 
          font-size: 28px; 
          font-weight: 600; 
          margin-bottom: 10px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .header p {
          font-size: 16px;
          opacity: 0.9;
          margin-bottom: 20px;
        }
        .success-badge {
          display: inline-block;
          background-color: rgba(40, 167, 69, 0.9);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .content { padding: 40px 30px; }
        .greeting {
          text-align: center;
          margin-bottom: 30px;
        }
        .greeting h2 {
          color: #1a365d;
          font-size: 24px;
          margin-bottom: 10px;
        }
        .greeting p {
          color: #6c757d;
          font-size: 16px;
        }
        .welcome-message {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 12px;
          padding: 30px;
          margin: 30px 0;
          border-left: 5px solid #1a365d;
          text-align: center;
        }
        .welcome-message .icon {
          font-size: 48px;
          margin-bottom: 15px;
          display: block;
        }
        .welcome-message h3 {
          color: #1a365d;
          font-size: 20px;
          margin-bottom: 15px;
        }
        .welcome-message p {
          color: #495057;
          font-size: 16px;
          line-height: 1.6;
        }
        .next-steps {
          background-color: #ffffff;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          padding: 30px;
          margin: 30px 0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
        }
        .next-steps h3 {
          color: #1a365d;
          font-size: 20px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
        }
        .next-steps .icon {
          margin-right: 10px;
          font-size: 24px;
        }
        .steps-list {
          list-style: none;
          padding: 0;
        }
        .steps-list li {
          background-color: #f8f9fa;
          margin-bottom: 12px;
          padding: 16px 20px;
          border-radius: 8px;
          border-left: 4px solid #1a365d;
          position: relative;
          padding-left: 50px;
        }
        .steps-list li::before {
          content: counter(step-counter);
          counter-increment: step-counter;
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          background-color: #1a365d;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
        }
        .steps-list {
          counter-reset: step-counter;
        }
        .response-time {
          background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          margin: 20px 0;
        }
        .response-time h4 {
          color: #1a365d;
          margin-bottom: 10px;
          font-size: 18px;
        }
        .response-time .time {
          font-size: 24px;
          font-weight: bold;
          color: #28a745;
          margin: 0 5px;
        }
        .contact-info {
          background-color: #1a365d;
          color: white;
          padding: 30px;
          margin: 30px 0;
          border-radius: 12px;
          text-align: center;
        }
        .contact-info h3 {
          margin-bottom: 20px;
          font-size: 22px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .contact-item {
          background-color: rgba(255,255,255,0.1);
          padding: 15px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }
        .contact-item .icon {
          font-size: 20px;
          margin-bottom: 8px;
          display: block;
        }
        .contact-item .label {
          font-size: 12px;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        .contact-item .value {
          font-size: 14px;
          font-weight: 600;
        }
        .cta-section {
          text-align: center;
          margin: 30px 0;
        }
        .btn {
          display: inline-block;
          background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
          color: white;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          margin: 10px;
          box-shadow: 0 4px 16px rgba(26, 54, 93, 0.3);
          transition: all 0.3s ease;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(26, 54, 93, 0.4);
        }
        .btn.secondary {
          background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
          box-shadow: 0 4px 16px rgba(108, 117, 125, 0.3);
        }
        .footer { 
          background-color: #1a365d; 
          color: white; 
          padding: 30px; 
          text-align: center;
        }
        .footer-content {
          max-width: 500px;
          margin: 0 auto;
        }
        .footer h3 {
          margin-bottom: 15px;
          font-size: 20px;
        }
        .footer p {
          opacity: 0.9;
          margin-bottom: 20px;
        }
        .social-links {
          margin-top: 20px;
        }
        .social-links a {
          color: white;
          text-decoration: none;
          margin: 0 10px;
          font-size: 18px;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        .social-links a:hover {
          opacity: 1;
        }
        @media (max-width: 600px) {
          .email-container { margin: 10px; border-radius: 8px; }
          .header, .content, .footer { padding: 20px; }
          .next-steps, .welcome-message { padding: 20px; }
          .contact-grid { grid-template-columns: 1fr; }
          .btn { display: block; margin: 10px 0; }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="header-content">
            <div class="logo">RL</div>
            <h1>${content.title}</h1>
            <p>${content.subtitle}</p>
            <div class="success-badge">✓ Received Successfully</div>
          </div>
        </div>
        
        <div class="content">
          <div class="greeting">
            <h2>Hello ${firstName}!</h2>
            <p>Thank you for choosing Rathod Law Firm for your legal needs.</p>
          </div>

          <div class="welcome-message">
            <span class="icon">${content.icon}</span>
            <h3>Your ${formType} submission has been received</h3>
            <p>We understand that legal matters can be stressful, and we're here to provide you with the expert guidance and support you need. Our experienced team is committed to achieving the best possible outcome for your case.</p>
          </div>

          <div class="response-time">
            <h4>Expected Response Time</h4>
            <p>We will contact you within <span class="time">${content.responseTime}</span></p>
          </div>

          <div class="next-steps">
            <h3>
              <span class="icon">📋</span>
              What Happens Next?
            </h3>
            <ul class="steps-list">
              ${content.nextSteps.map(step => `<li>${step}</li>`).join('')}
            </ul>
          </div>

          <div class="contact-info">
            <h3>Need Immediate Assistance?</h3>
            <p>If you have urgent questions or need immediate legal assistance, don't hesitate to contact us directly.</p>
            
            <div class="contact-grid">
              <div class="contact-item">
                <span class="icon">📞</span>
                <div class="label">Primary Phone</div>
                <div class="value">(647) 654-9454</div>
              </div>
              <div class="contact-item">
                <span class="icon">📱</span>
                <div class="label">Alternate Phone</div>
                <div class="value">(437) 880-9656</div>
              </div>
              <div class="contact-item">
                <span class="icon">✉️</span>
                <div class="label">Email</div>
                <div class="value">rathod@hplaw.org</div>
              </div>
              <div class="contact-item">
                <span class="icon">📍</span>
                <div class="label">Office</div>
                <div class="value">Toronto, ON</div>
              </div>
            </div>
          </div>

          <div class="cta-section">
            <a href="https://rathodlaw.com/about" class="btn">Learn About Our Team</a>
            <a href="https://rathodlaw.com/practice-area" class="btn secondary">Our Practice Areas</a>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-content">
            <h3>Rathod Law Firm</h3>
            <p>Your Trusted Legal Partner in Toronto</p>
            <p>123 Main Street, Suite 456, Toronto, ON M5V 3A8, Canada</p>
            
            <div class="social-links">
              <a href="#">📘</a>
              <a href="#">🐦</a>
              <a href="#">💼</a>
              <a href="#">📧</a>
            </div>
            
            <p style="font-size: 12px; opacity: 0.7; margin-top: 20px;">
              This email was sent because you submitted a form on our website. 
              If you have any questions, please contact us directly.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = { getCustomerEmailTemplate };