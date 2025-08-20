import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Small Claims Court Ontario | Paralegal Representation | Rathod Law',
  description: 'Expert paralegal representation for small claims court in Ontario. Handle disputes up to $35,000. Cost-effective legal help for debt collection, contracts, and more.',
  keywords: 'small claims court Ontario, paralegal representation, debt collection, contract disputes, small claims process, legal representation',
};

export default function SmallClaims() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Small Claims Court">
      <div>
        {/* Hero Section */}
        <section className="page-title">
          <div className="page-title-bg" style={{backgroundImage: 'url(assets/images/backgrounds/page-title-bg.jpg)'}}>
          </div>
          <div className="page-title-bg-overly"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-title__wrapper">
                  <div className="page-title__content">
                    <h2 className="page-title__title">Small Claims Court Representation</h2>
                    <div className="page-title__menu">
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li>Small Claims</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="about-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="about-page__content">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Legal Representation</span>
                    <h2 className="section-title__title">Expert Small Claims Court Services in Ontario</h2>
                  </div>
                  
                  <p className="about-page__text-1">
                    Small Claims Court in Ontario handles civil disputes involving monetary claims up to $35,000. 
                    Our experienced paralegals provide cost-effective representation to help you navigate the 
                    court process, whether you're pursuing a claim or defending against one.
                  </p>

                  <div className="card mb-4">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">What is Small Claims Court?</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Small Claims Court is a division of the Superior Court of Justice designed to resolve 
                        disputes quickly and affordably. It's intended to be accessible to ordinary people 
                        without requiring expensive legal representation, though professional help often improves outcomes.
                      </p>
                      
                      <h5 className="mt-3">Key Features:</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Monetary Limit:</strong> Claims up to $35,000 (excluding interest and costs)</li>
                        <li className="list-group-item"><strong>Simplified Process:</strong> Less formal procedures than Superior Court</li>
                        <li className="list-group-item"><strong>Faster Resolution:</strong> Typically resolved within 6-12 months</li>
                        <li className="list-group-item"><strong>Lower Costs:</strong> Reduced court fees and legal costs</li>
                        <li className="list-group-item"><strong>Accessible:</strong> Designed for self-represented litigants</li>
                        <li className="list-group-item"><strong>Final Decisions:</strong> Limited appeal options</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-info text-white">
                      <h3 className="card-title mb-0">Types of Claims Handled</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Small Claims Court handles various civil disputes:</p>
                      
                      <h5 className="mt-3">Common Claim Types:</h5>
                      <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item"><strong>Debt Collection:</strong> Unpaid loans, credit cards, invoices</li>
                        <li className="list-group-item"><strong>Contract Disputes:</strong> Breach of contract, service agreements</li>
                        <li className="list-group-item"><strong>Property Damage:</strong> Vehicle accidents, property damage claims</li>
                        <li className="list-group-item"><strong>Landlord-Tenant:</strong> Damage deposits, unpaid rent (some cases)</li>
                        <li className="list-group-item"><strong>Consumer Issues:</strong> Defective products, poor services</li>
                        <li className="list-group-item"><strong>Employment:</strong> Unpaid wages, wrongful dismissal (limited)</li>
                        <li className="list-group-item"><strong>Professional Services:</strong> Disputes with contractors, professionals</li>
                      </ul>

                      <h5>Claims NOT Handled:</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Family Law:</strong> Divorce, custody, support matters</li>
                        <li className="list-group-item"><strong>Criminal Matters:</strong> Criminal charges and penalties</li>
                        <li className="list-group-item"><strong>Immigration:</strong> Immigration and refugee matters</li>
                        <li className="list-group-item"><strong>Real Estate:</strong> Title disputes, boundary issues</li>
                        <li className="list-group-item"><strong>Defamation:</strong> Libel and slander claims</li>
                        <li className="list-group-item"><strong>Personal Injury:</strong> Serious injury claims (usually exceed limit)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-success text-white">
                      <h3 className="card-title mb-0">The Small Claims Process</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Understanding the process helps you prepare effectively:</p>
                      
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <h5>Step 1: Filing a Claim</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Plaintiff's Claim:</strong> Complete Form 7A with claim details</li>
                            <li className="list-group-item"><strong>Filing Fee:</strong> Pay court filing fee (varies by claim amount)</li>
                            <li className="list-group-item"><strong>Proper Court:</strong> File in correct territorial jurisdiction</li>
                            <li className="list-group-item"><strong>Defendant Information:</strong> Provide accurate defendant details</li>
                            <li className="list-group-item"><strong>Supporting Documents:</strong> Attach relevant evidence</li>
                          </ul>
                        </div>
                        
                        <div className="col-md-6 mb-3">
                          <h5>Step 2: Serving the Claim</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Service Methods:</strong> Personal service, alternative service</li>
                            <li className="list-group-item"><strong>Time Limits:</strong> Serve within 6 months of filing</li>
                            <li className="list-group-item"><strong>Proof of Service:</strong> File affidavit of service</li>
                            <li className="list-group-item"><strong>Service Costs:</strong> Additional fees for service</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <h5>Step 3: Defendant's Response</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Defence:</strong> File Form 9A within 20 days</li>
                            <li className="list-group-item"><strong>Defendant's Claim:</strong> Counter-claim if applicable</li>
                            <li className="list-group-item"><strong>Default Judgment:</strong> Risk if no response filed</li>
                            <li className="list-group-item"><strong>Settlement Conference:</strong> Mandatory mediation attempt</li>
                          </ul>
                        </div>
                        
                        <div className="col-md-6 mb-3">
                          <h5>Step 4: Settlement Conference</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Mandatory Step:</strong> Required before trial</li>
                            <li className="list-group-item"><strong>Judge Mediation:</strong> Judge assists with settlement</li>
                            <li className="list-group-item"><strong>Cost Consequences:</strong> Failure to attend has penalties</li>
                            <li className="list-group-item"><strong>Settlement Benefits:</strong> Avoid trial costs and uncertainty</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-12">
                          <h5>Step 5: Trial</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Evidence Presentation:</strong> Present case to judge</li>
                            <li className="list-group-item"><strong>Witness Testimony:</strong> Call witnesses if necessary</li>
                            <li className="list-group-item"><strong>Legal Arguments:</strong> Make legal submissions</li>
                            <li className="list-group-item"><strong>Judgment:</strong> Judge makes final decision</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-warning text-dark">
                      <h3 className="card-title mb-0">Costs and Fees</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Understanding court costs helps budget for your case:</p>
                      
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <h5>Court Filing Fees</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Claims up to $6,000:</strong> $102</li>
                            <li className="list-group-item"><strong>Claims $6,000.01 to $25,000:</strong> $181</li>
                            <li className="list-group-item"><strong>Claims $25,000.01 to $35,000:</strong> $258</li>
                            <li className="list-group-item"><strong>Default Judgment:</strong> $35</li>
                            <li className="list-group-item"><strong>Motion Fees:</strong> $40-$127 depending on type</li>
                          </ul>
                        </div>
                        
                        <div className="col-md-4 mb-3">
                          <h5>Additional Costs</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Service Fees:</strong> $60-$110 for bailiff service</li>
                            <li className="list-group-item"><strong>Enforcement:</strong> Additional fees for collecting judgment</li>
                            <li className="list-group-item"><strong>Paralegal Fees:</strong> Professional representation costs</li>
                            <li className="list-group-item"><strong>Witness Fees:</strong> Compensation for expert witnesses</li>
                            <li className="list-group-item"><strong>Document Costs:</strong> Photocopying, filing fees</li>
                          </ul>
                        </div>
                        
                        <div className="col-md-4 mb-3">
                          <h5>Cost Recovery</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Successful Party:</strong> May recover some costs from losing party</li>
                            <li className="list-group-item"><strong>Representation Costs:</strong> Limited recovery for paralegal fees</li>
                            <li className="list-group-item"><strong>Unreasonable Conduct:</strong> Additional costs for bad faith</li>
                            <li className="list-group-item"><strong>Settlement Offers:</strong> Cost consequences for rejecting reasonable offers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Benefits of Paralegal Representation</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">While Small Claims Court allows self-representation, professional help offers advantages:</p>
                      
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <h5>Legal Expertise</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Procedural Knowledge:</strong> Understanding of court rules and procedures</li>
                            <li className="list-group-item"><strong>Legal Strategy:</strong> Develop effective case strategy</li>
                            <li className="list-group-item"><strong>Evidence Preparation:</strong> Properly organize and present evidence</li>
                            <li className="list-group-item"><strong>Legal Research:</strong> Research applicable laws and precedents</li>
                            <li className="list-group-item"><strong>Document Drafting:</strong> Prepare proper court documents</li>
                          </ul>
                        </div>
                        
                        <div className="col-md-4 mb-3">
                          <h5>Practical Advantages</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Time Savings:</strong> Handle paperwork and court appearances</li>
                            <li className="list-group-item"><strong>Stress Reduction:</strong> Professional handles legal complexities</li>
                            <li className="list-group-item"><strong>Better Outcomes:</strong> Improved chances of success</li>
                            <li className="list-group-item"><strong>Cost-Effective:</strong> Paralegals cost less than lawyers</li>
                            <li className="list-group-item"><strong>Settlement Negotiation:</strong> Skilled negotiation for better settlements</li>
                          </ul>
                        </div>
                        
                        <div className="col-md-4 mb-3">
                          <h5>Court Representation</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Trial Advocacy:</strong> Experienced court presentation</li>
                            <li className="list-group-item"><strong>Cross-Examination:</strong> Effective questioning of witnesses</li>
                            <li className="list-group-item"><strong>Legal Arguments:</strong> Persuasive legal submissions</li>
                            <li className="list-group-item"><strong>Evidence Rules:</strong> Proper evidence presentation</li>
                            <li className="list-group-item"><strong>Professional Presence:</strong> Credible representation before judge</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-danger text-white">
                      <h3 className="card-title mb-0">Enforcement of Judgments</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Winning a judgment is only the first step - collecting the money requires enforcement:</p>
                      
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <h5>Enforcement Options</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Garnishment:</strong> Garnish wages or bank accounts</li>
                            <li className="list-group-item"><strong>Seizure of Assets:</strong> Seize and sell debtor's property</li>
                            <li className="list-group-item"><strong>Examination in Aid:</strong> Question debtor about assets</li>
                            <li className="list-group-item"><strong>Writ of Seizure:</strong> Register against real estate</li>
                            <li className="list-group-item"><strong>Contempt Proceedings:</strong> For willful non-payment</li>
                          </ul>
                        </div>
                        
                        <div className="col-md-6 mb-3">
                          <h5>Enforcement Challenges</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Debtor Assets:</strong> Debtor may have limited assets</li>
                            <li className="list-group-item"><strong>Exemptions:</strong> Some assets protected from seizure</li>
                            <li className="list-group-item"><strong>Costs:</strong> Enforcement costs can be significant</li>
                            <li className="list-group-item"><strong>Time:</strong> Enforcement process can be lengthy</li>
                            <li className="list-group-item"><strong>Collection Rates:</strong> Not all judgments are collectible</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-secondary text-white">
                      <h3 className="card-title mb-0">Defending Against Claims</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">If you're being sued, proper defense is crucial:</p>
                      
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <h5>Defense Strategies</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Dispute Facts:</strong> Challenge plaintiff's version of events</li>
                            <li className="list-group-item"><strong>Legal Defenses:</strong> Raise applicable legal defenses</li>
                            <li className="list-group-item"><strong>Limitation Periods:</strong> Claim may be too old to pursue</li>
                            <li className="list-group-item"><strong>Jurisdiction:</strong> Court may lack jurisdiction</li>
                            <li className="list-group-item"><strong>Set-off:</strong> Counter-claim for amounts owed</li>
                            <li className="list-group-item"><strong>Settlement:</strong> Negotiate favorable settlement</li>
                          </ul>
                        </div>
                        
                        <div className="col-md-6 mb-3">
                          <h5>Common Defenses</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Payment:</strong> Amount already paid</li>
                            <li className="list-group-item"><strong>No Contract:</strong> No valid agreement existed</li>
                            <li className="list-group-item"><strong>Breach by Plaintiff:</strong> Plaintiff breached first</li>
                            <li className="list-group-item"><strong>Duress:</strong> Agreement made under duress</li>
                            <li className="list-group-item"><strong>Misrepresentation:</strong> Fraudulent or negligent misrepresentation</li>
                            <li className="list-group-item"><strong>Impossibility:</strong> Performance became impossible</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-success text-white">
                      <h3 className="card-title mb-0">How We Can Help</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our experienced paralegals provide comprehensive Small Claims Court services:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Assess the strength of your case and likelihood of success</li>
                        <li className="list-group-item">Prepare and file all necessary court documents</li>
                        <li className="list-group-item">Serve documents on opposing parties</li>
                        <li className="list-group-item">Represent you at settlement conferences</li>
                        <li className="list-group-item">Advocate for you at trial</li>
                        <li className="list-group-item">Negotiate settlements to avoid trial costs</li>
                        <li className="list-group-item">Assist with judgment enforcement</li>
                        <li className="list-group-item">Defend against claims filed against you</li>
                        <li className="list-group-item">Provide cost-effective alternative to lawyer representation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-info text-white">
                      <h3 className="card-title mb-0">Why Choose Rathod Law for Small Claims?</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our team brings extensive experience and proven results:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Experienced Paralegals:</strong> Years of Small Claims Court experience</li>
                        <li className="list-group-item"><strong>Cost-Effective:</strong> Lower fees than lawyer representation</li>
                        <li className="list-group-item"><strong>Proven Results:</strong> Track record of successful outcomes</li>
                        <li className="list-group-item"><strong>Personal Service:</strong> Direct access to your paralegal</li>
                        <li className="list-group-item"><strong>Local Knowledge:</strong> Familiar with local courts and procedures</li>
                        <li className="list-group-item"><strong>Comprehensive Service:</strong> Handle all aspects of your case</li>
                        <li className="list-group-item"><strong>Settlement Focus:</strong> Seek efficient resolution when possible</li>
                        <li className="list-group-item"><strong>Trial Ready:</strong> Prepared to take your case to trial if necessary</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__services">
                    <h3 className="sidebar__title">Related Services</h3>
                    <ul className="sidebar__services-list">
                      <li><Link href="/paralegal-services">Paralegal Services</Link></li>
                      <li><Link href="/lawyer-services">Lawyer Services</Link></li>
                      <li><Link href="/notary-services">Notary Services</Link></li>
                      <li><Link href="/contact">Legal Consultation</Link></li>
                    </ul>
                  </div>

                  <div className="sidebar__single sidebar__contact">
                    <div className="sidebar__contact-bg" style={{backgroundImage: 'url(assets/images/resources/sidebar-contact-bg.jpg)'}}></div>
                    <div className="sidebar__contact-content">
                      <h3 className="sidebar__contact-title">Need Legal Help?</h3>
                      <p className="sidebar__contact-text">Get expert representation for your Small Claims matter</p>
                      <div className="sidebar__contact-btn">
                        <Link href="/contact" className="thm-btn">Contact Us</Link>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar__single sidebar__info">
                    <h3 className="sidebar__title">Small Claims Facts</h3>
                    <ul className="sidebar__info-list">
                      <li><strong>Claim Limit:</strong> Up to $35,000</li>
                      <li><strong>Filing Fee:</strong> $102 - $258</li>
                      <li><strong>Time Limit:</strong> Usually 2 years</li>
                      <li><strong>Settlement Conference:</strong> Mandatory</li>
                      <li><strong>Appeals:</strong> Very limited</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="card mb-4 border-primary">
                  <div className="card-header bg-primary text-white text-center">
                    <h3 className="card-title mb-0">Get Expert Small Claims Court Representation</h3>
                  </div>
                  <div className="card-body text-center">
                    <p className="card-text lead">Don't navigate Small Claims Court alone. Our experienced paralegals provide the expertise and representation you need for the best possible outcome.</p>
                    
                    <div className="row mb-4">
                      <div className="col-md-3 mb-2">
                        <div className="text-primary">
                          <i className="fas fa-comments fa-2x mb-2"></i>
                          <h5>Free Consultation</h5>
                          <p className="small">Discuss your case with no obligation</p>
                        </div>
                      </div>
                      <div className="col-md-3 mb-2">
                        <div className="text-success">
                          <i className="fas fa-dollar-sign fa-2x mb-2"></i>
                          <h5>Affordable Rates</h5>
                          <p className="small">Cost-effective paralegal representation</p>
                        </div>
                      </div>
                      <div className="col-md-3 mb-2">
                        <div className="text-warning">
                          <i className="fas fa-trophy fa-2x mb-2"></i>
                          <h5>Proven Results</h5>
                          <p className="small">Track record of successful outcomes</p>
                        </div>
                      </div>
                      <div className="col-md-3 mb-2">
                        <div className="text-info">
                          <i className="fas fa-cogs fa-2x mb-2"></i>
                          <h5>Full Service</h5>
                          <p className="small">From filing to enforcement</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="lead font-weight-bold mb-4">Contact us today to protect your interests in Small Claims Court.</p>
                    
                    <div className="row mb-4">
                      <div className="col-md-4 mb-2">
                        <p><i className="fas fa-phone text-primary"></i> <strong>Call:</strong> (647) 490-7113</p>
                      </div>
                      <div className="col-md-4 mb-2">
                        <p><i className="fas fa-envelope text-primary"></i> <strong>Email:</strong> info@rathodlaw.com</p>
                      </div>
                      <div className="col-md-4 mb-2">
                        <p><i className="fas fa-calendar text-primary"></i> <strong>Online:</strong> Schedule your free consultation</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Link href="/contact" className="btn btn-primary btn-lg">Get Started Today</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}