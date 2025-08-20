import Link from "next/link";

export default function Footer2() {
    const socialLinks = [
        { iconClass: "icon-icon-4", href: "#" },
        { iconClass: "icon-icon-3", href: "#" },
        { iconClass: "icon-icon-2", href: "#" },
        { iconClass: "icon-icon-1", href: "#" }
    ];

    const services = [
        { name: "Corporate Law", href: "criminal-case.html" },
        { name: "Insurance Law", href: "criminal-case.html" },
        { name: "Family Law", href: "criminal-case.html" },
        { name: "Car Accident", href: "criminal-case.html" },
        { name: "Health Care", href: "criminal-case.html" },
        { name: "Real Estate Law", href: "criminal-case.html" }
    ];

    const instagramImages = [
        "assets/img/footer/footer-v2-img1.jpg",
        "assets/img/footer/footer-v2-img2.jpg",
        "assets/img/footer/footer-v2-img3.jpg",
        "assets/img/footer/footer-v2-img4.jpg"
    ];

    const footerLinks = [
        { name: "Career", href: "about.html" },
        { name: "privacy & policy", href: "about.html" },
        { name: "contact", href: "contact.html" }
    ];

    return (
        <>
            <footer className="footer-two">
                <div className="shape1 float-bob-x">
                    <img src="assets/img/shape/footer-v2-shape1.png" alt="Shape 1" />
                </div>
                <div className="shape2 float-bob-y">
                    <img src="assets/img/shape/footer-v2-shape2.png" alt="Shape 2" />
                </div>
                <div className="footer-main">
                    <div className="footer-two__top">
                        <div className="container">
                            <div className="footer-two__top-inner">
                                <div className="logo-box">
                                    <Link href="/"><img src="assets/img/resource/logo-3.png" alt="Logo" /></Link>
                                </div>

                                <div className="footer-two__top-menu">
                                    <ul>
                                        <li><Link href="/">Home <span className="icon-icon-5"></span></Link></li>
                                        <li><Link href="#">Pages <span className="icon-icon-5"></span></Link></li>
                                        <li><Link href="/service">Service <span className="icon-icon-5"></span></Link></li>
                                        <li><Link href="/case">Case Studies <span className="icon-icon-5"></span></Link></li>
                                        <li><Link href="/blog">Blog <span className="icon-icon-5"></span></Link></li>
                                        <li><Link href="/contact">Contact Us <span className="icon-icon-5"></span></Link></li>
                                    </ul>
                                </div>

                                <div className="social-link">
                                    <ul>
                                        {socialLinks.map((link, index) => (
                                            <li key={index}>
                                                <a href={link.href}><span className={link.iconClass}></span></a>
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
                                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".1s">
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
                                                    <p className="text2"><a href="mailto:rathod@hplaw.org">rathod@hplaw.org</a></p>
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

                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="single-footer-widget footer-widget__service">
                                        <div className="title">
                                            <h2>Service Area</h2>
                                        </div>

                                        <div className="footer-widget__service-box">
                                            <ul>
                                                {services.map((service, index) => (
                                                    <li key={index}>
                                                        <Link href={service.href}>
                                                            <span className="icon-icon-501"></span> {service.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="single-footer-widget footer-widget__subscribe">
                                        <div className="title">
                                            <h2>Subscribe</h2>
                                        </div>
                                        <div className="footer-widget__subscribe-box">
                                            <form className="footer-widget__subscribe-form">
                                                <div className="input-box">
                                                    <input type="email" placeholder="YOUR EMAIL*" name="email" />
                                                    <button type="submit" className="footer-widget__subscribe-form-btn"><i className="icon-icon-26"></i></button>
                                                </div>
                                                <div className="footer-one__checkbox">
                                                    <input type="checkbox" name="checkbox" id="checkbox1" />
                                                    <label htmlFor="checkbox1"><span></span>I Agree to terms & Condition</label>
                                                </div>
                                            </form>

                                            <div className="text-box">
                                                <h3>Open Hours</h3>
                                                <p>Sunday To Thursday: 10:30AM - 5:30PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="single-footer-widget footer-widget__instagram">
                                        <div className="title">
                                            <h2>Instagram</h2>
                                        </div>

                                        <div className="footer-widget__instagram-box">
                                            <ul className="clearfix">
                                                {instagramImages.map((image, index) => (
                                                    <li key={index}>
                                                        <div className="img-box">
                                                            <img src={image} alt={`Instagram ${index + 1}`} />
                                                            <div className="overlay-icon">
                                                                <Link href="blog-details.html"><span className="icon-icon-2"></span></Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom__inner">
                            <div className="footer-bottom__text">
                                <p>Copyright © {new Date().getFullYear()} | All rights reserved by <a href="https://rathodlaw.com">Rathod Law Firm</a></p>
                            </div>

                            <div className="footer-bottom__menu">
                                <ul>
                                    {footerLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link href={link.href}>{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
