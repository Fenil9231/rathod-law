import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

const FooterOne = () => {
    return (
        <footer className="footer-one style3">
            <div className="footer-main">
                {/* Start Brand One */}
                <div className="brand-one style3">
                    <div className="container">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={5}
                            autoplay={{ delay: 5000 }}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 30 },
                                375: { slidesPerView: 1, spaceBetween: 30 },
                                575: { slidesPerView: 2, spaceBetween: 30 },
                                768: { slidesPerView: 3, spaceBetween: 30 },
                                992: { slidesPerView: 4, spaceBetween: 30 },
                                1200: { slidesPerView: 5, spaceBetween: 30 },
                            }}
                        >
                            {[...Array(10)].map((_, i) => (
                                <SwiperSlide key={i}>
                                    <div className="img-box">
                                        <img src={`/assets/img/brand/brand-v1-img${i % 5 + 1}.png`} alt={`Brand ${i + 1}`} />
                                    </div>
                                    <div className="img-box2">
                                        <img src={`/assets/img/brand/brand-v1-img${i % 5 + 6}.png`} alt={`Brand ${i + 6}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                {/* End Brand One */}

                <div className="footer-one__bottom">
                    <div className="container">
                        <div className="row">
                            {/* Single Footer Widget */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".1s">
                                <div className="single-footer-widget footer-widget__about">
                                    <div className="logo-box">
                                        <Link href="/">
                                            <img src="/assets/img/resource/logo-2.png" alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="footer-widget__about-inner">
                                        <div className="text-box1">
                                            <p>Living blessed fore meat likeness <br /> seas their outstand form.</p>
                                        </div>
                                        <div className="text-box2">
                                            <h3>Open Hours</h3>
                                            <p>Sunday To Thursday: 10:30AM - 5:30PM</p>
                                        </div>

                                        {/* Offices placed directly after Open Hours with Google Maps links */}
                                        <div className="text-box3 footer-widget__locations" style={{ marginTop: '12px' }}>
                                            <h3>Our Offices</h3>
                                            <ul>
                                                <li>
                                                    <p className="text1"><span className="icon-icon-24"></span> Brampton Office</p>
                                                    <p className="text2">
                                                        <a
                                                            href="https://www.google.com/maps/search/?api=1&query=106-2250%20Bovaird%20Drive%20East%2C%20Brampton%2C%20Ontario%20L6R%200W3"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            106-2250 Bovaird Drive East <br /> Brampton, Ontario L6R 0W3
                                                        </a>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="text1"><span className="icon-icon-24"></span> Scarborough Office</p>
                                                    <p className="text2">
                                                        <a
                                                            href="https://www.google.com/maps/search/?api=1&query=122-1200%20Markham%20Road%2C%20Scarborough%2C%20ON%20M1H%203C3"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            122-1200 Markham Road <br /> Scarborough, ON M1H 3C3
                                                        </a>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Footer Widget */}

                            {/* Single Footer Widget */}
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget footer-widget__contact">
                                    <div className="title">
                                        <h2>Contact Us</h2>
                                    </div>
                                    <div className="footer-widget__contact-list">
                                        <ul>
                                            <li>
                                                <p className="text1"><span className="icon-icon-24"></span> Brampton Office</p>
                                        <p className="text2" style={{ color: '#B3B7BB' }}>106-2250 Bovaird Drive East <br /> Brampton, Ontario L6R 0W3</p>
                                            </li>
                                            <li>
                                                <p className="text1"><span className="icon-icon-24"></span> Scarborough Office</p>
                                        <p className="text2" style={{ color: '#B3B7BB' }}>122-1200 Markham Road <br /> Scarborough, ON M1H 3C3</p>
                                            </li>
                                            <li>
                                                <p className="text1"><span className="icon-icon-25"></span> Email Us</p>
                                                <p className="text2">
                                                    <Link href="mailto:rathod@hplaw.org">rathod@hplaw.org</Link>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text1"><span className="icon-icon-37"></span> Phone</p>
                                                <p className="text2">
                                                    Brampton: <Link href="tel:(647) 654-9454">(647) 654-9454</Link><br />
                                                    Scarborough: <Link href="tel:(437) 880-9656">(437) 880-9656</Link><br />
                                                    <small>Hours: 9am-5pm Mon-Fri</small>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Footer Widget */}

                            {/* Single Footer Widget */}
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget footer-widget__service">
                                    <div className="title">
                                        <h2>Service Area</h2>
                                    </div>
                                    <div className="footer-widget__service-box">
                                        <ul>
                                            <li>
                                                <Link href="/immigration-appeals">
                                                    <span className="icon-icon-501"></span> Immigration Appeals
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/refugee-appeals">
                                                    <span className="icon-icon-501"></span> Refugee Appeals
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/immigration-applications">
                                                    <span className="icon-icon-501"></span> Immigration Applications
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/family-law-services">
                                                    <span className="icon-icon-501"></span> Family Law Services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/notarization">
                                                    <span className="icon-icon-501"></span> Notarization
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Footer Widget */}

                            {/* Single Footer Widget */}
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
                                                <label htmlFor="checkbox1"><span></span>I Agree to terms & Condition</label>
                                            </div>
                                        </form>
                                        <div className="footer-widget__subscribe-bottom">
                                            <div className="title-box">
                                                <h3>Follow</h3>
                                            </div>
                                            <div className="social-links">
                                                <Link href="#"><span className="icon-icon-4"></span></Link>
                                                <Link href="#"><span className="icon-icon-3"></span></Link>
                                                <Link href="#"><span className="icon-icon-2"></span></Link>
                                                <Link href="#"><span className="icon-icon-1"></span></Link>
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

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom__inner">
                        <div className="footer-bottom__text">
                            <p>Copyright © {new Date().getFullYear()} | All rights reserved by{' '}
                                <Link href="https://rathodlaw.com">
                                Rathod Law Firm
                                </Link>
                            </p>
                        </div>
                        <div className="footer-bottom__menu">
                            <ul>
                                <li>
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="/cookie-policy">Cookie Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;
