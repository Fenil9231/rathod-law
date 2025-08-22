import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Seat Belt Tickets Ontario | Seat Belt Violation Defense | Rathod Law',
  description: 'Expert defense for seat belt tickets in Ontario. Fight fines, demerit points, and protect your driving record. Free consultation available.',
  keywords: 'seat belt tickets Ontario, seat belt violations, traffic violation defense, demerit points, Highway Traffic Act',
};

export default function SeatBeltTickets() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Seat Belt Tickets">
      <div>
        

        {/* Main Content */}
        <section className="about-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="about-page__content">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Traffic Violation Defense</span>
                    <h2 className="section-title__title">Expert Seat Belt Ticket Defense in Ontario</h2>
                  </div>
                  
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <p className="card-text">
                        Seat belt violations in Ontario carry significant penalties including fines, demerit points, and potential 
                        insurance increases. Our experienced paralegals can help you fight seat belt tickets and protect your 
                        driving record from these serious consequences.
                      </p>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Ontario Seat Belt Laws</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Under the Highway Traffic Act, all drivers and passengers in Ontario must wear properly fastened seat belts. 
                        The law applies to all seating positions in the vehicle and includes specific requirements for different 
                        age groups and vehicle types.
                      </p>
                      
                      <h5 className="mt-3 mb-2">Seat Belt Requirements:</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Drivers:</strong> Must wear seat belt at all times while vehicle is in motion</li>
                        <li className="list-group-item"><strong>Front Passengers:</strong> Must wear seat belt regardless of age</li>
                        <li className="list-group-item"><strong>Back Seat (16+):</strong> Must wear seat belt in all seating positions</li>
                        <li className="list-group-item"><strong>Children (under 16):</strong> Driver responsible for ensuring compliance</li>
                        <li className="list-group-item"><strong>Proper Use:</strong> Belt must be worn across chest and lap, not under arm</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Penalties for Seat Belt Violations</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Seat belt tickets in Ontario carry the following penalties:</p>
                      
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <h6 className="text-primary">Driver Not Wearing Seat Belt:</h6>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">Fine: $240 + $5 court costs</li>
                            <li className="list-group-item">Demerit Points: 2 points</li>
                            <li className="list-group-item">Insurance Impact: Potential premium increases</li>
                          </ul>
                        </div>
                        <div className="col-md-6 mb-3">
                          <h6 className="text-warning">Passenger Not Wearing Seat Belt:</h6>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Passenger 16+:</strong> $240 fine (passenger responsible)</li>
                            <li className="list-group-item"><strong>Passenger under 16:</strong> $240 fine + 2 demerit points (driver responsible)</li>
                            <li className="list-group-item"><strong>Multiple violations:</strong> Separate fines for each unbelted passenger</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Medical and Legal Exemptions</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Limited exemptions exist for seat belt requirements:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Medical Exemptions:</strong> Doctor's certificate for medical conditions</li>
                        <li className="list-group-item"><strong>Delivery Drivers:</strong> When making frequent stops under specific conditions</li>
                        <li className="list-group-item"><strong>Emergency Vehicles:</strong> Police, fire, ambulance in emergency situations</li>
                        <li className="list-group-item"><strong>Taxi Drivers:</strong> Limited exemptions in certain circumstances</li>
                        <li className="list-group-item"><strong>Backing Up:</strong> When reversing the vehicle</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Common Defenses for Seat Belt Tickets</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our experienced paralegals use various defense strategies:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Medical Exemption:</strong> Valid medical certificate for exemption</li>
                        <li className="list-group-item"><strong>Officer Error:</strong> Challenging the officer's observations</li>
                        <li className="list-group-item"><strong>Seat Belt Malfunction:</strong> Mechanical failure of seat belt system</li>
                        <li className="list-group-item"><strong>Proper Use:</strong> Proving seat belt was properly worn</li>
                        <li className="list-group-item"><strong>Technical Defects:</strong> Errors in ticket information or procedure</li>
                        <li className="list-group-item"><strong>Charter Rights:</strong> Violations during the traffic stop</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-dark">
                      <h3 className="card-title mb-0">Impact on Insurance and Driving Record</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">A seat belt conviction can have lasting consequences:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Demerit Points:</strong> 2 points added to driving record</li>
                        <li className="list-group-item"><strong>Insurance Increases:</strong> Potential premium increases for 3+ years</li>
                        <li className="list-group-item"><strong>Employment Impact:</strong> May affect jobs requiring clean driving record</li>
                        <li className="list-group-item"><strong>Point Accumulation:</strong> Contributes to license suspension risk</li>
                        <li className="list-group-item"><strong>Repeat Offenses:</strong> Pattern of violations may lead to increased scrutiny</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Child Car Seat and Booster Seat Requirements</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Ontario has specific requirements for children in vehicles:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Under 1 year:</strong> Rear-facing car seat</li>
                        <li className="list-group-item"><strong>1-4 years (under 40 lbs):</strong> Forward-facing car seat with harness</li>
                        <li className="list-group-item"><strong>4-8 years (40-80 lbs):</strong> Booster seat with seat belt</li>
                        <li className="list-group-item"><strong>8+ years or 80+ lbs:</strong> Seat belt (if properly fitted)</li>
                        <li className="list-group-item"><strong>Under 13:</strong> Should sit in back seat when possible</li>
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
                        <li className="list-group-item">Review the circumstances of your seat belt ticket</li>
                        <li className="list-group-item">Examine officer notes and evidence for inconsistencies</li>
                        <li className="list-group-item">Investigate potential medical or legal exemptions</li>
                        <li className="list-group-item">Challenge the officer's ability to observe the violation</li>
                        <li className="list-group-item">Negotiate with prosecutors for reduced charges</li>
                        <li className="list-group-item">Represent you in court to fight for dismissal</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Safety and Legal Compliance</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Beyond avoiding tickets, proper seat belt use is crucial for safety:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Reduces risk of death by 45% and serious injury by 50%</li>
                        <li className="list-group-item">Protects all occupants in the vehicle</li>
                        <li className="list-group-item">Required by law in all Canadian provinces</li>
                        <li className="list-group-item">Essential for insurance coverage in case of accident</li>
                        <li className="list-group-item">Sets good example for children and passengers</li>
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
                      <li><Link href="/red-light-tickets">Red Light Tickets</Link></li>
                      <li><Link href="/stunt-driving">Stunt Driving</Link></li>
                      <li><Link href="/suspended-license">Suspended License</Link></li>
                      <li><Link href="/demerit-points">Demerit Points</Link></li>
                    </ul>
                  </div>

                  <div className="sidebar__single sidebar__contact">
                    <div className="sidebar__contact-bg" style={{backgroundImage: 'url(assets/images/resources/sidebar-contact-bg.jpg)'}}></div>
                    <div className="sidebar__contact-content">
                      <h3 className="sidebar__contact-title">Free Consultation</h3>
                      <p className="sidebar__contact-text">Get expert advice on your seat belt ticket case</p>
                      <div className="sidebar__contact-btn">
                        <Link href="/contact" className="thm-btn">Contact Us</Link>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar__single sidebar__info">
                    <h3 className="sidebar__title">Quick Facts</h3>
                    <ul className="sidebar__info-list">
                      <li><strong>Fine Amount:</strong> $240 + court costs</li>
                      <li><strong>Demerit Points:</strong> 2 points for drivers</li>
                      <li><strong>Court Option:</strong> Can request trial within 15 days</li>
                      <li><strong>Success Rate:</strong> Good defense options available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="card shadow-lg border-0">
                <div className="card-header bg-primary text-white text-center py-4">
                  <h3 className="card-title mb-2">Don't Let a Seat Belt Ticket Impact Your Future</h3>
                  <p className="card-text mb-0">Contact Rathod Law today for expert legal representation and protect your driving record.</p>
                </div>
                <div className="card-body text-center py-4">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="d-flex flex-column align-items-center">
                        <i className="fas fa-shield-alt fa-2x text-primary mb-2"></i>
                        <h6>Expert Defense</h6>
                        <small className="text-muted">Experienced paralegals fighting for you</small>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="d-flex flex-column align-items-center">
                        <i className="fas fa-gavel fa-2x text-success mb-2"></i>
                        <h6>Court Representation</h6>
                        <small className="text-muted">Professional advocacy in court</small>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="d-flex flex-column align-items-center">
                        <i className="fas fa-phone fa-2x text-info mb-2"></i>
                        <h6>Free Consultation</h6>
                        <small className="text-muted">No obligation case review</small>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/contact" className="btn btn-primary btn-lg px-5">Get Free Consultation</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}