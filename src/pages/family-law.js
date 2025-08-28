import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import Breadcrumb from '../common/Breadcrumb'
import InfoSection from '../common/InfoSection'
import Layout from '../components/layout/Layout'
import PracticeTestimonial from '../components/testimonial/PracticeTestimonial'

function FamilyLaw() {
  return (
    <>
      <Head>
        <title>Family Law & Immigration - Sponsorship, Divorce Applications & More | Rathod Law</title>
        <meta name="description" content="Expert family law and immigration services in Canada. Professional assistance with family sponsorship, divorce applications, separation agreements, and family reunification." />
        <meta name="keywords" content="family law Canada, family sponsorship, spouse sponsorship, divorce applications, separation agreements, family immigration lawyer Ontario" />
      </Head>
      
      <Layout>
        <Breadcrumb title="Family Law" pageName="Family Law" />
        {/* Family Law & Immigration Services Section */}
        <div className="practice-area-section pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <div className="section-title1 text-center">
                  <h2>Family Law & Immigration Services</h2>
                  <p>Professional family law and immigration services to help reunite families in Canada. We provide expert assistance with spousal sponsorships, dependent children sponsorships, parent and grandparent programs, and all aspects of family class immigration. Our experienced team ensures your family reunification applications are properly prepared and submitted.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center g-4">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                  <div className="header">
                    <div className="icon-area">
                      <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 2C9.6 2 2 9.6 2 19s7.6 17 17 17 17-7.6 17-17S28.4 2 19 2zm0 30c-7.2 0-13-5.8-13-13S11.8 6 19 6s13 5.8 13 13-5.8 13-13 13z"/>
                        <path d="M14 12h10v2H14zm0 4h10v2H14zm0 4h6v2h-6z"/>
                        <path d="M26 18l-4 4-2-2" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <Link href="/family-law"><a className="eg-btn btn--primary btn--outline btn--sm capsule">Spouse Sponsorship</a></Link>
                    </div>
                    <h4><Link href="/family-law"><a>Spouse & Partner Sponsorship</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Expert assistance with spousal sponsorship applications for Canadian citizens and permanent residents seeking to sponsor their spouse, common-law partner, or conjugal partner for permanent residence in Canada.</p>
                    <Link href="/contact" className="details-btn"><a className="details-btn">Get Consultation</a></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single sibling1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
                  <div className="header">
                    <div className="icon-area">
                      <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 2C9.6 2 2 9.6 2 19s7.6 17 17 17 17-7.6 17-17S28.4 2 19 2zm0 30c-7.2 0-13-5.8-13-13S11.8 6 19 6s13 5.8 13 13-5.8 13-13 13z"/>
                        <path d="M15 12h8v2h-8zm0 4h8v2h-8zm0 4h8v2h-8z"/>
                        <path d="M26 18l-4 4-2-2" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <Link href="/family-law"><a className="eg-btn btn--primary btn--outline style-2 btn--sm capsule">Child Sponsorship</a></Link>
                    </div>
                    <h4><Link href="/family-law"><a>Dependent Children Sponsorship</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Comprehensive support for sponsoring dependent children under 22 years of age, including adopted children and children with disabilities over 22 who are financially dependent due to physical or mental condition.</p>
                    <Link href="/contact"><a className="details-btn">Get Consultation</a></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single sibling2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
                  <div className="header">
                    <div className="icon-area">
                      <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 2C9.6 2 2 9.6 2 19s7.6 17 17 17 17-7.6 17-17S28.4 2 19 2zm0 30c-7.2 0-13-5.8-13-13S11.8 6 19 6s13 5.8 13 13-5.8 13-13 13z"/>
                        <path d="M12 14h14v2H12zm0 4h14v2H12zm0 4h10v2H12z"/>
                        <path d="M26 18l-4 4-2-2" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <Link href="/family-law"><a className="eg-btn btn--primary btn--outline style-3 btn--sm capsule">Parent Sponsorship</a></Link>
                    </div>
                    <h4><Link href="/family-law"><a>Parent & Grandparent Program</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Navigate the Parent and Grandparent Program (PGP) application process, including meeting income requirements, providing financial support commitments, and ensuring successful family reunification.</p>
                    <Link href="/contact"><a className="details-btn">Learn More</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Detailed Content Section */}
        <div className="practice-area-section pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title1 text-center mb-60">
                  <h2>Divorce Applications - Complete Legal Guide</h2>
                  <p>Professional guidance through every step of the divorce process in Canada</p>
                  <div style={{
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #B8860B 0%, #DAA520 100%)',
                    margin: '20px auto 0',
                    borderRadius: '2px'
                  }}></div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-12">
                <div style={{padding: '40px', marginBottom: '30px', background: '#fff', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)'}}>
                  <div style={{textAlign: 'center', marginBottom: '30px'}}>
                    <div style={{width: '70px', height: '70px', background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'}}>
                      <svg width="40" height="40" fill="#fff" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-4 text-center" style={{color: '#333', fontSize: '24px'}}>Understanding Divorce Applications</h4>
                    <p className="mb-4" style={{fontSize: '16px', lineHeight: '1.6', textAlign: 'center', maxWidth: '800px', margin: '0 auto 30px'}}>Getting separated is an unfortunate event in anyone&apos;s life. A couple faces issues of Properties, Income, Support and Children in such an unfortunate event. At Rathod Law Firm, we take special care of the issues that revolve around your separation with your spouse.</p>
                    
                    <div style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', border: '1px solid #dee2e6', borderRadius: '8px', padding: '25px', marginBottom: '30px', textAlign: 'center'}}>
                      <h6 style={{color: '#B8860B', marginBottom: '15px', fontSize: '18px'}}>Key Areas We Handle</h6>
                      <p style={{marginBottom: 0, fontSize: '15px'}}>Custody of children, spousal support, and property equalization becomes issues at centre. We carefully analyze the issues that you are facing and provide guidance based on current law.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row g-4">
              <div className="col-lg-6">
                <div style={{background: '#fff', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)', padding: '30px', minHeight: '520px'}}>
                  <div style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                    <svg width="35" height="35" fill="#fff" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3"><Link href="/contact"><a style={{color: '#333', textDecoration: 'none'}}>Eligibility & Grounds for Divorce</a></Link></h4>
                    <p className="mb-3">To file for divorce in Canada, you must meet specific criteria and establish grounds for marriage breakdown.</p>
                    
                    <div style={{marginBottom: '20px'}}>
                      <h6 className="mb-2" style={{color: '#B8860B', fontWeight: '600', fontSize: '14px'}}>Eligibility Requirements:</h6>
                      <ul style={{listStyle: 'none', padding: 0, fontSize: '13px'}}>
                        <li style={{marginBottom: '6px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> <strong>Residency:</strong> At least one spouse must have lived in Canada for at least one year</li>
                      </ul>
                    </div>
                    
                    <div style={{marginBottom: '20px'}}>
                      <h6 className="mb-2" style={{color: '#B8860B', fontWeight: '600', fontSize: '14px'}}>Grounds for Divorce (Marriage Breakdown):</h6>
                      <ul style={{listStyle: 'none', padding: 0, fontSize: '13px'}}>
                        <li style={{marginBottom: '6px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> <strong>Separation for One Year:</strong> Spouses living apart for at least one year</li>
                        <li style={{marginBottom: '6px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> <strong>Adultery:</strong> One spouse has committed adultery</li>
                        <li style={{marginBottom: '6px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> <strong>Cruelty:</strong> Physical or mental cruelty by one spouse</li>
                      </ul>
                    </div>
                    
                    <div style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', border: '1px solid #dee2e6', borderRadius: '8px', padding: '15px', marginBottom: '20px'}}>
                      <h6 style={{color: '#B8860B', marginBottom: '8px', fontSize: '14px'}}>Important Note</h6>
                      <p style={{marginBottom: 0, fontSize: '13px'}}>The divorce process can vary depending on individual circumstances and the province or territory where you file.</p>
                    </div>
                    
                    <Link href="/contact">
                      <a className="eg-btn btn--primary btn--sm">Get Consultation</a>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div style={{background: '#fff', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)', padding: '30px', minHeight: '520px'}}>
                  <div style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                    <svg width="35" height="35" fill="#fff" viewBox="0 0 24 24">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3"><Link href="/contact"><a style={{color: '#333', textDecoration: 'none'}}>Filing Process & Documentation</a></Link></h4>
                    <p className="mb-3">Step-by-step guide to filing for divorce and required documentation.</p>
                    
                    <div style={{marginBottom: '20px'}}>
                      <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '15px'}}>
                        <span style={{width: '25px', height: '25px', background: '#B8860B', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', marginRight: '15px', flexShrink: 0}}>1</span>
                        <div>
                          <h6 style={{marginBottom: '4px', fontSize: '14px', fontWeight: '600'}}>Obtain Forms</h6>
                          <p style={{marginBottom: 0, fontSize: '13px', color: '#666'}}>Get divorce forms from court or government website (divorce application and affidavit).</p>
                        </div>
                      </div>
                      
                      <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '15px'}}>
                        <span style={{width: '25px', height: '25px', background: '#B8860B', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', marginRight: '15px', flexShrink: 0}}>2</span>
                        <div>
                          <h6 style={{marginBottom: '4px', fontSize: '14px', fontWeight: '600'}}>Complete Forms</h6>
                          <p style={{marginBottom: 0, fontSize: '13px', color: '#666'}}>Fill out details about marriage, separation, children, property division, and spousal support.</p>
                        </div>
                      </div>
                      
                      <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '15px'}}>
                        <span style={{width: '25px', height: '25px', background: '#B8860B', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', marginRight: '15px', flexShrink: 0}}>3</span>
                        <div>
                          <h6 style={{marginBottom: '4px', fontSize: '14px', fontWeight: '600'}}>Serve Documents</h6>
                          <p style={{marginBottom: 0, fontSize: '13px', color: '#666'}}>Deliver copies to your spouse in person or through authorized process server.</p>
                        </div>
                      </div>
                      
                      <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '15px'}}>
                        <span style={{width: '25px', height: '25px', background: '#B8860B', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', marginRight: '15px', flexShrink: 0}}>4</span>
                        <div>
                          <h6 style={{marginBottom: '4px', fontSize: '14px', fontWeight: '600'}}>Spouse Response</h6>
                          <p style={{marginBottom: 0, fontSize: '13px', color: '#666'}}>Spouse can agree, contest, or request modifications to terms.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', border: '1px solid #dee2e6', borderRadius: '8px', padding: '15px', marginBottom: '20px'}}>
                      <h6 style={{color: '#B8860B', marginBottom: '8px', fontSize: '14px'}}>Professional Assistance</h6>
                      <p style={{marginBottom: 0, fontSize: '13px'}}>We ensure all documentation is properly completed and filed according to current legal requirements.</p>
                    </div>
                    
                    <Link href="/contact">
                      <a className="eg-btn btn--primary btn--sm">Get Legal Help</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row g-4 mt-4">
              <div className="col-lg-6">
                <div style={{background: '#fff', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)', padding: '30px', minHeight: '480px'}}>
                  <div style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                    <svg width="35" height="35" fill="#fff" viewBox="0 0 24 24">
                      <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"/>
                      <path d="M8 15l4-4 4 4"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3"><Link href="/contact"><a style={{color: '#333', textDecoration: 'none'}}>Court Proceedings</a></Link></h4>
                    <p className="mb-3">Understanding contested vs. uncontested divorce proceedings and court requirements.</p>
                    
                    <div style={{marginBottom: '20px'}}>
                      <h6 className="mb-2" style={{color: '#B8860B', fontWeight: '600', fontSize: '14px'}}>Uncontested Divorce:</h6>
                      <ul style={{listStyle: 'none', padding: 0, fontSize: '13px'}}>
                        <li style={{marginBottom: '4px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> Both spouses agree on all terms</li>
                        <li style={{marginBottom: '4px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> Joint application for divorce possible</li>
                        <li style={{marginBottom: '4px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> Straightforward court review process</li>
                      </ul>
                    </div>
                    
                    <div style={{marginBottom: '20px'}}>
                      <h6 className="mb-2" style={{color: '#B8860B', fontWeight: '600', fontSize: '14px'}}>Contested Divorce:</h6>
                      <ul style={{listStyle: 'none', padding: 0, fontSize: '13px'}}>
                        <li style={{marginBottom: '4px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> Disputes require court hearings</li>
                        <li style={{marginBottom: '4px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> Each party presents their case</li>
                        <li style={{marginBottom: '4px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> Court decides on custody, support, property</li>
                      </ul>
                    </div>
                    
                    <Link href="/contact">
                      <a className="eg-btn btn--primary btn--sm">Get Court Representation</a>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div style={{background: '#fff', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)', padding: '30px', minHeight: '480px'}}>
                  <div style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                    <svg width="35" height="35" fill="#fff" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3"><Link href="/contact"><a style={{color: '#333', textDecoration: 'none'}}>Finalization & Post-Divorce</a></Link></h4>
                    <p className="mb-3">Final steps to complete your divorce and important post-divorce considerations.</p>
                    
                    <div style={{marginBottom: '20px'}}>
                      <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '12px'}}>
                        <span style={{width: '25px', height: '25px', background: '#B8860B', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', marginRight: '15px', flexShrink: 0}}>1</span>
                        <div>
                          <h6 style={{marginBottom: '4px', fontSize: '14px', fontWeight: '600'}}>Separation Agreement</h6>
                          <p style={{marginBottom: 0, fontSize: '13px', color: '#666'}}>Draft agreement outlining property division, custody, and support arrangements.</p>
                        </div>
                      </div>
                      
                      <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '12px'}}>
                        <span style={{width: '25px', height: '25px', background: '#B8860B', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', marginRight: '15px', flexShrink: 0}}>2</span>
                        <div>
                          <h6 style={{marginBottom: '4px', fontSize: '14px', fontWeight: '600'}}>Divorce Order</h6>
                          <p style={{marginBottom: 0, fontSize: '13px', color: '#666'}}>Court issues divorce order and Certificate of Divorce.</p>
                        </div>
                      </div>
                      
                      <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '12px'}}>
                        <span style={{width: '25px', height: '25px', background: '#B8860B', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', marginRight: '15px', flexShrink: 0}}>3</span>
                        <div>
                          <h6 style={{marginBottom: '4px', fontSize: '14px', fontWeight: '600'}}>Status Update</h6>
                          <p style={{marginBottom: 0, fontSize: '13px', color: '#666'}}>Update personal documents and tax records to reflect new marital status.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', border: '1px solid #dee2e6', borderRadius: '8px', padding: '15px', marginBottom: '20px'}}>
                      <h6 style={{color: '#B8860B', marginBottom: '8px', fontSize: '14px'}}>Additional Considerations</h6>
                      <p style={{marginBottom: 0, fontSize: '13px'}}>Mediation services and counseling may be required in some jurisdictions. Legal advice is essential for complex cases involving significant assets.</p>
                    </div>
                    
                    <Link href="/contact">
                      <a className="eg-btn btn--primary btn--sm">Complete Your Divorce</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <InfoSection/>
        <PracticeTestimonial/>
      </Layout>   
    </>
  )
}

export default FamilyLaw;