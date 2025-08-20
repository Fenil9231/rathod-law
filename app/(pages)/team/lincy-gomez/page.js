import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
  title: "Lincy Gomez - Immigration Specialist & Digital Marketing Expert | Rathod Law",
  description: "Meet Lincy Gomez, Immigration Specialist and Digital Marketing Expert at Rathod Law Firm with 4+ years in Canadian Immigration and 10+ years in educational counselling.",
  keywords: "lincy gomez immigration specialist, canadian immigration expert, digital marketing, educational counselling, immigration consultant",
  openGraph: {
    title: "Lincy Gomez - Immigration Specialist & Digital Marketing Expert | Rathod Law",
    description: "Meet Lincy Gomez, Immigration Specialist and Digital Marketing Expert at Rathod Law Firm with 4+ years in Canadian Immigration and 10+ years in educational counselling.",
    type: "profile",
    url: "https://rathodlaw.com/team/lincy-gomez"
  }
};

export default function LincyGomez() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Lincy Gomez">
                <div>
                    <section className="team-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="team-details__left">
                                        <div className="team-details__img">
                                            <img src="/assets/images/team/team-1-3.jpg" alt="Lincy Gomez" />
                                        </div>
                                        <div className="team-details__content">
                                            <h3 className="team-details__title">Lincy Gomez</h3>
                                            <p className="team-details__sub-title">Immigration Specialist & Digital Marketing Expert</p>
                                            
                                            <div className="team-details__text">
                                                <p>
                                                    Lincy Gomez holds a Master's Degree from Gujarat University in M.Sc I.T & C.A she has been with Rathod Law Firm for 4 years now. A result oriented professional having 4 years of experience in Canadian Immigration and over 10 years of experience in Educational Counselling, Digital Marketing and Alumni Relations.
                                                </p>
                                                
                                                <p>
                                                    Lincy has accomplished all duties with smart work and determination using strengths like communication, confidence and conviction that have been inculcated in her personality and work ethos.
                                                </p>
                                            </div>
                                            
                                            <div className="team-details__experience">
                                                <h4>Education & Qualifications</h4>
                                                <ul className="team-details__list">
                                                    <li>Master's Degree (M.Sc I.T & C.A) from Gujarat University</li>
                                                    <li>4 years with Rathod Law Firm</li>
                                                    <li>Specialized in Canadian Immigration processes</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="team-details__expertise">
                                                <h4>Professional Experience</h4>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5>Canadian Immigration (4 years)</h5>
                                                        <ul className="team-details__list">
                                                            <li>Immigration application processing</li>
                                                            <li>Client consultation and guidance</li>
                                                            <li>Documentation preparation</li>
                                                            <li>Case management</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h5>Additional Expertise (10+ years)</h5>
                                                        <ul className="team-details__list">
                                                            <li>Educational Counselling</li>
                                                            <li>Digital Marketing</li>
                                                            <li>Alumni Relations</li>
                                                            <li>Client relationship management</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="team-details__strengths">
                                                <h4>Core Strengths</h4>
                                                <div className="team-details__strengths-grid">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="strength-item">
                                                                <div className="strength-icon">
                                                                    <i className="icon-communication"></i>
                                                                </div>
                                                                <h5>Communication</h5>
                                                                <p>Excellent verbal and written communication skills</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="strength-item">
                                                                <div className="strength-icon">
                                                                    <i className="icon-confidence"></i>
                                                                </div>
                                                                <h5>Confidence</h5>
                                                                <p>Self-assured approach to complex cases</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="strength-item">
                                                                <div className="strength-icon">
                                                                    <i className="icon-conviction"></i>
                                                                </div>
                                                                <h5>Conviction</h5>
                                                                <p>Strong belief in achieving client success</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="team-details__work-ethic">
                                                <h4>Work Philosophy</h4>
                                                <p>
                                                    Lincy believes in smart work and determination. Her approach combines technical expertise with personalized client service, ensuring that each case receives the attention and dedication it deserves. Her diverse background in education, technology, and marketing brings a unique perspective to immigration matters.
                                                </p>
                                            </div>
                                            
                                            <div className="team-details__contact">
                                                <h4>Contact Information</h4>
                                                <div className="team-details__contact-info">
                                                    <p><strong>Email:</strong> <a href="mailto:lincy@hplaw.org">lincy@hplaw.org</a></p>
                                                    <p><strong>Phone:</strong> <a href="tel:780-905-7124">(780) 905-7124</a></p>
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