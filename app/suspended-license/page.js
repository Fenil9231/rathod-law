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
        

        {/* Main Content */}
        <section className="about-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="about-page__content">
                  <div className="section-title text-left">
                    <span className="section-title__tagline" style={{color: '#d4af37'}}>License Suspension Defense</span>
                    <h2 className="section-title__title" style={{color: '#1a365d'}}>Expert Help for Suspended Driver's License in Ontario</h2>
                  </div>
                  
                  <p className="about-page__text-1">
                    A suspended driver's license can devastate your ability to work, care for family, and maintain 
                    your independence. Our experienced paralegals help fight license suspensions and guide you 
                    through the reinstatement process to get you back on the road legally.
                  </p>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Common Reasons for License Suspension in Ontario</h3>
                    </div>
                    <div className="card-body">
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

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Types of License Suspensions</h3>
                    </div>
                    <div className="card-body">
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

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Consequences of Driving While Suspended</h3>
                    </div>
                    <div className="card-body">
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

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">License Reinstatement Process</h3>
                    </div>
                    <div className="card-body">
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

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Appealing License Suspensions</h3>
                    </div>
                    <div className="card-body">
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

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Work and Hardship Permits</h3>
                    </div>
                    <div className="card-body">
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

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Impact on Employment and Life</h3>
                    </div>
                    <div className="card-body">
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

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Prevention and Risk Management</h3>
                    </div>
                    <div className="card-body">
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

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">How We Can Help</h3>
                    </div>
                    <div className="card-body">
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

                  <div className="card text-white shadow-lg" style={{background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.95), rgba(26, 54, 93, 0.8))', backdropFilter: 'blur(10px)'}}>
                    <div className="card-body text-center">
                      <h2 className="card-title" style={{color: '#d4af37'}}>Don't Let a License Suspension Control Your Life</h2>
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
                        <a href="tel:+1234567890" className="btn btn-lg me-3" style={{background: 'linear-gradient(135deg, #d4af37, #b8941f)', color: 'white', border: 'none', borderRadius: '25px', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'}}>
                          Call Now: (123) 456-7890
                        </a>
                        <a href="/contact" className="btn btn-lg" style={{border: '2px solid #d4af37', color: '#d4af37', backgroundColor: 'transparent', borderRadius: '25px', fontWeight: 'bold'}}>
                          Free Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__services card shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#1a365d'}}>
                      <h3 className="sidebar__title mb-0" style={{color: '#d4af37'}}>Related Services</h3>
                    </div>
                    <div className="card-body">
                      <ul className="sidebar__services-list list-unstyled">
                        <li className="mb-2"><Link href="/demerit-points" style={{color: '#1a365d', textDecoration: 'none'}}>Demerit Points</Link></li>
                        <li className="mb-2"><Link href="/stunt-driving" style={{color: '#1a365d', textDecoration: 'none'}}>Stunt Driving</Link></li>
                        <li className="mb-2"><Link href="/speeding-tickets" style={{color: '#1a365d', textDecoration: 'none'}}>Speeding Tickets</Link></li>
                        <li className="mb-2"><Link href="/red-light-tickets" style={{color: '#1a365d', textDecoration: 'none'}}>Red Light Tickets</Link></li>
                        <li className="mb-2"><Link href="/cell-phone-tickets" style={{color: '#1a365d', textDecoration: 'none'}}>Cell Phone Tickets</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="sidebar__single sidebar__contact card shadow-sm" style={{background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.95), rgba(26, 54, 93, 0.8))', color: 'white'}}>
                    <div className="sidebar__contact-bg" style={{backgroundImage: 'url(assets/images/resources/sidebar-contact-bg.jpg)', opacity: 0.3}}></div>
                    <div className="sidebar__contact-content card-body text-center">
                      <h3 className="sidebar__contact-title" style={{color: '#d4af37'}}>Urgent Help Available</h3>
                      <p className="sidebar__contact-text">Get immediate assistance with your suspended license</p>
                      <div className="sidebar__contact-btn">
                        <Link href="/contact" className="btn" style={{background: 'linear-gradient(135deg, #d4af37, #b8941f)', color: 'white', border: 'none', borderRadius: '25px', fontWeight: 'bold', padding: '10px 20px'}}>Contact Us</Link>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar__single sidebar__info card shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#1a365d'}}>
                      <h3 className="sidebar__title mb-0" style={{color: '#d4af37'}}>Important Information</h3>
                    </div>
                    <div className="card-body">
                      <ul className="sidebar__info-list list-unstyled">
                        <li className="mb-2"><strong style={{color: '#d4af37'}}>Appeal Deadlines:</strong> Usually 15-30 days</li>
                        <li className="mb-2"><strong style={{color: '#d4af37'}}>Driving While Suspended:</strong> $1,000-$5,000 fine</li>
                        <li className="mb-2"><strong style={{color: '#d4af37'}}>Vehicle Impoundment:</strong> 45-90 days</li>
                        <li className="mb-2"><strong style={{color: '#d4af37'}}>Additional Suspension:</strong> 6-12 months</li>
                        <li className="mb-2"><strong style={{color: '#d4af37'}}>Reinstatement Fees:</strong> Varies by suspension type</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-one" style={{background: '#1a365d', padding: '60px 0'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="cta-one__inner text-center" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '15px', padding: '40px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'}}>
                  <div className="cta-one__bg" style={{backgroundImage: 'url(assets/images/resources/cta-one-bg.jpg)', opacity: 0.1}}></div>
                  <div className="cta-one__content">
                    <h3 className="cta-one__title" style={{color: '#d4af37', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px'}}>Get Your License Back</h3>
                    <p className="cta-one__text" style={{color: 'white', fontSize: '1.2rem', marginBottom: '30px'}}>Don't let a suspended license control your life. Get expert help to restore your driving privileges.</p>
                  </div>
                  <div className="cta-one__btn">
                    <Link href="/contact" className="btn btn-lg" style={{background: 'linear-gradient(135deg, #d4af37, #b8941f)', color: 'white', border: 'none', borderRadius: '25px', fontWeight: 'bold', padding: '15px 40px', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'}}>Get Help Now</Link>
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