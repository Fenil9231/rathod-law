import Link from 'next/link';
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "About Rathod Law Firm - Experienced Legal Services in Ontario",
  description: "Learn about Rathod Law Firm's 15+ years of experience providing exceptional legal services including immigration, family law, paralegal services, and notarization in Ontario.",
  keywords: "about rathod law firm, legal services ontario, immigration lawyers, family law, paralegal services, experienced lawyers, legal solutions",
  openGraph: {
    title: "About Rathod Law Firm - Experienced Legal Services in Ontario",
    description: "Learn about Rathod Law Firm's 15+ years of experience providing exceptional legal services including immigration, family law, paralegal services, and notarization in Ontario.",
    type: "website",
    url: "https://rathodlaw.com/about-us"
  }
};

export default function AboutUs() {
  return (
    <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="About Us">
      <div>
        {/* Start About Section */}
        <section className="about-three">
          <div className="container">
            <div className="row">
              {/* Start About Image */}
              <div className="col-xl-6">
                <div className="about-three__img">
                  <div className="about-three__img-inner">
                    <img src="/assets/img/about/about-v3-img1.jpg" alt="About Rathod Law Firm" />

                    <div className="overlay-content">
                      <div className="counter-box">
                        <h2 className="count">15+</h2>
                      </div>
                      <div className="text-box">
                        <h3>years of <br /> experience</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End About Image */}

              {/* Start About Content */}
              <div className="col-xl-6">
                <div className="about-three__content">
                  <div className="sec-title">
                    <div className="sub-title">
                      <div className="icon">
                        <img src="/assets/img/icon/sec-title-img1.png" alt="Section Title Icon" />
                      </div>
                      <div className="text">
                        <p>welcome to rathod law</p>
                      </div>
                    </div>
                    <h2>Legal Solutions for <br /> Your Unique Needs</h2>
                  </div>

                  <div className="about-three__content-text">
                    <p>At Rathod Law Firm, we are dedicated to providing exceptional legal services with a personal touch. 
                    Our team of experienced lawyers and paralegals is committed to understanding your unique situation 
                    and delivering tailored legal solutions that meet your specific needs.</p>
                  </div>

                  <div className="about-three__content-list">
                    <ul>
                      <li>
                        <h3><span className="icon-icon-16"></span> Client-Centered Approach</h3>
                      </li>
                      <li>
                        <h3><span className="icon-icon-16"></span> Committed to Justice and Fairness</h3>
                      </li>
                      <li>
                        <h3><span className="icon-icon-16"></span> Proven Results, Exceptional Representation</h3>
                      </li>
                    </ul>
                  </div>

                  <div className="about-three__content-btn">
                    <Link className="thm-btn" href="/contact">
                      Contact Us
                      <span className="thm-btn__icon">
                        <i className="icon-icon-8"></i>
                      </span>
                      <span className="thm-btn__hover-group">
                        <span className="thm-btn__hover thm-btn__hover--1"></span>
                        <span className="thm-btn__hover thm-btn__hover--2"></span>
                        <span className="thm-btn__hover thm-btn__hover--3"></span>
                        <span className="thm-btn__hover thm-btn__hover--4"></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End About Content */}
            </div>
          </div>
        </section>
        {/* End About Section */}

        {/* Start Our Mission Section */}
        <section className="company-history">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="company-history__top">
                  <div className="sec-title text-center">
                    <div className="sub-title">
                      <div className="icon">
                        <img src="/assets/img/icon/sec-title-img1.png" alt="Section Title Icon" />
                      </div>
                      <div className="text">
                        <p>our mission & values</p>
                      </div>
                    </div>
                    <h2>Committed to Excellence <br /> in Legal Services</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="company-history__inner">
                  <div className="company-history__content">
                    <div className="company-history__content-img">
                      <img src="/assets/img/about/company-history-img1.jpg" alt="Company History" />
                    </div>
                    <div className="company-history__content-text">
                      <h3>Our Mission</h3>
                      <p>Our mission at Rathod Law Firm is to provide accessible, high-quality legal services to our diverse clientele. 
                      We strive to understand each client's unique circumstances and deliver personalized legal solutions that address 
                      their specific needs. Our commitment to excellence, integrity, and client satisfaction drives everything we do.</p>
                    </div>
                  </div>

                  <div className="company-history__content">
                    <div className="company-history__content-img">
                      <img src="/assets/img/about/company-history-img2.jpg" alt="Company History" />
                    </div>
                    <div className="company-history__content-text">
                      <h3>Our Values</h3>
                      <p>At Rathod Law Firm, we are guided by a set of core values that define our practice:</p>
                      <ul className="list-unstyled mt-3">
                        <li className="mb-2"><strong>Integrity:</strong> We uphold the highest ethical standards in all our dealings.</li>
                        <li className="mb-2"><strong>Excellence:</strong> We are committed to delivering exceptional legal services.</li>
                        <li className="mb-2"><strong>Compassion:</strong> We approach each case with empathy and understanding.</li>
                        <li className="mb-2"><strong>Accessibility:</strong> We ensure our services are accessible to all who need them.</li>
                        <li className="mb-2"><strong>Diversity:</strong> We celebrate and respect the diversity of our clients and team.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="company-history__content">
                    <div className="company-history__content-img">
                      <img src="/assets/img/about/company-history-img3.jpg" alt="Company History" />
                    </div>
                    <div className="company-history__content-text">
                      <h3>Our Approach</h3>
                      <p>We believe in a client-centered approach to legal services. This means:</p>
                      <ul className="list-unstyled mt-3">
                        <li className="mb-2"><strong>Personalized Attention:</strong> We take the time to understand your unique situation.</li>
                        <li className="mb-2"><strong>Clear Communication:</strong> We explain complex legal matters in simple terms.</li>
                        <li className="mb-2"><strong>Proactive Solutions:</strong> We anticipate potential issues and address them before they become problems.</li>
                        <li className="mb-2"><strong>Transparent Pricing:</strong> We provide clear information about our fees and billing practices.</li>
                        <li className="mb-2"><strong>Timely Service:</strong> We respect your time and work efficiently to resolve your legal matters.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Our Mission Section */}

        {/* Start Client Reviews Section */}
        <section className="testimonials-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="testimonials-one__top">
                  <div className="sec-title text-center">
                    <div className="sub-title">
                      <div className="icon">
                        <img src="/assets/img/icon/sec-title-img1.png" alt="Section Title Icon" />
                      </div>
                      <div className="text">
                        <p>client testimonials</p>
                      </div>
                    </div>
                    <h2>What Our Clients Say <br /> About Our Services</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="testimonials-one__inner">
                  <div className="testimonials-one__content text-center">
                    <p className="mb-4">We are proud of the positive feedback we receive from our clients. 
                    Your satisfaction is our priority, and we continuously strive to exceed your expectations.</p>
                    
                    <div className="google-reviews-section">
                      <div className="google-reviews-box">
                        <div className="google-icon">
                          <img src="/assets/img/icon/google-icon.png" alt="Google Reviews" style={{width: '40px', height: '40px'}} />
                        </div>
                        <h3>Read Our Google Reviews</h3>
                        <p>See what our clients have to say about their experience with Rathod Law Firm.</p>
                        <div className="google-reviews-btn">
                          <a 
                            href="https://www.google.com/search?q=rathod+law+firm+reviews" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="thm-btn"
                          >
                            View Google Reviews
                            <span className="thm-btn__icon">
                              <i className="icon-icon-8"></i>
                            </span>
                            <span className="thm-btn__hover-group">
                              <span className="thm-btn__hover thm-btn__hover--1"></span>
                              <span className="thm-btn__hover thm-btn__hover--2"></span>
                              <span className="thm-btn__hover thm-btn__hover--3"></span>
                              <span className="thm-btn__hover thm-btn__hover--4"></span>
                            </span>
                          </a>
                        </div>
                        
                        <div className="review-us-section mt-4">
                          <h4>Share Your Experience</h4>
                          <p>If you've worked with us, we'd love to hear about your experience!</p>
                          <a 
                            href="https://www.google.com/search?q=rathod+law+firm&rlz=1C1GCEU_enCA962CA962#lrd=0x882b2d68d6e5ac0b:0x123456789abcdef0,3" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary"
                          >
                            Leave a Review
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Client Reviews Section */}

        {/* Start Contact CTA Section */}
        <section className="cta-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="cta-one__inner">
                  <div className="cta-one__left">
                    <div className="cta-one__icon">
                      <span className="icon-icon-6"></span>
                    </div>
                    <div className="cta-one__title">
                      <h2>Ready to Get Started? <br /> Contact Us Today!</h2>
                    </div>
                  </div>

                  <div className="cta-one__right">
                    <div className="cta-one__btn">
                      <Link href="/contact" className="thm-btn">
                        Contact Us
                        <span className="thm-btn__icon">
                          <i className="icon-icon-8"></i>
                        </span>
                        <span className="thm-btn__hover-group">
                          <span className="thm-btn__hover thm-btn__hover--1"></span>
                          <span className="thm-btn__hover thm-btn__hover--2"></span>
                          <span className="thm-btn__hover thm-btn__hover--3"></span>
                          <span className="thm-btn__hover thm-btn__hover--4"></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact CTA Section */}
      </div>
    </Layout>
  );
}