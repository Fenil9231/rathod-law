import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function KapilRathod() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Kapil Rathod">
                <div>
                    <section className="team-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="team-details__left">
                                        <div className="team-details__img">
                                            <img src="/assets/images/team/team-1-1.jpg" alt="Kapil Rathod" />
                                        </div>
                                        <div className="team-details__content">
                                            <h3 className="team-details__title">Kapil Rathod</h3>
                                            <p className="team-details__sub-title">Barrister & Solicitor, Principal Lawyer</p>
                                            
                                            <div className="team-details__text">
                                                <p>
                                                    Mr. Kapil Rathod, Barrister & Solicitor and the Principal Lawyer at Rathod Law Firm brings a vast experience of more than 13 years in the field of Canadian Immigration Law. He started as a Regulated Canadian Immigration Consultant in 2011 and he became a Lawyer in Canada in 2019.
                                                </p>
                                                
                                                <p>
                                                    As an Immigration Consultant, he processed several applications such as Study Permits, Work Permits, Spousal Work Permits, Spousal Sponsorships, Permanent Residence as well as Visitor Visas. After becoming a Lawyer in 2019, he started practicing appeals of refusal of these applications at the Federal Court of Canada.
                                                </p>
                                                
                                                <p>
                                                    Refusals of Visitor Visas, Work Permits, Spousal Work Permits, Permanent Residence Applications as well as failed Refugee Claims can be appealed to the Federal Court of Canada. From 2019, Mr. Rathod has done many Appeals and many Mandamus applications at the Federal Court of Canada. He has also represented clients before the Immigration and Refugee Board.
                                                </p>
                                                
                                                <p>
                                                    Apart from Immigration Law, Mr. Rathod also deals in Criminal Law and Family Law.
                                                </p>
                                            </div>
                                            
                                            <div className="team-details__experience">
                                                <h4>Experience & Expertise</h4>
                                                <ul className="team-details__list">
                                                    <li>13+ years in Canadian Immigration Law</li>
                                                    <li>Regulated Canadian Immigration Consultant (2011-2019)</li>
                                                    <li>Licensed Lawyer in Canada (2019-present)</li>
                                                    <li>Federal Court Appeals and Mandamus Applications</li>
                                                    <li>Immigration and Refugee Board Representation</li>
                                                    <li>Criminal Law Practice</li>
                                                    <li>Family Law Practice</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="team-details__contact">
                                                <h4>Contact Information</h4>
                                                <div className="team-details__contact-info">
                                                    <p><strong>Email:</strong> <a href="mailto:rathod@hplaw.org">rathod@hplaw.org</a></p>
                                                    <p><strong>Phone:</strong> <a href="tel:647-654-9454">(647) 654-9454</a></p>
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