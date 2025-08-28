import React, { useEffect } from 'react';

const CookiePolicySection = () => {
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
                  <h1 className="policy-title">Cookie Policy</h1>
                  <p className="policy-subtitle">Last Updated: January 2025 | Understanding Our Cookie Usage</p>
                </div>
              
              <div className="policy-section">
                <h3>What Are Cookies</h3>
                <p className="mb-3">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
              </div>

              <div className="policy-section">
                <h3>How We Use Cookies</h3>
                <p className="mb-3">
                  Rathod Law Firm uses cookies to:
                </p>
                <ul className="mb-3">
                  <li>Ensure our website functions properly</li>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve user experience and website performance</li>
                  <li>Provide personalized content and services</li>
                </ul>
              </div>

              <div className="policy-section">
                <h3>Types of Cookies We Use</h3>
                
                <div className="mb-4">
                  <h3 className="mb-2">Essential Cookies</h3>
                  <p className="mb-2">
                    These cookies are necessary for the website to function and cannot be switched off. 
                    They are usually set in response to actions made by you such as setting privacy preferences or filling in forms.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="mb-2">Analytics Cookies</h3>
                  <p className="mb-2">
                    These cookies help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously. This helps us improve our website's functionality.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="mb-2">Functional Cookies</h3>
                  <p className="mb-2">
                    These cookies enable enhanced functionality and personalization, such as remembering your 
                    preferences and providing personalized content.
                  </p>
                </div>
              </div>

              <div className="policy-section">
                <h3>Managing Cookies</h3>
                <p className="mb-3">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="mb-3">
                  <li>Browser Settings: Most browsers allow you to refuse or accept cookies</li>
                  <li>Delete existing cookies from your browser</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block third-party cookies</li>
                </ul>
                <p className="mb-3">
                  Please note that disabling cookies may affect the functionality of our website and your user experience.
                </p>
              </div>

              <div className="policy-section">
                <h3>Third-Party Cookies</h3>
                <p className="mb-3">
                  Our website may contain links to third-party websites and services. These third parties may 
                  also use cookies. We do not control these third-party cookies and recommend reviewing their 
                  respective privacy and cookie policies.
                </p>
              </div>

              <div className="policy-section">
                <h3>Updates to This Policy</h3>
                <p className="mb-3">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or 
                  for other operational, legal, or regulatory reasons. We will notify you of any material 
                  changes by posting the updated policy on our website.
                </p>
              </div>

              <div className="policy-section">
                <h3>Contact Us</h3>
                <p>If you have any questions about this Cookie Policy, please contact us:</p>
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
};

export default CookiePolicySection;