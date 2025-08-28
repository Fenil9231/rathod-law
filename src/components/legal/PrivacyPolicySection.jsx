import React, { useEffect } from 'react';

function PrivacyPolicySection() {
  useEffect(() => {
    // Add loading animation
    const content = document.querySelector('.policy-content');
    if (content) {
      content.classList.add('loading');
    }
    
    // Scroll progress indicator
    const updateScrollProgress = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const progressBar = document.querySelector('.scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };
    
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      <div className="scroll-progress"></div>
      <div className="policy-container pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="policy-content">
                <div className="policy-header">
                  <h1 className="policy-title">Privacy Policy</h1>
                  <p className="policy-subtitle">Last updated: {new Date().getFullYear()} | Protecting Your Privacy & Confidentiality</p>
                </div>
                
                <div className="policy-section">
                  <h3>1. Introduction</h3>
                  <p>Rathod Law Firm ("we," "our," or "us") is a professional law firm located in Toronto, Ontario, Canada, specializing in immigration law, family law, traffic violations, and notarization services. We are committed to protecting your privacy and maintaining the confidentiality of your personal information in accordance with applicable privacy laws and professional standards.</p>
                  <p>By using our website or engaging our legal services, you consent to the practices described in this Privacy Policy. If you do not agree with this policy, please do not use our website or services.</p>
                </div>
                
                <div className="policy-section">
                  <h3>2. Information We Collect</h3>
                  <h4>Personal Information</h4>
                  <p>We may collect personal information that you voluntarily provide to us when you:</p>
                  <ul>
                    <li>Contact us for legal services</li>
                    <li>Schedule a consultation</li>
                    <li>Fill out forms on our website</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Engage with us on social media</li>
                  </ul>
                  <p>This information may include:</p>
                  <ul>
                    <li>Name and contact information</li>
                    <li>Email address and phone number</li>
                    <li>Legal matter details</li>
                    <li>Immigration status and documentation</li>
                    <li>Financial information (when necessary for legal services)</li>
                  </ul>
                </div>
                
                <div className="policy-section">
                  <h3>3. How We Use Your Information</h3>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Provide legal services and consultations</li>
                    <li>Communicate with you about your case</li>
                    <li>Process payments and billing</li>
                    <li>Send you legal updates and newsletters (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
                
                <div className="policy-section">
                  <h3>4. Attorney-Client Privilege</h3>
                  <p>All communications between you and Rathod Law regarding legal matters are protected by attorney-client privilege. We maintain strict confidentiality of all client information and will not disclose your information without your consent, except as required by law or court order.</p>
                </div>
                
                <div className="policy-section">
                  <h3>5. Information Sharing and Disclosure</h3>
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
                  <ul>
                    <li>With your explicit consent</li>
                    <li>To trusted service providers who assist us in operating our website or conducting our business</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </div>
                
                <div className="policy-section">
                  <h3>6. Data Security</h3>
                  <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                </div>
                
                <div className="policy-section">
                  <h3>7. Cookies and Tracking Technologies</h3>
                  <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.</p>
                </div>
                
                <div className="policy-section">
                  <h3>8. Your Rights</h3>
                  <p>You have the right to:</p>
                  <ul>
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information (subject to legal obligations)</li>
                    <li>Opt-out of marketing communications</li>
                    <li>File a complaint with relevant authorities</li>
                  </ul>
                </div>
                
                <div className="policy-section">
                  <h3>9. Retention of Information</h3>
                  <p>We retain your personal information for as long as necessary to provide legal services and comply with legal obligations. Client files are maintained according to professional standards and legal requirements.</p>
                </div>
                
                <div className="policy-section">
                  <h3>10. Changes to This Privacy Policy</h3>
                  <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
                </div>
                
                <div className="policy-section">
                  <h3>11. Contact Us</h3>
                  <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                  <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p><strong>Rathod Law Firm</strong></p>
                    <p>123 Main Street, Suite 456<br />Toronto, ON M5V 3A8, Canada</p>
                    <p>Phone: <a href="tel:+1-647-654-9454">+1 (647) 654-9454</a></p>
                    <p>Alternate: <a href="tel:+1-437-880-9656">+1 (437) 880-9656</a></p>
                    <p>Email: <a href="mailto:rathod@hplaw.org">rathod@hplaw.org</a></p>
                    <p>Website: <a href="https://rathodlaw.com" target="_blank" rel="noopener noreferrer">rathodlaw.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicySection;