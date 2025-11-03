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
                                    <div className="sidebar">
                                        <div className="sidebar__single sidebar__services" style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', borderRadius: '8px', marginBottom: '20px'}}>
                                            <div style={{backgroundColor: '#1a365d', color: 'white', padding: '15px', borderRadius: '8px 8px 0 0'}}>
                                                <h4 className="sidebar__title" style={{margin: '0', color: 'white'}}>All Services</h4>
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
                                            <div style={{background: 'linear-gradient(135deg, #1a3693 0%, #1a365d 100%)', padding: '30px', position: 'relative'}}>
                                                <div style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)'}}></div>
                                                <div style={{position: 'relative', zIndex: '2'}}>
                                                    <h4 className="sidebar__contact-title" style={{color: '#d4af37', marginBottom: '15px', fontSize: '1.5rem', fontWeight: 'bold'}}>Need Notary Services?</h4>
                                                    <p className="sidebar__contact-sub-title" style={{color: 'white', marginBottom: '20px', opacity: '0.9'}}>Call us to schedule</p>
                                                    <div className="sidebar__contact-number" style={{background: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.3)'}}>
                                                        <Link href="tel:(416) 900-9009" style={{color: 'white', textDecoration: 'none', fontSize: '1.3rem', fontWeight: '700'}}>(416) 900-9009</Link>
                                                    </div>
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
        </>
    )
}