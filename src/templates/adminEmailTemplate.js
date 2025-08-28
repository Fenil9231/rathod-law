// Enhanced Admin Email Template with Theme-Matching UI/UX
// This template provides a professional, law firm-themed email design for admin notifications

const getAdminEmailTemplate = (formData, formType) => {
  const timestamp = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  // Format form type for display
  const formTypeDisplay = {
    contact: 'Contact Form',
    schedule: 'Schedule Call Request',
    faq: 'FAQ Question',
    blog: 'Blog Comment',
    general: 'General Inquiry'
  }[formType] || 'Form Submission';

  // Priority level based on form type
  const priorityLevel = {
    schedule: 'HIGH',
    contact: 'MEDIUM',
    faq: 'LOW',
    blog: 'LOW',
    general: 'MEDIUM'
  }[formType] || 'MEDIUM';

  const priorityColor = {
    HIGH: '#dc3545',
    MEDIUM: '#ffc107',
    LOW: '#28a745'
  }[priorityLevel];

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New ${formTypeDisplay} - Rathod Law Firm</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          background-color: #f8f9fa; 
        }
        .email-container { 
          max-width: 700px; 
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
          width: 60px; 
          height: 60px; 
          background-color: rgba(255,255,255,0.2);
          border-radius: 50%;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
        }
        .header h1 { 
          font-size: 28px; 
          font-weight: 600; 
          margin-bottom: 10px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .priority-badge {
          display: inline-block;
          background-color: ${priorityColor};
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 10px;
        }
        .content { padding: 40px 30px; }
        .alert-box {
          background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
          border-left: 5px solid #1a365d;
          padding: 20px;
          margin-bottom: 30px;
          border-radius: 0 8px 8px 0;
        }
        .alert-box h2 {
          color: #1a365d;
          font-size: 20px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }
        .alert-icon {
          width: 24px;
          height: 24px;
          margin-right: 10px;
          background-color: #1a365d;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }
        .form-details { 
          background-color: #ffffff;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          padding: 30px;
          margin: 30px 0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
        }
        .form-details h3 {
          color: #1a365d;
          font-size: 18px;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #e9ecef;
        }
        .field-grid {
          display: grid;
          gap: 20px;
        }
        .field { 
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 16px;
          border-left: 4px solid #1a365d;
        }
        .field-label { 
          font-weight: 600; 
          color: #1a365d; 
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .field-value { 
          color: #333;
          font-size: 16px;
          line-height: 1.5;
          word-wrap: break-word;
        }
        .field-value.long-text {
          background-color: white;
          padding: 12px;
          border-radius: 6px;
          border: 1px solid #dee2e6;
          margin-top: 5px;
        }
        .metadata {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
          border: 1px solid #dee2e6;
        }
        .metadata h4 {
          color: #1a365d;
          margin-bottom: 15px;
          font-size: 16px;
        }
        .metadata-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }
        .metadata-item {
          display: flex;
          align-items: center;
        }
        .metadata-icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
          color: #6c757d;
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
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }
        .contact-item {
          font-size: 14px;
          opacity: 0.9;
        }
        .action-buttons {
          margin: 30px 0;
          text-align: center;
        }
        .btn {
          display: inline-block;
          background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          margin: 0 10px;
          box-shadow: 0 4px 12px rgba(26, 54, 93, 0.3);
          transition: all 0.3s ease;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(26, 54, 93, 0.4);
        }
        @media (max-width: 600px) {
          .email-container { margin: 10px; border-radius: 8px; }
          .header, .content, .footer { padding: 20px; }
          .form-details { padding: 20px; }
          .field-grid { gap: 15px; }
          .metadata-grid, .contact-grid { grid-template-columns: 1fr; }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="header-content">
            <div class="logo">RL</div>
            <h1>New ${formTypeDisplay}</h1>
            <div class="priority-badge">${priorityLevel} Priority</div>
          </div>
        </div>
        
        <div class="content">
          <div class="alert-box">
            <h2>
              <span class="alert-icon">!</span>
              Action Required
            </h2>
            <p>A new ${formTypeDisplay.toLowerCase()} has been submitted through your website and requires your attention.</p>
          </div>

          <div class="form-details">
            <h3>📋 Submission Details</h3>
            <div class="field-grid">
              ${Object.entries(formData)
                .filter(([key]) => key !== 'formType')
                .map(([key, value]) => {
                  const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                  const isLongText = value && value.length > 100;
                  return `
                    <div class="field">
                      <div class="field-label">${label}</div>
                      <div class="field-value ${isLongText ? 'long-text' : ''}">
                        ${value || '<em>Not provided</em>'}
                      </div>
                    </div>
                  `;
                }).join('')}
            </div>
          </div>

          <div class="metadata">
            <h4>📊 Submission Metadata</h4>
            <div class="metadata-grid">
              <div class="metadata-item">
                <span class="metadata-icon">🕒</span>
                <span>Submitted: ${timestamp}</span>
              </div>
              <div class="metadata-item">
                <span class="metadata-icon">📝</span>
                <span>Form Type: ${formTypeDisplay}</span>
              </div>
              <div class="metadata-item">
                <span class="metadata-icon">⚡</span>
                <span>Priority: ${priorityLevel}</span>
              </div>
              <div class="metadata-item">
                <span class="metadata-icon">🌐</span>
                <span>Source: Website Contact Form</span>
              </div>
            </div>
          </div>

          <div class="action-buttons">
            <a href="mailto:${formData.email}" class="btn">📧 Reply to Client</a>
            <a href="tel:${formData.phone || formData.phoneNumber || ''}" class="btn">📞 Call Client</a>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-content">
            <h3>Rathod Law Firm</h3>
            <p>Professional Legal Services</p>
            <div class="contact-grid">
              <div class="contact-item">
                📍 123 Main Street, Suite 456<br>
                Toronto, ON M5V 3A8, Canada
              </div>
              <div class="contact-item">
                📞 (647) 654-9454<br>
                📞 (437) 880-9656
              </div>
              <div class="contact-item">
                ✉️ rathod@hplaw.org<br>
                🌐 rathodlaw.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = { getAdminEmailTemplate };