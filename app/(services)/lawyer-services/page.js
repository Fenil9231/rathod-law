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
                <div>
                    <section className="service-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="service-details__left">
                                        <div className="service-details__img">
                                            <img src="/assets/img/service/service-details-img2.jpg" alt="Lawyer Services" />
                                        </div>
                                        <div className="service-details__content">
                                            <h3 className="service-details__title">Lawyer Services & Price List</h3>
                            <p className="service-details__text-1">
                                At Rathod Law Firm, we provide comprehensive legal services across multiple practice areas. 
                                Our experienced legal team, led by Kapil Rathod, is committed to delivering professional 
                                and personalized legal solutions with over 13 years of experience in Canadian law.
                            </p>
                            
                            <h4>Immigration Appeals</h4>
                            <p><strong>Judicial Reviews - Spousal Sponsorship Appeals - Refugee Claim Appeals</strong></p>
                            
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
                            
                            <h4>Immigration Applications</h4>
                            <p><strong>Student Visa - Work Permit - LMIA Applications - Visitor Visa - Refugee Claims - Permanent Residence Applications - Spousal Sponsorships</strong></p>
                            
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
                            
                            <h4>Family Law</h4>
                            <p><strong>Divorce Applications - Child Custody Issues - Spousal Support Issues</strong></p>
                            
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
                            
                            <h4>Refugee Appeals</h4>
                            <p><strong>How Does a Refugee Claim Work in Canada?</strong></p>
                            
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