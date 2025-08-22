import Link from 'next/link';
import Layout from "@/components/layout/Layout";

export default function TermsConditions() {
  return (
    <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Terms and Conditions">
      <div>
        {/* Start Terms and Conditions Section */}
        <section className="terms-conditions-section" style={{backgroundColor: '#f8f9fa', padding: '60px 0'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="terms-conditions-content" style={{backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', border: '2px solid #d4af37'}}>
                  <div className="terms-conditions-content__inner" style={{padding: '40px'}}>
                    <h2 style={{color: '#1a365d', fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '30px', borderBottom: '3px solid #d4af37', paddingBottom: '15px'}}>Terms and Conditions</h2>
                    <p className="terms-conditions-content__text" style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '40px', textAlign: 'center', fontStyle: 'italic'}}>
                      Welcome to Rathod Law Firm. These terms and conditions outline the rules and regulations for the use of our website and legal services.
                    </p>

                    <div className="terms-section" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                      <h3 style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>1. Acceptance of Terms</h3>
                      <p>
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                      </p>
                    </div>

                    <div className="terms-section" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                      <h3 style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>2. Attorney-Client Relationship</h3>
                      <p>
                        The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
                      </p>
                    </div>

                    <div className="terms-section" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                      <h3 style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>3. Use License</h3>
                      <p>
                        Permission is granted to temporarily download one copy of the materials on Rathod Law Firm's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                      </p>
                      <ul>
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
                        <li>attempt to decompile or reverse engineer any software contained on the website;</li>
                        <li>remove any copyright or other proprietary notations from the materials.</li>
                      </ul>
                    </div>

                    <div className="terms-section" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                      <h3 style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>4. Disclaimer</h3>
                      <p>
                        The materials on Rathod Law Firm's website are provided on an 'as is' basis. Rathod Law Firm makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                      </p>
                    </div>

                    <div className="terms-section" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                      <h3 style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>5. Limitations</h3>
                      <p>
                        In no event shall Rathod Law Firm or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if Rathod Law Firm or an authorized representative has been notified orally or in writing of the possibility of such damage.
                      </p>
                    </div>

                    <div className="terms-section" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                      <h3 style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>6. Accuracy of Materials</h3>
                      <p>
                        The materials appearing on Rathod Law Firm's website could include technical, typographical, or photographic errors. Rathod Law Firm does not warrant that any of the materials on its website are accurate, complete, or current. Rathod Law Firm may make changes to the materials contained on its website at any time without notice.
                      </p>
                    </div>

                    <div className="terms-section" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                      <h3 style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>7. Links</h3>
                      <p>
                        Rathod Law Firm has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Rathod Law Firm of the site. Use of any such linked website is at the user's own risk.
                      </p>
                    </div>

                    <div className="terms-section" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                      <h3 style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>8. Modifications</h3>
                      <p>
                        Rathod Law Firm may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                      </p>
                    </div>

                    <div className="terms-section" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                      <h3 style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>9. Governing Law</h3>
                      <p>
                        These terms and conditions are governed by and construed in accordance with the laws of Ontario, Canada, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                      </p>
                    </div>

                    <div className="terms-section" style={{padding: '20px 0', borderBottom: '1px solid #e9ecef'}}>
                      <h3 style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>10. Contact Information</h3>
                      <p>
                        If you have any questions about these Terms and Conditions, please contact us at:
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
                          Email: <Link href="mailto:rathod@hplaw.org" style={{color: '#d4af37', textDecoration: 'none'}}>rathod@hplaw.org</Link><br />
                          Hours: 9am to 5pm Toronto Time, Monday to Friday only
                        </p>
                      </div>
                    </div>

                    <div className="terms-section" style={{padding: '20px 0', textAlign: 'center'}}>
                      <p className="last-updated" style={{fontSize: '0.9rem', color: '#666', fontStyle: 'italic', margin: '0'}}>
                        <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Terms and Conditions Section */}
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Terms and Conditions | Rathod Law Firm',
  description: 'Read the terms and conditions for using Rathod Law Firm website and legal services. Learn about our policies, disclaimers, and legal agreements.',
};