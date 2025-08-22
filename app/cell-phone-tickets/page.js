import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Cell Phone Tickets Ontario | Distracted Driving Defense | Rathod Law',
  description: 'Expert defense for cell phone and distracted driving tickets in Ontario. Fight fines, demerit points, and license suspension. Free consultation.',
  keywords: 'cell phone tickets Ontario, distracted driving, hands-free driving, traffic violation defense, demerit points',
};

export default function CellPhoneTickets() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Cell Phone Tickets">
      <div>


        {/* Main Content */}
        <section className="about-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="about-page__content">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Distracted Driving Defense</span>
                    <h2 className="section-title__title">Fighting Cell Phone and Distracted Driving Tickets in Ontario</h2>
                  </div>
                  
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <p className="card-text">
                        Ontario's distracted driving laws are among the strictest in Canada. Cell phone tickets carry severe penalties 
                        including hefty fines, demerit points, and potential license suspension. Our experienced paralegals can help 
                        you fight these charges and protect your driving record.
                      </p>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Understanding Ontario's Distracted Driving Laws</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Under Ontario's Highway Traffic Act, it is illegal to use hand-held communication devices while driving. 
                        This includes cell phones, smartphones, tablets, and other portable electronic devices.
                      </p>
                      
                      <h5 className="mt-3 mb-2">What's Prohibited:</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Talking on a hand-held cell phone</li>
                        <li className="list-group-item">Texting or emailing while driving</li>
                        <li className="list-group-item">Using hand-held GPS devices</li>
                        <li className="list-group-item">Programming GPS while vehicle is in motion</li>
                        <li className="list-group-item">Watching videos or playing games</li>
                        <li className="list-group-item">Taking photos or selfies while driving</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Penalties for Cell Phone Tickets</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">The penalties for distracted driving in Ontario are severe and increase with each offense:</p>
                      
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <h6 className="text-primary">First Offense:</h6>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">Fine: $615 to $1,000</li>
                            <li className="list-group-item">3 demerit points</li>
                            <li className="list-group-item">3-day license suspension</li>
                          </ul>
                        </div>
                        <div className="col-md-4 mb-3">
                          <h6 className="text-warning">Second Offense (within 5 years):</h6>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">Fine: $615 to $2,000</li>
                            <li className="list-group-item">6 demerit points</li>
                            <li className="list-group-item">7-day license suspension</li>
                          </ul>
                        </div>
                        <div className="col-md-4 mb-3">
                          <h6 className="text-danger">Third and Subsequent Offenses:</h6>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">Fine: $615 to $3,000</li>
                            <li className="list-group-item">6 demerit points</li>
                            <li className="list-group-item">30-day license suspension</li>
                            <li className="list-group-item">Possible vehicle impoundment</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Legal Exceptions and Hands-Free Use</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">There are limited exceptions to Ontario's distracted driving laws:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Hands-Free Devices:</strong> Bluetooth headsets and built-in car systems</li>
                        <li className="list-group-item"><strong>Emergency Calls:</strong> Calling 911 or emergency services</li>
                        <li className="list-group-item"><strong>Parked Vehicles:</strong> When legally parked off the roadway</li>
                        <li className="list-group-item"><strong>Two-Way Radios:</strong> For commercial drivers with proper licensing</li>
                        <li className="list-group-item"><strong>Voice Commands:</strong> When device can be activated without touching</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Common Defenses for Cell Phone Tickets</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our experienced paralegals use various defense strategies:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Hands-Free Use:</strong> Proving the device was used in a legal manner</li>
                        <li className="list-group-item"><strong>Emergency Exception:</strong> Demonstrating emergency circumstances</li>
                        <li className="list-group-item"><strong>Officer Error:</strong> Challenging the officer's observations</li>
                        <li className="list-group-item"><strong>Technical Defects:</strong> Identifying errors in the ticket or procedure</li>
                        <li className="list-group-item"><strong>Mistaken Identity:</strong> Proving you weren't the driver</li>
                        <li className="list-group-item"><strong>Charter Rights:</strong> Violations during the traffic stop</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-dark">
                      <h3 className="card-title mb-0">Impact on Insurance and Employment</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">A distracted driving conviction can have serious long-term consequences:</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Insurance Increases:</strong> Premiums can increase by 25-50% for 3+ years</li>
                        <li className="list-group-item"><strong>Employment Issues:</strong> May affect jobs requiring clean driving record</li>
                        <li className="list-group-item"><strong>Commercial Licenses:</strong> Can impact professional driving careers</li>
                        <li className="list-group-item"><strong>Repeat Offenses:</strong> Escalating penalties and longer suspensions</li>
                        <li className="list-group-item"><strong>Criminal Record:</strong> Multiple offenses may lead to criminal charges</li>
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
                        <li className="list-group-item">Thoroughly review the circumstances of your ticket</li>
                        <li className="list-group-item">Examine officer notes and evidence for inconsistencies</li>
                        <li className="list-group-item">Challenge the officer's ability to observe the alleged violation</li>
                        <li className="list-group-item">Investigate whether hands-free exceptions apply</li>
                        <li className="list-group-item">Negotiate with prosecutors for reduced charges</li>
                        <li className="list-group-item">Represent you in court to fight for dismissal</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title mb-0">Prevention and Safe Driving Tips</h3>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Use hands-free devices for all phone calls</li>
                        <li className="list-group-item">Set up GPS before starting your journey</li>
                        <li className="list-group-item">Pull over safely if you must use your phone</li>
                        <li className="list-group-item">Use voice commands when available</li>
                        <li className="list-group-item">Keep your phone out of reach while driving</li>
                        <li className="list-group-item">Educate passengers about distracted driving laws</li>
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
                      <li><Link href="/stunt-driving">Stunt Driving</Link></li>
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
                      <p className="sidebar__contact-text">Get expert advice on your distracted driving case</p>
                      <div className="sidebar__contact-btn">
                        <Link href="/contact" className="thm-btn">Contact Us</Link>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar__single sidebar__info">
                    <h3 className="sidebar__title">Important Notes</h3>
                    <ul className="sidebar__info-list">
                      <li><strong>Immediate Suspension:</strong> License suspended at roadside</li>
                      <li><strong>Court Appearance:</strong> Required for all distracted driving charges</li>
                      <li><strong>Time Limit:</strong> 15 days to request trial</li>
                      <li><strong>Professional Help:</strong> Highly recommended due to severity</li>
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
                  <div className="card-body text-center p-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
                    <div className="cta-one__title-box">
                      <h3 className="card-title text-white mb-3">Don't Let a Cell Phone Ticket Affect Your Future</h3>
                      <p className="card-text text-white mb-4">Contact our experienced paralegals today for a free consultation about your distracted driving charge.</p>
                    </div>
                    <div className="cta-one__btn-box">
                      <Link href="/contact" className="btn btn-light btn-lg px-5 py-3 font-weight-bold">Get Free Consultation</Link>
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