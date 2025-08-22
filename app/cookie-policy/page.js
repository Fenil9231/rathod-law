import Link from 'next/link';
import Layout from "@/components/layout/Layout";

export default function CookiePolicy() {
  return (
    <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Cookie Policy">
      <div className="container py-5" style={{backgroundColor: '#f8f9fa', minHeight: '100vh'}}>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="cookie-policy-content" style={{backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', border: '2px solid #d4af37', padding: '40px'}}>
              <div className="sec-title mb-4" style={{textAlign: 'center', borderBottom: '3px solid #d4af37', paddingBottom: '20px', marginBottom: '40px'}}>
                <h2 style={{color: '#1a365d', fontSize: '2.5rem', fontWeight: '700', marginBottom: '10px'}}>Cookie Policy</h2>
                <p className="mt-3" style={{color: '#666', fontSize: '1rem', fontStyle: 'italic', margin: '0'}}>Last Updated: June 2024</p>
              </div>

              <div className="cookie-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>1. Introduction</h3>
                <p>
                  This Cookie Policy explains how Rathod Law Firm ("we," "our," or "us") uses cookies and similar technologies on our website www.rathodlaw.com ("Website"). This Cookie Policy should be read alongside our Privacy Policy, which explains how we use personal information.
                </p>
                <p>
                  By continuing to browse or use our Website, you agree to our use of cookies as described in this Cookie Policy.
                </p>
              </div>

              <div className="cookie-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>2. What Are Cookies?</h3>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.
                </p>
              </div>

              <div className="cookie-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>3. How We Use Cookies</h3>
                <p>
                  We use cookies for several reasons, including to:
                </p>
                <ul className="list-unstyled ps-4">
                  <li className="mb-2">• Make our Website function properly</li>
                  <li className="mb-2">• Improve our Website and provide a better user experience</li>
                  <li className="mb-2">• Remember your preferences</li>
                  <li className="mb-2">• Measure how you use our Website so we can update and improve it</li>
                  <li className="mb-2">• Deliver relevant advertising to you</li>
                </ul>
              </div>

              <div className="cookie-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>4. Types of Cookies We Use</h3>
                <p>
                  We use the following types of cookies:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <strong>Essential Cookies:</strong>
                    <p>These cookies are necessary for the Website to function properly. They enable basic functions like page navigation and access to secure areas of the Website. The Website cannot function properly without these cookies.</p>
                  </li>
                  <li className="mb-4">
                    <strong>Preference Cookies:</strong>
                    <p>These cookies enable the Website to remember information that changes the way the Website behaves or looks, like your preferred language or the region you are in.</p>
                  </li>
                  <li className="mb-4">
                    <strong>Statistics Cookies:</strong>
                    <p>These cookies help us understand how visitors interact with the Website by collecting and reporting information anonymously. They help us improve the Website's functionality.</p>
                  </li>
                  <li className="mb-4">
                    <strong>Marketing Cookies:</strong>
                    <p>These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</p>
                  </li>
                </ul>
              </div>

              <div className="cookie-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>5. Third-Party Cookies</h3>
                <p>
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Website and deliver advertisements on and through the Website. These third parties may include:
                </p>
                <ul className="list-unstyled ps-4">
                  <li className="mb-2">• Google Analytics (for website analytics)</li>
                  <li className="mb-2">• Google AdSense (for advertising)</li>
                  <li className="mb-2">• Facebook (for social media integration and advertising)</li>
                  <li className="mb-2">• LinkedIn (for social media integration and advertising)</li>
                </ul>
                <p>
                  These third parties may use cookies, pixel tags, and other storage technologies to collect or receive information from our Website and elsewhere on the internet and use that information to provide measurement services and target ads.
                </p>
              </div>

              <div className="cookie-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>6. Managing Cookies</h3>
                <p>
                  Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version. You can obtain up-to-date information about blocking and deleting cookies via these links:
                </p>
                <ul className="list-unstyled ps-4">
                  <li className="mb-2">• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                  <li className="mb-2">• <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                  <li className="mb-2">• <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                  <li className="mb-2">• <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                </ul>
                <p>
                  Please note that if you choose to block cookies, you may not be able to use all the features of our Website.
                </p>
              </div>

              <div className="cookie-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>7. Do Not Track Signals</h3>
                <p>
                  Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. At this time, we do not respond to browser "Do Not Track" signals.
                </p>
              </div>

              <div className="cookie-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>8. Changes to This Cookie Policy</h3>
                <p>
                  We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this Cookie Policy. You are advised to review this Cookie Policy periodically for any changes.
                </p>
              </div>

              <div className="cookie-section mb-5" style={{padding: '20px 0'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>9. Contact Us</h3>
                <p>
                  If you have any questions about our Cookie Policy, please contact us at:
                </p>
                <div style={{backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '2px solid #d4af37'}}>
                  <p style={{margin: '0', lineHeight: '1.8', color: '#1a365d'}}>
                    <strong>Rathod Law Firm</strong><br />
                    <strong>Brampton Office:</strong><br />
                    Unit 1B, 295 Queen Street East<br />
                    Brampton, ON L6V 1B9<br />
                    Phone: <a href="tel:+19054579200" style={{color: '#d4af37', textDecoration: 'none'}}>(905) 457-9200</a><br /><br />
                    <strong>Scarborough Office:</strong><br />
                    4168 Finch Avenue East, Unit 315<br />
                    Scarborough, ON M1S 5H6<br />
                    Phone: <a href="tel:+14164010078" style={{color: '#d4af37', textDecoration: 'none'}}>(416) 401-0078</a><br /><br />
                    Email: <a href="mailto:rathod@hplaw.org" style={{color: '#d4af37', textDecoration: 'none'}}>rathod@hplaw.org</a><br />
                    Hours: 9am to 5pm Toronto Time, Monday to Friday only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Cookie Policy | Rathod Law Firm',
  description: 'Learn about how Rathod Law Firm uses cookies and similar technologies on our website, and how you can manage your cookie preferences.',
};