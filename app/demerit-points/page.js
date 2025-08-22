import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Demerit Points Ontario | Demerit Point System Defense | Rathod Law',
  description: 'Expert help with Ontario demerit points system. Reduce points, avoid license suspension, and protect your driving record. Free consultation available.',
  keywords: 'demerit points Ontario, driving record, license suspension, point reduction, traffic violations, Highway Traffic Act',
};

export default function DemeritPoints() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Demerit Points">
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
                    <h2 className="page-title__title">Demerit Points Defense</h2>
                    <div className="page-title__menu">
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li>Demerit Points</li>
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
                    <span className="section-title__tagline">Driving Record Protection</span>
                    <h2 className="section-title__title">Expert Help with Ontario's Demerit Point System</h2>
                  </div>
                  
                  <p className="about-page__text-1">
                    Ontario's demerit point system tracks your driving violations and can lead to license suspension 
                    if too many points accumulate. Our experienced paralegals help you understand the system, 
                    fight unjust violations, and protect your driving privileges from point accumulation.
                  </p>

                  <div className="card mb-4">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">How Ontario's Demerit Point System Works</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        The demerit point system assigns points to your driving record for various traffic violations. 
                        Points accumulate over time and can result in license suspension, insurance increases, 
                        and other serious consequences for your driving privileges.
                      </p>
                      
                      <h5 className="mt-3 mb-2">Point Accumulation Rules:</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Starting Fresh:</strong> New drivers start with zero points</li>
                        <li className="list-group-item"><strong>Point Addition:</strong> Points added upon conviction, not when charged</li>
                        <li className="list-group-item"><strong>Point Removal:</strong> Points removed 2 years from offense date</li>
                        <li className="list-group-item"><strong>Conviction Date:</strong> Points based on conviction date, not offense date</li>
                        <li className="list-group-item"><strong>Out-of-Province:</strong> Some out-of-province convictions add points</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-primary text-dark">
                      <h3 className="card-title mb-0">Demerit Point Values for Common Violations</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Different violations carry different point values:</p>
                      
                      <div className="row">
                        <div className="col-md-4">
                          <h5 className="text-success">Minor Violations (2-3 Points):</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Seat Belt Violations:</strong> 2 points</li>
                            <li className="list-group-item"><strong>Improper Turn:</strong> 2 points</li>
                            <li className="list-group-item"><strong>Following Too Closely:</strong> 4 points</li>
                            <li className="list-group-item"><strong>Improper Lane Change:</strong> 3 points</li>
                            <li className="list-group-item"><strong>Disobey Stop Sign:</strong> 3 points</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="text-warning">Moderate Violations (3-4 Points):</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Speeding 16-29 km/h over:</strong> 3 points</li>
                            <li className="list-group-item"><strong>Speeding 30-49 km/h over:</strong> 4 points</li>
                            <li className="list-group-item"><strong>Red Light Violations:</strong> 3 points</li>
                            <li className="list-group-item"><strong>Improper Passing:</strong> 3 points</li>
                            <li className="list-group-item"><strong>Drive Wrong Way:</strong> 3 points</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="text-danger">Serious Violations (6+ Points):</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Speeding 50+ km/h over:</strong> 6 points</li>
                            <li className="list-group-item"><strong>Stunt Driving:</strong> 6 points</li>
                            <li className="list-group-item"><strong>Street Racing:</strong> 6 points</li>
                            <li className="list-group-item"><strong>Fail to Remain:</strong> 7 points</li>
                            <li className="list-group-item"><strong>Driving While Suspended:</strong> 6 points</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">License Suspension Thresholds</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Different license types have different suspension thresholds:</p>
                      
                      <div className="row">
                        <div className="col-md-6">
                          <h5 className="text-primary">Full License Holders:</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>9-14 Points:</strong> Warning letter sent</li>
                            <li className="list-group-item"><strong>15+ Points:</strong> 30-day license suspension</li>
                            <li className="list-group-item"><strong>Suspension Notice:</strong> 15 days advance notice given</li>
                            <li className="list-group-item"><strong>Interview Required:</strong> Must attend MTO interview</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h5 className="text-warning">Novice Drivers (G1, G2, M1, M2):</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>6-8 Points:</strong> Warning letter sent</li>
                             <li className="list-group-item"><strong>9+ Points:</strong> 60-day license suspension</li>
                             <li className="list-group-item"><strong>Stricter Rules:</strong> Lower threshold for suspension</li>
                             <li className="list-group-item"><strong>Extended Consequences:</strong> Longer suspension periods</li>
                           </ul>
                         </div>
                       </div>
                       
                       <div className="mt-3">
                         <h5 className="text-info">Commercial License Holders:</h5>
                         <ul className="list-group list-group-flush">
                           <li className="list-group-item"><strong>Same Thresholds:</strong> 15+ points for suspension</li>
                           <li className="list-group-item"><strong>Employment Impact:</strong> May lose commercial driving privileges</li>
                           <li className="list-group-item"><strong>Employer Notification:</strong> Employers may be notified</li>
                           <li className="list-group-item"><strong>Career Consequences:</strong> Professional driving career at risk</li>
                         </ul>
                       </div>
                     </div>
                   </div>

                  <div className="card mb-4">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Consequences of Point Accumulation</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Accumulating demerit points has several serious consequences:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Insurance Increases:</strong> Higher premiums for 3+ years</li>
                        <li className="list-group-item"><strong>Employment Impact:</strong> Jobs requiring clean record affected</li>
                        <li className="list-group-item"><strong>License Suspension:</strong> Temporary loss of driving privileges</li>
                        <li className="list-group-item"><strong>MTO Interview:</strong> Required meeting with licensing officials</li>
                        <li className="list-group-item"><strong>Driving Record:</strong> Permanent record of violations</li>
                        <li className="list-group-item"><strong>Repeat Offender Status:</strong> Enhanced scrutiny for future violations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Point Removal and Record Cleaning</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Understanding how points are removed is crucial:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Two-Year Rule:</strong> Points removed 2 years from offense date</li>
                        <li className="list-group-item"><strong>Conviction vs. Offense:</strong> Removal based on offense date, not conviction</li>
                        <li className="list-group-item"><strong>Automatic Removal:</strong> No action required, points removed automatically</li>
                        <li className="list-group-item"><strong>Record Retention:</strong> Conviction stays on record for 3 years</li>
                        <li className="list-group-item"><strong>Insurance Impact:</strong> Convictions affect insurance longer than points</li>
                        <li className="list-group-item"><strong>Clean Record:</strong> Eventually achieve clean driving record</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Strategies to Avoid Point Accumulation</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Protecting your driving record requires proactive measures:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Fight Tickets:</strong> Challenge unjust or incorrect violations</li>
                        <li className="list-group-item"><strong>Legal Representation:</strong> Professional help improves success rates</li>
                        <li className="list-group-item"><strong>Plea Negotiations:</strong> Reduce charges to lesser offenses</li>
                        <li className="list-group-item"><strong>Defensive Driving:</strong> Take courses to demonstrate responsibility</li>
                        <li className="list-group-item"><strong>Regular Monitoring:</strong> Check driving record regularly</li>
                        <li className="list-group-item"><strong>Safe Driving Habits:</strong> Prevent violations through careful driving</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-primary text-dark">
                      <h3 className="card-title mb-0">MTO Interview Process</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">When you reach the warning threshold, MTO may require an interview:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Interview Notice:</strong> Sent when approaching suspension threshold</li>
                        <li className="list-group-item"><strong>Mandatory Attendance:</strong> Failure to attend results in suspension</li>
                        <li className="list-group-item"><strong>Driving Habits Review:</strong> Discussion of violations and driving patterns</li>
                        <li className="list-group-item"><strong>Remedial Measures:</strong> May require driver improvement courses</li>
                        <li className="list-group-item"><strong>Conditional License:</strong> May impose driving restrictions</li>
                        <li className="list-group-item"><strong>Suspension Decision:</strong> MTO may still suspend despite interview</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Impact on Different License Classes</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Point accumulation affects different license types differently:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Class G (Full):</strong> Standard 15-point threshold</li>
                        <li className="list-group-item"><strong>Class G1/G2:</strong> Lower 9-point threshold, longer suspensions</li>
                        <li className="list-group-item"><strong>Motorcycle (M):</strong> Same rules as corresponding car license</li>
                        <li className="list-group-item"><strong>Commercial (A, B, C, D, E, F):</strong> Career implications beyond suspension</li>
                        <li className="list-group-item"><strong>Chauffeur's License:</strong> Professional driving privileges at risk</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">How Rathod Law Can Help</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our experienced team provides comprehensive demerit point defense:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Ticket Defense:</strong> Challenge violations to prevent point accumulation</li>
                        <li className="list-group-item"><strong>Court Representation:</strong> Professional advocacy in traffic court</li>
                        <li className="list-group-item"><strong>Plea Negotiations:</strong> Secure reduced charges and penalties</li>
                        <li className="list-group-item"><strong>License Appeals:</strong> Fight suspension decisions</li>
                        <li className="list-group-item"><strong>Record Review:</strong> Analyze driving history for defense strategies</li>
                        <li className="list-group-item"><strong>Emergency Consultation:</strong> Immediate help when facing suspension</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Checking Your Driving Record</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Regular monitoring helps prevent surprises:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Online Access:</strong> Check through ServiceOntario website</li>
                        <li className="list-group-item"><strong>In-Person:</strong> Visit ServiceOntario locations</li>
                        <li className="list-group-item"><strong>By Mail:</strong> Request official driving record copy</li>
                        <li className="list-group-item"><strong>Regular Reviews:</strong> Check quarterly or after violations</li>
                        <li className="list-group-item"><strong>Error Correction:</strong> Challenge incorrect information promptly</li>
                        <li className="list-group-item"><strong>Point Tracking:</strong> Monitor accumulation and removal dates</li>
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
                      <li><Link href="/suspended-license">Suspended License</Link></li>
                      <li><Link href="/speeding-tickets">Speeding Tickets</Link></li>
                      <li><Link href="/stunt-driving">Stunt Driving</Link></li>
                      <li><Link href="/red-light-tickets">Red Light Tickets</Link></li>
                      <li><Link href="/cell-phone-tickets">Cell Phone Tickets</Link></li>
                    </ul>
                  </div>

                  <div className="sidebar__single sidebar__contact">
                    <div className="sidebar__contact-bg" style={{backgroundImage: 'url(assets/images/resources/sidebar-contact-bg.jpg)'}}></div>
                    <div className="sidebar__contact-content">
                      <h3 className="sidebar__contact-title">Protect Your Record</h3>
                      <p className="sidebar__contact-text">Get expert help with demerit point issues</p>
                      <div className="sidebar__contact-btn">
                        <Link href="/contact" className="thm-btn">Contact Us</Link>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar__single sidebar__info">
                    <h3 className="sidebar__title">Point System Facts</h3>
                    <ul className="sidebar__info-list">
                      <li><strong>Full License:</strong> 15+ points = suspension</li>
                      <li><strong>Novice License:</strong> 9+ points = suspension</li>
                      <li><strong>Point Removal:</strong> 2 years from offense date</li>
                      <li><strong>Warning Letters:</strong> Sent before suspension</li>
                      <li><strong>MTO Interview:</strong> May be required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="card border-primary">
                  <div className="card-header bg-primary text-white text-center">
                    <h3 className="card-title mb-0">Protect Your Driving Record Today</h3>
                  </div>
                  <div className="card-body text-center">
                    <p className="card-text mb-4">Don't let demerit points jeopardize your driving privileges. Contact Rathod Law for expert defense and record protection.</p>
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="d-flex flex-column align-items-center">
                          <i className="fas fa-shield-alt fa-2x text-primary mb-2"></i>
                          <h6 className="fw-bold">Expert Defense</h6>
                          <small className="text-muted">Professional point protection</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex flex-column align-items-center">
                          <i className="fas fa-gavel fa-2x text-primary mb-2"></i>
                          <h6 className="fw-bold">Court Representation</h6>
                          <small className="text-muted">Skilled legal advocacy</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex flex-column align-items-center">
                          <i className="fas fa-comments fa-2x text-primary mb-2"></i>
                          <h6 className="fw-bold">Free Consultation</h6>
                          <small className="text-muted">No obligation assessment</small>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link href="/contact" className="btn btn-primary btn-lg me-3">Free Consultation</Link>
                      <Link href="tel:+16477606651" className="btn btn-outline-primary btn-lg">Call (647) 760-6651</Link>
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