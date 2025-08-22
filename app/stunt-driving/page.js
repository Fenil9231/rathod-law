import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Stunt Driving Tickets Ontario | Stunt Driving Defense | Rathod Law',
  description: 'Expert defense for stunt driving charges in Ontario. Fight severe penalties, license suspension, and vehicle impoundment. Free consultation available.',
  keywords: 'stunt driving Ontario, street racing, dangerous driving, license suspension, vehicle impoundment, Highway Traffic Act',
};

export default function StuntDriving() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Stunt Driving">
      <div>
       
        {/* Main Content */}
        <section className="about-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="about-page__content">
                  <div className="section-title text-left">
                    <span className="section-title__tagline" style={{color: '#d4af37', fontWeight: 'bold'}}>Serious Traffic Offense Defense</span>
                    <h2 className="section-title__title" style={{color: '#1a365d', fontWeight: 'bold'}}>Expert Stunt Driving Defense in Ontario</h2>
                  </div>
                  
                  <p className="about-page__text-1">
                    Stunt driving charges in Ontario carry the most severe penalties under the Highway Traffic Act, 
                    including immediate license suspension, vehicle impoundment, massive fines, and potential jail time. 
                    Our experienced paralegals provide aggressive defense against these life-changing charges.
                  </p>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">What Constitutes Stunt Driving in Ontario</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Under Ontario Regulation 455/07, stunt driving encompasses various dangerous driving behaviors 
                        that pose serious risks to public safety. The definition is broad and includes both speed-related 
                        and non-speed-related offenses.
                      </p>
                      
                      <h4>Speed-Related Stunt Driving:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item"><strong>Excessive Speed:</strong> 50+ km/h over limit on roads with limits under 80 km/h</div>
                        <div className="list-group-item"><strong>Highway Speeding:</strong> 40+ km/h over limit on roads with limits 80+ km/h</div>
                        <div className="list-group-item"><strong>Racing:</strong> Competing in speed contests on public roads</div>
                        <div className="list-group-item"><strong>Pursuit:</strong> Chasing another vehicle at high speed</div>
                      </div>

                      <h4>Driving Behavior Stunt Driving:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Wheelies/Donuts:</strong> Lifting wheels off ground or spinning</div>
                        <div className="list-group-item"><strong>Drifting:</strong> Intentionally losing traction while turning</div>
                        <div className="list-group-item"><strong>Cutting Off:</strong> Dangerous lane changes to interfere with traffic</div>
                        <div className="list-group-item"><strong>Tailgating:</strong> Following too closely at high speeds</div>
                        <div className="list-group-item"><strong>Weaving:</strong> Rapid lane changes without signaling</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Immediate Roadside Penalties</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Stunt driving charges result in immediate severe penalties at the roadside:</p>
                      
                      <h4>Immediate Consequences:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item"><strong>License Suspension:</strong> 30-day immediate suspension</div>
                        <div className="list-group-item"><strong>Vehicle Impoundment:</strong> 14-day vehicle seizure</div>
                        <div className="list-group-item"><strong>Towing Costs:</strong> Driver pays all towing and storage fees</div>
                        <div className="list-group-item"><strong>No Driving:</strong> Cannot drive any vehicle during suspension</div>
                      </div>

                      <h4>Additional Roadside Actions:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Court Summons:</strong> Mandatory court appearance required</div>
                        <div className="list-group-item"><strong>Criminal Investigation:</strong> May lead to criminal charges</div>
                        <div className="list-group-item"><strong>Insurance Notification:</strong> Insurance company will be notified</div>
                        <div className="list-group-item"><strong>Employment Impact:</strong> Immediate effect on driving-related jobs</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Court Penalties Upon Conviction</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">If convicted in court, stunt driving carries severe additional penalties:</p>
                      
                      <h4>First Offense:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item"><strong>Fine:</strong> $2,000 - $10,000</div>
                        <div className="list-group-item"><strong>License Suspension:</strong> 1-3 years additional suspension</div>
                        <div className="list-group-item"><strong>Demerit Points:</strong> 6 points (if license not suspended)</div>
                        <div className="list-group-item"><strong>Jail Time:</strong> Up to 6 months imprisonment</div>
                        <div className="list-group-item"><strong>Vehicle Impoundment:</strong> Up to 6 months additional</div>
                      </div>

                      <h4>Repeat Offenses (within 10 years):</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Fine:</strong> $5,000 - $20,000</div>
                        <div className="list-group-item"><strong>License Suspension:</strong> 3-10 years</div>
                        <div className="list-group-item"><strong>Jail Time:</strong> Up to 2 years imprisonment</div>
                        <div className="list-group-item"><strong>Vehicle Forfeiture:</strong> Permanent loss of vehicle possible</div>
                        <div className="list-group-item"><strong>Lifetime Consequences:</strong> Permanent criminal record</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Defense Strategies for Stunt Driving</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our experienced paralegals employ comprehensive defense strategies:</p>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Speed Measurement Challenges:</strong> Questioning radar/laser accuracy and calibration</div>
                        <div className="list-group-item"><strong>Officer Training:</strong> Challenging officer qualifications and observations</div>
                        <div className="list-group-item"><strong>Emergency Situations:</strong> Medical emergencies or avoiding accidents</div>
                        <div className="list-group-item"><strong>Speedometer Error:</strong> Vehicle speedometer inaccuracy defense</div>
                        <div className="list-group-item"><strong>Road Conditions:</strong> Weather, visibility, or road surface issues</div>
                        <div className="list-group-item"><strong>Charter Rights:</strong> Violations during traffic stop or investigation</div>
                        <div className="list-group-item"><strong>Plea Negotiations:</strong> Reducing charges to lesser offenses</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Impact on Insurance and Employment</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Stunt driving convictions have devastating long-term consequences:</p>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Insurance Cancellation:</strong> Most insurers will cancel policies</div>
                        <div className="list-group-item"><strong>High-Risk Insurance:</strong> Extremely expensive specialty coverage required</div>
                        <div className="list-group-item"><strong>Employment Loss:</strong> Jobs requiring driving will be lost</div>
                        <div className="list-group-item"><strong>Professional Licenses:</strong> May affect professional designations</div>
                        <div className="list-group-item"><strong>Travel Restrictions:</strong> Criminal record may affect border crossings</div>
                        <div className="list-group-item"><strong>Background Checks:</strong> Permanent impact on employment screening</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Street Racing and Related Charges</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Stunt driving often involves related serious charges:</p>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Street Racing:</strong> Separate offense with similar penalties</div>
                        <div className="list-group-item"><strong>Dangerous Driving:</strong> Criminal Code offense with criminal record</div>
                        <div className="list-group-item"><strong>Criminal Negligence:</strong> Most serious driving offense possible</div>
                        <div className="list-group-item"><strong>Fail to Remain:</strong> If accident occurs during stunt driving</div>
                        <div className="list-group-item"><strong>Impaired Driving:</strong> If alcohol or drugs involved</div>
                        <div className="list-group-item"><strong>Driving While Suspended:</strong> Additional charges if caught driving</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">License Reinstatement Process</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Getting your license back after stunt driving requires multiple steps:</p>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Suspension Period:</strong> Must complete full suspension period</div>
                        <div className="list-group-item"><strong>Remedial Measures:</strong> May require driver improvement courses</div>
                        <div className="list-group-item"><strong>Medical Examination:</strong> Possible requirement for fitness assessment</div>
                        <div className="list-group-item"><strong>Ignition Interlock:</strong> May be required for certain periods</div>
                        <div className="list-group-item"><strong>Reinstatement Fees:</strong> Substantial fees for license restoration</div>
                        <div className="list-group-item"><strong>Insurance Requirements:</strong> Must obtain valid insurance before reinstatement</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">How We Can Help</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our experienced team provides comprehensive defense services:</p>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item">Immediate representation for license suspension hearings</div>
                        <div className="list-group-item">Thorough investigation of all evidence and circumstances</div>
                        <div className="list-group-item">Challenge speed measurement devices and officer training</div>
                        <div className="list-group-item">Negotiate with prosecutors for reduced charges</div>
                        <div className="list-group-item">Aggressive court representation to fight for dismissal</div>
                        <div className="list-group-item">Guidance through license reinstatement process</div>
                        <div className="list-group-item">Minimize long-term consequences on your life and career</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Why Immediate Action is Critical</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Time is crucial in stunt driving cases:</p>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Evidence Preservation:</strong> Critical evidence may be lost over time</div>
                        <div className="list-group-item"><strong>Witness Statements:</strong> Witness memories fade quickly</div>
                        <div className="list-group-item"><strong>License Suspension:</strong> Appeals must be filed immediately</div>
                        <div className="list-group-item"><strong>Employment Protection:</strong> Quick action may save your job</div>
                        <div className="list-group-item"><strong>Insurance Issues:</strong> Early intervention may prevent cancellation</div>
                        <div className="list-group-item"><strong>Court Deadlines:</strong> Missing deadlines can harm your case</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__services">
                    <div className="card mb-4 shadow-sm">
                      <div className="card-header text-white" style={{backgroundColor: '#1a365d'}}>
                        <h3 className="sidebar__title mb-0">Related Services</h3>
                      </div>
                      <div className="card-body">
                        <ul className="sidebar__services-list list-unstyled">
                      <li><Link href="/speeding-tickets">Speeding Tickets</Link></li>
                      <li><Link href="/suspended-license">Suspended License</Link></li>
                      <li><Link href="/demerit-points">Demerit Points</Link></li>
                      <li><Link href="/red-light-tickets">Red Light Tickets</Link></li>
                      <li><Link href="/cell-phone-tickets">Cell Phone Tickets</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar__single sidebar__contact">
                    <div className="card mb-4 shadow-sm" style={{
                      background: 'linear-gradient(135deg, #1a365d, #2d4a6b)',
                      color: 'white'
                    }}>
                      <div className="card-body text-center">
                        <h3 className="sidebar__contact-title" style={{color: '#d4af37'}}>Emergency Consultation</h3>
                        <p className="sidebar__contact-text">Immediate help for stunt driving charges</p>
                        <div className="sidebar__contact-btn">
                          <Link href="/contact" className="btn" style={{
                            background: 'linear-gradient(135deg, #d4af37, #b8941f)',
                            border: 'none',
                            color: 'white',
                            borderRadius: '25px',
                            fontWeight: 'bold',
                            textDecoration: 'none'
                          }}>Contact Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar__single sidebar__info">
                    <div className="card mb-4 shadow-sm">
                      <div className="card-header text-white" style={{backgroundColor: '#1a365d'}}>
                        <h3 className="sidebar__title mb-0">Critical Facts</h3>
                      </div>
                      <div className="card-body">
                        <ul className="sidebar__info-list list-unstyled">
                      <li><strong>Immediate Suspension:</strong> 30 days roadside</li>
                      <li><strong>Vehicle Impounded:</strong> 14 days minimum</li>
                      <li><strong>Maximum Fine:</strong> Up to $10,000 first offense</li>
                      <li><strong>Jail Time:</strong> Up to 6 months possible</li>
                      <li><strong>License Suspension:</strong> 1-3 years additional</li>
                      <li><strong>Demerit Points:</strong> 6 points</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-5" style={{background: '#1a365d'}}>
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
                    <h3 className="card-title h2 mb-3" style={{color: '#d4af37'}}>Fight Your Stunt Driving Charge</h3>
                    <p className="card-text lead mb-4" style={{color: 'white'}}>Don't face these serious charges alone. Get immediate expert legal representation to protect your future.</p>
                    <div className="row g-3 justify-content-center">
                      <div className="col-md-4">
                        <div className="d-flex flex-column align-items-center">
                          <i className="fas fa-shield-alt fa-2x mb-2"></i>
                          <strong>Expert Defense</strong>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex flex-column align-items-center">
                          <i className="fas fa-gavel fa-2x mb-2"></i>
                          <strong>Court Representation</strong>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex flex-column align-items-center">
                          <i className="fas fa-phone fa-2x mb-2"></i>
                          <strong>Emergency Consultation</strong>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link href="/contact" className="btn btn-lg px-5" style={{
                        background: 'linear-gradient(135deg, #d4af37, #b8941f)',
                        border: 'none',
                        color: 'white',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                      }}>Get Emergency Help</Link>
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