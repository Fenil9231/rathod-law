import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Speeding Tickets Ontario | Traffic Violation Defense | Rathod Law',
  description: 'Expert legal representation for speeding tickets in Ontario. Defend against fines, demerit points, and license suspension. Free consultation available.',
  keywords: 'speeding tickets Ontario, traffic violation defense, demerit points, license suspension, traffic court representation',
};

export default function SpeedingTickets() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Speeding Tickets">
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
                    <h2 className="page-title__title">Speeding Tickets Defense</h2>
                    <div className="page-title__menu">
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li>Speeding Tickets</li>
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
                    <div className="card-header bg-warning text-dark">
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
                    <div className="card-header bg-success text-white">
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
                    <div className="card-header bg-info text-white">
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
                    <div className="card-header bg-secondary text-white">
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

        {/* Call to Action */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="card bg-primary text-white shadow-lg">
                  <div className="card-body text-center p-5">
                    <h3 className="card-title display-5 mb-3">Don't Let a Speeding Ticket Affect Your Future</h3>
                    <p className="card-text lead mb-4">Contact us today for a free consultation and let our experienced team fight your speeding ticket.</p>
                    <Link href="/contact" className="btn btn-light btn-lg px-5 py-3">
                      <i className="fas fa-phone me-2"></i>Get Free Consultation
                    </Link>
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