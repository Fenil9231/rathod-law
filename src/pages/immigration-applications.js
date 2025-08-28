import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import Breadcrumb from '../common/Breadcrumb'
import InfoSection from '../common/InfoSection'
import Layout from '../components/layout/Layout'
import PracticeTestimonial from '../components/testimonial/PracticeTestimonial'

function ImmigrationApplications() {
  return (
    <>
      <Head>
        <title>Immigration Applications - Student Visa, Work Permits, LMIA & More | Rathod Law</title>
        <meta name="description" content="Professional immigration application services in Canada. Expert assistance with student visas, work permits, LMIA applications, visitor visas, and permanent residence applications." />
        <meta name="keywords" content="immigration applications Canada, student visa, work permit, LMIA, visitor visa, permanent residence, immigration lawyer Ontario" />
      </Head>
      
      <Layout>
        <Breadcrumb title="Immigration Applications" pageName="Immigration Applications" />
        <div className="practice-area-section pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div 
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                    padding: '60px 40px',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                    border: '1px solid #f0f0f0',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                    marginBottom: '60px'
                  }}
                >
                  <div className="section-title1 text-center">
                    <h2>Immigration Applications & Visa Services</h2>
                                      <p style={{margin: '20px auto 0 auto'}}>Professional immigration application services for individuals and families seeking to come to Canada. We provide expert legal assistance with study permits, work permits, LMIA applications, visitor visas, permanent residence applications, and spousal sponsorships. Our experienced team ensures your application is properly prepared and submitted to maximize your chances of success.</p>

                  </div>
                  <div style={{
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(135deg, #DEA057 0%, #B8860B 100%)',
                    margin: '0 auto',
                    borderRadius: '2px'
                  }}></div>
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
                      <Link href="/immigration-applications"><a className="eg-btn btn--primary btn--outline btn--sm capsule">Study Permits</a></Link>
                    </div>
                    <h4><Link href="/immigration-applications"><a>Study Permits & Student Visas</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Expert assistance with study permit applications for international students planning to study in Canada. We help with initial applications, extensions, and pathway planning to permanent residence through post-graduation work permits.</p>
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
                      <Link href="/immigration-applications"><a className="eg-btn btn--primary btn--outline style-2 btn--sm capsule">Work Permits</a></Link>
                    </div>
                    <h4><Link href="/immigration-applications"><a>Work Permits & LMIA</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Comprehensive work permit services including closed and open work permits, Labour Market Impact Assessments (LMIA), employer compliance, and applications for temporary foreign workers seeking employment in Canada.</p>
                    <Link href="/contact" className="details-btn"><a className="details-btn">Get Consultation</a></Link>
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
                      <Link href="/immigration-applications"><a className="eg-btn btn--primary btn--outline btn--sm capsule">Visitor Visas</a></Link>
                    </div>
                    <h4><Link href="/immigration-applications"><a>Visitor Visas & TRV</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Professional visitor visa services for individuals seeking to visit Canada for tourism, business, or family visits. We assist with temporary resident visa applications, extensions, and super visa applications for parents and grandparents.</p>
                    <Link href="/contact" className="details-btn"><a className="details-btn">Get Consultation</a></Link>
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
                      <Link href="/immigration-applications"><a className="eg-btn btn--primary btn--outline style-2 btn--sm capsule">Permanent Residence</a></Link>
                    </div>
                    <h4><Link href="/immigration-applications"><a>Permanent Residence Applications</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Expert guidance with permanent residence applications through various immigration programs including Express Entry (Federal Skilled Worker, Canadian Experience Class, Federal Skilled Trades), Provincial Nominee Programs, and Quebec immigration programs.</p>
                    <Link href="/contact" className="details-btn"><a className="details-btn">Get Consultation</a></Link>
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
                      <Link href="/family-law"><a className="eg-btn btn--primary btn--outline btn--sm capsule">Family Sponsorship</a></Link>
                    </div>
                    <h4><Link href="/family-law"><a>Family Sponsorship</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Expert assistance with sponsoring spouses, children, parents, and grandparents to immigrate to Canada through family class immigration programs.</p>
                    <Link href="/family-law" className="details-btn"><a className="details-btn">Learn More</a></Link>
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
                      <Link href="/immigration-appeals"><a className="eg-btn btn--primary btn--outline style-2 btn--sm capsule">Appeals & Reviews</a></Link>
                    </div>
                    <h4><Link href="/immigration-appeals"><a>Immigration Appeals</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Professional representation for immigration appeals, judicial reviews, and Federal Court applications for refused immigration applications.</p>
                    <Link href="/immigration-appeals" className="details-btn"><a className="details-btn">Learn More</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Custom Content Section */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '80px 0',
          marginTop: '60px'
        }}>
          <div className="container">
            <div style={{
              textAlign: 'center',
              marginBottom: '60px'
            }}>
              <div className="section-title1 text-center">
                <h2>Our Immigration Services</h2>
                              <p >Comprehensive immigration solutions tailored to your specific needs and circumstances</p>

              </div>          
            </div>
            
            <div className="row g-4">
              {/* Student Visa Card */}
              <div className="col-lg-6">
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '30px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0',
                  height: '100%',
                  minHeight: '400px'
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
                      </svg>
                    </div>
                    <h3 style={{ color: '#2c3e50', margin: 0, fontSize: '24px', fontWeight: '600' }}>Student Visa</h3>
                  </div>
                  
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px', fontSize: '15px' }}>A lot of study permit applications from outside of Canada get refused every year. A successful application needs strong attention on assessment of candidate's profile, selection of appropriate course, demonstrating intentions via a strong Statement of Purpose (SOP), and a convincing Submission Letter.</p>
                  
                  <div style={{
                    backgroundColor: '#fff8f0',
                    padding: '15px',
                    borderRadius: '6px',
                    border: '1px solid #d4a574',
                    marginBottom: '20px'
                  }}>
                    <p style={{ margin: 0, color: '#8b4513', fontSize: '14px', fontWeight: '500' }}>
                      <strong>Our Approach:</strong> Mr. Kapil Rathod specifically pays attention to the profile of the Student and helps select a course according to their profile, writing a strong submission letter.
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
                    }}>Get Consultation</a>
                  </Link>
                </div>
              </div>
              
              {/* Work Permit Card */}
              <div className="col-lg-6">
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '30px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0',
                  height: '100%',
                  minHeight: '400px'
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
                      </svg>
                    </div>
                    <h3 style={{ color: '#2c3e50', margin: 0, fontSize: '24px', fontWeight: '600' }}>Work Permit</h3>
                  </div>
                  
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px', fontSize: '15px' }}>Whether it is a Spousal Open Work Permit or LMIA-based work permit, Mr. Rathod pays complete attention to details. For Spousal Work Permit Applications, specific attention needs to be paid to proving relationship.</p>
                  
                  <div style={{
                    backgroundColor: '#fff8f0',
                    padding: '15px',
                    borderRadius: '6px',
                    border: '1px solid #d4a574',
                    marginBottom: '20px'
                  }}>
                    <p style={{ margin: 0, color: '#8b4513', fontSize: '14px', fontWeight: '500' }}>
                      <strong>Experience:</strong> Mr. Rathod has done more than 2,500 Spousal Open Work Permit applications in his 13 years of practice.
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
            
            <div className="row g-4" style={{ marginTop: '30px' }}>
              {/* LMIA Applications Card */}
              <div className="col-lg-6">
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '30px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0',
                  height: '100%',
                  minHeight: '350px'
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
                        <path d="M8 6h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                    <h3 style={{ color: '#2c3e50', margin: 0, fontSize: '24px', fontWeight: '600' }}>LMIA Applications</h3>
                  </div>
                  
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px', fontSize: '15px' }}>Rathod Law Firm does not have any connections with the employers and cannot find employment for prospective applicants; however, the firm processes applications for Labour Market Impact Assessment (LMIA) on behalf of the employers.</p>
                  
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
                    }}>Learn More</a>
                  </Link>
                </div>
              </div>
              
              {/* Visitor Visa Card */}
              <div className="col-lg-6">
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '30px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0',
                  height: '100%',
                  minHeight: '350px'
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
                        <path d="M20 14l-3 3-1.5-1.5" stroke="white" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                    <h3 style={{ color: '#2c3e50', margin: 0, fontSize: '24px', fontWeight: '600' }}>Visitor Visa</h3>
                  </div>
                  
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px', fontSize: '15px' }}>Every year, a lot of people visit Canada; however, in such applications, specific attention must be paid to the 'return' of the applicants to their home country. Ties to home country must be established and a detailed submission letter as well as Invitation Letter must be written.</p>
                  
                  <div style={{
                    backgroundColor: '#fff8f0',
                    padding: '15px',
                    borderRadius: '6px',
                    border: '1px solid #d4a574',
                    marginBottom: '20px'
                  }}>
                    <p style={{ margin: 0, color: '#8b4513', fontSize: '14px', fontWeight: '500' }}>
                      <strong>Expertise:</strong> Mr. Rathod has vast experience in dealing with visitor visa applications as well as Super Visa Applications.
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
                    }}>Get Started</a>
                  </Link>
                </div>
              </div>
            </div>
             
             <div className="row g-4" style={{ marginTop: '30px' }}>
               {/* Refugee Claims Card */}
               <div className="col-lg-6">
                 <div style={{
                   backgroundColor: '#ffffff',
                   borderRadius: '8px',
                   padding: '30px',
                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                   border: '1px solid #e0e0e0',
                   height: '100%',
                   minHeight: '400px'
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
                     <h3 style={{ color: '#2c3e50', margin: 0, fontSize: '24px', fontWeight: '600' }}>Refugee Claims</h3>
                   </div>
                   
                   <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px', fontSize: '15px' }}>Some people cannot return to their home countries after landing in Canada because of fear of persecution. They can make refugee protection claims in Canada; however, demonstrating this fear of persecution is a work of detail.</p>
                   
                   <div style={{
                     backgroundColor: '#fff8f0',
                     padding: '15px',
                     borderRadius: '6px',
                     border: '1px solid #d4a574',
                     marginBottom: '20px'
                   }}>
                     <p style={{ margin: 0, color: '#8b4513', fontSize: '14px', fontWeight: '500' }}>
                       <strong>Our Service:</strong> Mr. Rathod prepares detailed submissions and attends hearings at RPD, RAD, and Federal Court of Canada.
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
                     }}>Get Help</a>
                   </Link>
                 </div>
               </div>
               
               {/* Permanent Residence Applications Card */}
               <div className="col-lg-6">
                 <div style={{
                   backgroundColor: '#ffffff',
                   borderRadius: '8px',
                   padding: '30px',
                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                   border: '1px solid #e0e0e0',
                   height: '100%',
                   minHeight: '400px'
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
                     <h3 style={{ color: '#2c3e50', margin: 0, fontSize: '24px', fontWeight: '600' }}>Permanent Residence Applications</h3>
                   </div>
                   
                   <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px', fontSize: '15px' }}>Express Entry has been constantly evolving and so as Provincial Nominee Class applications. In the constantly changing rules, Mr. Rathod ensures that the candidate 'actually' qualifies and advises the clients on best possible ways of becoming a permanent resident of Canada.</p>
                   
                   <div style={{
                     backgroundColor: '#fff8f0',
                     padding: '15px',
                     borderRadius: '6px',
                     border: '1px solid #d4a574',
                     marginBottom: '20px'
                   }}>
                     <p style={{ margin: 0, color: '#8b4513', fontSize: '14px', fontWeight: '500' }}>
                       <strong>Honest Advice:</strong> Mr. Rathod genuinely advises the Applicants if they do not qualify.
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
                     }}>Apply Now</a>
                   </Link>
                 </div>
               </div>
             </div>
             
             <div className="row g-4" style={{ marginTop: '30px' }}>
               {/* Spousal Sponsorships Card */}
               <div className="col-lg-6">
                 <div style={{
                   backgroundColor: '#ffffff',
                   borderRadius: '8px',
                   padding: '30px',
                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                   border: '1px solid #e0e0e0',
                   height: '100%',
                   minHeight: '350px'
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
                         <path d="M20 14l-3 3-1.5-1.5" stroke="white" strokeWidth="2" fill="none"/>
                       </svg>
                     </div>
                     <h3 style={{ color: '#2c3e50', margin: 0, fontSize: '24px', fontWeight: '600' }}>Spousal Sponsorships</h3>
                   </div>
                   
                   <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px', fontSize: '15px' }}>Specific attention must be paid to detail in spousal sponsorship applications. Relationships can be complex at times. Putting the relationship on paper is a tough task and Mr. Rathod does it in a convincing manner so that Applicants do not have to attend an interview in most cases.</p>
                   
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
                     }}>Start Process</a>
                   </Link>
                 </div>
               </div>
               
               {/* Refused Visa Applications Card */}
               <div className="col-lg-6">
                 <div style={{
                   backgroundColor: '#ffffff',
                   borderRadius: '8px',
                   padding: '30px',
                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                   border: '1px solid #e0e0e0',
                   height: '100%',
                   minHeight: '350px'
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
                         <path d="M8 6h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" fill="none"/>
                       </svg>
                     </div>
                     <h3 style={{ color: '#2c3e50', margin: 0, fontSize: '24px', fontWeight: '600' }}>Refused Visa Applications</h3>
                   </div>
                   
                   <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px', fontSize: '15px' }}>Mr. Rathod specifically likes dealing with applications that have been refused previously. Mr. Rathod accurately identifies key issues with the applications, suggests further documents to the Applicants and resubmits the application with a convincing submission letter.</p>
                   
                   <div style={{
                     backgroundColor: '#fff8f0',
                     padding: '15px',
                     borderRadius: '6px',
                     border: '1px solid #d4a574',
                     marginBottom: '20px'
                   }}>
                     <p style={{ margin: 0, color: '#8b4513', fontSize: '14px', fontWeight: '500' }}>
                       <strong>Additional Option:</strong> If applications are still refused, Mr. Rathod also advises taking them to Federal Court for judicial review.
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
                     }}>Get Review</a>
                   </Link>
                 </div>
               </div>
             </div>
             
             <div className="row g-4" style={{ marginTop: '30px' }}>
               {/* Procedural Fairness Letters Card */}
               <div className="col-lg-12">
                 <div style={{
                   backgroundColor: '#ffffff',
                   borderRadius: '8px',
                   padding: '40px',
                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                   border: '1px solid #e0e0e0',
                   textAlign: 'center'
                 }}>
                   <div style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     marginBottom: '25px'
                   }}>
                     <div style={{
                       width: '70px',
                       height: '70px',
                       backgroundColor: '#d4a574',
                       borderRadius: '50%',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       marginRight: '20px'
                     }}>
                       <svg width={35} height={35} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M15 2C8.4 2 3 7.4 3 14s5.4 12 12 12 12-5.4 12-12S21.6 2 15 2zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="white"/>
                         <path d="M12 8h6v2h-6zm0 4h6v2h-6zm0 4h4v2h-4z" fill="white"/>
                         <path d="M8 6h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" fill="none"/>
                       </svg>
                     </div>
                     <h3 style={{ color: '#2c3e50', margin: 0, fontSize: '28px', fontWeight: '600' }}>Procedural Fairness Letters</h3>
                   </div>
                   
                   <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '25px', fontSize: '16px', maxWidth: '800px', margin: '0 auto 25px auto' }}>In certain scenarios, Procedural Fairness Letters are issued to the applicants. For example, if applicants fail to declare their previous refusal of any country in their Canadian visa application, this becomes a reason for issuance of procedural fairness. If the IRCC Officer finds the relationship of two persons to be not genuine, this also becomes a reason for issuance of procedural fairness letter.</p>
                   
                   <div style={{
                     backgroundColor: '#fff8f0',
                     padding: '20px',
                     borderRadius: '8px',
                     border: '1px solid #d4a574',
                     marginBottom: '25px',
                     maxWidth: '600px',
                     margin: '0 auto 25px auto'
                   }}>
                     <p style={{ margin: 0, color: '#8b4513', fontSize: '15px', fontWeight: '500' }}>
                       <strong>Expert Response:</strong> Such letters must be carefully answered. Mr. Rathod analyzes the issues in the letter and prepares the best response on the basis of prevailing laws.
                     </p>
                   </div>
                   
                   <Link href="/contact">
                     <a style={{
                       display: 'inline-block',
                       backgroundColor: '#d4a574',
                       color: 'white',
                       padding: '15px 30px',
                       borderRadius: '5px',
                       textDecoration: 'none',
                       fontSize: '16px',
                       fontWeight: '500',
                       transition: 'background-color 0.3s ease'
                     }}>Get Expert Response</a>
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

export default ImmigrationApplications