"use client"; // Ensures the component runs on the client side

import Link from "next/link";
import { useState } from "react";

export default function ServicesOne() {
  // State for dynamic data (e.g., dynamic images, text, links)
  const [servicesContent, setServicesContent] = useState({
    backgroundImage: "/assets/img/background/services-v1-bg.jpg",
    sectionTitleIcon: "/assets/img/icon/sec-title-img1.png",
    sectionTitleText: "our services",
    sectionMainTitle: "We Provide Best Legal Services",
    services: [
      {
        id: 1,
        title: "Traffic Violations",
        description: "Expert representation for speeding tickets, red light violations, stunt driving, suspended license, and all traffic-related offenses. We help protect your driving record and minimize penalties.",
        link: "/services/traffic-violations",
      },
      {
        id: 2,
        title: "Immigration Law",
        description: "Comprehensive immigration services including refugee appeals, judicial reviews, immigration applications, and family sponsorship. We guide you through complex immigration processes.",
        link: "/services/immigration",
      },
      {
        id: 3,
        title: "Family Law",
        description: "Compassionate legal support for divorce, child custody, spousal support, property division, and other family matters. We protect your family's interests with personalized attention.",
        link: "/services/family-law",
      },
      {
        id: 4,
        title: "Paralegal Services",
        description: "Cost-effective paralegal services for traffic tickets, small claims court, and administrative matters. Professional representation at affordable rates.",
        link: "/services/paralegal",
      },
      {
        id: 5,
        title: "Notarization",
        description: "Professional notary services for legal documents, affidavits, statutory declarations, and other official documentation. Quick and reliable service.",
        link: "/services/notarization",
      },
      {
        id: 6,
        title: "Legal Consultation",
        description: "Expert legal advice and consultation for various legal matters. We provide clear guidance to help you understand your options and make informed decisions.",
        link: "/services/consultation",
      },
    ],
  });

  return (
    <>
      {/* Start Services One */}
      <section className="services-one">
        <div
          className="services-one__bg wow fadeInRight"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
          style={{ backgroundImage: `url(${servicesContent.backgroundImage})` }}
        ></div>
        <div className="container">
          <div className="services-one__content">
            <div className="sec-title">
              <div className="sub-title">
                <div className="icon">
                  <img src={servicesContent.sectionTitleIcon} alt="Section Icon" />
                </div>
                <div className="text">
                  <p>{servicesContent.sectionTitleText}</p>
                </div>
              </div>
              <h2>{servicesContent.sectionMainTitle}</h2>
            </div>

            <ul className="services-one__content-list">
              {servicesContent.services.map((service) => (
                <li key={service.id}>
                  <div className="content-box">
                    <div className="count-box">
                      <h2>{service.id.toString().padStart(2, "0")}/</h2>
                    </div>
                    <div className="text-box">
                      <h2>
                        <Link href={service.link}>{service.title}</Link>
                      </h2>
                      <p>{service.description}</p>
                    </div>
                  </div>

                  <div className="btn-box">
                    <Link href={service.link}>
                      read More <span className="icon-icon-8"></span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* End Services One */}
    </>
  );
}
