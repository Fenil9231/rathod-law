import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
  title: "Lincy Gomez - Immigration Specialist & Digital Marketing Expert | Rathod Law",
  description:
    "Meet Lincy Gomez, Immigration Specialist and Digital Marketing Expert at Rathod Law Firm with 4+ years in Canadian Immigration and 10+ years in educational counselling.",
  keywords:
    "lincy gomez immigration specialist, canadian immigration expert, digital marketing, educational counselling, immigration consultant",
  openGraph: {
    title: "Lincy Gomez - Immigration Specialist & Digital Marketing Expert | Rathod Law",
    description:
      "Meet Lincy Gomez, Immigration Specialist and Digital Marketing Expert at Rathod Law Firm with 4+ years in Canadian Immigration and 10+ years in educational counselling.",
    type: "profile",
    url: "https://rathodlaw.com/team/lincy-gomez",
  },
}

export default function LincyGomez() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Lincy Gomez">
        <section className="team-details">
          <div className="container">
            {/* Page Title */}
            <div className="sec-title">
              <div className="sub-title">
                <div className="icon">
                  <img src="/assets/img/icon/sec-title-img1.png" alt="" />
                </div>
                <div className="text">
                  <p>Immigration Specialist & Digital Marketing Expert</p>
                </div>
              </div>
              <h2>Lincy Gomez</h2>
            </div>

            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="team-details__left">
                  {/* Photo */}
                  <div className="team-details__photo-card">
                    <img
                      src="/assets/images/team/team-1-3.jpg"
                      alt="Lincy Gomez"
                    />
                  </div>

                  {/* Professional Background */}
                  <div className="team-details__card">
                    <h3>Professional Background</h3>
                    <div className="team-details__text">
                      <p>
                        Lincy Gomez holds a Master's Degree (M.Sc I.T & C.A) from
                        Gujarat University and has been with Rathod Law Firm for
                        4 years. She is a result‑oriented professional with 4+
                        years of experience in Canadian immigration and over 10
                        years in educational counselling, digital marketing, and
                        alumni relations.
                      </p>
                      <p>
                        Lincy consistently delivers with smart work and
                        determination, leveraging strengths in communication,
                        confidence, and conviction that shape her professional
                        ethos.
                      </p>
                    </div>
                  </div>

                  {/* Education & Qualifications */}
                  <div className="team-details__card">
                    <h3>Education & Qualifications</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="team-details__list">
                          <li>Master's Degree (M.Sc I.T & C.A), Gujarat University</li>
                          <li>4 years at Rathod Law Firm</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="team-details__list">
                          <li>Specialized in Canadian Immigration processes</li>
                          <li>Experienced in digital marketing and student guidance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Professional Experience */}
                  <div className="team-details__card">
                    <h3>Professional Experience</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="team-details__list">
                          <li>Canadian immigration file preparation and support</li>
                          <li>Client intake, document review, and case coordination</li>
                          <li>Digital marketing strategy and execution</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="team-details__list">
                          <li>Educational counselling and alumni relations</li>
                          <li>Process optimization and client communications</li>
                          <li>Cross‑functional collaboration within the firm</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Core Strengths */}
                  <div className="team-details__card">
                    <h3>Core Strengths</h3>
                    <ul className="team-details__list">
                      <li>Clear communication with clients and stakeholders</li>
                      <li>Reliable execution under timelines and guidelines</li>
                      <li>Strong organizational skills and attention to detail</li>
                      <li>Professional, empathetic client service</li>
                    </ul>
                  </div>

                  {/* Work Philosophy */}
                  <div className="team-details__card">
                    <h3>Work Philosophy</h3>
                    <div className="team-details__text">
                      <p>
                        Lincy believes in disciplined execution and clear
                        communication. Her approach ensures clients receive
                        timely, accurate guidance throughout their immigration
                        journey.
                      </p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="team-details__card">
                    <h3>Contact Information</h3>
                    <div className="team-details__contact-info">
                      <p>
                        <strong>Email:</strong> <a href="mailto:info@rathodlaw.com">info@rathodlaw.com</a>
                      </p>
                      <p>
                        <strong>Phone:</strong> <a href="tel:647-654-9454">(647) 654‑9454</a>
                      </p>
                      <p className="team-details__note">
                        Please contact the Office to get in touch with Ms. Gomez.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
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
                          <a>Saleema Panjwani <span className="icon-icon-8"></span></a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/team/lincy-gomez" legacyBehavior>
                          <a className="active">Lincy Gomez <span className="icon-icon-8"></span></a>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Contact CTA */}
                  <div className="sidebar__single sidebar__single-contact text-center">
                    <div
                      className="sidebar__single-contact-pattern"
                      style={{
                        backgroundImage:
                          "url('/assets/img/pattern/sidebar-contact-pattern.png')",
                      }}
                    ></div>
                    <div className="sidebar__single-contact-inner">
                      <div className="icon-box">
                        <img src="/assets/img/icon/about-v2-icon1.png" alt="" />
                      </div>
                      <div className="text-box">
                        <h3>get in touch</h3>
                        <h2>
                          legal justice <br /> for you
                        </h2>
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