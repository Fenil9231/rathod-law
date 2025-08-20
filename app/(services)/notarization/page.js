import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Notarization() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Notarization Services">
                <div>
                    <section className="service-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="service-details__left">
                                        <div className="service-details__img">
                                            <img src="/assets/img/service/service-details-img5.jpg" alt="Notarization Services" />
                                        </div>
                                        <div className="service-details__content">
                                            <h3 className="service-details__title">Notarization Services</h3>
                                            <h4 style={{color: '#1e3a8a', marginBottom: '20px'}}>Notarization of Various Documents</h4>
                                            
                                            <p className="service-details__text-1">
                                                At Rathod Law Professional Corporation, we provide comprehensive notarization services 
                                                for various types of documents. Our qualified notary public ensures that your documents 
                                                are properly notarized according to legal requirements and standards.
                                            </p>
                                            
                                            <h4>What is Notarization?</h4>
                                            <p>
                                                Notarization is the official fraud-deterrent process that assures the parties of a 
                                                transaction that a document is authentic, and can be trusted. It is a three-part process, 
                                                performed by a Notary Public, that includes of vetting, certifying and record-keeping.
                                            </p>
                                            
                                            <div className="service-details__points">
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Invitation Letters</h5>
                                                        <p>Official notarization of invitation letters for visa applications and immigration purposes.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Statutory Declarations</h5>
                                                        <p>Notarization of statutory declarations for legal and administrative purposes.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Affidavits</h5>
                                                        <p>Professional notarization of affidavits for court proceedings and legal matters.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Certified True Copy of Documents</h5>
                                                        <p>Certification of true copies of original documents for official use.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="service-details__process" style={{backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', margin: '30px 0'}}>
                                                <h4 style={{color: '#1e3a8a', marginBottom: '15px'}}>Our Notarization Process</h4>
                                                <ol style={{marginBottom: '0', paddingLeft: '20px'}}>
                                                    <li><strong>Document Review:</strong> We carefully review your documents to ensure they are complete and ready for notarization.</li>
                                                    <li><strong>Identity Verification:</strong> We verify your identity using government-issued photo identification.</li>
                                                    <li><strong>Witness Signing:</strong> We witness your signature and ensure you understand the document's contents.</li>
                                                    <li><strong>Official Seal:</strong> We apply our official notary seal and signature to complete the notarization.</li>
                                                    <li><strong>Record Keeping:</strong> We maintain proper records of all notarizations as required by law.</li>
                                                </ol>
                                            </div>
                                            
                                            <h4>Documents We Notarize</h4>
                                            <ul className="service-details__list">
                                                <li>Invitation Letters for Immigration</li>
                                                <li>Statutory Declarations</li>
                                                <li>Affidavits</li>
                                                <li>Certified True Copies</li>
                                                <li>Power of Attorney Documents</li>
                                                <li>Real Estate Documents</li>
                                                <li>Business Documents</li>
                                                <li>Educational Documents</li>
                                                <li>Travel Documents</li>
                                                <li>Financial Documents</li>
                                            </ul>
                                            
                                            <h4>Why Choose Our Notary Services?</h4>
                                            <div className="service-details__benefits">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul className="service-details__list">
                                                            <li>Qualified and experienced notary public</li>
                                                            <li>Fast and efficient service</li>
                                                            <li>Competitive pricing</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="service-details__list">
                                                            <li>Convenient location</li>
                                                            <li>Professional and confidential service</li>
                                                            <li>Multilingual support</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <p className="service-details__text-2">
                                                Contact us today to schedule an appointment for your notarization needs. We ensure 
                                                that all documents are properly notarized according to legal standards and requirements.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-4 col-lg-5">
                                    <div className="service-details__sidebar">
                                        <div className="service-details__sidebar-service">
                                            <h4 className="service-details__sidebar-service-title">All Services</h4>
                                            <ul className="service-details__sidebar-service-list">
                                                <li><Link href="/paralegal-services">Paralegal Services <span className="icon-right-arrow"></span></Link></li>
                                                <li><Link href="/lawyer-services">Lawyer Services <span className="icon-right-arrow"></span></Link></li>
                                                <li><Link href="/immigration">Immigration <span className="icon-right-arrow"></span></Link></li>
                                                <li><Link href="/family-law">Family Law <span className="icon-right-arrow"></span></Link></li>
                                                <li><Link href="/notarization">Notarization <span className="icon-right-arrow"></span></Link></li>
                                            </ul>
                                        </div>
                                        
                                        <div className="service-details__sidebar-contact">
                                            <div className="service-details__sidebar-contact-bg" style={{backgroundImage: 'url(assets/images/backgrounds/service-details-contact-bg.jpg)'}}></div>
                                            <div className="service-details__sidebar-contact-icon">
                                                <span className="icon-telephone-call"></span>
                                            </div>
                                            <h4 className="service-details__sidebar-contact-title">Need Notary Services?</h4>
                                            <p className="service-details__sidebar-contact-sub-title">Call us to schedule</p>
                                            <div className="service-details__sidebar-contact-number">
                                                <Link href="tel:(416) 900-9009">(416) 900-9009</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}