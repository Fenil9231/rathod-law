import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import Breadcrumb from '../common/Breadcrumb'
import InfoSection from '../common/InfoSection'
import Layout from '../components/layout/Layout'
import PracticeTestimonial from '../components/testimonial/PracticeTestimonial'

const customStyles = {
  singlePracticeArea: {
    background: '#fff',
    borderRadius: '10px',
    padding: '40px 30px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    height: '100%',
    border: '1px solid #f0f0f0'
  },
  practiceAreaIcon: {
    width: '70px',
    height: '70px',
    background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25px'
  },
  featureList: {
    marginBottom: '20px'
  },
  featureListUl: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  featureListLi: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    fontSize: '14px'
  },
  processSteps: {
    marginBottom: '25px'
  },
  stepItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px'
  },
  stepNumber: {
    width: '30px',
    height: '30px',
    background: '#B8860B',
    color: '#fff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    marginRight: '15px',
    flexShrink: 0
  },
  stepContent: {
    flex: 1
  },
  highlightInfo: {
    background: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    borderLeft: '4px solid #B8860B',
    marginBottom: '25px'
  }
};

function ImmigrationAppeals() {
  return (
    <>
      <Head>
        <title>Immigration Appeals - Judicial Reviews & Mandamus Applications | Rathod Law</title>
        <meta name="description" content="Expert immigration appeals services including judicial reviews and mandamus applications for refused visa applications at Federal Court of Canada. Professional legal representation by Rathod Law." />
        <meta name="keywords" content="immigration appeals, judicial review, mandamus applications, Federal Court Canada, visa refusal, immigration lawyer Ontario" />
      </Head>
      
      <Layout>
        <Breadcrumb title="Immigration Appeals" pageName="Immigration Appeals" />
        <div className="practice-area-section pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title1 text-center" style={{
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  padding: '60px 40px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                  border: '1px solid #f0f0f0',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)'
                }}>
                  <h2>Immigration Appeals & Judicial Reviews</h2>
                  <p style={{
                    color: '#666',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    marginBottom: '0',
                    maxWidth: '900px',
                    margin: '0 auto'
                  }}>Many people are unaware that their refused visa application can be appealed to the Federal Court of Canada. When immigration applications are refused, often people apply for the second time and if they face repeated refusals, they stop doing further applications and do not seek legal avenues available to them. Our experienced immigration lawyers provide expert representation for judicial reviews, mandamus applications, and Federal Court appeals to challenge negative immigration decisions and unreasonable processing delays.</p>
                  <div style={{
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(135deg, #DEA057 0%, #B8860B 100%)',
                    margin: '30px auto 0',
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
                        <path d="M15 12h8v2h-8zm0 4h8v2h-8zm0 4h8v2h-8z"/>
                        <path d="M26 18l-4 4-2-2" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <Link href="/immigration-appeals"><a className="eg-btn btn--primary btn--outline btn--sm capsule">Federal Court</a></Link>
                    </div>
                    <h4><Link href="/immigration-appeals"><a>Judicial Review Applications</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Appeal refused immigration applications to the Federal Court of Canada through judicial reviews. When visa officers refuse applications despite sufficient documentation, judicial reviews provide legal recourse. Our experienced lawyers handle Federal Court appeals with typical processing times of 6-10 months, helping clients achieve independent reassessment of their cases.</p>
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
                        <path d="M19 8c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2s2-0.9 2-2v-8c0-1.1-0.9-2-2-2z"/>
                        <circle cx="19" cy="26" r="2"/>
                      </svg>
                      <Link href="/immigration-appeals"><a className="eg-btn btn--primary btn--outline style-2 btn--sm capsule">Processing Delays</a></Link>
                    </div>
                    <h4><Link href="/immigration-appeals"><a>Mandamus Applications</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Address unreasonable immigration processing delays through Mandamus applications at the Federal Court of Canada. When applications exceed IRCC&apos;s suggested processing times, our legal team files Writ of Mandamus to compel timely processing. Upon successful application, the Federal Court directs IRCC to process within specific timelines.</p>
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
                      <Link href="/immigration-applications"><a className="eg-btn btn--primary btn--outline btn--sm capsule">Visa Applications</a></Link>
                    </div>
                    <h4><Link href="/immigration-applications"><a>Related Immigration Services</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Comprehensive immigration application services including work permits, study permits, visitor visas, and permanent residence applications.</p>
                    <Link href="/immigration-applications" className="details-btn"><a className="details-btn">Learn More</a></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single sibling1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.8s">
                  <div className="header">
                    <div className="icon-area">
                      <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 2C9.6 2 2 9.6 2 19s7.6 17 17 17 17-7.6 17-17S28.4 2 19 2zm0 30c-7.2 0-13-5.8-13-13S11.8 6 19 6s13 5.8 13 13-5.8 13-13 13z"/>
                        <path d="M14 12h10v2H14zm0 4h10v2H14zm0 4h6v2h-6z"/>
                        <path d="M26 18l-4 4-2-2" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <Link href="/refugee-appeals"><a className="eg-btn btn--primary btn--outline style-2 btn--sm capsule">Protection Claims</a></Link>
                    </div>
                    <h4><Link href="/refugee-appeals"><a>Refugee Appeals</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Comprehensive legal assistance for refugee claims, protection applications, and appeals to the Refugee Appeal Division.</p>
                    <Link href="/refugee-appeals" className="details-btn"><a className="details-btn">Learn More</a></Link>
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
                      <Link href="/family-law"><a className="eg-btn btn--primary btn--outline btn--sm capsule">Family Matters</a></Link>
                    </div>
                    <h4><Link href="/family-law"><a>Family Law Services</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Expert legal services for family sponsorship, divorce applications, separation agreements, and child custody matters.</p>
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
                        <path d="M15 12h8v2h-8zm0 4h8v2h-8zm0 4h8v2h-8zm0 4h5v2h-5z"/>
                        <path d="M26 20l-3 3-1.5-1.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <Link href="/notarization"><a className="eg-btn btn--primary btn--outline style-2 btn--sm capsule">Document Authentication</a></Link>
                    </div>
                    <h4><Link href="/notarization"><a>Notarization Services</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Professional notarization and document authentication services for affidavits, certified copies, and international documents.</p>
                    <Link href="/notarization" className="details-btn"><a className="details-btn">Learn More</a></Link>
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
                  <h2>Understanding Your Legal Options</h2>
                  <p>Comprehensive guide to Federal Court appeals and immigration application processing</p>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-6">
                <div style={{...customStyles.singlePracticeArea, minHeight: '480px'}}>
                  <div style={customStyles.practiceAreaIcon}>
                    <svg width="35" height="35" fill="#fff" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3"><Link href="/contact"><a style={{color: '#333', textDecoration: 'none'}}>Judicial Review Applications</a></Link></h4>
                    <p className="mb-3">Appeal refused visa applications to the Federal Court of Canada through judicial reviews.</p>
                    
                    <div style={customStyles.featureList}>
                      <h6 className="mb-2" style={{color: '#B8860B', fontWeight: '600', fontSize: '14px'}}>Appealable Applications:</h6>
                      <ul style={{...customStyles.featureListUl, fontSize: '13px'}}>
                        <li style={{...customStyles.featureListLi, marginBottom: '4px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> Visitor & Work Permits</li>
                        <li style={{...customStyles.featureListLi, marginBottom: '4px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> Study Permits</li>
                        <li style={{...customStyles.featureListLi, marginBottom: '4px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> Permanent Residence</li>
                        <li style={{...customStyles.featureListLi, marginBottom: '4px'}}><i className="bi bi-check-circle" style={{color: '#B8860B', marginRight: '8px', fontSize: '12px'}}></i> Refugee Applications</li>
                      </ul>
                    </div>
                    
                    <p className="mb-3" style={{fontSize: '14px'}}>When applications are refused repeatedly, judicial reviews provide a legal avenue for appeal to an independent Federal Court.</p>
                    
                    <div style={{...customStyles.highlightInfo, padding: '15px', marginBottom: '20px'}}>
                      <h6 style={{color: '#B8860B', marginBottom: '8px', fontSize: '14px'}}>Processing Time: 6-10 months</h6>
                      <p style={{marginBottom: 0, fontSize: '13px'}}>Upon successful appeal, IRCC reopens the application for independent assessment.</p>
                    </div>
                    
                    <Link href="/contact">
                      <a className="eg-btn btn--primary btn--sm">Get Consultation</a>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div style={{...customStyles.singlePracticeArea, minHeight: '480px'}}>
                  <div style={customStyles.practiceAreaIcon}>
                    <svg width="35" height="35" fill="#fff" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3"><Link href="/contact"><a style={{color: '#333', textDecoration: 'none'}}>Mandamus Applications</a></Link></h4>
                    <p className="mb-3">Address unreasonable processing delays through Federal Court intervention.</p>
                    
                    <div style={{...customStyles.processSteps, marginBottom: '20px'}}>
                      <div style={{...customStyles.stepItem, marginBottom: '12px'}}>
                        <span style={{...customStyles.stepNumber, width: '25px', height: '25px', fontSize: '12px'}}>1</span>
                        <div style={customStyles.stepContent}>
                          <h6 style={{marginBottom: '4px', fontSize: '14px', fontWeight: '600'}}>Identify Delays</h6>
                          <p style={{marginBottom: 0, fontSize: '13px', color: '#666'}}>Determine if processing time exceeds IRCC standards.</p>
                        </div>
                      </div>
                      
                      <div style={{...customStyles.stepItem, marginBottom: '12px'}}>
                        <span style={{...customStyles.stepNumber, width: '25px', height: '25px', fontSize: '12px'}}>2</span>
                        <div style={customStyles.stepContent}>
                          <h6 style={{marginBottom: '4px', fontSize: '14px', fontWeight: '600'}}>File Application</h6>
                          <p style={{marginBottom: 0, fontSize: '13px', color: '#666'}}>Submit Writ of Mandamus to Federal Court.</p>
                        </div>
                      </div>
                      
                      <div style={{...customStyles.stepItem, marginBottom: '12px'}}>
                        <span style={{...customStyles.stepNumber, width: '25px', height: '25px', fontSize: '12px'}}>3</span>
                        <div style={customStyles.stepContent}>
                          <h6 style={{marginBottom: '4px', fontSize: '14px', fontWeight: '600'}}>Court Direction</h6>
                          <p style={{marginBottom: 0, fontSize: '13px', color: '#666'}}>Court directs IRCC to process within timeline.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div style={{...customStyles.highlightInfo, padding: '15px', marginBottom: '20px'}}>
                      <h6 style={{color: '#B8860B', marginBottom: '8px', fontSize: '14px'}}>Expert Legal Assistance</h6>
                      <p style={{marginBottom: 0, fontSize: '13px'}}>Our experienced lawyers navigate the Mandamus process effectively for timely resolution.</p>
                    </div>
                    
                    <Link href="/contact">
                      <a className="eg-btn btn--primary btn--sm">Get Legal Assistance</a>
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

export default ImmigrationAppeals