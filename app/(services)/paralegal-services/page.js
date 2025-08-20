import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
  title: "Paralegal Services Ontario - Traffic Tickets, Small Claims & More | Rathod Law",
  description: "Expert paralegal services in Ontario including traffic ticket defense, small claims court representation, landlord tenant disputes, and provincial offenses. Affordable legal help.",
  keywords: "paralegal services ontario, traffic tickets, small claims court, landlord tenant disputes, provincial offenses, paralegal representation, affordable legal services",
  openGraph: {
    title: "Paralegal Services Ontario - Traffic Tickets, Small Claims & More | Rathod Law",
    description: "Expert paralegal services in Ontario including traffic ticket defense, small claims court representation, landlord tenant disputes, and provincial offenses. Affordable legal help.",
    type: "website",
    url: "https://rathodlaw.com/paralegal-services"
  }
};

export default function ParalegalServices() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Paralegal Services">
                <div>
                    <section className="service-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="service-details__left">
                                        <div className="service-details__img">
                                            <img src="/assets/img/service/service-details-img3.jpg" alt="Paralegal Services" />
                                        </div>
                                        <div className="service-details__content">
                                            <h3 className="service-details__title">Traffic Tickets</h3>
                                            <p className="service-details__text-1">
                                                Getting pulled over by Police and getting a Traffic Ticket is a cumbersome process. 
                                                First, getting pulled over frightens you on what is going to happen next and how much 
                                                you will end up paying and how the insurance will be affected. Losing demerit points is 
                                                certainly a matter of worry as it affects your Driver's License in the long run. At our 
                                                firm, we have a dedicated Paralegal, who handles traffic violations effectively.
                                            </p>
                                            
                                            <h4>How to Fight a Traffic Ticket?</h4>
                                            <p>
                                                Fighting a traffic ticket in Ontario involves several steps. Here's a general outline of the process:
                                            </p>
                                            
                                            <div className="service-details__points">
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Review the Ticket</h5>
                                                        <p>Check the Details: Verify that all information on the ticket (date, time, location, and your details) is correct. Any errors might help in your defense.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Request a Trial</h5>
                                                        <p>Complete the Form: Follow the instructions on the back of your ticket or visit the Ontario Court of Justice website. You'll need to indicate that you wish to plead not guilty and request a trial.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Prepare Your Case</h5>
                                                        <p>Gather Evidence: Collect any evidence that supports your case. This could include photographs, diagrams, witness statements, or any other relevant information.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="service-details__points-single">
                                                    <div className="service-details__points-icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="service-details__points-text">
                                                        <h5>Attend the Trial</h5>
                                                        <p>Be on Time: Arrive at the courthouse on the date of your trial. Present your evidence and arguments clearly.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <h4>Small Claims Court Process</h4>
                            <p>
                                In Ontario, Small Claims Court handles disputes involving claims up to $35,000. The process is designed to be accessible and straightforward, allowing individuals and businesses to resolve financial disputes without requiring legal representation.
                            </p>
                            
                            <div className="service-details__points">
                                <div className="service-details__points-single">
                                    <div className="service-details__points-icon">
                                        <i className="icon-check"></i>
                                    </div>
                                    <div className="service-details__points-text">
                                        <h5>Filing a Claim</h5>
                                        <p>File a Plaintiff's Claim (Form 7A) with the court, outlining the details of your claim and paying the required filing fee.</p>
                                    </div>
                                </div>
                                
                                <div className="service-details__points-single">
                                    <div className="service-details__points-icon">
                                        <i className="icon-check"></i>
                                    </div>
                                    <div className="service-details__points-text">
                                        <h5>Serving Documents</h5>
                                        <p>Serve the defendant with the claim documents and file proof of service with the court.</p>
                                    </div>
                                </div>
                                
                                <div className="service-details__points-single">
                                    <div className="service-details__points-icon">
                                        <i className="icon-check"></i>
                                    </div>
                                    <div className="service-details__points-text">
                                        <h5>Trial Preparation</h5>
                                        <p>Organize evidence, prepare witnesses, and submit trial briefs as required.</p>
                                    </div>
                                </div>
                                
                                <div className="service-details__points-single">
                                    <div className="service-details__points-icon">
                                        <i className="icon-check"></i>
                                    </div>
                                    <div className="service-details__points-text">
                                        <h5>Enforcement</h5>
                                        <p>If successful, enforce the judgment through wage garnishment, asset seizure, or property liens.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <h4>Our Paralegal Services Include:</h4>
                            <ul className="service-details__list">
                                <li>Traffic Tickets (Speeding, Red Light, Distracted Driving)</li>
                                <li>Stunt Driving and Suspended License Cases</li>
                                <li>Small Claims Court Cases (up to $35,000)</li>
                                <li>Landlord-Tenant Disputes</li>
                                <li>Legal Research and Federal Court File Preparation</li>
                                <li>Court Representation at Various Tribunals</li>
                            </ul>
                            
                            <p className="service-details__text-2">
                                Our experienced paralegal team provides comprehensive representation at the Landlord and Tenant Board, Small Claims Court, and Ontario Court of Justice for Traffic Offences. We guide you through each step of the legal process to achieve the best possible outcome for your case.
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