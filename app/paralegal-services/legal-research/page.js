import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Legal Research Services Ontario | Paralegal Legal Research | Rathod Law',
  description: 'Professional legal research services by experienced paralegals. Case law research, statutory analysis, legal memoranda, and litigation support in Ontario.',
  keywords: 'legal research services, case law research, statutory analysis, legal memoranda, litigation support, paralegal research, Ontario legal research',
};

export default function LegalResearch() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Legal Research Services">
      <div>
        {/* Main Content */}
        <section className="about-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="about-page__content">
                  <div className="section-title text-left">
                    <span className="section-title__tagline" style={{color: '#d4af37', fontWeight: 'bold'}}>Professional Legal Research</span>
                    <h2 className="section-title__title" style={{color: '#1a365d', fontWeight: 'bold'}}>Comprehensive Legal Research Services in Ontario</h2>
                  </div>
                  
                  <p className="about-page__text-1">
                    Quality legal research is the foundation of successful legal representation. Our experienced paralegals 
                    provide thorough, accurate, and timely legal research services to support your case preparation, 
                    litigation strategy, and legal decision-making processes.
                  </p>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">What is Legal Research?</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Legal research involves the systematic investigation of legal authorities, including statutes, 
                        regulations, case law, and legal commentary, to find relevant legal principles and precedents 
                        that apply to specific legal issues or cases.
                      </p>
                      
                      <h4 className="mt-3">Key Components of Legal Research:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item"><strong>Primary Sources:</strong> Statutes, regulations, case law, constitutional provisions</div>
                        <div className="list-group-item"><strong>Secondary Sources:</strong> Legal encyclopedias, treatises, law journals, commentaries</div>
                        <div className="list-group-item"><strong>Finding Tools:</strong> Legal databases, citators, indexes, and search engines</div>
                        <div className="list-group-item"><strong>Analysis:</strong> Interpretation and application of legal authorities to specific facts</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Our Legal Research Services</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">We provide comprehensive legal research services across various practice areas:</p>
                      
                      <h4 className="mt-3">Case Law Research:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item">Precedent identification and analysis</div>
                        <div className="list-group-item">Judicial interpretation of statutes and regulations</div>
                        <div className="list-group-item">Comparative case analysis</div>
                        <div className="list-group-item">Citation verification and updating</div>
                        <div className="list-group-item">Distinguishing adverse authorities</div>
                      </div>

                      <h4>Statutory and Regulatory Research:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item">Current legislation analysis</div>
                        <div className="list-group-item">Regulatory compliance requirements</div>
                        <div className="list-group-item">Legislative history and amendments</div>
                        <div className="list-group-item">Procedural rule interpretation</div>
                        <div className="list-group-item">Cross-jurisdictional comparisons</div>
                      </div>

                      <h4>Specialized Research Areas:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item">Provincial Offences Act matters</div>
                        <div className="list-group-item">Small Claims Court procedures</div>
                        <div className="list-group-item">Landlord and Tenant Board issues</div>
                        <div className="list-group-item">Human Rights Tribunal matters</div>
                        <div className="list-group-item">Administrative law and tribunal procedures</div>
                        <div className="list-group-item">Employment standards and workplace law</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Research Deliverables</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our research services include various types of written work products:</p>
                      
                      <h4 className="mt-3">Legal Memoranda:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item"><strong>Issue Identification:</strong> Clear statement of legal questions</div>
                        <div className="list-group-item"><strong>Rule Statement:</strong> Applicable legal principles and authorities</div>
                        <div className="list-group-item"><strong>Analysis:</strong> Application of law to specific facts</div>
                        <div className="list-group-item"><strong>Conclusion:</strong> Reasoned legal opinion and recommendations</div>
                      </div>

                      <h4>Case Briefs and Summaries:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item">Concise case summaries with key holdings</div>
                        <div className="list-group-item">Factual background and procedural history</div>
                        <div className="list-group-item">Legal reasoning and rationale</div>
                        <div className="list-group-item">Significance and precedential value</div>
                      </div>

                      <h4>Research Reports:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item">Comprehensive authority compilation</div>
                        <div className="list-group-item">Annotated bibliographies</div>
                        <div className="list-group-item">Legislative tracking reports</div>
                        <div className="list-group-item">Comparative jurisdiction analysis</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Research Methodology</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our systematic approach ensures thorough and accurate research results:</p>
                      
                      <h4 className="mt-3">Research Process:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item"><strong>Issue Analysis:</strong> Define research scope and objectives</div>
                        <div className="list-group-item"><strong>Source Identification:</strong> Locate relevant primary and secondary authorities</div>
                        <div className="list-group-item"><strong>Authority Evaluation:</strong> Assess credibility and precedential value</div>
                        <div className="list-group-item"><strong>Legal Analysis:</strong> Apply authorities to specific factual scenarios</div>
                        <div className="list-group-item"><strong>Quality Control:</strong> Verify citations and update research</div>
                      </div>

                      <h4>Research Tools and Databases:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item">Westlaw Canada and LexisNexis Quicklaw</div>
                        <div className="list-group-item">CanLII (Canadian Legal Information Institute)</div>
                        <div className="list-group-item">Government legislative databases</div>
                        <div className="list-group-item">Tribunal and court websites</div>
                        <div className="list-group-item">Legal encyclopedias and treatises</div>
                        <div className="list-group-item">Professional law journals and publications</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Who Benefits from Our Research Services</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Our legal research services support various legal professionals and organizations:</p>
                      
                      <h4 className="mt-3">Legal Professionals:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item">Solo practitioners and small law firms</div>
                        <div className="list-group-item">Paralegals and legal assistants</div>
                        <div className="list-group-item">In-house legal departments</div>
                        <div className="list-group-item">Legal aid clinics</div>
                      </div>

                      <h4>Organizations and Individuals:</h4>
                      <div className="list-group list-group-flush mb-3">
                        <div className="list-group-item">Non-profit organizations</div>
                        <div className="list-group-item">Government agencies</div>
                        <div className="list-group-item">Business owners and entrepreneurs</div>
                        <div className="list-group-item">Self-represented litigants</div>
                      </div>

                      <h4>Specific Use Cases:</h4>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item">Trial preparation and litigation support</div>
                        <div className="list-group-item">Legal opinion development</div>
                        <div className="list-group-item">Compliance and regulatory analysis</div>
                        <div className="list-group-item">Policy development and review</div>
                        <div className="list-group-item">Due diligence investigations</div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4 shadow-sm">
                    <div className="card-header text-white" style={{backgroundColor: '#d4af37'}}>
                      <h3 className="card-title mb-0">Why Choose Our Research Services</h3>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <h4>Expertise and Experience:</h4>
                          <ul>
                            <li>Experienced paralegals with research specialization</li>
                            <li>Knowledge of Ontario legal system and procedures</li>
                            <li>Familiarity with various practice areas</li>
                            <li>Understanding of legal research methodology</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h4>Quality and Efficiency:</h4>
                          <ul>
                            <li>Thorough and accurate research results</li>
                            <li>Timely delivery to meet deadlines</li>
                            <li>Cost-effective research solutions</li>
                            <li>Clear and well-organized deliverables</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="card mb-4" style={{background: 'linear-gradient(135deg, #1a365d 0%, #2d5a87 100%)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)', borderRadius: '15px'}}>
                    <div className="card-body text-center p-5">
                      <h3 className="card-title mb-3" style={{color: '#d4af37', fontWeight: 'bold'}}>Get Professional Legal Research Support</h3>
                      <p className="card-text mb-4" style={{color: 'white', fontSize: '1.1rem'}}>
                        Save time and ensure accuracy with our comprehensive legal research services. 
                        Let our experienced team provide the research foundation for your legal success.
                      </p>
                      <div className="row justify-content-center">
                        <div className="col-md-4 mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-search fa-2x mb-2" style={{color: '#d4af37'}}></i>
                            <h5 style={{color: 'white', fontWeight: 'bold'}}>Thorough Research</h5>
                            <p className="small" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Comprehensive authority analysis</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-clock fa-2x mb-2" style={{color: '#d4af37'}}></i>
                            <h5 style={{color: 'white', fontWeight: 'bold'}}>Timely Delivery</h5>
                            <p className="small" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Meet your deadlines</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-dollar-sign fa-2x mb-2" style={{color: '#d4af37'}}></i>
                            <h5 style={{color: 'white', fontWeight: 'bold'}}>Cost-Effective</h5>
                            <p className="small" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Affordable research solutions</p>
                          </div>
                        </div>
                      </div>
                      <Link href="/contact" className="btn btn-lg" style={{backgroundColor: '#d4af37', color: '#1a365d', fontWeight: 'bold', padding: '12px 30px', borderRadius: '25px', textDecoration: 'none', border: 'none'}}>
                        Request Research Services
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