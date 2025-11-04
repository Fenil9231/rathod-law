import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
  title: "Saleema Panjwani - Licensed Paralegal & Notary Public | Rathod Law Firm",
  description: "Meet Saleema Panjwani, Licensed Paralegal and Notary Public at Rathod Law Firm. Expert in traffic tickets, small claims, and landlord-tenant disputes with LL.B and LL.M qualifications.",
  keywords: "saleema panjwani paralegal, licensed paralegal ontario, notary public, traffic tickets, small claims court, landlord tenant disputes",
  openGraph: {
    title: "Saleema Panjwani - Licensed Paralegal & Notary Public | Rathod Law Firm",
    description: "Meet Saleema Panjwani, Licensed Paralegal and Notary Public at Rathod Law Firm. Expert in traffic tickets, small claims, and landlord-tenant disputes with LL.B and LL.M qualifications.",
    type: "profile",
    url: "https://rathodlaw.com/team/saleema-panjwani"
  }
};

export default function SaleemaPanjwani() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Saleema Panjwani">
                <section className="team-details">
                    <div className="container">
                        {/* Page Title */}
                        <div className="sec-title">
                            <div className="sub-title">
                                <div className="icon">
                                    <img src="/assets/img/icon/sec-title-img1.png" alt="" />
                                </div>
                                <div className="text">
                                    <p>Licensed Paralegal & Notary Public</p>
                                </div>
                            </div>
                            <h2>Saleema Panjwani</h2>
                        </div>

                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="team-details__left">
                                    <div className="team-details__photo-card">
                                        <img src="/assets/images/team/team-1-2.jpg" alt="Saleema Panjwani" />
                                    </div>

                                    {/* Professional Background */}
                                    <div className="team-details__card">
                                        <h3>Professional Background</h3>
                                        <div className="team-details__text">
                                            <p>
                                                Saleema Panjwani is a Licensed Paralegal and a Notary Public. She joined the team in September 2023. She has completed her LL.B from University of London and LL.M from Northwestern University Pritzker School of Law. She exemplifies professionalism and carries her passion for law and client relationships throughout her work.
                                            </p>
                                            <p>
                                                Always available to assist you, she has proven excellence and diligence in each matter she takes on. Her key responsibilities at Rathod Law Firm are to handle Traffic Ticket Cases, Small Claims Cases, as well as Landlord–Tenant Disputes.
                                            </p>
                                            <p>
                                                She represents clients at the Landlord and Tenant Board, Small Claims Court, as well as the Ontario Court of Justice for traffic offences. She also assists Mr. Rathod in legal research and preparation of Federal Court files.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Education & Qualifications */}
                                    <div className="team-details__card">
                                        <h3>Education & Qualifications</h3>
                                        <ul className="team-details__list">
                                            <li>LL.B from University of London</li>
                                            <li>LL.M from Northwestern University Pritzker School of Law</li>
                                            <li>Licensed Paralegal (License Number: P19780)</li>
                                            <li>Notary Public</li>
                                        </ul>
                                    </div>

                                    {/* Practice Areas */}
                                    <div className="team-details__card">
                                        <h3>Practice Areas</h3>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="team-details__list">
                                                    <li>Traffic Ticket Cases</li>
                                                    <li>Small Claims Cases</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="team-details__list">
                                                    <li>Landlord–Tenant Disputes</li>
                                                    <li>Legal Research</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Court Representation */}
                                    <div className="team-details__card">
                                        <h3>Court Representation</h3>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="team-details__list">
                                                    <li>Landlord and Tenant Board</li>
                                                    <li>Small Claims Court</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="team-details__list">
                                                    <li>Ontario Court of Justice</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* License Verification */}
                                    <div className="team-details__card">
                                        <h3>License Verification</h3>
                                        <div className="team-details__text">
                                            <p>Verify the status of Ms. Saleema Panjwani with the Law Society of Ontario.</p>
                                            <p><strong>License Number:</strong> P19780</p>
                                        </div>
                                        <Link href="https://lso.ca/public-resources/finding-a-lawyer-or-paralegal" target="_blank" rel="noopener noreferrer" className="thm-btn">
                                            Verify Status with LSO <span className="icon-icon-8 thm-btn__icon"></span>
                                            <span className="thm-btn__hover-group">
                                                <span className="thm-btn__hover thm-btn__hover--1"></span>
                                                <span className="thm-btn__hover thm-btn__hover--2"></span>
                                                <span className="thm-btn__hover thm-btn__hover--3"></span>
                                                <span className="thm-btn__hover thm-btn__hover--4"></span>
                                            </span>
                                        </Link>
                                    </div>

                                    {/* Contact Information */}
                                    <div className="team-details__card">
                                        <h3>Contact Information</h3>
                                        <div className="team-details__contact-info">
                                            <p><strong>Email:</strong> <a href="mailto:saleema@hplaw.org">saleema@hplaw.org</a></p>
                                            <p><strong>Phone:</strong> <a href="tel:647-654-9454">(647) 654-9454</a></p>
                                            <p className="team-details__note">Please contact the Office to get in touch with Ms. Panjwani.</p>
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
                                                    <a>Kapil Rathod <span className="icon-icon-8"></span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/team/saleema-panjwani" legacyBehavior>
                                                    <a className="active">Saleema Panjwani <span className="icon-icon-8"></span></a>
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