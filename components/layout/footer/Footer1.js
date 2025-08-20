"use client";

import Link from 'next/link';

// Sample data for footer content
const footerBrands = [
  "/assets/img/footer/footer-v1-brand1.png",
  "/assets/img/footer/footer-v1-brand2.png",
  "/assets/img/footer/footer-v1-brand3.png",
  "/assets/img/footer/footer-v1-brand4.png",
  "/assets/img/footer/footer-v1-brand5.png"
];

const services = [
  { href: "/criminal-case", text: "Corporate Law" },
  { href: "/criminal-case", text: "Insurance Law" },
  { href: "/criminal-case", text: "Family Law" },
  { href: "/criminal-case", text: "Car Accident" },
  { href: "/criminal-case", text: "Health Care" },
  { href: "/criminal-case", text: "Real Estate Law" }
];

const socialLinks = [
  { href: "#", iconClass: "icon-icon-4" },
  { href: "#", iconClass: "icon-icon-3" },
  { href: "#", iconClass: "icon-icon-2" },
  { href: "#", iconClass: "icon-icon-1" }
];

export default function Footer1() {
  return (
    <>
      {/* Start Footer One */}
      <footer className="footer-one">
        {/* Start Footer Main */}
        <div className="footer-main">
          <div className="footer-one__top">
            <div className="container">
              <div className="footer-one__top-inner">
                <div className="footer-one__top-text">
                  <h2>Best global law <br /> firm award</h2>
                </div>

                <div className="footer-one__top-brand">
                  <ul>
                    {footerBrands.map((src, index) => (
                      <li key={index}>
                        <div className="img-box">
                          <img src={src} alt={`Footer Brand ${index + 1}`} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-one__bottom">
            <div className="container">
              <div className="row">
                {/* Start Single Footer Widget */}
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".1s">
                  <div className="single-footer-widget footer-widget__about">
                    <div className="logo-box">
                      <Link href="/">
                        <img src="/assets/img/resource/logo-1.png" alt="Rathod Law Firm" />
                      </Link>
                    </div>

                    <div className="footer-widget__about-inner">
                      <div className="text-box1">
                        <p>Providing exceptional legal services <br /> with dedication and expertise.</p>
                      </div>

                      <div className="text-box2">
                        <h3>Open Hours</h3>
                        <p>Sunday To Thursday: 10:30AM - 5:30PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Footer Widget */}

                {/* Start Single Footer Widget */}
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="single-footer-widget footer-widget__contact">
                    <div className="title">
                      <h2>Contact Us</h2>
                    </div>

                    <div className="footer-widget__contact-list">
                      <ul>
                        <li>
                          <p className="text1"><span className="icon-icon-24"></span> Brampton Office</p>
                          <p className="text2">106-2250 Bovaird Drive East <br /> Brampton, Ontario L6R 0W3</p>
                        </li>

                        <li>
                          <p className="text1"><span className="icon-icon-24"></span> Scarborough Office</p>
                          <p className="text2">122-1200 Markham Road <br /> Scarborough, ON M1H 3C3</p>
                        </li>

                        <li>
                          <p className="text1"><span className="icon-icon-25"></span> Email Us</p>
                          <p className="text2">
                            <a href="mailto:rathod@hplaw.org">rathod@hplaw.org</a>
                          </p>
                        </li>

                        <li>
                          <p className="text1"><span className="icon-icon-37"></span> Phone</p>
                          <p className="text2">
                            Brampton: <a href="tel:(647) 654-9454">(647) 654-9454</a><br />
                            Scarborough: <a href="tel:(437) 880-9656">(437) 880-9656</a><br />
                            <small>Hours: 9am-5pm Mon-Fri</small>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Single Footer Widget */}

                {/* Start Single Footer Widget */}
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                  <div className="single-footer-widget footer-widget__service">
                    <div className="title">
                      <h2>Service Area</h2>
                    </div>

                    <div className="footer-widget__service-box">
                      <ul>
                        {services.map((service, index) => (
                          <li key={index}>
                            <Link href={service.href}>
                              <span className={`icon-icon-501`}></span>
                              {service.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Single Footer Widget */}

                {/* Start Single Footer Widget */}
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="single-footer-widget footer-widget__subscribe">
                    <div className="title">
                      <h2>Subscribe</h2>
                    </div>
                    <div className="footer-widget__subscribe-box">
                      <form className="footer-widget__subscribe-form">
                        <div className="input-box">
                          <input type="email" placeholder="YOUR EMAIL*" name="email" />
                          <button type="submit" className="footer-widget__subscribe-form-btn">
                            <i className="icon-icon-26"></i>
                          </button>
                        </div>
                        <div className="footer-one__checkbox">
                          <input type="checkbox" name="checkbox" id="checkbox1" />
                          <label htmlFor="checkbox1">
                            <span></span>I Agree to terms & Condition
                          </label>
                        </div>
                      </form>

                      <div className="footer-widget__subscribe-bottom">
                        <div className="title-box">
                          <h3>Follow</h3>
                        </div>
                        <div className="social-links">
                          {socialLinks.map((link, index) => (
                            <a key={index} href={link.href}>
                              <span className={link.iconClass}></span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Footer Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Main */}

        {/* Start Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom__inner">
              <div className="footer-bottom__text">
                <p>
                  Copyright © {new Date().getFullYear()} | All rights reserved by{" "}
                  <Link href="https://rathodlaw.com">Rathod Law Firm</Link>
                </p>
              </div>

              <div className="footer-bottom__menu">
                <ul>
                  <li><Link href="/about">Career</Link></li>
                  <li><Link href="/about">privacy & policy</Link></li>
                  <li><Link href="/contact">contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Bottom */}
      </footer>
      {/* End Footer One */}
    </>
  );
}
