import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function FamilyLaw() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Family Law">
                <div>
                    <section className="service-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="service-details__left">
                                        <div className="service-details__img">
                                            <img src="/assets/img/service/service-details-img1.jpg" alt="Family Law Services" />
                                        </div>
                                        <div className="service-details__content">
                                            <h3 className="service-details__title">Family Law</h3>
                                            <h4 style={{color: '#1e3a8a', marginBottom: '20px'}}>Divorce Applications - Child Custody Issues - Spousal Support Issues</h4>
                                            
                                            <p className="service-details__text-1">
                                                Getting separated is an unfortunate event in anyone's life. A couple faces issues of 
                                                Properties, Income, Support and Children in such an unfortunate event. At Rathod Law Firm, 
                                                we take special care of the issues that revolve around your separation with your spouse. 
                                                Further, in such events, custody of the children, spousal support and property equalization 
                                                becomes issues at centre. We carefully analyze the issues that you are facing and provide 
                                                guidance based on current law.
                                            </p>
                                            
                                            <h4>Divorce Applications</h4>
                                            <p>
                                                The divorce process in Canada involves several steps and can vary depending on individual 
                                                circumstances. Here's a general overview of how it works:
                                            </p>
                                            
                                            <div className="service-details__points">
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Eligibility for Divorce</h5>
                                                        <p>At least one spouse must have lived in Canada for at least one year before filing for divorce. The primary grounds for divorce in Canada is the breakdown of the marriage.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Filing for Divorce</h5>
                                                        <p>You'll need to fill out divorce forms, which can be obtained from the court or online through the government's website. The forms generally include a divorce application and an affidavit.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Serving Documents</h5>
                                                        <p>After completing the forms, you must serve them to your spouse. This means delivering copies of the documents to your spouse in person or through an authorized process server.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Court Proceedings</h5>
                                                        <p>If both spouses agree on all terms, the process is straightforward. If there are disputes, the case may go to court with hearings where each party presents their case.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Finalizing the Divorce</h5>
                                                        <p>Before the court grants the divorce, spouses may need to draft and agree on a separation agreement. The court will issue a divorce order and you will receive a Certificate of Divorce.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <h4>Grounds for Divorce</h4>
                                            <p>The breakdown of marriage can be established in three ways:</p>
                                            <ul className="service-details__list">
                                                <li><strong>Separation for One Year:</strong> The spouses have been living apart for at least one year.</li>
                                                <li><strong>Adultery:</strong> One spouse has committed adultery.</li>
                                                <li><strong>Cruelty:</strong> One spouse has treated the other with physical or mental cruelty.</li>
                                            </ul>
                                            
                                            <div className="service-details__additional-info" style={{backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', margin: '30px 0'}}>
                                                <h4 style={{color: '#1e3a8a', marginBottom: '15px'}}>Additional Considerations</h4>
                                                <ul style={{marginBottom: '0'}}>
                                                    <li><strong>Legal Advice:</strong> It's advisable to consult a lawyer to understand your rights and obligations, especially in contested cases.</li>
                                                    <li><strong>Mediation and Counseling:</strong> Mediation services can help resolve disputes amicably and may be required in some jurisdictions.</li>
                                                    <li><strong>Property Division and Support:</strong> Ensure that all terms regarding property division, spousal support, and child support are implemented properly.</li>
                                                </ul>
                                            </div>
                                            
                                            <h4>Our Family Law Services Include:</h4>
                                            <ul className="service-details__list">
                                                <li>Divorce Applications</li>
                                                <li>Child Custody and Access</li>
                                                <li>Spousal Support</li>
                                                <li>Child Support</li>
                                                <li>Property Division</li>
                                                <li>Separation Agreements</li>
                                                <li>Adoption Proceedings</li>
                                                <li>Domestic Contracts</li>
                                            </ul>
                                            
                                            <p className="service-details__text-2">
                                                Divorce processes can differ based on the province or territory, so checking local 
                                                requirements and seeking legal advice is essential. Our experienced family law team 
                                                is here to guide you through this difficult time with compassion and expertise.
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
                                                    <h4 className="sidebar__contact-title" style={{color: '#d4af37', marginBottom: '15px', fontSize: '1.5rem', fontWeight: 'bold'}}>Need Legal Help?</h4>
                                                    <p className="sidebar__contact-sub-title" style={{color: 'white', marginBottom: '20px', opacity: '0.9'}}>Call us for consultation</p>
                                                    <div className="sidebar__contact-offices" style={{background: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.3)'}}>
                                                        <div style={{marginBottom: '15px'}}>
                                                            <strong style={{color: '#d4af37'}}>Brampton Office:</strong><br/>
                                                            <Link href="tel:(905) 793-7900" style={{color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600'}}>(905) 793-7900</Link><br/>
                                                            <small style={{color: 'rgba(255, 255, 255, 0.8)'}}>Mon-Fri: 9:00 AM - 6:00 PM</small>
                                                        </div>
                                                        <div>
                                                            <strong style={{color: '#d4af37'}}>Scarborough Office:</strong><br/>
                                                            <Link href="tel:(416) 298-3055" style={{color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600'}}>(416) 298-3055</Link><br/>
                                                            <small style={{color: 'rgba(255, 255, 255, 0.8)'}}>Mon-Fri: 9:00 AM - 6:00 PM</small>
                                                        </div>
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