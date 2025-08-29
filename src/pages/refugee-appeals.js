import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import Breadcrumb from '../common/Breadcrumb'
import InfoSection from '../common/InfoSection'
import Layout from '../components/layout/Layout'
import PracticeTestimonial from '../components/testimonial/PracticeTestimonial'

function RefugeeAppeals() {
  return (
    <>
      <Head>
        <title>Refugee Appeals & Claims - Professional Legal Representation | Rathod Law</title>
        <meta name="description" content="Expert refugee appeals and claims services in Canada. Professional legal representation for refugee protection claims, hearings, and appeals at Immigration and Refugee Board." />
        <meta name="keywords" content="refugee appeals, refugee claims Canada, Immigration Refugee Board, refugee protection, asylum claims, refugee lawyer Ontario" />
      </Head>
      
      <Layout>
        <Breadcrumb title="Refugee Appeals" pageName="Refugee Appeals" />
        {/* Hero Section with Full Width Title and Description */}
        <div className="practice-area-section pt-80 pb-40" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  padding: '50px 40px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
                }}>
                  <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#DEA057',
                    background: '-webkit-linear-gradient(40deg, #202020 0%, #DEA054 80%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '25px',
                    marginTop: '-7px',
                    lineHeight: '1.2',
                    display: 'inline-block'
                  }}>Refugee Appeals & Protection Claims</h2>
                  <p style={{
                    color: '#666',
                    fontSize: '18px',
                    lineHeight: '1.7',
                    maxWidth: '900px',
                    margin: '0 auto',
                    fontWeight: '400'
                  }}>If you are seeking protection in Canada due to persecution, war, or human rights violations in your home country, we provide comprehensive legal representation throughout the refugee claim process. From initial protection claims to appeals at the Refugee Appeal Division (RAD) and Federal Court judicial reviews.</p>
                  
                  {/* Decorative Element */}
                  <div style={{
                    width: '80px',
                    height: '4px',
                    backgroundColor: '#d4a574',
                    margin: '30px auto 0',
                    borderRadius: '2px'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="practice-area-section pt-80 pb-120">
          <div className="container">
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
                      <Link href="/refugee-appeals" className="eg-btn btn--primary btn--outline btn--sm capsule">Protection Claims</Link>
                    </div>
                    <h4><Link href="/refugee-appeals">Refugee Protection Claims</Link></h4>
                  </div>
                  <div className="body">
                    <p>We assist individuals who cannot return to their home countries due to well-founded fear of persecution based on race, religion, nationality, political opinion, or membership in a particular social group. Our services include preparing detailed Personal Information Forms (PIF) and supporting documentation.</p>
                    <Link href="/contact" className="details-btn">Get Consultation</Link>
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
                      <Link href="/refugee-appeals" className="eg-btn btn--primary btn--outline style-2 btn--sm capsule">RPD Hearings</Link>
                    </div>
                    <h4><Link href="/refugee-appeals">Refugee Protection Division</Link></h4>
                  </div>
                  <div className="body">
                    <p>Expert representation at Immigration and Refugee Board (IRB) hearings before the Refugee Protection Division. We prepare comprehensive submissions, gather country condition evidence, and provide skilled advocacy to present your case effectively before the Board.</p>
                    <Link href="/contact" className="details-btn">Get Consultation</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
                  <div className="header">
                    <div className="icon-area">
                      <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 2C9.6 2 2 9.6 2 19s7.6 17 17 17 17-7.6 17-17S28.4 2 19 2zm0 30c-7.2 0-13-5.8-13-13S11.8 6 19 6s13 5.8 13 13-5.8 13-13 13z"/>
                        <path d="M12 14h14v2H12zm0 4h14v2H12zm0 4h10v2H12z"/>
                        <path d="M8 10h22c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <Link href="/refugee-appeals" className="eg-btn btn--primary btn--outline btn--sm capsule">RAD Appeals</Link>
                    </div>
                    <h4><Link href="/refugee-appeals">Refugee Appeal Division</Link></h4>
                  </div>
                  <div className="body">
                    <p>If your refugee claim is rejected by the RPD, you may be eligible to appeal to the Refugee Appeal Division (RAD). We file comprehensive appeals with detailed legal arguments, new evidence where permitted, and written submissions to challenge negative decisions within strict deadlines.</p>
                    <Link href="/contact" className="details-btn">Get Consultation</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single sibling1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.8s">
                  <div className="header">
                    <div className="icon-area">
                      <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 2C9.6 2 2 9.6 2 19s7.6 17 17 17 17-7.6 17-17S28.4 2 19 2zm0 30c-7.2 0-13-5.8-13-13S11.8 6 19 6s13 5.8 13 13-5.8 13-13 13z"/>
                        <path d="M19 8c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2s2-0.9 2-2v-8c0-1.1-0.9-2-2-2z"/>
                        <circle cx="19" cy="26" r="2"/>
                      </svg>
                      <Link href="/immigration-appeals" className="eg-btn btn--primary btn--outline style-2 btn--sm capsule">Federal Court</Link>
                    </div>
                    <h4><Link href="/immigration-appeals">Federal Court Appeals</Link></h4>
                  </div>
                  <div className="body">
                    <p>When RAD appeals are unsuccessful or unavailable, judicial review at the Federal Court of Canada may be an option. We represent clients in Federal Court proceedings to challenge negative refugee decisions based on legal errors, procedural fairness, or unreasonable findings.</p>
                    <Link href="/immigration-appeals" className="details-btn">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s">
                  <div className="header">
                    <div className="icon-area">
                      <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 2C9.6 2 2 9.6 2 19s7.6 17 17 17 17-7.6 17-17S28.4 2 19 2zm0 30c-7.2 0-13-5.8-13-13S11.8 6 19 6s13 5.8 13 13-5.8 13-13 13z"/>
                        <path d="M14 12h10v2H14zm0 4h10v2H14zm0 4h6v2h-6z"/>
                        <path d="M26 18l-4 4-2-2" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <Link href="/immigration-applications" className="eg-btn btn--primary btn--outline btn--sm capsule">Immigration Services</Link>
                    </div>
                    <h4><Link href="/immigration-applications">Immigration Applications</Link></h4>
                  </div>
                  <div className="body">
                    <p>Comprehensive immigration services including work permits, study permits, visitor visas, and permanent residence applications.</p>
                    <Link href="/immigration-applications" className="details-btn">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single sibling1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1.2s">
                  <div className="header">
                    <div className="icon-area">
                      <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 2C9.6 2 2 9.6 2 19s7.6 17 17 17 17-7.6 17-17S28.4 2 19 2zm0 30c-7.2 0-13-5.8-13-13S11.8 6 19 6s13 5.8 13 13-5.8 13-13 13z"/>
                        <path d="M14 12h10v2H14zm0 4h10v2H14zm0 4h6v2h-6z"/>
                        <path d="M26 18l-4 4-2-2" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <Link href="/family-law" className="eg-btn btn--primary btn--outline style-2 btn--sm capsule">Family Matters</Link>
                    </div>
                    <h4><Link href="/family-law">Family Law Services</Link></h4>
                  </div>
                  <div className="body">
                    <p>Expert legal services for family sponsorship, divorce applications, separation agreements, and child custody matters.</p>
                    <Link href="/family-law" className="details-btn">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Detailed Content Section */}
        <div className="practice-area-section pt-60 pb-60" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="section-title1 text-center mb-5">
                  <h2>Refugee Applications Process</h2>
                  <p>Understanding the comprehensive refugee claim process in Canada</p>
                </div>
              </div>
            </div>
            <div className="row g-4">
              {/* Refugee Applications Card */}
              <div className="col-lg-6">
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '30px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0',
                  height: '100%',
                  minHeight: '480px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#d4a574',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px'
                    }}>
                      <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 2C8.4 2 3 7.4 3 14s5.4 12 12 12 12-5.4 12-12S21.6 2 15 2zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="white"/>
                        <path d="M11 10h8v2h-8zm0 3h8v2h-8zm0 3h6v2h-6z" fill="white"/>
                        <path d="M20 14l-3 3-1.5-1.5" stroke="white" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                    <h3 style={{ color: '#2c3e50', margin: 0, fontSize: '24px', fontWeight: '600' }}>How Does a Refugee Claim Work?</h3>
                  </div>
                  
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px', fontSize: '15px' }}>The process for claiming refugee status in Canada involves several critical steps from arrival to final decision.</p>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ color: '#d4a574', fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Key Process Steps:</h4>
                    <ul style={{ paddingLeft: '20px', margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                      <li style={{ marginBottom: '8px' }}>Physical presence in Canada required</li>
                      <li style={{ marginBottom: '8px' }}>Initial claim at port of entry or IRCC office</li>
                      <li style={{ marginBottom: '8px' }}>Eligibility assessment by immigration officer</li>
                      <li style={{ marginBottom: '8px' }}>RPD hearing before Immigration and Refugee Board</li>
                      <li style={{ marginBottom: '8px' }}>Decision and potential permanent residence application</li>
                    </ul>
                  </div>
                  
                  <div style={{
                    backgroundColor: '#fff8f0',
                    padding: '15px',
                    borderRadius: '6px',
                    border: '1px solid #d4a574',
                    marginBottom: '20px'
                  }}>
                    <p style={{ margin: 0, color: '#8b4513', fontSize: '14px', fontWeight: '500' }}>
                      <strong>Important:</strong> Legal representation is highly recommended throughout the refugee claim process to ensure proper documentation and effective advocacy.
                    </p>
                  </div>
                  
                  <Link href="/contact">
                    <a style={{
                      display: 'inline-block',
                      backgroundColor: '#d4a574',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '5px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'background-color 0.3s ease'
                    }}>Get Legal Consultation</a>
                  </Link>
                </div>
              </div>
              
              {/* Detailed Process Steps Card */}
              <div className="col-lg-6">
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '30px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0',
                  height: '100%',
                  minHeight: '480px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#d4a574',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px'
                    }}>
                      <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 2C8.4 2 3 7.4 3 14s5.4 12 12 12 12-5.4 12-12S21.6 2 15 2zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="white"/>
                        <path d="M12 8h6v2h-6zm0 4h6v2h-6zm0 4h4v2h-4z" fill="white"/>
                        <path d="M8 6h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                    <h3 style={{ color: '#2c3e50', margin: 0, fontSize: '24px', fontWeight: '600' }}>Detailed Process Steps</h3>
                  </div>
                  
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px', fontSize: '15px' }}>Comprehensive overview of each stage in the refugee claim process.</p>
                  
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '15px'
                    }}>
                      <div style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: '#d4a574',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '15px',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>1</span>
                      </div>
                      <div>
                        <h5 style={{ color: '#2c3e50', fontSize: '16px', fontWeight: '600', margin: '0 0 5px 0' }}>Arrival & Initial Claim</h5>
                        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>Make claim at port of entry or IRCC office with detailed persecution account</p>
                      </div>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '15px'
                    }}>
                      <div style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: '#d4a574',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '15px',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>2</span>
                      </div>
                      <div>
                        <h5 style={{ color: '#2c3e50', fontSize: '16px', fontWeight: '600', margin: '0 0 5px 0' }}>Eligibility Assessment</h5>
                        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>Officer reviews eligibility criteria and documentation requirements</p>
                      </div>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '15px'
                    }}>
                      <div style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: '#d4a574',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '15px',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>3</span>
                      </div>
                      <div>
                        <h5 style={{ color: '#2c3e50', fontSize: '16px', fontWeight: '600', margin: '0 0 5px 0' }}>RPD Hearing</h5>
                        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>Present case before Immigration and Refugee Board with evidence</p>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    backgroundColor: '#fff8f0',
                    padding: '15px',
                    borderRadius: '6px',
                    border: '1px solid #d4a574',
                    marginBottom: '20px'
                  }}>
                    <p style={{ margin: 0, color: '#8b4513', fontSize: '14px', fontWeight: '500' }}>
                      <strong>Post-Decision:</strong> Positive decisions lead to permanent residence applications, while negative decisions may be appealed to RAD or Federal Court.
                    </p>
                  </div>
                  
                  <Link href="/contact">
                    <a style={{
                      display: 'inline-block',
                      backgroundColor: '#d4a574',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '5px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'background-color 0.3s ease'
                    }}>Schedule Consultation</a>
                  </Link>
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

export default RefugeeAppeals