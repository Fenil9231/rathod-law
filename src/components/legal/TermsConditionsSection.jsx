import React, { useEffect } from 'react';

const TermsConditionsSection = () => {
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
                  <h1 className="policy-title">Terms and Conditions</h1>
                  <p className="policy-subtitle">Last Updated: January 2025 | Legal Terms of Service</p>
                </div>
                
                <div className="policy-section">
                  <h3>1. Introduction</h3>
                  <p>Welcome to Rathod Law Firm. These Terms and Conditions ("Terms") govern your use of our website at rathodlaw.com and the legal services provided by our law firm located in Toronto, Ontario, Canada. We specialize in immigration law, family law, traffic violations, and notarization services. By accessing our website or engaging our legal services, you agree to be bound by these Terms.</p>
                  <p>If you do not agree with any part of these Terms, you must not use our website or services. These Terms constitute a legally binding agreement between you and Rathod Law Firm.</p>
                </div>
                
                <div className="policy-section">
                  <h3>2. Legal Services</h3>
                  <h4>2.1 Attorney-Client Relationship</h4>
                  <p>No attorney-client relationship is formed by merely visiting our website or contacting us. An attorney-client relationship is established only when we have agreed in writing to represent you in a specific legal matter.</p>
                  
                  <h4>2.2 Scope of Services</h4>
                  <p>Our legal services include but are not limited to:</p>
                  <ul>
                    <li>Immigration law matters</li>
                    <li>Family law cases</li>
                    <li>Notary services</li>
                    <li>Judicial reviews</li>
                    <li>Refugee appeals</li>
                    <li>Legal document preparation</li>
                  </ul>
                </div>
                
                <div className="policy-section">
                  <h3>3. Fees and Payment</h3>
                  <h4>3.1 Legal Fees</h4>
                  <p>Legal fees will be discussed and agreed upon before representation begins. Fees may be charged on an hourly basis, flat fee, or contingency basis depending on the nature of the legal matter.</p>
                  
                  <h4>3.2 Payment Terms</h4>
                  <p>Payment terms will be specified in the retainer agreement. Clients are responsible for all costs and expenses related to their legal matter, including court fees, filing fees, and third-party costs.</p>
                  
                  <h4>3.3 Refund Policy</h4>
                  <p>Refunds will be handled according to the terms specified in the retainer agreement and applicable professional conduct rules.</p>
                </div>
                
                <div className="policy-section">
                  <h3>4. Client Responsibilities</h3>
                  <p>Clients agree to:</p>
                  <ul>
                    <li>Provide accurate and complete information</li>
                    <li>Cooperate fully in the representation</li>
                    <li>Pay fees and costs as agreed</li>
                    <li>Keep us informed of any changes in contact information</li>
                    <li>Respond promptly to requests for information or documentation</li>
                  </ul>
                </div>
                
                <div className="policy-section">
                  <h3>5. Confidentiality</h3>
                  <p>All information shared with Rathod Law is protected by attorney-client privilege and professional confidentiality rules. We will not disclose your confidential information without your consent, except as required by law.</p>
                </div>
                
                <div className="policy-section">
                  <h3>6. Website Use</h3>
                  <h4>6.1 Permitted Use</h4>
                  <p>You may use our website for lawful purposes only. You agree not to use the website in any way that could damage, disable, or impair the website or interfere with any other party's use of the website.</p>
                  
                  <h4>6.2 Intellectual Property</h4>
                  <p>All content on this website, including text, graphics, logos, and images, is the property of Rathod Law and is protected by copyright and other intellectual property laws.</p>
                </div>
                
                <div className="policy-section">
                  <h3>7. Disclaimers</h3>
                  <h4>7.1 No Legal Advice</h4>
                  <p>Information on this website is for general informational purposes only and does not constitute legal advice. Do not act upon this information without seeking professional legal counsel.</p>
                  
                  <h4>7.2 No Guarantee of Results</h4>
                  <p>We cannot guarantee the outcome of any legal matter. Past results do not guarantee future outcomes.</p>
                  
                  <h4>7.3 Website Accuracy</h4>
                  <p>While we strive to keep information current and accurate, we make no representations or warranties about the completeness, accuracy, or reliability of the information on this website.</p>
                </div>
                
                <div className="policy-section">
                  <h3>8. Limitation of Liability</h3>
                  <p>To the fullest extent permitted by law, Rathod Law shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our website or services.</p>
                </div>
                
                <div className="policy-section">
                  <h3>9. Governing Law</h3>
                  <p>These terms and conditions are governed by the laws of Ontario, Canada. Any disputes arising from these terms will be subject to the jurisdiction of the courts of Ontario.</p>
                </div>
                
                <div className="policy-section">
                  <h3>10. Professional Conduct</h3>
                  <p>Rathod Law Firm is bound by the professional conduct rules of the Law Society of Ontario. Any complaints regarding professional conduct should be directed to the Law Society of Ontario.</p>
                </div>
                
                <div className="policy-section">
                  <h3>11. Termination</h3>
                  <p>Either party may terminate the attorney-client relationship according to the terms specified in the retainer agreement and applicable professional conduct rules.</p>
                </div>
                
                <div className="policy-section">
                  <h3>12. Changes to Terms</h3>
                  <p>We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website.</p>
                </div>
                
                <div className="policy-section">
                  <h3>13. Contact Information</h3>
                  <p>If you have any questions about these Terms & Conditions, please contact us:</p>
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

export default TermsConditionsSection;