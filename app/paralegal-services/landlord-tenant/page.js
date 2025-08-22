import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Landlord Tenant Disputes Ontario | Landlord Tenant Board | Rathod Law',
  description: 'Expert paralegal representation for landlord tenant disputes at the Landlord and Tenant Board. Evictions, rent disputes, property damage claims, and tenant rights.',
  keywords: 'landlord tenant disputes, landlord tenant board, eviction proceedings, rent disputes, tenant rights, property damage claims, Ontario LTB',
};

export default function LandlordTenant() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Landlord-Tenant Disputes">
      <div>
        {/* Main Content */}
        <section className="about-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="about-page__content">
                  <div className="section-title text-left">
                    <span className="section-title__tagline" style={{color: '#d4af37', fontWeight: 'bold'}}>Landlord and Tenant Board Representation</span>
                    <h2 className="section-title__title" style={{color: '#1a365d', fontWeight: 'bold'}}>Expert Landlord-Tenant Dispute Resolution in Ontario</h2>
                  </div>
                  
                  <p className="about-page__text-1">
                    Landlord-tenant disputes can be complex and emotionally charged. Whether you're a landlord dealing with 
                    problematic tenants or a tenant facing unfair treatment, our experienced paralegals provide expert 
                    representation at the Landlord and Tenant Board (LTB) to protect your rights and interests.
                  </p>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Understanding the Landlord and Tenant Board</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        The Landlord and Tenant Board (LTB) is an independent tribunal that resolves disputes between 
                        landlords and tenants in Ontario. The LTB has the authority to make binding decisions on various 
                        residential tenancy matters under the Residential Tenancies Act.
                      </p>
                      
                      <h4 className="mt-3">LTB Jurisdiction Includes:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Eviction Applications:</strong> Non-payment of rent, breach of lease terms</div>
                        <div className="list-group-item"><strong>Rent Disputes:</strong> Rent increases, rent reductions, illegal charges</div>
                        <div className="list-group-item"><strong>Maintenance Issues:</strong> Repairs, vital services, habitability standards</div>
                        <div className="list-group-item"><strong>Harassment Claims:</strong> Landlord interference with tenant enjoyment</div>
                        <div className="list-group-item"><strong>Security Deposits:</strong> Last month's rent, damage deposits</div>
                        <div className="list-group-item"><strong>Termination Disputes:</strong> Notice validity, termination for cause</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Common Landlord Applications</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Landlords may file various applications with the LTB to address tenant issues:</p>
                      
                      <h4 className="mt-3">Eviction Applications:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item"><strong>L1 Application:</strong> Non-payment of rent eviction</div>
                        <div className="list-group-item"><strong>L2 Application:</strong> Eviction for cause (lease violations, illegal acts)</div>
                        <div className="list-group-item"><strong>L3 Application:</strong> Eviction for persistent late payment</div>
                        <div className="list-group-item"><strong>L4 Application:</strong> Agreement to terminate tenancy</div>
                      </div>

                      <h4>Other Landlord Applications:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>L5 Application:</strong> Compensation for damage or unpaid utilities</div>
                        <div className="list-group-item"><strong>L8 Application:</strong> Rent increase above guideline</div>
                        <div className="list-group-item"><strong>L9 Application:</strong> Collect rent tenant owes</div>
                        <div className="list-group-item"><strong>L10 Application:</strong> Compensation for damage after moving out</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Common Tenant Applications</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Tenants can file applications to protect their rights and seek remedies:</p>
                      
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>T1 Application:</strong> Landlord collected money illegally</div>
                        <div className="list-group-item"><strong>T2 Application:</strong> Landlord harassment, illegal entry, or interference</div>
                        <div className="list-group-item"><strong>T3 Application:</strong> Landlord gave notice in bad faith</div>
                        <div className="list-group-item"><strong>T4 Application:</strong> Landlord gave notice to end tenancy in bad faith</div>
                        <div className="list-group-item"><strong>T5 Application:</strong> Landlord gave notice to end tenancy in bad faith (demolition/conversion)</div>
                        <div className="list-group-item"><strong>T6 Application:</strong> Maintenance and repair issues</div>
                        <div className="list-group-item"><strong>T7 Application:</strong> Landlord entered illegally or harassed tenant</div>
                        <div className="list-group-item"><strong>T8 Application:</strong> Landlord failed to meet obligations</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">How We Can Help</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our experienced paralegals provide comprehensive LTB representation:</p>
                      
                      <h4 className="mt-3">For Landlords:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item">Prepare and file eviction applications</div>
                        <div className="list-group-item">Draft proper notices to end tenancy</div>
                        <div className="list-group-item">Represent you at LTB hearings</div>
                        <div className="list-group-item">Collect evidence and witness testimony</div>
                        <div className="list-group-item">Negotiate settlements with tenants</div>
                        <div className="list-group-item">Enforce LTB orders and judgments</div>
                      </div>

                      <h4>For Tenants:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item">Defend against eviction applications</div>
                        <div className="list-group-item">File applications for tenant rights violations</div>
                        <div className="list-group-item">Challenge illegal rent increases</div>
                        <div className="list-group-item">Seek compensation for landlord breaches</div>
                        <div className="list-group-item">Advocate for maintenance and repairs</div>
                        <div className="list-group-item">Protect against harassment and illegal entry</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">LTB Process and Timelines</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Understanding the LTB process is crucial for successful outcomes:</p>
                      
                      <h4 className="mt-3">Application Process:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item"><strong>Filing:</strong> Submit application with required documents and fees</div>
                        <div className="list-group-item"><strong>Service:</strong> Serve application on other party within required timeframe</div>
                        <div className="list-group-item"><strong>Response:</strong> Other party has opportunity to respond</div>
                        <div className="list-group-item"><strong>Hearing:</strong> LTB schedules hearing date</div>
                        <div className="list-group-item"><strong>Decision:</strong> Adjudicator issues binding order</div>
                      </div>

                      <h4>Important Timelines:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Notice Periods:</strong> Vary by type of notice (14-60 days typically)</div>
                        <div className="list-group-item"><strong>Application Deadlines:</strong> Must file within specific timeframes</div>
                        <div className="list-group-item"><strong>Hearing Scheduling:</strong> Usually 4-8 weeks from filing</div>
                        <div className="list-group-item"><strong>Order Enforcement:</strong> Can begin immediately after order issued</div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="card mb-4" style={{background: 'linear-gradient(135deg, #1a365d 0%, #2d5a87 100%)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)', borderRadius: '15px'}}>
                    <div className="card-body text-center p-5">
                      <h3 className="card-title mb-3" style={{color: '#d4af37', fontWeight: 'bold'}}>Protect Your Rights at the LTB</h3>
                      <p className="card-text mb-4" style={{color: 'white', fontSize: '1.1rem'}}>
                        Don't navigate the complex LTB process alone. Our experienced paralegals will fight for your rights 
                        and help you achieve the best possible outcome.
                      </p>
                      <div className="row justify-content-center">
                        <div className="col-md-4 mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-balance-scale fa-2x mb-2" style={{color: '#d4af37'}}></i>
                            <h5 style={{color: 'white', fontWeight: 'bold'}}>Expert Advocacy</h5>
                            <p className="small" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Experienced LTB representation</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-clock fa-2x mb-2" style={{color: '#d4af37'}}></i>
                            <h5 style={{color: 'white', fontWeight: 'bold'}}>Timely Action</h5>
                            <p className="small" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Meet all critical deadlines</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-shield-alt fa-2x mb-2" style={{color: '#d4af37'}}></i>
                            <h5 style={{color: 'white', fontWeight: 'bold'}}>Rights Protection</h5>
                            <p className="small" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Landlord and tenant advocacy</p>
                          </div>
                        </div>
                      </div>
                      <Link href="/contact" className="btn btn-lg" style={{backgroundColor: '#d4af37', color: '#1a365d', fontWeight: 'bold', padding: '12px 30px', borderRadius: '25px', textDecoration: 'none', border: 'none'}}>
                        Get Expert LTB Representation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__services" style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', borderRadius: '8px', marginBottom: '20px'}}>
                    <div style={{backgroundColor: '#1a365d', color: 'white', padding: '15px', borderRadius: '8px 8px 0 0'}}>
                      <h3 className="sidebar__title" style={{margin: '0', color: 'white'}}>All Services</h3>
                    </div>
                    <div style={{padding: '20px'}}>
                      <ul className="sidebar__services-list" style={{listStyle: 'none', padding: '0', margin: '0'}}>
                        <li style={{marginBottom: '10px'}}><Link href="/paralegal-services" style={{color: '#d4af37', textDecoration: 'none', fontWeight: '500'}}>Paralegal Services</Link></li>
                        <li style={{marginBottom: '10px'}}><Link href="/lawyer-services" style={{color: '#d4af37', textDecoration: 'none', fontWeight: '500'}}>Lawyer Services</Link></li>
                        <li style={{marginBottom: '10px'}}><Link href="/immigration" style={{color: '#d4af37', textDecoration: 'none', fontWeight: '500'}}>Immigration</Link></li>
                        <li style={{marginBottom: '10px'}}><Link href="/family-law" style={{color: '#d4af37', textDecoration: 'none', fontWeight: '500'}}>Family Law</Link></li>
                        <li><Link href="/notarization" style={{color: '#d4af37', textDecoration: 'none', fontWeight: '500'}}>Notarization</Link></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="sidebar__single sidebar__contact" style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', borderRadius: '8px', marginBottom: '20px', overflow: 'hidden'}}>
                    <div style={{background: 'linear-gradient(135deg, #1a365d 0%, #2d5a87 100%)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '25px', borderRadius: '8px'}}>
                      <h3 className="sidebar__title" style={{margin: '0 0 20px 0', color: '#d4af37', fontWeight: 'bold'}}>Need Legal Help?</h3>
                      <div className="sidebar__contact-info">
                        <p style={{color: 'white', marginBottom: '15px', fontSize: '1rem'}}>
                          <strong style={{color: '#d4af37'}}>Brampton Office:</strong><br/>
                          <span style={{color: 'white'}}>(647) 654-9454</span>
                        </p>
                        <p style={{color: 'white', marginBottom: '15px', fontSize: '1rem'}}>
                          <strong style={{color: '#d4af37'}}>Scarborough Office:</strong><br/>
                          <span style={{color: 'white'}}>(437) 880-9656</span>
                        </p>
                        <p style={{color: 'white', marginBottom: '15px', fontSize: '1rem'}}>
                          <strong style={{color: '#d4af37'}}>Email:</strong><br/>
                          <span style={{color: 'white'}}>rathod@hplaw.org</span>
                        </p>
                        <p style={{color: 'white', marginBottom: '0', fontSize: '0.9rem'}}>
                          <strong style={{color: '#d4af37'}}>Hours:</strong><br/>
                          <span style={{color: 'rgba(255, 255, 255, 0.9)'}}>9am to 5pm Toronto Time<br/>Monday to Friday only</span>
                        </p>
                      </div>
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