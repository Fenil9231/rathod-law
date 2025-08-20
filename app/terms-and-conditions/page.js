import Link from 'next/link';
import Layout from "@/components/layout/Layout";

export default function TermsAndConditions() {
  return (
    <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Terms and Conditions">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="terms-content">
              <div className="sec-title mb-4">
                <h2>Terms and Conditions</h2>
                <p className="mt-3">Last Updated: June 2024</p>
              </div>

              <div className="terms-section mb-5">
                <h3 className="mb-3">1. Introduction</h3>
                <p>
                  Welcome to the Rathod Law Firm website. These Terms and Conditions ("Terms") govern your use of our website located at www.rathodlaw.com ("Website") and the services offered through our Website. By accessing or using our Website, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Website.
                </p>
              </div>

              <div className="terms-section mb-5">
                <h3 className="mb-3">2. Use of Website</h3>
                <p>
                  The content on our Website is for general information purposes only. It is not intended to constitute legal advice or create an attorney-client relationship. You should not rely on any information on this Website without seeking legal advice from a qualified attorney licensed in your jurisdiction.
                </p>
                <p>
                  You agree to use our Website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict or inhibit anyone else's use and enjoyment of the Website.
                </p>
              </div>

              <div className="terms-section mb-5">
                <h3 className="mb-3">3. Intellectual Property</h3>
                <p>
                  The content, features, and functionality of our Website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the property of Rathod Law Firm or its licensors and are protected by Canadian and international copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website without our prior written consent.
                </p>
              </div>

              <div className="terms-section mb-5">
                <h3 className="mb-3">4. User Contributions</h3>
                <p>
                  Our Website may contain features that allow users to post, submit, publish, display, or transmit content or materials. Any content you post to the Website will be considered non-confidential and non-proprietary.
                </p>
                <p>
                  By providing any content on the Website, you grant us and our affiliates and service providers a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such content.
                </p>
                <p>
                  You represent and warrant that:
                </p>
                <ul className="list-unstyled ps-4">
                  <li className="mb-2">• You own or control all rights in and to the content you post</li>
                  <li className="mb-2">• All content you post is accurate and not misleading</li>
                  <li className="mb-2">• Your content does not violate these Terms or any applicable law</li>
                </ul>
              </div>

              <div className="terms-section mb-5">
                <h3 className="mb-3">5. Prohibited Uses</h3>
                <p>
                  You may use our Website only for lawful purposes and in accordance with these Terms. You agree not to use our Website:
                </p>
                <ul className="list-unstyled ps-4">
                  <li className="mb-2">• In any way that violates any applicable federal, provincial, local, or international law or regulation</li>
                  <li className="mb-2">• To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
                  <li className="mb-2">• To impersonate or attempt to impersonate Rathod Law Firm, a Rathod Law Firm employee, another user, or any other person or entity</li>
                  <li className="mb-2">• To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which may harm Rathod Law Firm or users of the Website</li>
                </ul>
              </div>

              <div className="terms-section mb-5">
                <h3 className="mb-3">6. Links to Other Websites</h3>
                <p>
                  Our Website may contain links to third-party websites or services that are not owned or controlled by Rathod Law Firm. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Rathod Law Firm shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
                </p>
              </div>

              <div className="terms-section mb-5">
                <h3 className="mb-3">7. Disclaimer of Warranties</h3>
                <p>
                  Our Website and its content are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. Rathod Law Firm disclaims all warranties, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p>
                  We do not warrant that the Website will be uninterrupted or error-free, that defects will be corrected, or that the Website or the server that makes it available are free of viruses or other harmful components.
                </p>
              </div>

              <div className="terms-section mb-5">
                <h3 className="mb-3">8. Limitation of Liability</h3>
                <p>
                  To the fullest extent permitted by applicable law, in no event will Rathod Law Firm, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website, any websites linked to it, any content on the Website or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
                </p>
              </div>

              <div className="terms-section mb-5">
                <h3 className="mb-3">9. Indemnification</h3>
                <p>
                  You agree to defend, indemnify, and hold harmless Rathod Law Firm, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Website.
                </p>
              </div>

              <div className="terms-section mb-5">
                <h3 className="mb-3">10. Changes to Terms</h3>
                <p>
                  We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the Website following the posting of revised Terms means that you accept and agree to the changes.
                </p>
              </div>

              <div className="terms-section mb-5">
                <h3 className="mb-3">11. Governing Law and Jurisdiction</h3>
                <p>
                  These Terms and any dispute or claim arising out of or in connection with them or their subject matter or formation shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without giving effect to any choice or conflict of law provision or rule.
                </p>
                <p>
                  Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Website shall be instituted exclusively in the courts of the Province of Ontario, although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms in your country of residence or any other relevant country.
                </p>
              </div>

              <div className="terms-section mb-5">
                <h3 className="mb-3">12. Contact Information</h3>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p>
                  Rathod Law Firm<br />
                  123 Legal Street<br />
                  Toronto, ON M5V 2K1<br />
                  Email: info@rathodlaw.com<br />
                  Phone: (416) 555-1234
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Terms and Conditions | Rathod Law Firm',
  description: 'Read our Terms and Conditions to understand the rules and guidelines that govern your use of the Rathod Law Firm website and services.',
};