import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
  title: "Kapil Rathod - Principal Lawyer & Immigration Expert | Rathod Law Firm",
  description: "Meet Kapil Rathod, Principal Lawyer at Rathod Law Firm with 13+ years experience in Canadian Immigration Law. Expert in appeals, spousal sponsorship, and federal court cases.",
  keywords: "kapil rathod lawyer, immigration lawyer ontario, barrister solicitor, canadian immigration law, federal court appeals, spousal sponsorship",
  openGraph: {
    title: "Kapil Rathod - Principal Lawyer & Immigration Expert | Rathod Law Firm",
    description: "Meet Kapil Rathod, Principal Lawyer at Rathod Law Firm with 13+ years experience in Canadian Immigration Law. Expert in appeals, spousal sponsorship, and federal court cases.",
    type: "profile",
    url: "https://rathodlaw.com/team/kapil-rathod"
  }
};

export default function KapilRathod() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Kapil Rathod">
                <section className="team-details">
                    <div className="container">
                        {/* Page Title */}
                        <div className="sec-title">
                            <div className="sub-title">
                                <div className="icon">
                                    <img src="/assets/img/icon/sec-title-img1.png" alt="" />
                                </div>
                                <div className="text">
                                    <p>Principal Lawyer</p>
                                </div>
                            </div>
                            <h2>Kapil Rathod</h2>
                        </div>

                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="team-details__left">
                                    <div className="team-details__photo-card">
                                        <img src="/assets/images/team/team-1-1.jpg" alt="Kapil Rathod" />
                                    </div>

                                    {/* Professional Background */}
                                    <div className="team-details__card">
                                        <h3>Professional Background</h3>
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
                                    </div>

                                    {/* Experience & Expertise */}
                                    <div className="team-details__card">
                                        <h3>Experience & Expertise</h3>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="team-details__list">
                                                    <li>13+ years in Canadian Immigration Law</li>
                                                    <li>Regulated Canadian Immigration Consultant (2011–2019)</li>
                                                    <li>Licensed Lawyer in Canada (2019–present)</li>
                                                    <li>Federal Court Appeals and Mandamus Applications</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="team-details__list">
                                                    <li>Immigration and Refugee Board Representation</li>
                                                    <li>Criminal Law Practice</li>
                                                    <li>Family Law Practice</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Court Experience */}
                                    <div className="team-details__card">
                                        <h3>Court Experience</h3>
                                        <p>
                                            In his legal career, Mr. Kapil Rathod has appeared in many court cases including Immigration and Refugee Board of Canada, Federal Court of Canada, Ontario Court of Justice and Superior Court of Justice. Here are some cases in which Mr. Kapil Rathod appeared as a Counsel:
                                        </p>
                                        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h5 className="team-details__subtitle">Federal Court of Canada</h5>
                                                <ul className="team-details__list team-details__list--compact">
                                                    <li><small>Jethi v. Canada (Citizenship and Immigration), 2024 FC 1503</small></li>
                                                    <li><small>Trivedi v. Canada (Citizenship and Immigration), 2025 FC 617</small></li>
                                                    <li><small>Raiyani v. Canada (Citizenship and Immigration), 2024 FC 2020</small></li>
                                                    <li><small>Sharma v. Canada (Citizenship and Immigration), 2023 FC 1190</small></li>
                                                    <li><small>Tandel v. Canada (Citizenship and Immigration), 2024 FC 1487</small></li>
                                                    <li><small>Sharma v. Canada (Citizenship and Immigration), 2024 FC 1928</small></li>
                                                    <li><small>Khan v. Canada (Citizenship and Immigration), 2025 FC 247</small></li>
                                                    <li><small>Okornor v. Canada (Citizenship and Immigration), 2024 FC 1693</small></li>
                                                    <li><small>Singh v. Canada (Citizenship and Immigration), 2024 FC 1026</small></li>
                                                    <li><small>Singh v. Canada (Citizenship and Immigration), 2024 FC 900</small></li>
                                                    <li><small>Sandhu v. Canada (Citizenship and Immigration), 2025 FC 857</small></li>
                                                    <li><small>Firdous v. Canada (Citizenship and Immigration), 2024 FC 1512</small></li>
                                                    <li><small>Samra v. Canada (Citizenship and Immigration), 2024 FC 1649</small></li>
                                                    <li><small>Goel v. Canada (Citizenship and Immigration), 2025 FC 275</small></li>
                                                    <li><small>Gill v. Canada (Citizenship and Immigration), 2024 FC 1453</small></li>
                                                    <li><small>Seeto v. Canada (Citizenship and Immigration), 2025 FC 308</small></li>
                                                    <li><small>Antala v. Canada (Citizenship and Immigration), 2025 FC 420</small></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <h5 className="team-details__subtitle">Immigration & Refugee Board</h5>
                                                <ul className="team-details__list team-details__list--compact">
                                                    <li><small>Sandhu v Canada (Citizenship and Immigration), 2024 CanLII 40860</small></li>
                                                    <li><small>Kaur v Canada (Citizenship and Immigration), 2024 CanLII 139919</small></li>
                                                    <li><small>Patel v Canada (Citizenship and Immigration), 2019 CanLII 54632</small></li>
                                                    <li><small>Chaudhari v Canada (Citizenship and Immigration), 2024 CanLII 140331</small></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact Information */}
                                    <div className="team-details__card">
                                        <h3>Contact Information</h3>
                                        <div className="team-details__contact-info">
                                            <p><strong>Email:</strong> <a href="mailto:rathod@hplaw.org">rathod@hplaw.org</a></p>
                                            <p><strong>Phone:</strong> <a href="tel:647-654-9454">(647) 654-9454</a></p>
                                            <p className="team-details__note">Please contact the Office to get in touch with Mr. Rathod.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar">
                                    {/* Team Links */}
                                    <div className="sidebar__single sidebar__single-service">
                                        <div className="title-box">
                                            <div className="shape-box">
                                                <div className="line"></div>
                                                <div className="round"></div>
                                            </div>
                                            <div className="text">
                                                <h3>Our Team</h3>
                                            </div>
                                        </div>
                                        <ul className="sidebar__single-service-list">
                                            <li>
                                                <Link href="/team/kapil-rathod" legacyBehavior>
                                                    <a className="active">Kapil Rathod <span className="icon-icon-8"></span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/team/saleema-panjwani" legacyBehavior>
                                                    <a>Saleema Panjwani <span className="icon-icon-8"></span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/team/lincy-gomez" legacyBehavior>
                                                    <a>Lincy Gomez <span className="icon-icon-8"></span></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Contact CTA */}
                                    <div className="sidebar__single sidebar__single-contact text-center">
                                        <div className="sidebar__single-contact-pattern" style={{ backgroundImage: "url('/assets/img/pattern/sidebar-contact-pattern.png')" }}></div>
                                        <div className="sidebar__single-contact-inner">
                                            <div className="icon-box">
                                                <img src="/assets/img/icon/about-v2-icon1.png" alt="" />
                                            </div>
                                            <div className="text-box">
                                                <h3>get in touch</h3>
                                                <h2>legal justice <br /> for you</h2>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="tel:(416) 900-9009">call us <span className="icon-icon-8"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}