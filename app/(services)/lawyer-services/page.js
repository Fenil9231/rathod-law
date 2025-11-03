import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
  title: "Lawyer Services & Pricing - Immigration, Family Law & More | Rathod Law",
  description: "Professional lawyer services including immigration appeals, family law, judicial reviews, spousal sponsorship appeals, and refugee claims. Transparent pricing and experienced legal representation.",
  keywords: "lawyer services ontario, immigration appeals, family law, judicial review, spousal sponsorship, refugee claims, legal pricing, immigration lawyer",
  openGraph: {
    title: "Lawyer Services & Pricing - Immigration, Family Law & More | Rathod Law",
    description: "Professional lawyer services including immigration appeals, family law, judicial reviews, spousal sponsorship appeals, and refugee claims. Transparent pricing and experienced legal representation.",
    type: "website",
    url: "https://rathodlaw.com/lawyer-services"
  }
};

export default function LawyerServices() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Lawyer Services & Price List">
                <div style={{backgroundColor: '#f8f9fa', minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px'}}>
                    <section className="service-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="service-details__left" style={{backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)', padding: '40px', marginBottom: '30px'}}>
                                        <div className="service-details__img" style={{borderRadius: '8px', overflow: 'hidden', marginBottom: '30px'}}>
                                            <img src="/assets/img/service/service-details-img2.jpg" alt="Lawyer Services" style={{width: '100%', height: 'auto'}} />
                                        </div>
                                        <div className="service-details__content">
                                            <div style={{textAlign: 'center', marginBottom: '40px', padding: '30px', backgroundColor: '#1a365d', borderRadius: '8px'}}>
                                                <h3 className="service-details__title" style={{color: '#d4af37', fontSize: '2.5rem', fontWeight: 'bold', margin: '0'}}>Lawyer Services & Price List</h3>
                                            </div>
                            <p className="service-details__text-1">
                                At Rathod Law Firm, we provide comprehensive legal services across multiple practice areas. 
                                Our experienced legal team, led by Kapil Rathod, is committed to delivering professional 
                                and personalized legal solutions with over 13 years of experience in Canadian law.
                            </p>
                            
                            <div style={{padding: '25px', borderBottom: '3px solid #d4af37', marginBottom: '25px'}}>
                                <h4 style={{color: '#1a365d', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '15px'}}>Immigration Appeals</h4>
                                <p style={{color: '#666', fontSize: '1.1rem', fontWeight: '600', margin: '0'}}><strong>Judicial Reviews - Spousal Sponsorship Appeals - Refugee Claim Appeals</strong></p>
                            </div>
                            
                            <h5>Judicial Review Applications:</h5>
                            <p>Many people are unaware that their refused visa application can be appealed to the Federal Court of Canada. We handle judicial reviews for:</p>
                            <ul className="service-details__list">
                                <li>Visitor Visa Applications</li>
                                <li>Work Permit Applications</li>
                                <li>Study Permit Applications</li>
                                <li>Permanent Residence Applications</li>
                                <li>Refugee Applications</li>
                                <li>Spousal Work Permit Applications</li>
                            </ul>
                            <p>When applications are refused, we can appeal to the Federal Court of Canada through "Judicial Reviews". 
                            Typical processing time is approximately 6 to 10 months. Upon successful appeal, IRCC reopens 
                            the refused application for assessment by a different officer.</p>
                            
                            <h5>Mandamus Applications:</h5>
                            <p>If your immigration application has surpassed the suggested processing time and you believe 
                            the delay is unreasonable, you may file a Writ of Mandamus at the Federal Court of Canada. 
                            Upon successful application, the Court directs IRCC to process the application within a specific timeline.</p>
                            
                            <div style={{padding: '25px', borderBottom: '3px solid #d4af37', marginBottom: '25px', marginTop: '40px'}}>
                                <h4 style={{color: '#1a365d', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '15px'}}>Immigration Applications</h4>
                                <p style={{color: '#666', fontSize: '1.1rem', fontWeight: '600', margin: '0'}}><strong>Student Visa - Work Permit - LMIA Applications - Visitor Visa - Refugee Claims - Permanent Residence Applications - Spousal Sponsorships</strong></p>
                            </div>
                            
                            <div className="service-details__points">
                                <div className="service-details__points-single">
                                    <div className="service-details__points-icon">
                                        <i className="icon-check"></i>
                                    </div>
                                    <div className="service-details__points-text">
                                        <h5>Student Visa</h5>
                                        <p>We provide strong attention to candidate profile assessment, appropriate course selection, 
                                        compelling Statement of Purpose (SOP), and convincing submission letters.</p>
                                    </div>
                                </div>
                                
                                <div className="service-details__points-single">
                                    <div className="service-details__points-icon">
                                        <i className="icon-check"></i>
                                    </div>
                                    <div className="service-details__points-text">
                                        <h5>Work Permit</h5>
                                        <p>Whether Spousal Open Work Permit or LMIA-based work permit, we pay complete attention to details. 
                                        Mr. Rathod has processed over 2,500 Spousal Open Work Permit applications in 13 years of practice.</p>
                                    </div>
                                </div>
                                
                                <div className="service-details__points-single">
                                    <div className="service-details__points-icon">
                                        <i className="icon-check"></i>
                                    </div>
                                    <div className="service-details__points-text">
                                        <h5>Visitor Visa & Super Visa</h5>
                                        <p>We establish strong ties to home country and prepare detailed submission and invitation letters 
                                        to convince visa officers of the applicant's return.</p>
                                    </div>
                                </div>
                                
                                <div className="service-details__points-single">
                                    <div className="service-details__points-icon">
                                        <i className="icon-check"></i>
                                    </div>
                                    <div className="service-details__points-text">
                                        <h5>Refugee Claims</h5>
                                        <p>We prepare detailed submissions demonstrating fear of persecution and attend hearings 
                                        at the Refugee Protection Division, Refugee Appeal Division, and Federal Court appeals.</p>
                                    </div>
                                </div>
                                
                                <div className="service-details__points-single">
                                    <div className="service-details__points-icon">
                                        <i className="icon-check"></i>
                                    </div>
                                    <div className="service-details__points-text">
                                        <h5>Permanent Residence Applications</h5>
                                        <p>We navigate Express Entry and Provincial Nominee programs, ensuring candidates actually qualify 
                                        and advising on the best possible paths to permanent residence.</p>
                                    </div>
                                </div>
                                
                                <div className="service-details__points-single">
                                    <div className="service-details__points-icon">
                                        <i className="icon-check"></i>
                                    </div>
                                    <div className="service-details__points-text">
                                        <h5>Spousal Sponsorships</h5>
                                        <p>We pay specific attention to detail in spousal sponsorship applications, presenting relationships 
                                        convincingly so applicants typically avoid interviews.</p>
                                    </div>
                                </div>
                                
                                <div className="service-details__points-single">
                                    <div className="service-details__points-icon">
                                        <i className="icon-check"></i>
                                    </div>
                                    <div className="service-details__points-text">
                                        <h5>Refused Visa Applications</h5>
                                        <p>Mr. Rathod specializes in previously refused applications, accurately identifying key issues, 
                                        suggesting additional documents, and resubmitting with convincing submission letters.</p>
                                    </div>
                                </div>
                                
                                <div className="service-details__points-single">
                                    <div className="service-details__points-icon">
                                        <i className="icon-check"></i>
                                    </div>
                                    <div className="service-details__points-text">
                                        <h5>Procedural Fairness Letters</h5>
                                        <p>We carefully analyze and respond to procedural fairness letters, preparing the best response 
                                        based on prevailing laws and specific circumstances.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{padding: '25px', borderBottom: '3px solid #d4af37', marginBottom: '25px', marginTop: '40px'}}>
                                <h4 style={{color: '#1a365d', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '15px'}}>Family Law</h4>
                                <p style={{color: '#666', fontSize: '1.1rem', fontWeight: '600', margin: '0'}}><strong>Divorce Applications - Child Custody Issues - Spousal Support Issues</strong></p>
                            </div>
                            
                            <h5>Divorce Applications:</h5>
                            <p>Getting separated is an unfortunate event in anyone's life. At Rathod Law Firm, we take special care 
                            of the issues that revolve around your separation, including properties, income, support, and children. 
                            We carefully analyze your situation and provide guidance based on current law.</p>
                            
                            <p><strong>The divorce process in Canada involves several key steps:</strong></p>
                            <ul className="service-details__list">
                                <li><strong>Eligibility:</strong> At least one spouse must have lived in Canada for one year before filing</li>
                                <li><strong>Grounds for Divorce:</strong> Separation for one year, adultery, or cruelty</li>
                                <li><strong>Filing Process:</strong> Complete divorce forms and affidavits with marriage and separation details</li>
                                <li><strong>Serving Documents:</strong> Deliver copies to your spouse through authorized process</li>
                                <li><strong>Court Proceedings:</strong> Uncontested or contested divorce depending on agreement</li>
                                <li><strong>Separation Agreement:</strong> Outline property division, custody, and support arrangements</li>
                                <li><strong>Divorce Order:</strong> Court issues final divorce order and Certificate of Divorce</li>
                            </ul>
                            
                            <p>We handle all aspects of family law including child custody, spousal support, and property equalization. 
                            Our team provides guidance through mediation and court proceedings to achieve fair resolutions.</p>
                            
                            <div style={{padding: '25px', borderBottom: '3px solid #d4af37', marginBottom: '25px', marginTop: '40px'}}>
                                <h4 style={{color: '#1a365d', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '15px'}}>Refugee Appeals</h4>
                                <p style={{color: '#666', fontSize: '1.1rem', fontWeight: '600', margin: '0'}}><strong>How Does a Refugee Claim Work in Canada?</strong></p>
                            </div>
                            
                            <p>The refugee claim process involves several critical steps that we guide you through:</p>
                            <ul className="service-details__list">
                                <li><strong>Arrival in Canada:</strong> Make your claim at a port of entry or IRCC office</li>
                                <li><strong>Initial Screening:</strong> Eligibility assessment and documentation review</li>
                                <li><strong>Refugee Hearing:</strong> Present your case before the Refugee Protection Division</li>
                                <li><strong>Decision Process:</strong> Positive decisions lead to permanent residence applications</li>
                                <li><strong>Appeals:</strong> We handle appeals for negative decisions at various levels</li>
                            </ul>
                            
                            <p>We prepare detailed evidence demonstrating fear of persecution and provide representation 
                            throughout the entire process, from initial claim to potential Federal Court appeals.</p>
                            
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
                                                            <div style={{marginBottom: '10px'}}>
                                                                <strong style={{color: '#1e3a8a'}}>Brampton:</strong> <Link href="tel:(647) 654-9454" style={{fontSize: '18px', fontWeight: 'bold', color: '#1e3a8a'}}>(647) 654-9454</Link>
                                                            </div>
                                                            <div>
                                                                <strong style={{color: '#1e3a8a'}}>Scarborough:</strong> <Link href="tel:(437) 880-9656" style={{fontSize: '18px', fontWeight: 'bold', color: '#1e3a8a'}}>(437) 880-9656</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* FAQ Section */}
                                            <div style={{padding: '25px', borderBottom: '3px solid #d4af37', marginBottom: '25px', marginTop: '40px'}}>
                                                <h4 style={{color: '#1a365d', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '15px'}}>Frequently Asked Questions</h4>
                                            </div>
                                            
                                            <div style={{marginBottom: '40px'}}>
                                                <div style={{backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '20px', marginBottom: '20px', border: '1px solid #e9ecef'}}>
                                                    <h5 style={{color: '#1a365d', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer'}}>Q: What is the consultation fee for legal services?</h5>
                                                    <p style={{color: '#666', margin: '0', paddingLeft: '20px'}}>A: We charge a consultation fee of $150 for immigration cases and $200 for family law cases. This initial consultation allows us to understand your case and provide preliminary advice.</p>
                                                </div>
                                                
                                                <div style={{backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '20px', marginBottom: '20px', border: '1px solid #e9ecef'}}>
                                                    <h5 style={{color: '#1a365d', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer'}}>Q: How long does a judicial review application take?</h5>
                                                    <p style={{color: '#666', margin: '0', paddingLeft: '20px'}}>A: Typical processing time for judicial reviews at the Federal Court of Canada is approximately 6 to 10 months. Upon successful appeal, IRCC reopens the refused application for reassessment.</p>
                                                </div>
                                                
                                                <div style={{backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '20px', marginBottom: '20px', border: '1px solid #e9ecef'}}>
                                                    <h5 style={{color: '#1a365d', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer'}}>Q: Can you help with previously refused visa applications?</h5>
                                                    <p style={{color: '#666', margin: '0', paddingLeft: '20px'}}>A: Yes, Mr. Rathod specializes in previously refused applications. We accurately identify key issues, suggest additional documents, and resubmit with convincing submission letters to improve your chances of approval.</p>
                                                </div>
                                                
                                                <div style={{backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '20px', marginBottom: '20px', border: '1px solid #e9ecef'}}>
                                                    <h5 style={{color: '#1a365d', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer'}}>Q: What languages do you provide services in?</h5>
                                                    <p style={{color: '#666', margin: '0', paddingLeft: '20px'}}>A: We provide multilingual support to better serve our diverse clientele. Our team can assist you in multiple languages to ensure clear communication throughout your legal process.</p>
                                                </div>
                                                
                                                <div style={{backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '20px', marginBottom: '20px', border: '1px solid #e9ecef'}}>
                                                    <h5 style={{color: '#1a365d', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer'}}>Q: Do you handle spousal sponsorship applications?</h5>
                                                    <p style={{color: '#666', margin: '0', paddingLeft: '20px'}}>A: Yes, we pay specific attention to detail in spousal sponsorship applications, presenting relationships convincingly so applicants typically avoid interviews. Mr. Rathod has processed over 2,500 Spousal Open Work Permit applications.</p>
                                                </div>
                                                
                                                <div style={{backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '20px', marginBottom: '20px', border: '1px solid #e9ecef'}}>
                                                    <h5 style={{color: '#1a365d', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer'}}>Q: What is a Mandamus application?</h5>
                                                    <p style={{color: '#666', margin: '0', paddingLeft: '20px'}}>A: A Mandamus application is filed when your immigration application has surpassed the suggested processing time and you believe the delay is unreasonable. Upon successful application, the Court directs IRCC to process your application within a specific timeline.</p>
                                                </div>
                                                
                                                <div style={{backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '20px', marginBottom: '20px', border: '1px solid #e9ecef'}}>
                                                    <h5 style={{color: '#1a365d', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer'}}>Q: How do you handle family law cases?</h5>
                                                    <p style={{color: '#666', margin: '0', paddingLeft: '20px'}}>A: We handle all aspects of family law including divorce applications, child custody, spousal support, and property equalization. Our team provides guidance through mediation and court proceedings to achieve fair resolutions while protecting your rights.</p>
                                                </div>
                                                
                                                <div style={{backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '20px', marginBottom: '20px', border: '1px solid #e9ecef'}}>
                                                    <h5 style={{color: '#1a365d', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer'}}>Q: What office locations do you have?</h5>
                                                    <p style={{color: '#666', margin: '0', paddingLeft: '20px'}}>A: We have two convenient locations: our Brampton office at 106-2250 Bovaird Drive East (647-654-9454) and our Scarborough office at 122-1200 Markham Road (437-880-9656). Both offices operate Monday to Friday, 9am to 5pm Toronto Time.</p>
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
                                                    <div className="sidebar__contact-number" style={{background: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.3)'}}>
                                                        <div style={{marginBottom: '15px', color: 'white'}}>
                                                            <strong style={{color: '#d4af37'}}>Brampton Office:</strong><br/>
                                                            106-2250 Bovaird Drive East<br/>
                                                            Brampton, Ontario L6R 0W3<br/>
                                                            <Link href="tel:(647) 654-9454" style={{color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600'}}>(647) 654-9454</Link><br/>
                                                            <small style={{opacity: '0.8'}}>Mon-Fri: 9:00 AM - 5:00 PM</small>
                                                        </div>
                                                        <div style={{color: 'white'}}>
                                                            <strong style={{color: '#d4af37'}}>Scarborough Office:</strong><br/>
                                                            122-1200 Markham Road<br/>
                                                            Scarborough, ON M1H 3C3<br/>
                                                            <Link href="tel:(437) 880-9656" style={{color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600'}}>(437) 880-9656</Link><br/>
                                                            <small style={{opacity: '0.8'}}>Mon-Fri: 9:00 AM - 5:00 PM</small>
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