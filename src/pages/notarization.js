import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import Breadcrumb from '../common/Breadcrumb'
import InfoSection from '../common/InfoSection'
import Layout from '../components/layout/Layout'
import PracticeTestimonial from '../components/testimonial/PracticeTestimonial'

function Notarization() {
  return (
    <>
      <Head>
        <title>Notarization Services - Document Authentication & Certification | Rathod Law</title>
        <meta name="description" content="Professional notarization services in Ontario. Expert document authentication, certification, and notarial services for legal documents, affidavits, and international use." />
        <meta name="keywords" content="notarization services Ontario, document authentication, notary public, document certification, affidavits, apostille, legal document notarization" />
      </Head>
      
      <Layout>
        <Breadcrumb title="Notarization Services" pageName="Notarization Services" />
        <div className="practice-area-section pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <div className="section-title1 text-center">
                  <h2>Professional Notarization Services</h2>
                  <p>Authorized notary public services in Ontario providing comprehensive document authentication, certification, and notarization for individuals and businesses. We offer reliable, efficient, and legally compliant notarial services for all your document certification needs, including affidavits, certified copies, and international document authentication.</p>
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
                      <Link href="/notarization"><a className="eg-btn btn--primary btn--outline btn--sm capsule">Document Authentication</a></Link>
                    </div>
                    <h4><Link href="/notarization"><a>Document Authentication</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Expert authentication and notarization of legal documents, contracts, agreements, and official papers. We provide proper notarial certification for domestic use and international requirements with official notary seal and signature.</p>
                    <Link href="/contact" className="details-btn"><a className="details-btn">Get Service</a></Link>
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
                      <Link href="/notarization"><a className="eg-btn btn--primary btn--outline style-2 btn--sm capsule">Affidavits & Oaths</a></Link>
                    </div>
                    <h4><Link href="/notarization"><a>Affidavits & Sworn Statements</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Professional administration of oaths and affirmations for affidavits, sworn statements, and statutory declarations. We provide proper legal witnessing, certification, and notarization with official notary seal for legal validity.</p>
                    <Link href="/contact" className="details-btn"><a className="details-btn">Get Service</a></Link>
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
                      <Link href="/notarization"><a className="eg-btn btn--primary btn--outline btn--sm capsule">Certified Copies</a></Link>
                    </div>
                    <h4><Link href="/notarization"><a>Certified True Copies</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Official certification of true copies for original documents including passports, birth certificates, diplomas, transcripts, marriage certificates, and other important personal and business documents with notary seal and signature.</p>
                    <Link href="/contact" className="details-btn"><a className="details-btn">Get Service</a></Link>
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
                      <Link href="/notarization"><a className="eg-btn btn--primary btn--outline style-2 btn--sm capsule">International Documents</a></Link>
                    </div>
                    <h4><Link href="/notarization"><a>International Document Services</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Specialized notarization services for international document use, including preparation for apostille certification, embassy legalization, and authentication requirements for foreign jurisdictions and international legal proceedings.</p>
                    <Link href="/contact" className="details-btn"><a className="details-btn">Get Service</a></Link>
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
                      <Link href="/notarization"><a className="eg-btn btn--primary btn--outline btn--sm capsule">Business Documents</a></Link>
                    </div>
                    <h4><Link href="/notarization"><a>Business Document Notarization</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Comprehensive business document notarization including corporate contracts, board resolutions, powers of attorney, commercial agreements, and other business-related documents requiring notarial certification and authentication.</p>
                    <Link href="/contact" className="details-btn"><a className="details-btn">Get Service</a></Link>
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
                      <Link href="/immigration-applications"><a className="eg-btn btn--primary btn--outline style-2 btn--sm capsule">Immigration Services</a></Link>
                    </div>
                    <h4><Link href="/immigration-applications"><a>Immigration Applications</a></Link></h4>
                  </div>
                  <div className="body">
                    <p>Comprehensive immigration application services including study permits, work permits, visitor visas, and permanent residence applications.</p>
                    <Link href="/immigration-applications" className="details-btn"><a className="details-btn">Learn More</a></Link>
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

export default Notarization