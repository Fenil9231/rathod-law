import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function LawyerServices() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Lawyer Services & Price List">
                <div>
                    <section className="service-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="service-details__left">
                                        <div className="service-details__img">
                                            <img src="assets/images/services/service-details-img-1.jpg" alt="" />
                                        </div>
                                        <div className="service-details__content">
                                            <h3 className="service-details__title">Practice Areas & Price List</h3>
                                            <p className="service-details__text-1">
                                                At Rathod Law Professional Corporation, we provide comprehensive legal services 
                                                across multiple practice areas. Our experienced legal team is committed to 
                                                delivering professional and personalized legal solutions.
                                            </p>
                                            
                                            <h4>Our Practice Areas</h4>
                                            <div className="service-details__points">
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Immigration Law</h5>
                                                        <p>Comprehensive immigration services including judicial reviews, refugee appeals, and immigration applications.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Family Law</h5>
                                                        <p>Divorce applications, child custody issues, spousal support, and property division matters.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Legal Consultation</h5>
                                                        <p>Professional legal advice and consultation services for various legal matters.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="service-details__consultation">
                                                <div className="service-details__consultation-bg" style={{backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '10px', marginTop: '30px'}}>
                                                    <h4 style={{color: '#1e3a8a', marginBottom: '20px'}}>Call Us for Consultation</h4>
                                                    <p style={{marginBottom: '15px'}}>
                                                        We charge a Consultation Fee of <strong>$150</strong> for initial advice for Immigration Cases 
                                                        and a Fee of <strong>$200</strong> for initial advice for Family Law Cases.
                                                    </p>
                                                    <div className="service-details__consultation-contact">
                                                        <div className="service-details__consultation-phone">
                                                            <span className="icon-telephone-call" style={{marginRight: '10px', color: '#1e3a8a'}}></span>
                                                            <Link href="tel:(416) 900-9009" style={{fontSize: '18px', fontWeight: 'bold', color: '#1e3a8a'}}>(416) 900-9009</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <h4 style={{marginTop: '40px'}}>Why Choose Rathod Law?</h4>
                                            <ul className="service-details__list">
                                                <li>Experienced legal professionals</li>
                                                <li>Personalized attention to each case</li>
                                                <li>Transparent pricing structure</li>
                                                <li>Comprehensive legal services</li>
                                                <li>Multilingual support</li>
                                                <li>Proven track record of success</li>
                                            </ul>
                                            
                                            <p className="service-details__text-2">
                                                Our team is dedicated to providing you with the highest quality legal representation. 
                                                Contact us today to schedule your consultation and discuss your legal needs.
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
                                            <h4 className="service-details__sidebar-contact-title">Need Legal Help?</h4>
                                            <p className="service-details__sidebar-contact-sub-title">Call us for consultation</p>
                                            <div className="service-details__sidebar-contact-number">
                                                <div style={{marginBottom: '10px'}}>
                                                    <strong>Brampton Office:</strong><br/>
                                                    <Link href="tel:(905) 793-7900">(905) 793-7900</Link><br/>
                                                    <small>Mon-Fri: 9:00 AM - 6:00 PM</small>
                                                </div>
                                                <div>
                                                    <strong>Scarborough Office:</strong><br/>
                                                    <Link href="tel:(416) 298-3055">(416) 298-3055</Link><br/>
                                                    <small>Mon-Fri: 9:00 AM - 6:00 PM</small>
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