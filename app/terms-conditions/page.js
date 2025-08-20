import Link from 'next/link';
import Layout from "@/components/layout/Layout";

export default function TermsConditions() {
  return (
    <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Terms and Conditions">
      <div>
        {/* Start Terms and Conditions Section */}
        <section className="terms-conditions-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="terms-conditions-content">
                  <div className="terms-conditions-content__inner">
                    <h2>Terms and Conditions</h2>
                    <p className="terms-conditions-content__text">
                      Welcome to Rathod Law Firm. These terms and conditions outline the rules and regulations for the use of our website and legal services.
                    </p>

                    <div className="terms-section">
                      <h3>1. Acceptance of Terms</h3>
                      <p>
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h3>2. Attorney-Client Relationship</h3>
                      <p>
                        The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h3>3. Use License</h3>
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

                    <div className="terms-section">
                      <h3>4. Disclaimer</h3>
                      <p>
                        The materials on Rathod Law Firm's website are provided on an 'as is' basis. Rathod Law Firm makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h3>5. Limitations</h3>
                      <p>
                        In no event shall Rathod Law Firm or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if Rathod Law Firm or an authorized representative has been notified orally or in writing of the possibility of such damage.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h3>6. Accuracy of Materials</h3>
                      <p>
                        The materials appearing on Rathod Law Firm's website could include technical, typographical, or photographic errors. Rathod Law Firm does not warrant that any of the materials on its website are accurate, complete, or current. Rathod Law Firm may make changes to the materials contained on its website at any time without notice.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h3>7. Links</h3>
                      <p>
                        Rathod Law Firm has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Rathod Law Firm of the site. Use of any such linked website is at the user's own risk.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h3>8. Modifications</h3>
                      <p>
                        Rathod Law Firm may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h3>9. Governing Law</h3>
                      <p>
                        These terms and conditions are governed by and construed in accordance with the laws of Ontario, Canada, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h3>10. Contact Information</h3>
                      <p>
                        If you have any questions about these Terms and Conditions, please contact us at:
                      </p>
                      <p>
                        <strong>Rathod Law Firm</strong><br />
                        <strong>Brampton Office:</strong><br />
                        106-2250 Bovaird Drive East<br />
                        Brampton, Ontario L6R 0W3<br />
                        Phone: (647) 654-9454<br /><br />
                        <strong>Scarborough Office:</strong><br />
                        122-1200 Markham Road<br />
                        Scarborough, ON M1H 3C3<br />
                        Phone: (437) 880-9656<br /><br />
                        Email: <Link href="mailto:rathod@hplaw.org">rathod@hplaw.org</Link><br />
                        Hours: 9am to 5pm Toronto Time, Monday to Friday only
                      </p>
                    </div>

                    <div className="terms-section">
                      <p className="last-updated">
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