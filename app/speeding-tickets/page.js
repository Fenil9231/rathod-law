"use client";
import Layout from "@/components/layout/Layout";
import ServiceDetails from "@/components/common/ServiceDetails";

export default function SpeedingTickets() {
  const serviceDetails = {
    serviceListTitle: "Traffic Ticket Services",
    serviceList: [
      { name: "Speeding Tickets", link: "/speeding-tickets", isActive: true },
      { name: "Stunt Driving", link: "/stunt-driving", isActive: false },
      { name: "Cell Phone Tickets", link: "/cell-phone-tickets", isActive: false },
      { name: "Red Light Tickets", link: "/red-light-tickets", isActive: false },
      { name: "Seat Belt Tickets", link: "/seat-belt-tickets", isActive: false },
      { name: "Suspended License", link: "/suspended-license", isActive: false },
      { name: "Demerit Points", link: "/demerit-points", isActive: false },
    ],
    contactPattern: "assets/img/pattern/sidebar-contact-pattern.png",
    contactIcon: "/assets/img/icon/about-v2-icon1.png",
    contactTitle: "Free Consultation",
    contactSubtitle: "Protect Your Driving Record",
    contactLink: "/contact",
    contactButtonText: "Contact Us",
    downloadTitle: "Resources",
    downloads: [],
    mainImage: "/assets/img/service/service-details-img6.jpg",
    serviceTitle: "Speeding Tickets",
    serviceDescription1:
      "Receiving a speeding ticket in Ontario can result in significant fines, demerit points, and potential licence suspension. Our experienced paralegals provide expert representation to help you fight speeding tickets and protect your driving record.",
    serviceDescription2:
      "Speeding violations are governed by the Highway Traffic Act. Penalties scale with excess speed and can include fines, demerit points, insurance increases, and suspension for excessive speed.",
    benefitTitle: "How We Can Help",
    benefitDescription:
      "We review the ticket for technical defects, examine evidence and circumstances, challenge radar/laser calibration and officer training, negotiate with prosecutors, and represent you in court to seek dismissal or reduction.",
    benefits: [
      { icon: "icon-icon-9", title: "Ticket & disclosure review" },
      { icon: "icon-icon-10", title: "Evidence & device analysis" },
      { icon: "icon-icon-11", title: "Negotiation & advocacy" },
      { icon: "icon-icon-12", title: "Record & insurance protection" },
    ],
    videoThumbnail: "/assets/img/service/service-details-img2.jpg",
    justiceTitle: "Common Defences for Speeding",
    justiceText1:
      "There are multiple ways to defend a speeding ticket depending on facts, equipment, and procedure. We tailor defences to your situation and jurisdiction.",
    justiceList: [
      "Technical defects in ticket or procedure",
      "Equipment calibration or maintenance issues",
      "Officer error or misidentification",
      "Emergency circumstances necessitating speed",
      "Charter rights and disclosure problems",
    ],
    contentImgs3: [
      "/assets/img/service/service-details-img3.jpg",
      "/assets/img/service/service-details-img4.jpg",
    ],
    faqTitle: "Frequently Asked Questions",
    faqIntro:
      "Common questions about fines, points, court appearances, success rates, and deadlines for speeding tickets in Ontario.",
    faqs: [
      {
        question: "How much will a speeding ticket cost me?",
        answer:
          "Fines vary by speed over the limit: 1–19 km/h ($40–$95), 20–29 ($95–$145), 30–49 ($145–$295), 50+ ($295–$10,000 for stunt). Insurance may increase 15–25% for 3–6 years.",
      },
      {
        question: "Should I fight my speeding ticket or just pay it?",
        answer:
          "Fighting is typically worthwhile. Dismissals or reductions protect points and insurance. Professional representation achieves favourable outcomes far more often than self-representation.",
      },
      {
        question: "How many demerit points will I get for speeding?",
        answer:
          "Points: 0 (1–15 km/h), 3 (16–29), 4 (30–49), 6 (50+ with stunt). New drivers risk suspension at 6+ points; experienced drivers at 9+ and 15+ thresholds.",
      },
      {
        question: "Do I need to appear in court?",
        answer:
          "With representation, you typically do not need to appear. Self-representation requires attending all dates. Missing a date leads to automatic conviction and added penalties.",
      },
      {
        question: "What are the chances of dismissal?",
        answer:
          "Success depends on accuracy, evidence, equipment records, and procedure. Common wins: technical defects, calibration gaps, disclosure issues, and favourable negotiations.",
      },
      {
        question: "How long do I have to act?",
        answer:
          "You generally have 15 days to request Early Resolution or trial. Act quickly to secure disclosure, review evidence, and plan strategy before deadlines.",
      },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Speeding Tickets">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}