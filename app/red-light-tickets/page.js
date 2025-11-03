import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Red Light Tickets Ontario | Red Light Violation Defense | Rathod Law',
  description: 'Expert defense for red light tickets in Ontario. Fight fines, demerit points, and protect your driving record. Free consultation available.',
  keywords: 'red light tickets Ontario, red light violations, traffic violation defense, demerit points, Highway Traffic Act',
};

export default function RedLightTickets() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Red Light Tickets">
      <div>
        

        {/* Main Content */}
        <section className="about-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="about-page__content">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Traffic Violation Defense</span>
                    <h2 className="section-title__title">Expert Red Light Ticket Defense in Ontario</h2>
                  </div>
                  
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <p className="card-text">
                        Red light violations in Ontario carry significant penalties including substantial fines, demerit points, 
                        and potential insurance increases. Our experienced paralegals can help you fight red light tickets and 
                        protect your driving record from these serious consequences.
                      </p>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Understanding Red Light Violations</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Under the Highway Traffic Act, drivers must come to a complete stop before the stop line when 
                        facing a red traffic signal. Running a red light is considered a serious traffic violation 
                        with significant safety implications and legal consequences.
                      </p>
                      
                      <h5 className="mt-3 mb-2">Types of Red Light Violations:</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Proceeding Before Green:</strong> Entering intersection before light turns green</li>
                        <li className="list-group-item"><strong>Failing to Stop:</strong> Not stopping at red light before stop line</li>
                        <li className="list-group-item"><strong>Red Light Camera:</strong> Automated enforcement violations</li>
                        <li className="list-group-item"><strong>Right Turn on Red:</strong> Illegal right turns at red lights where prohibited</li>
                        <li className="list-group-item"><strong>Amber Light Violations:</strong> Entering intersection on amber when could safely stop</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Penalties for Red Light Violations</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Red light tickets in Ontario carry severe penalties:</p>
                      
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <h6 className="text-primary">Standard Red Light Violation:</h6>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">Fine: $325 + $5 court costs</li>
                            <li className="list-group-item">Demerit Points: 3 points</li>
                            <li className="list-group-item">Insurance Impact: Significant premium increases</li>
                            <li className="list-group-item">Court Appearance: May be required</li>
                          </ul>
                        </div>
                        <div className="col-md-6 mb-3">
                          <h6 className="text-warning">Red Light Camera Tickets:</h6>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">Fine: $325 (no demerit points for owner)</li>
                            <li className="list-group-item">Vehicle Owner Responsibility: Regardless of who was driving</li>
                            <li className="list-group-item">Photo Evidence: Automated camera system evidence</li>
                            <li className="list-group-item">Administrative Penalty: Processed differently than regular tickets</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Red Light Camera System</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Ontario uses automated red light camera enforcement at many intersections:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Detection Technology:</strong> Sensors detect vehicles entering on red</li>
                        <li className="list-group-item"><strong>Photo Evidence:</strong> Multiple photos showing violation sequence</li>
                        <li className="list-group-item"><strong>Video Recording:</strong> Some systems include video evidence</li>
                        <li className="list-group-item"><strong>Owner Liability:</strong> Vehicle owner receives ticket regardless of driver</li>
                        <li className="list-group-item"><strong>Warning Signs:</strong> Posted signs indicate camera enforcement</li>
                        <li className="list-group-item"><strong>Review Process:</strong> Human review of all automated violations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Common Defenses for Red Light Tickets</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our experienced paralegals use various defense strategies:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Amber Light Defense:</strong> Proving light was amber when entered intersection</li>
                        <li className="list-group-item"><strong>Emergency Situation:</strong> Medical emergency or avoiding accident</li>
                        <li className="list-group-item"><strong>Officer Error:</strong> Challenging officer's observations and positioning</li>
                        <li className="list-group-item"><strong>Camera Malfunction:</strong> Technical issues with red light camera system</li>
                        <li className="list-group-item"><strong>Identity Issues:</strong> Challenging driver identification</li>
                        <li className="list-group-item"><strong>Intersection Design:</strong> Poor visibility or confusing signals</li>
                        <li className="list-group-item"><strong>Charter Rights:</strong> Violations during traffic stop or investigation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-dark">
                      <h3 className="card-title mb-0">Right Turn on Red Rules</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Ontario allows right turns on red with specific conditions:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Complete Stop Required:</strong> Must stop before stop line or crosswalk</li>
                        <li className="list-group-item"><strong>Yield to Traffic:</strong> Must yield to all pedestrians and vehicles</li>
                        <li className="list-group-item"><strong>Safe to Proceed:</strong> Only when safe and legal to do so</li>
                        <li className="list-group-item"><strong>Prohibited Signs:</strong> No right turn on red where posted</li>
                        <li className="list-group-item"><strong>School Zones:</strong> Special restrictions may apply</li>
                        <li className="list-group-item"><strong>Pedestrian Crossings:</strong> Must yield to all pedestrians</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Impact on Insurance and Driving Record</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">A red light conviction can have serious long-term consequences:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Demerit Points:</strong> 3 points added to driving record</li>
                        <li className="list-group-item"><strong>Insurance Increases:</strong> Significant premium increases for 3+ years</li>
                        <li className="list-group-item"><strong>Employment Impact:</strong> May affect jobs requiring clean driving record</li>
                        <li className="list-group-item"><strong>License Suspension Risk:</strong> Contributes to point accumulation</li>
                        <li className="list-group-item"><strong>Serious Violation:</strong> Considered major traffic offense</li>
                        <li className="list-group-item"><strong>Repeat Offenses:</strong> Enhanced penalties for multiple violations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Safety Considerations</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Red light violations pose serious safety risks:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Intersection Accidents:</strong> High risk of side-impact collisions</li>
                        <li className="list-group-item"><strong>Pedestrian Safety:</strong> Serious risk to pedestrians and cyclists</li>
                        <li className="list-group-item"><strong>Traffic Flow:</strong> Disrupts orderly traffic movement</li>
                        <li className="list-group-item"><strong>Emergency Vehicles:</strong> Can interfere with emergency response</li>
                        <li className="list-group-item"><strong>Public Safety:</strong> Enforcement protects all road users</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Court Process for Red Light Tickets</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Understanding the legal process is important:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Option to Fight:</strong> Can request trial within 15 days</li>
                        <li className="list-group-item"><strong>Early Resolution:</strong> Meeting with prosecutor before trial</li>
                        <li className="list-group-item"><strong>Trial Process:</strong> Full court hearing with evidence presentation</li>
                        <li className="list-group-item"><strong>Burden of Proof:</strong> Crown must prove violation beyond reasonable doubt</li>
                        <li className="list-group-item"><strong>Legal Representation:</strong> Right to paralegal or lawyer representation</li>
                        <li className="list-group-item"><strong>Appeal Options:</strong> Can appeal conviction to higher court</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">How We Can Help</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our experienced team will:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Review all evidence including photos and officer notes</li>
                        <li className="list-group-item">Examine red light camera system for technical issues</li>
                        <li className="list-group-item">Investigate intersection design and signal timing</li>
                        <li className="list-group-item">Challenge the accuracy of officer observations</li>
                        <li className="list-group-item">Negotiate with prosecutors for reduced charges</li>
                        <li className="list-group-item">Represent you in court to fight for dismissal</li>
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
                      <li><Link href="/speeding-tickets">Speeding Tickets</Link></li>
                      <li><Link href="/cell-phone-tickets">Cell Phone Tickets</Link></li>
                      <li><Link href="/seat-belt-tickets">Seat Belt Tickets</Link></li>
                      <li><Link href="/stunt-driving">Stunt Driving</Link></li>
                      <li><Link href="/suspended-license">Suspended License</Link></li>
                      <li><Link href="/demerit-points">Demerit Points</Link></li>
                    </ul>
                  </div>

                  <div className="sidebar__single sidebar__contact">
                    <div className="sidebar__contact-bg" style={{backgroundImage: 'url(assets/images/resources/sidebar-contact-bg.jpg)'}}></div>
                    <div className="sidebar__contact-content">
                      <h3 className="sidebar__contact-title">Free Consultation</h3>
                      <p className="sidebar__contact-text">Get expert advice on your red light ticket case</p>
                      <div className="sidebar__contact-btn">
                        <Link href="/contact" className="thm-btn">Contact Us</Link>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar__single sidebar__info">
                    <h3 className="sidebar__title">Quick Facts</h3>
                    <ul className="sidebar__info-list">
                      <li><strong>Fine Amount:</strong> $325 + court costs</li>
                      <li><strong>Demerit Points:</strong> 3 points (officer issued)</li>
                      <li><strong>Camera Tickets:</strong> No points for owner</li>
                      <li><strong>Court Option:</strong> Can request trial within 15 days</li>
                      <li><strong>Success Rate:</strong> Strong defense options available</li>
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
                <div className="card shadow-lg border-0">
                  <div className="card-header bg-primary text-white text-center py-4">
                    <h3 className="card-title mb-2">Fight Your Red Light Ticket</h3>
                    <p className="card-text mb-0">Don't let a red light violation affect your driving record. Contact us for expert legal representation.</p>
                  </div>
                  <div className="card-body text-center py-4">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="d-flex flex-column align-items-center">
                          <i className="fas fa-shield-alt fa-2x text-primary mb-2"></i>
                          <h6 className="text-primary">Expert Defense</h6>
                          <small className="text-muted">Experienced red light ticket representation</small>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="d-flex flex-column align-items-center">
                          <i className="fas fa-gavel fa-2x text-success mb-2"></i>
                          <h6 className="text-success">Court Representation</h6>
                          <small className="text-muted">Professional advocacy in traffic court</small>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="d-flex flex-column align-items-center">
                          <i className="fas fa-phone fa-2x text-info mb-2"></i>
                          <h6 className="text-info">Free Consultation</h6>
                          <small className="text-muted">No obligation case assessment</small>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact" className="btn btn-danger btn-lg mt-3 px-5">Get Free Consultation</Link>
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