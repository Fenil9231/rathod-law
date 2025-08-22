'use client';
import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function SpeedingTickets() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Speeding Tickets">
      <div>
      

        {/* Main Content */}
        <section className="about-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="about-page__content" style={{paddingTop: '20px'}}>
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Traffic Violation Defense</span>
                    <h2 className="section-title__title">Expert Speeding Ticket Representation in Ontario</h2>
                  </div>
                  
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <p className="card-text">
                        Receiving a speeding ticket in Ontario can result in significant fines, demerit points, and potential license suspension. 
                        Our experienced paralegals provide expert representation to help you fight speeding tickets and protect your driving record.
                      </p>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Understanding Speeding Tickets in Ontario</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Speeding violations in Ontario are governed by the Highway Traffic Act and can result in serious consequences 
                        depending on how much you exceeded the speed limit. The penalties increase significantly with higher speeds.
                      </p>
                      
                      <h5 className="mt-3 mb-2">Speeding Ticket Penalties:</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>1-19 km/h over:</strong> $40 fine + $5 court costs, 0 demerit points</li>
                        <li className="list-group-item"><strong>20-29 km/h over:</strong> $95 fine + $5 court costs, 3 demerit points</li>
                        <li className="list-group-item"><strong>30-49 km/h over:</strong> $220 fine + $5 court costs, 4 demerit points</li>
                        <li className="list-group-item"><strong>50+ km/h over:</strong> $400+ fine, 6 demerit points, possible license suspension</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Consequences of Speeding Convictions</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">A speeding conviction can have lasting effects beyond the immediate fine:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Demerit Points:</strong> Accumulation can lead to license suspension</li>
                        <li className="list-group-item"><strong>Insurance Increases:</strong> Significant premium increases for 3+ years</li>
                        <li className="list-group-item"><strong>License Suspension:</strong> Possible for excessive speeding or point accumulation</li>
                        <li className="list-group-item"><strong>Employment Impact:</strong> May affect jobs requiring clean driving record</li>
                        <li className="list-group-item"><strong>Criminal Charges:</strong> Speeds 50+ km/h over may result in stunt driving charges</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">How We Can Help</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our experienced paralegals will:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Review your ticket for technical defects and procedural errors</li>
                        <li className="list-group-item">Examine the evidence and circumstances of your stop</li>
                        <li className="list-group-item">Challenge radar/laser calibration and officer training</li>
                        <li className="list-group-item">Negotiate with prosecutors for reduced charges</li>
                        <li className="list-group-item">Represent you in court to fight for dismissal or reduction</li>
                        <li className="list-group-item">Provide expert testimony on speed measurement devices</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Common Defenses for Speeding Tickets</h3>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Technical Defects:</strong> Errors in ticket information or court procedures</li>
                        <li className="list-group-item"><strong>Equipment Issues:</strong> Improper calibration or maintenance of speed detection devices</li>
                        <li className="list-group-item"><strong>Officer Error:</strong> Misidentification of vehicle or improper speed measurement</li>
                        <li className="list-group-item"><strong>Emergency Situations:</strong> Necessity to exceed speed limit for safety reasons</li>
                        <li className="list-group-item"><strong>Charter Rights:</strong> Violations of constitutional rights during the stop</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#cb9930'}}>
                      <h3 className="card-title mb-0">Why Choose Professional Representation?</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Fighting a speeding ticket without legal representation can be challenging. Our paralegals have extensive 
                        experience in traffic court and understand the technical aspects of speed enforcement. We know how to:
                      </p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Identify weaknesses in the prosecution's case</li>
                        <li className="list-group-item">Cross-examine police officers effectively</li>
                        <li className="list-group-item">Present technical evidence about speed measurement</li>
                        <li className="list-group-item">Negotiate favorable plea agreements</li>
                        <li className="list-group-item">Protect your driving record and insurance rates</li>
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
                      <li><Link href="/stunt-driving">Stunt Driving</Link></li>
                      <li><Link href="/cell-phone-tickets">Cell Phone Tickets</Link></li>
                      <li><Link href="/red-light-tickets">Red Light Tickets</Link></li>
                      <li><Link href="/seat-belt-tickets">Seat Belt Tickets</Link></li>
                      <li><Link href="/suspended-license">Suspended License</Link></li>
                      <li><Link href="/demerit-points">Demerit Points</Link></li>
                    </ul>
                  </div>

                  <div className="sidebar__single sidebar__contact">
                    <div className="sidebar__contact-bg" style={{backgroundImage: 'url(assets/images/resources/sidebar-contact-bg.jpg)'}}></div>
                    <div className="sidebar__contact-content">
                      <h3 className="sidebar__contact-title">Free Consultation</h3>
                      <p className="sidebar__contact-text">Get expert advice on your speeding ticket case</p>
                      <div className="sidebar__contact-btn">
                        <Link href="/contact" className="thm-btn">Contact Us</Link>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar__single sidebar__info">
                    <h3 className="sidebar__title">Quick Facts</h3>
                    <ul className="sidebar__info-list">
                      <li><strong>Court Appearance:</strong> Not required with representation</li>
                      <li><strong>Success Rate:</strong> High dismissal and reduction rates</li>
                      <li><strong>Timeline:</strong> Cases typically resolved in 2-6 months</li>
                      <li><strong>Cost:</strong> Often less than insurance increases</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-5" style={{backgroundColor: '#f8f9fa'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="text-center mb-5">
                  <h2 className="display-5 fw-bold" style={{color: '#1a365d'}}>Frequently Asked Questions</h2>
                  <p className="lead text-muted">Get answers to common questions about speeding tickets in Ontario</p>
                </div>
                <div className="accordion" id="speedingTicketFAQ">
                  <div className="accordion-item mb-3" style={{border: 'none', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" style={{backgroundColor: 'white', color: '#333', borderRadius: '10px', fontWeight: 'bold'}}>
                        How much will a speeding ticket cost me?
                      </button>
                    </h3>
                    <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#speedingTicketFAQ">
                      <div className="accordion-body">
                        <p><strong>Speeding ticket fines in Ontario vary significantly based on how much you exceeded the speed limit:</strong></p>
                        <ul>
                          <li><strong>1-19 km/h over:</strong> $40-$95 fine</li>
                          <li><strong>20-29 km/h over:</strong> $95-$145 fine</li>
                          <li><strong>30-49 km/h over:</strong> $145-$295 fine</li>
                          <li><strong>50+ km/h over:</strong> $295-$10,000 fine (stunt driving charges)</li>
                        </ul>
                        <p><strong>Hidden Costs:</strong> Insurance premiums can increase by 15-25% for 3-6 years, potentially costing $3,000-$8,000 more than the original fine. Additional costs include court fees, time off work, and potential license suspension consequences.</p>
                        <p><em>Professional representation can often reduce or eliminate these long-term financial impacts.</em></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item mb-3" style={{border: 'none', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" style={{backgroundColor: 'white', color: '#333', borderRadius: '10px', fontWeight: 'bold'}}>
                        Should I fight my speeding ticket or just pay it?
                      </button>
                    </h3>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#speedingTicketFAQ">
                      <div className="accordion-body">
                        <p><strong>Fighting your speeding ticket is almost always worth it for these reasons:</strong></p>
                        <ul>
                          <li><strong>Complete Dismissal:</strong> Technical errors, officer absence, or procedural mistakes can lead to full dismissal</li>
                          <li><strong>Charge Reduction:</strong> Speeding charges can often be reduced to lesser offenses with no demerit points</li>
                          <li><strong>Insurance Protection:</strong> Avoiding conviction protects your insurance rates from increases</li>
                          <li><strong>License Protection:</strong> Prevents accumulation of demerit points that could lead to suspension</li>
                        </ul>
                        <p><strong>Success Rate:</strong> Professional representation achieves favorable outcomes in 70-85% of cases, compared to 15-25% for self-representation.</p>
                        <p><em>Even a reduced charge can save you thousands in insurance costs over time.</em></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item mb-3" style={{border: 'none', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" style={{backgroundColor: 'white', color: '#333', borderRadius: '10px', fontWeight: 'bold'}}>
                        How many demerit points will I get for speeding?
                      </button>
                    </h3>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#speedingTicketFAQ">
                      <div className="accordion-body">
                        <p><strong>Demerit points for speeding in Ontario are assigned as follows:</strong></p>
                        <ul>
                          <li><strong>1-15 km/h over:</strong> 0 demerit points (fine only)</li>
                          <li><strong>16-29 km/h over:</strong> 3 demerit points</li>
                          <li><strong>30-49 km/h over:</strong> 4 demerit points</li>
                          <li><strong>50+ km/h over:</strong> 6 demerit points + stunt driving charges</li>
                        </ul>
                        <p><strong>License Suspension Thresholds:</strong></p>
                        <ul>
                          <li><strong>New drivers (G1, G2, M1, M2):</strong> 6+ points = 30-day suspension</li>
                          <li><strong>Experienced drivers:</strong> 9+ points = 30-day suspension, 15+ points = 30-day suspension</li>
                        </ul>
                        <p><em>Points remain on your record for 2 years from the offense date, not the conviction date.</em></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item mb-3" style={{border: 'none', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" style={{backgroundColor: 'white', color: '#333', borderRadius: '10px', fontWeight: 'bold'}}>
                        Do I need to appear in court for my speeding ticket?
                      </button>
                    </h3>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#speedingTicketFAQ">
                      <div className="accordion-body">
                        <p><strong>Court appearance requirements depend on your representation choice:</strong></p>
                        <ul>
                          <li><strong>With Professional Representation:</strong> You typically don't need to appear - your representative handles everything</li>
                          <li><strong>Self-Representation:</strong> You must appear for all scheduled court dates or face automatic conviction</li>
                        </ul>
                        <p><strong>Benefits of Professional Representation:</strong></p>
                        <ul>
                          <li>No time off work required</li>
                          <li>Expert knowledge of court procedures and legal defenses</li>
                          <li>Ability to negotiate with prosecutors</li>
                          <li>Higher success rates due to experience</li>
                        </ul>
                        <p><strong>Court Process:</strong> Initial appearance, disclosure review, trial preparation, and trial (if necessary). Each step requires specific legal knowledge and procedural expertise.</p>
                        <p><em>Missing a court date results in automatic conviction and additional penalties.</em></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item mb-3" style={{border: 'none', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" style={{backgroundColor: 'white', color: '#333', borderRadius: '10px', fontWeight: 'bold'}}>
                        What are the chances of getting my speeding ticket dismissed?
                      </button>
                    </h3>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#speedingTicketFAQ">
                      <div className="accordion-body">
                        <p><strong>Success rates for speeding ticket defense vary by case complexity and representation quality:</strong></p>
                        <ul>
                          <li><strong>Professional Representation:</strong> 70-85% favorable outcome rate</li>
                          <li><strong>Self-Representation:</strong> 15-25% favorable outcome rate</li>
                        </ul>
                        <p><strong>Common Successful Defense Strategies:</strong></p>
                        <ul>
                          <li><strong>Technical Defenses:</strong> Errors in ticket details, improper service, missing officer signatures</li>
                          <li><strong>Equipment Challenges:</strong> Radar/laser calibration issues, maintenance records, operator certification</li>
                          <li><strong>Procedural Defenses:</strong> Charter violations, disclosure issues, unreasonable delays</li>
                          <li><strong>Evidence Challenges:</strong> Officer's notes, weather conditions, traffic circumstances</li>
                        </ul>
                        <p><strong>Factors Affecting Success:</strong> Ticket accuracy, officer experience, available evidence, court jurisdiction, and timing of defense preparation.</p>
                        <p><em>Even partial success (charge reduction) can save thousands in insurance costs.</em></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item mb-3" style={{border: 'none', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" style={{backgroundColor: 'white', color: '#333', borderRadius: '10px', fontWeight: 'bold'}}>
                        How long do I have to fight my speeding ticket?
                      </button>
                    </h3>
                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#speedingTicketFAQ">
                      <div className="accordion-body">
                        <p><strong>Critical Deadlines for Fighting Your Speeding Ticket:</strong></p>
                        <ul>
                          <li><strong>Option 1 (Early Resolution):</strong> 15 days from offense date to request meeting with prosecutor</li>
                          <li><strong>Option 2 (Trial):</strong> 15 days from offense date to request trial</li>
                          <li><strong>Option 3 (Guilty Plea):</strong> 15 days to pay fine (not recommended without exploring options)</li>
                        </ul>
                        <p><strong>What Happens After Missing the Deadline:</strong></p>
                        <ul>
                          <li>Automatic conviction and fine payment required</li>
                          <li>Full demerit points applied to your license</li>
                          <li>Insurance companies notified of conviction</li>
                          <li>No opportunity to reduce charges or penalties</li>
                        </ul>
                        <p><strong>Immediate Action Required:</strong> Contact professional representation within 48 hours of receiving your ticket. Early preparation allows for thorough evidence review, disclosure requests, and strategic planning.</p>
                        <p><em>Time is critical - don't let valuable defense opportunities slip away.</em></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-5" style={{
          background: '#1a365d',
          backdropFilter: 'blur(10px)',
          position: 'relative'
        }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="card shadow-lg" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px'
                }}>
                  <div className="card-body text-center p-5">
                    <h3 className="card-title display-5 mb-3" style={{color: '#d4af37'}}>Don't Let a Speeding Ticket Affect Your Future</h3>
                    <p className="card-text lead mb-4" style={{color: 'white'}}>Contact us today for a free consultation and let our experienced team fight your speeding ticket.</p>
                    <Link href="/contact" className="btn btn-lg px-5 py-3 flash-btn" style={{
                      background: 'linear-gradient(135deg, #d4af37, #b8941f)',
                      border: 'none',
                      color: 'white',
                      borderRadius: '50px',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                    }}>
                      <i className="fas fa-phone me-2"></i>Get Free Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes flash {
              0%, 50%, 100% {
                opacity: 1;
                box-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
              }
              25%, 75% {
                opacity: 0.8;
                box-shadow: 0 0 30px rgba(212, 175, 55, 0.9);
              }
            }
            .flash-btn {
              animation: flash 3s infinite;
            }
            .flash-btn:hover {
              background: linear-gradient(135deg, #b8941f, #9d7e1a) !important;
              transform: translateY(-2px);
              transition: all 0.3s ease;
            }
          `}</style>
        </section>

        {/* Footer-like Divider Section */}
        <section style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          background: '#1a365d',
        }}>
        </section>
      </div>
    </Layout>
  );
}