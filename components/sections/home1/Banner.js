"use client";  // Add this line at the top

import Link from "next/link";
import { useState } from "react";

export default function Banner() {
    // State for dynamic data (e.g., dynamic images or text)
    const [bannerContent, setBannerContent] = useState({
        description: "Experienced legal representation for traffic violations, immigration matters, and family law. Our dedicated team provides personalized service to protect your rights and achieve the best possible outcomes for your case.",
        socialLinks: [
            { icon: "icon-icon-1", url: "#" },
            { icon: "icon-icon-2", url: "#" },
            { icon: "icon-icon-3", url: "#" },
            { icon: "icon-icon-4", url: "#" }
        ],
        backgroundImage: "/assets/img/pattern/banner-v1-pattern.png",
        bannerImage: "/assets/img/background/banner-v1-bg.jpeg"
    });

    return (
        <>
            {/* Start Banner One */}
            <section className="banner-one">
                <div className="banner-one__content">
                    <div className="banner-one__social-links">
                        <div className="banner-one__social-links-inner">
                            {bannerContent.socialLinks.map((link, index) => (
                                <Link href={link.url} key={index}>
                                    <span className={link.icon}></span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div 
                        className="banner-one__content-pattern"
                        style={{ backgroundImage: `url(${bannerContent.backgroundImage})` }}
                    ></div>
                    <div className="container">
                        <div className="banner-one__content-inner">
                            <div className="banner-one__content-left">
                                <h2>RATHOD LAW <br /> PROFESSIONAL CORPORATION</h2>
                            </div>
                            <div className="banner-one__content-right">
                                <p>{bannerContent.description}</p>
                                <div className="btn-box">
                                    <Link href="/about">
                                        Learn More <span className="icon-icon-8"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-one__img">
                    <div 
                        className="banner-one__img-bg" 
                        style={{ backgroundImage: `url(${bannerContent.bannerImage})` }}
                    ></div>
                </div>
            </section>
            {/* End Banner One */}
        </>
    );
}
