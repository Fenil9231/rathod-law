import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Immigration() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Immigration Services">
                <div>
                    <section className="service-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="service-details__left">
                                        <div className="service-details__img">
                                            <img src="/assets/img/service/service-details-img4.jpg" alt="Immigration Services" />
                                        </div>
                                        <div className="service-details__content">
                                            <h3 className="service-details__title">Immigration Appeals</h3>
                                            <h4 style={{color: '#1e3a8a', marginBottom: '20px'}}>Judicial Reviews - Spousal Sponsorship Appeals - Refugee Claim Appeals</h4>
                                            
                                            <p className="service-details__text-1">
                                                A lot of people are unaware of the fact that their refused visa application can be appealed 
                                                to the Federal Court of Canada. When applications are refused, often people apply for the 
                                                second time and if they face repeated refusals, they stop doing further applications and 
                                                do not seek legal avenues available to them.
                                            </p>
                                            
                                            <h4>Judicial Review Applications</h4>
                                            <p>
                                                Any kind of application as noted below can be appealed to the Federal Court of Canada. 
                                                This appeal is called "Judicial Reviews". If you believe that you have provided sufficient 
                                                information and you qualify for this application and still the visa officer has refused 
                                                the application, you may apply to the Federal Court of Canada to have your application 
                                                judicially reviewed.
                                            </p>
                                            
                                            <div className="service-details__points">
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Visitor Visa Applications</h5>
                                                        <p>Appeal refused visitor visa applications through judicial review process.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Work Permit Applications</h5>
                                                        <p>Challenge refused work permit decisions at the Federal Court level.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Study Permit Applications</h5>
                                                        <p>Appeal refused study permit applications through proper legal channels.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Permanent Residence Applications</h5>
                                                        <p>Challenge refused permanent residence decisions through judicial review.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Refugee Applications</h5>
                                                        <p>Appeal refused refugee claims and provide comprehensive legal support.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Spousal Work Permit Applications</h5>
                                                        <p>Challenge refused spousal work permit decisions effectively.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="service-details__process-info" style={{backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', margin: '30px 0'}}>
                                                <h4 style={{color: '#1e3a8a', marginBottom: '15px'}}>Our Process</h4>
                                                <p style={{marginBottom: '10px'}}>
                                                    At Rathod Law Firm, we process Judicial Review Applications with typical processing 
                                                    time of approximately <strong>6 to 10 months</strong>. Upon successful appeal at the 
                                                    Federal Court of Canada, the Immigration, Refugees and Citizenship Canada (IRCC) 
                                                    reopens the refused application and have it assessed by a different and independent officer.
                                                </p>
                                                <p style={{marginBottom: '0'}}>
                                                    Judicial Reviews are helpful typically in repeated refusals.
                                                </p>
                                            </div>
                                            
                                            <h4>Mandamus Applications</h4>
                                            <p>
                                                Certain immigration applications take longer than usual. If you think that your application 
                                                has surpassed the suggested processing time on IRCC's website and you think that this delay 
                                                is unreasonable, you may file a Writ of Mandamus at the Federal Court of Canada to have 
                                                this application processed.
                                            </p>
                                            
                                            <p className="service-details__text-2">
                                                Upon successful Mandamus Application at the Federal Court of Canada, the Court directs 
                                                the IRCC to process the application in a specific timeline.
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