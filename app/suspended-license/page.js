import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Suspended License Ontario | License Suspension Defense | Rathod Law',
  description: 'Expert help for suspended driver\'s license in Ontario. Fight suspensions, reinstatement assistance, and protect your driving privileges. Free consultation.',
  keywords: 'suspended license Ontario, license suspension, driving privileges, license reinstatement, demerit points, Highway Traffic Act',
};

export default function SuspendedLicense() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Suspended License">
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
                    <h2 className="page-title__title">Suspended License Defense</h2>
                    <div className="page-title__menu">
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li>Suspended License</li>
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
                    <span className="section-title__tagline">License Suspension Defense</span>
                    <h2 className="section-title__title">Expert Help for Suspended Driver's License in Ontario</h2>
                  </div>
                  
                  <p className="about-page__text-1">
                    A suspended driver's license can devastate your ability to work, care for family, and maintain 
                    your independence. Our experienced paralegals help fight license suspensions and guide you 
                    through the reinstatement process to get you back on the road legally.
                  </p>

                  <div className="card mb-4">
                    <div className="card-body">
                      <h3 className="card-title">Common Reasons for License Suspension in Ontario</h3>
                      <p className="card-text">
                        Ontario can suspend your driver's license for various reasons under the Highway Traffic Act 
                        and other legislation. Understanding the reason for your suspension is crucial for determining 
                        the best course of action.
                      </p>
                      
                      <h4 className="mt-3">Traffic Violation Suspensions:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Demerit Points:</strong> Accumulating 15+ points (novice: 9+ points)</div>
                        <div className="list-group-item"><strong>Stunt Driving:</strong> Immediate 30-day + court-ordered suspension</div>
                        <div className="list-group-item"><strong>Street Racing:</strong> Similar penalties to stunt driving</div>
                        <div className="list-group-item"><strong>Excessive Speeding:</strong> 50+ km/h over limit</div>
                        <div className="list-group-item"><strong>Dangerous Driving:</strong> Criminal conviction consequences</div>
                      </div>

                      <h4 className="mt-3">Impaired Driving Suspensions:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Impaired Driving:</strong> Criminal conviction suspensions</div>
                        <div className="list-group-item"><strong>Refuse Breathalyzer:</strong> Administrative license suspension</div>
                        <div className="list-group-item"><strong>Warn Range:</strong> .05-.08 BAC administrative suspension</div>
                        <div className="list-group-item"><strong>Zero Tolerance:</strong> Any alcohol for drivers under 21</div>
                      </div>

                      <h4 className="mt-3">Administrative Suspensions:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Medical Reasons:</strong> Health conditions affecting driving ability</div>
                        <div className="list-group-item"><strong>Unpaid Fines:</strong> Outstanding traffic violation fines</div>
                        <div className="list-group-item"><strong>Court Ordered:</strong> Judge-imposed suspensions</div>
                        <div className="list-group-item"><strong>Child Support:</strong> Non-payment of support obligations</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-body">
                      <h3 className="card-title">Types of License Suspensions</h3>
                      <p className="card-text">Different types of suspensions have different rules and consequences:</p>
                      
                      <h4 className="mt-3">Administrative Driver's License Suspension (ADLS):</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Immediate Effect:</strong> Takes effect immediately upon notice</div>
                        <div className="list-group-item"><strong>No Court Required:</strong> Administrative process, not criminal</div>
                        <div className="list-group-item"><strong>Appeal Rights:</strong> Can appeal within specific timeframes</div>
                        <div className="list-group-item"><strong>Reinstatement:</strong> Specific requirements must be met</div>
                      </div>

                      <h4 className="mt-3">Court-Ordered Suspensions:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Criminal Convictions:</strong> Result of criminal court proceedings</div>
                        <div className="list-group-item"><strong>Mandatory Minimums:</strong> Specific minimum suspension periods</div>
                        <div className="list-group-item"><strong>Discretionary:</strong> Judge may impose additional time</div>
                        <div className="list-group-item"><strong>Conditions:</strong> May include ignition interlock requirements</div>
                      </div>

                      <h4 className="mt-3">Medical Suspensions:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Health Conditions:</strong> Vision, seizures, cognitive impairment</div>
                        <div className="list-group-item"><strong>Doctor Reports:</strong> Medical professionals must report conditions</div>
                        <div className="list-group-item"><strong>Assessment Required:</strong> Medical examination for reinstatement</div>
                        <div className="list-group-item"><strong>Conditional Licenses:</strong> May allow limited driving with restrictions</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-body">
                      <h3 className="card-title">Consequences of Driving While Suspended</h3>
                      <p className="card-text">Driving while your license is suspended carries severe additional penalties:</p>
                      
                      <h4 className="mt-3">First Offense:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Fine:</strong> $1,000 - $5,000</div>
                        <div className="list-group-item"><strong>Additional Suspension:</strong> 6 months added to current suspension</div>
                        <div className="list-group-item"><strong>Vehicle Impoundment:</strong> 45 days</div>
                        <div className="list-group-item"><strong>Criminal Record:</strong> Possible criminal charges</div>
                      </div>

                      <h4 className="mt-3">Subsequent Offenses:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Higher Fines:</strong> $2,000 - $5,000</div>
                        <div className="list-group-item"><strong>Longer Suspension:</strong> 12 months additional</div>
                        <div className="list-group-item"><strong>Extended Impoundment:</strong> 90 days</div>
                        <div className="list-group-item"><strong>Jail Time:</strong> Up to 6 months imprisonment</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-body">
                      <h3 className="card-title">License Reinstatement Process</h3>
                      <p className="card-text">Getting your license back requires completing specific steps:</p>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Suspension Period:</strong> Must complete full suspension period</div>
                        <div className="list-group-item"><strong>Outstanding Fines:</strong> Pay all outstanding traffic fines</div>
                        <div className="list-group-item"><strong>Reinstatement Fee:</strong> Pay required reinstatement fees</div>
                        <div className="list-group-item"><strong>Insurance:</strong> Obtain valid auto insurance</div>
                        <div className="list-group-item"><strong>Medical Clearance:</strong> If suspension was medical-related</div>
                        <div className="list-group-item"><strong>Remedial Measures:</strong> Complete required courses or programs</div>
                        <div className="list-group-item"><strong>Ignition Interlock:</strong> Install if required for impaired driving</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-body">
                      <h3 className="card-title">Appealing License Suspensions</h3>
                      <p className="card-text">Many license suspensions can be appealed or challenged:</p>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Administrative Appeals:</strong> Challenge ADLS suspensions</div>
                        <div className="list-group-item"><strong>Court Appeals:</strong> Appeal criminal conviction suspensions</div>
                        <div className="list-group-item"><strong>Medical Reviews:</strong> Request review of medical suspensions</div>
                        <div className="list-group-item"><strong>Time Limits:</strong> Strict deadlines for filing appeals</div>
                        <div className="list-group-item"><strong>Stay of Suspension:</strong> May be able to continue driving during appeal</div>
                        <div className="list-group-item"><strong>Legal Representation:</strong> Professional help improves success rates</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-body">
                      <h3 className="card-title">Work and Hardship Permits</h3>
                      <p className="card-text">In some cases, limited driving privileges may be available:</p>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Ignition Interlock:</strong> May allow driving with device installed</div>
                        <div className="list-group-item"><strong>Medical Emergencies:</strong> Limited permits for medical needs</div>
                        <div className="list-group-item"><strong>Employment:</strong> Some jurisdictions allow work-related driving</div>
                        <div className="list-group-item"><strong>Conditional Licenses:</strong> Restricted driving privileges</div>
                        <div className="list-group-item"><strong>Public Transportation:</strong> Alternative transportation options</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-body">
                      <h3 className="card-title">Impact on Employment and Life</h3>
                      <p className="card-text">License suspension affects many aspects of daily life:</p>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Job Loss:</strong> Many jobs require valid driver's license</div>
                        <div className="list-group-item"><strong>Employment Opportunities:</strong> Limited job prospects</div>
                        <div className="list-group-item"><strong>Family Responsibilities:</strong> Difficulty caring for children, elderly</div>
                        <div className="list-group-item"><strong>Medical Appointments:</strong> Challenges accessing healthcare</div>
                        <div className="list-group-item"><strong>Daily Activities:</strong> Shopping, banking, social activities affected</div>
                        <div className="list-group-item"><strong>Financial Impact:</strong> Lost income and increased transportation costs</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-body">
                      <h3 className="card-title">Prevention and Risk Management</h3>
                      <p className="card-text">Protecting your license requires ongoing attention:</p>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Monitor Demerit Points:</strong> Track your driving record regularly</div>
                        <div className="list-group-item"><strong>Pay Fines Promptly:</strong> Avoid administrative suspensions</div>
                        <div className="list-group-item"><strong>Fight Tickets:</strong> Challenge unjust traffic violations</div>
                        <div className="list-group-item"><strong>Medical Compliance:</strong> Follow medical recommendations</div>
                        <div className="list-group-item"><strong>Safe Driving:</strong> Maintain good driving habits</div>
                        <div className="list-group-item"><strong>Legal Advice:</strong> Consult professionals for serious violations</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-body">
                      <h3 className="card-title">How We Can Help</h3>
                      <p className="card-text">Our experienced team provides comprehensive assistance:</p>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item">Review your driving record and suspension details</div>
                        <div className="list-group-item">Determine if your suspension can be appealed or challenged</div>
                        <div className="list-group-item">Represent you in administrative hearings and appeals</div>
                        <div className="list-group-item">Guide you through the reinstatement process</div>
                        <div className="list-group-item">Help obtain work permits or conditional licenses where available</div>
                        <div className="list-group-item">Negotiate with authorities for reduced suspension periods</div>
                        <div className="list-group-item">Provide ongoing support to protect your driving privileges</div>
                      </div>
                    </div>
                  </div>

                  <div className="card bg-primary text-white">
                    <div className="card-body text-center">
                      <h2 className="card-title">Don't Let a License Suspension Control Your Life</h2>
                      <p className="card-text">
                        A suspended license doesn't have to mean the end of your mobility and independence. 
                        Our experienced legal team can help you understand your options, challenge unjust 
                        suspensions, and get you back on the road as quickly as possible.
                      </p>
                      <p className="card-text">
                        <strong>Contact us today for a free consultation.</strong> We'll review your case, 
                        explain your rights, and develop a strategy to protect your driving privileges.
                      </p>
                      <div className="row mt-4">
                        <div className="col-md-4 mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-shield-alt fa-2x mb-2"></i>
                            <h5>Expert Defense</h5>
                            <p className="small">Experienced suspension appeals</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-gavel fa-2x mb-2"></i>
                            <h5>Legal Representation</h5>
                            <p className="small">Administrative hearings & appeals</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-phone fa-2x mb-2"></i>
                            <h5>Free Consultation</h5>
                            <p className="small">No obligation case review</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <a href="tel:+1234567890" className="btn btn-light btn-lg me-3">
                          Call Now: (123) 456-7890
                        </a>
                        <a href="/contact" className="btn btn-outline-light btn-lg">
                          Free Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__services">
                    <h3 className="sidebar__title">Related Services</h3>
                    <ul className="sidebar__services-list">
                      <li><Link href="/demerit-points">Demerit Points</Link></li>
                      <li><Link href="/stunt-driving">Stunt Driving</Link></li>
                      <li><Link href="/speeding-tickets">Speeding Tickets</Link></li>
                      <li><Link href="/red-light-tickets">Red Light Tickets</Link></li>
                      <li><Link href="/cell-phone-tickets">Cell Phone Tickets</Link></li>
                    </ul>
                  </div>

                  <div className="sidebar__single sidebar__contact">
                    <div className="sidebar__contact-bg" style={{backgroundImage: 'url(assets/images/resources/sidebar-contact-bg.jpg)'}}></div>
                    <div className="sidebar__contact-content">
                      <h3 className="sidebar__contact-title">Urgent Help Available</h3>
                      <p className="sidebar__contact-text">Get immediate assistance with your suspended license</p>
                      <div className="sidebar__contact-btn">
                        <Link href="/contact" className="thm-btn">Contact Us</Link>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar__single sidebar__info">
                    <h3 className="sidebar__title">Important Information</h3>
                    <ul className="sidebar__info-list">
                      <li><strong>Appeal Deadlines:</strong> Usually 15-30 days</li>
                      <li><strong>Driving While Suspended:</strong> $1,000-$5,000 fine</li>
                      <li><strong>Vehicle Impoundment:</strong> 45-90 days</li>
                      <li><strong>Additional Suspension:</strong> 6-12 months</li>
                      <li><strong>Reinstatement Fees:</strong> Varies by suspension type</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="cta-one__inner">
                  <div className="cta-one__bg" style={{backgroundImage: 'url(assets/images/resources/cta-one-bg.jpg)'}}></div>
                  <div className="cta-one__content">
                    <h3 className="cta-one__title">Get Your License Back</h3>
                    <p className="cta-one__text">Don't let a suspended license control your life. Get expert help to restore your driving privileges.</p>
                  </div>
                  <div className="cta-one__btn">
                    <Link href="/contact" className="thm-btn cta-one__btn-1">Get Help Now</Link>
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