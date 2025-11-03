import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Tribunal Representation Ontario | Administrative Tribunal Advocacy | Rathod Law',
  description: 'Expert paralegal representation at Ontario administrative tribunals. Human Rights Tribunal, WSIB appeals, EI appeals, CPP disability, and more.',
  keywords: 'tribunal representation, administrative tribunals, human rights tribunal, WSIB appeals, EI appeals, CPP disability, paralegal advocacy, Ontario tribunals',
};

export default function TribunalRepresentation() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Tribunal Representation">
      <div>
        {/* Main Content */}
        <section className="about-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="about-page__content">
                  <div className="section-title text-left">
                    <span className="section-title__tagline" style={{color: '#d4af37', fontWeight: 'bold'}}>Administrative Tribunal Advocacy</span>
                    <h2 className="section-title__title" style={{color: '#1a365d', fontWeight: 'bold'}}>Expert Tribunal Representation Services in Ontario</h2>
                  </div>
                  
                  <p className="about-page__text-1">
                    Administrative tribunals play a crucial role in resolving disputes between individuals and government 
                    agencies or institutions. Our experienced paralegals provide skilled representation at various Ontario 
                    tribunals, ensuring your rights are protected and your case is presented effectively.
                  </p>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Understanding Administrative Tribunals</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Administrative tribunals are specialized decision-making bodies that operate independently from 
                        government departments. They have the authority to make binding decisions on specific types of 
                        disputes and are designed to be more accessible and less formal than courts.
                      </p>
                      
                      <h4 className="mt-3">Key Characteristics of Tribunals:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Specialized Expertise:</strong> Focus on specific areas of law and policy</div>
                        <div className="list-group-item"><strong>Accessible Process:</strong> Less formal procedures than courts</div>
                        <div className="list-group-item"><strong>Cost-Effective:</strong> Generally lower costs than court proceedings</div>
                        <div className="list-group-item"><strong>Timely Resolution:</strong> Faster decision-making than traditional courts</div>
                        <div className="list-group-item"><strong>Expert Adjudicators:</strong> Decision-makers with relevant expertise</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Tribunals We Represent Clients At</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our paralegals have experience representing clients at various Ontario tribunals:</p>
                      
                      <h4 className="mt-3">Human Rights and Employment:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item"><strong>Human Rights Tribunal of Ontario (HRTO):</strong> Discrimination and harassment claims</div>
                        <div className="list-group-item"><strong>Workplace Safety and Insurance Appeals Tribunal (WSIAT):</strong> WSIB appeals</div>
                        <div className="list-group-item"><strong>Ontario Labour Relations Board (OLRB):</strong> Labour disputes and union matters</div>
                        <div className="list-group-item"><strong>Pay Equity Hearings Tribunal:</strong> Pay equity complaints</div>
                      </div>

                      <h4>Social Benefits and Support:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item"><strong>Social Benefits Tribunal (SBT):</strong> Ontario Works and ODSP appeals</div>
                        <div className="list-group-item"><strong>Canada Pension Plan (CPP) Disability:</strong> Federal disability benefit appeals</div>
                        <div className="list-group-item"><strong>Employment Insurance (EI) Appeals:</strong> Service Canada EI decisions</div>
                        <div className="list-group-item"><strong>Old Age Security (OAS) Appeals:</strong> Federal pension appeals</div>
                      </div>

                      <h4>Professional and Regulatory:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item"><strong>License Appeal Tribunal (LAT):</strong> Auto insurance disputes, driver licensing</div>
                        <div className="list-group-item"><strong>Consent and Capacity Board:</strong> Mental health and capacity issues</div>
                        <div className="list-group-item"><strong>Health Professions Appeal and Review Board:</strong> Healthcare professional complaints</div>
                        <div className="list-group-item"><strong>Financial Services Tribunal:</strong> Financial services regulatory matters</div>
                      </div>

                      <h4>Immigration and Refugee:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Immigration and Refugee Board (IRB):</strong> Refugee protection claims</div>
                        <div className="list-group-item"><strong>Immigration Appeal Division (IAD):</strong> Immigration appeals</div>
                        <div className="list-group-item"><strong>Refugee Appeal Division (RAD):</strong> Refugee decision appeals</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Common Tribunal Matters</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">We handle a wide range of tribunal matters across different areas:</p>
                      
                      <h4 className="mt-3">Human Rights Complaints:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item">Workplace discrimination and harassment</div>
                        <div className="list-group-item">Housing discrimination</div>
                        <div className="list-group-item">Service discrimination</div>
                        <div className="list-group-item">Accommodation requests</div>
                        <div className="list-group-item">Reprisal and retaliation claims</div>
                      </div>

                      <h4>WSIB and Workplace Injury Appeals:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item">Initial claim denials</div>
                        <div className="list-group-item">Benefit entitlement disputes</div>
                        <div className="list-group-item">Return-to-work issues</div>
                        <div className="list-group-item">Permanent impairment assessments</div>
                        <div className="list-group-item">Employer premium appeals</div>
                      </div>

                      <h4>Social Assistance Appeals:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item">Ontario Works eligibility and benefits</div>
                        <div className="list-group-item">ODSP disability determinations</div>
                        <div className="list-group-item">Benefit suspensions and terminations</div>
                        <div className="list-group-item">Overpayment recovery disputes</div>
                      </div>

                      <h4>Auto Insurance Disputes:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item">Accident benefit denials</div>
                        <div className="list-group-item">Medical and rehabilitation benefits</div>
                        <div className="list-group-item">Income replacement benefits</div>
                        <div className="list-group-item">Catastrophic impairment determinations</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Our Tribunal Representation Process</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">We provide comprehensive support throughout the tribunal process:</p>
                      
                      <h4 className="mt-3">Initial Assessment and Strategy:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item"><strong>Case Evaluation:</strong> Review merits and likelihood of success</div>
                        <div className="list-group-item"><strong>Jurisdiction Analysis:</strong> Confirm appropriate tribunal and procedures</div>
                        <div className="list-group-item"><strong>Timeline Planning:</strong> Identify critical deadlines and milestones</div>
                        <div className="list-group-item"><strong>Strategy Development:</strong> Create comprehensive case strategy</div>
                      </div>

                      <h4>Application and Documentation:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item">Prepare and file tribunal applications</div>
                        <div className="list-group-item">Gather and organize supporting evidence</div>
                        <div className="list-group-item">Obtain medical and expert reports</div>
                        <div className="list-group-item">Coordinate witness statements</div>
                        <div className="list-group-item">Manage document disclosure requirements</div>
                      </div>

                      <h4>Hearing Preparation and Representation:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item">Prepare opening and closing statements</div>
                        <div className="list-group-item">Organize evidence and exhibits</div>
                        <div className="list-group-item">Prepare witnesses for testimony</div>
                        <div className="list-group-item">Represent clients at hearings</div>
                        <div className="list-group-item">Cross-examine opposing witnesses</div>
                      </div>

                      <h4>Post-Hearing and Follow-up:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item">Review tribunal decisions and orders</div>
                        <div className="list-group-item">Advise on appeal options if necessary</div>
                        <div className="list-group-item">Assist with order enforcement</div>
                        <div className="list-group-item">Handle reconsideration requests</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Why Choose Professional Tribunal Representation</h3>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <h4>Expertise and Knowledge:</h4>
                          <ul>
                            <li>Understanding of tribunal procedures and rules</li>
                            <li>Knowledge of relevant legislation and case law</li>
                            <li>Experience with tribunal decision-makers</li>
                            <li>Familiarity with evidence requirements</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h4>Strategic Advantages:</h4>
                          <ul>
                            <li>Improved chances of successful outcomes</li>
                            <li>Proper case preparation and presentation</li>
                            <li>Effective advocacy and argument development</li>
                            <li>Professional handling of complex procedures</li>
                          </ul>
                        </div>
                      </div>
                      
                      <h4 className="mt-3">Common Challenges Without Representation:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item">Missing critical deadlines and procedural requirements</div>
                        <div className="list-group-item">Inadequate evidence gathering and presentation</div>
                        <div className="list-group-item">Difficulty understanding complex legal issues</div>
                        <div className="list-group-item">Ineffective advocacy and argument presentation</div>
                        <div className="list-group-item">Emotional stress affecting case presentation</div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="card mb-4" style={{background: 'linear-gradient(135deg, #1a365d 0%, #2d5a87 100%)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)', borderRadius: '15px'}}>
                    <div className="card-body text-center p-5">
                      <h3 className="card-title mb-3" style={{color: '#d4af37', fontWeight: 'bold'}}>Get Expert Tribunal Representation</h3>
                      <p className="card-text mb-4" style={{color: 'white', fontSize: '1.1rem'}}>
                        Don't face tribunal proceedings alone. Our experienced paralegals will advocate for your rights 
                        and help you navigate the complex tribunal system with confidence.
                      </p>
                      <div className="row justify-content-center">
                        <div className="col-md-4 mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-gavel fa-2x mb-2" style={{color: '#d4af37'}}></i>
                            <h5 style={{color: 'white', fontWeight: 'bold'}}>Expert Advocacy</h5>
                            <p className="small" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Skilled tribunal representation</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-file-alt fa-2x mb-2" style={{color: '#d4af37'}}></i>
                            <h5 style={{color: 'white', fontWeight: 'bold'}}>Proper Preparation</h5>
                            <p className="small" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Comprehensive case development</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-trophy fa-2x mb-2" style={{color: '#d4af37'}}></i>
                            <h5 style={{color: 'white', fontWeight: 'bold'}}>Better Outcomes</h5>
                            <p className="small" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Improved success rates</p>
                          </div>
                        </div>
                      </div>
                      <Link href="/contact" className="btn btn-lg" style={{backgroundColor: '#d4af37', color: '#1a365d', fontWeight: 'bold', padding: '12px 30px', borderRadius: '25px', textDecoration: 'none', border: 'none'}}>
                        Schedule Tribunal Consultation
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