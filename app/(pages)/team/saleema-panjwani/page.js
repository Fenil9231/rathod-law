import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function SaleemaPanjwani() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Saleema Panjwani">
                <div>
                    <section className="team-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="team-details__left">
                                        <div className="team-details__img">
                                            <img src="/assets/images/team/team-1-2.jpg" alt="Saleema Panjwani" />
                                        </div>
                                        <div className="team-details__content">
                                            <h3 className="team-details__title">Saleema Panjwani</h3>
                                            <p className="team-details__sub-title">Licensed Paralegal & Notary Public</p>
                                            
                                            <div className="team-details__text">
                                                <p>
                                                    Saleema Panjwani is a Licensed Paralegal and a Notary Public. She joined the team in September 2023. She has done her LL.B from University of London and LL.M from Northwestern University Pritzker School of Law. She exemplifies professionalism and carries her passion for law and client relationships throughout her work.
                                                </p>
                                                
                                                <p>
                                                    Always available to assist you, she has proven excellence and diligence in each matter she takes on. Her key responsibilities at Rathod Law Firm is to handle Traffic Ticket Cases, Small Claims Cases as well as Landlord-Tenant Disputes.
                                                </p>
                                                
                                                <p>
                                                    She represents clients at the Landlord and Tenant Board, Small Claims Court as well as Ontario Court of Justice for Traffic Offences. She also assists Mr. Rathod in legal research as well as preparation of Federal Court Files.
                                                </p>
                                            </div>
                                            
                                            <div className="team-details__experience">
                                                <h4>Education & Qualifications</h4>
                                                <ul className="team-details__list">
                                                    <li>LL.B from University of London</li>
                                                    <li>LL.M from Northwestern University Pritzker School of Law</li>
                                                    <li>Licensed Paralegal (License Number: P19780)</li>
                                                    <li>Notary Public</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="team-details__practice-areas">
                                                <h4>Practice Areas</h4>
                                                <ul className="team-details__list">
                                                    <li>Traffic Ticket Cases</li>
                                                    <li>Small Claims Cases</li>
                                                    <li>Landlord-Tenant Disputes</li>
                                                    <li>Legal Research</li>
                                                    <li>Federal Court File Preparation</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="team-details__representation">
                                                <h4>Court Representation</h4>
                                                <ul className="team-details__list">
                                                    <li>Landlord and Tenant Board</li>
                                                    <li>Small Claims Court</li>
                                                    <li>Ontario Court of Justice for Traffic Offences</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="team-details__verification">
                                                <h4>License Verification</h4>
                                                <p>Verify the Status of Ms. Saleema Panjwani with the Law Society of Ontario.</p>
                                                <p><strong>License Number:</strong> P19780</p>
                                                <Link href="#" className="btn btn-primary">Verify Status with LSO</Link>
                                            </div>
                                            
                                            <div className="team-details__contact">
                                                <h4>Contact Information</h4>
                                                <div className="team-details__contact-info">
                                                    <p><strong>Email:</strong> <a href="mailto:saleema@hplaw.org">saleema@hplaw.org</a></p>
                                                    <p><strong>Phone:</strong> <a href="tel:647-654-9454">(647) 654-9454</a></p>
                                                    <p><em>Please contact the Office to get in touch with Ms. Panjwani.</em></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-4 col-lg-5">
                                    <div className="team-details__sidebar">
                                        <div className="team-details__sidebar-team">
                                            <h4 className="team-details__sidebar-team-title">Our Team</h4>
                                            <ul className="team-details__sidebar-team-list">
                                                <li><Link href="/team/kapil-rathod">Kapil Rathod <span className="icon-right-arrow"></span></Link></li>
                                                <li><Link href="/team/saleema-panjwani">Saleema Panjwani <span className="icon-right-arrow"></span></Link></li>
                                                <li><Link href="/team/lincy-gomez">Lincy Gomez <span className="icon-right-arrow"></span></Link></li>
                                            </ul>
                                        </div>
                                        
                                        <div className="team-details__sidebar-contact">
                                            <div className="team-details__sidebar-contact-bg" style={{backgroundImage: 'url(/assets/images/backgrounds/team-contact-bg.jpg)'}}></div>
                                            <div className="team-details__sidebar-contact-icon">
                                                <span className="icon-telephone-call"></span>
                                            </div>
                                            <h4 className="team-details__sidebar-contact-title">Need Legal Help?</h4>
                                            <p className="team-details__sidebar-contact-sub-title">Call us today</p>
                                            <div className="team-details__sidebar-contact-number">
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