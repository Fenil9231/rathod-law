import Link from 'next/link';
import Layout from "@/components/layout/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Privacy Policy">
      <div className="container py-5" style={{backgroundColor: '#f8f9fa'}}>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="privacy-policy-content" style={{backgroundColor: '#ffffff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
              <div className="sec-title mb-4" style={{textAlign: 'center', borderBottom: '3px solid #d4af37', paddingBottom: '20px'}}>
                <h2 style={{color: '#1a365d', fontSize: '2.5rem', fontWeight: '700', marginBottom: '10px'}}>Privacy Policy</h2>
                <p className="mt-3" style={{color: '#666', fontSize: '1.1rem', fontStyle: 'italic'}}>Last Updated: June 2024</p>
              </div>

              <div className="privacy-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>1. Introduction</h3>
                <p>
                  At Rathod Law Firm ("we," "our," or "us"), we are committed to protecting your privacy and the confidentiality of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
                </p>
              </div>

              <div className="privacy-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>2. Information We Collect</h3>
                <p>
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-unstyled ps-4 mb-4">
                  <li className="mb-2">• Contact us through our website</li>
                  <li className="mb-2">• Schedule a consultation</li>
                  <li className="mb-2">• Sign up for our newsletter</li>
                  <li className="mb-2">• Become a client</li>
                </ul>
                <p>
                  The personal information we may collect includes:
                </p>
                <ul className="list-unstyled ps-4 mb-4">
                  <li className="mb-2">• Name, email address, phone number, and mailing address</li>
                  <li className="mb-2">• Information related to your legal matter</li>
                  <li className="mb-2">• Payment information</li>
                  <li className="mb-2">• Any other information you choose to provide</li>
                </ul>
                <p>
                  We may also automatically collect certain information when you visit our website, including:
                </p>
                <ul className="list-unstyled ps-4">
                  <li className="mb-2">• IP address</li>
                  <li className="mb-2">• Browser type</li>
                  <li className="mb-2">• Operating system</li>
                  <li className="mb-2">• Pages visited and time spent on those pages</li>
                  <li className="mb-2">• Referring website addresses</li>
                </ul>
              </div>

              <div className="privacy-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>3. How We Use Your Information</h3>
                <p>
                  We may use the information we collect for various purposes, including to:
                </p>
                <ul className="list-unstyled ps-4">
                  <li className="mb-2">• Provide, maintain, and improve our services</li>
                  <li className="mb-2">• Process and complete transactions</li>
                  <li className="mb-2">• Respond to your inquiries and requests</li>
                  <li className="mb-2">• Send you administrative information, such as updates to our terms, conditions, and policies</li>
                  <li className="mb-2">• Send you marketing and promotional communications (with your consent)</li>
                  <li className="mb-2">• Monitor and analyze usage patterns and trends</li>
                  <li className="mb-2">• Protect against, identify, and prevent fraud and other illegal activity</li>
                  <li className="mb-2">• Comply with legal obligations</li>
                </ul>
              </div>

              <div className="privacy-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>4. Information Sharing and Disclosure</h3>
                <p>
                  We may share your personal information in the following situations:
                </p>
                <ul className="list-unstyled ps-4">
                  <li className="mb-2">• <strong>With Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.</li>
                  <li className="mb-2">• <strong>With Your Consent:</strong> We may share your information with third parties when you have given us your consent to do so.</li>
                  <li className="mb-2">• <strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.</li>
                  <li className="mb-2">• <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                </ul>
              </div>

              <div className="privacy-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>5. Data Security</h3>
                <p>
                  We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
                </p>
              </div>

              <div className="privacy-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>6. Your Rights</h3>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-unstyled ps-4">
                  <li className="mb-2">• The right to access personal information we hold about you</li>
                  <li className="mb-2">• The right to request correction of inaccurate personal information</li>
                  <li className="mb-2">• The right to request deletion of your personal information</li>
                  <li className="mb-2">• The right to object to processing of your personal information</li>
                  <li className="mb-2">• The right to data portability</li>
                  <li className="mb-2">• The right to withdraw consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </div>

              <div className="privacy-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>7. Children's Privacy</h3>
                <p>
                  Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will delete such information from our systems.
                </p>
              </div>

              <div className="privacy-section mb-5" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>8. Changes to This Privacy Policy</h3>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div className="privacy-section mb-5" style={{padding: '20px 0'}}>
                <h3 className="mb-3" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>9. Contact Us</h3>
                <p>
                  If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div style={{backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '2px solid #d4af37'}}>
                  <p style={{margin: '0', lineHeight: '1.8', color: '#1a365d'}}>
                    <strong>Rathod Law Firm</strong><br />
                    <strong>Brampton Office:</strong><br />
                    Unit 1B, 295 Queen Street East<br />
                    Brampton, ON L6V 1B9<br /><br />
                    <strong>Scarborough Office:</strong><br />
                    4168 Finch Avenue East, Unit 315<br />
                    Scarborough, ON M1S 5H6<br /><br />
                    <strong>Email:</strong> <a href="mailto:rathod@hplaw.org" style={{color: '#d4af37', textDecoration: 'none'}}>rathod@hplaw.org</a><br />
                    <strong>Phone (Brampton):</strong> <a href="tel:+19054579200" style={{color: '#d4af37', textDecoration: 'none'}}>(905) 457-9200</a><br />
                    <strong>Phone (Scarborough):</strong> <a href="tel:+14164010078" style={{color: '#d4af37', textDecoration: 'none'}}>(416) 401-0078</a>
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
  title: 'Privacy Policy | Rathod Law Firm',
  description: 'Read our Privacy Policy to understand how Rathod Law Firm collects, uses, and protects your personal information when you use our website or services.',
};