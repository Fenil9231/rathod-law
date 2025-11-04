import Layout from "@/components/layout/Layout";
import ServiceDetails from "@/components/common/ServiceDetails";

export const metadata = {
  title: "Cell Phone Tickets Ontario | Distracted Driving Defense | Rathod Law",
  description:
    "Expert defense for cell phone and distracted driving tickets in Ontario. Fight fines, demerit points, and licence suspension. Free consultation.",
  keywords:
    "cell phone tickets Ontario, distracted driving, hands-free driving, traffic violation defense, demerit points",
};

export default function CellPhoneTickets() {
  const serviceDetails = {
    serviceListTitle: "Traffic Ticket Services",
    serviceList: [
      { name: "Speeding Tickets", link: "/speeding-tickets", isActive: false },
      { name: "Stunt Driving", link: "/stunt-driving", isActive: false },
      { name: "Cell Phone Tickets", link: "/cell-phone-tickets", isActive: true },
      { name: "Red Light Tickets", link: "/red-light-tickets", isActive: false },
      { name: "Seat Belt Tickets", link: "/seat-belt-tickets", isActive: false },
      { name: "Suspended License", link: "/suspended-license", isActive: false },
      { name: "Demerit Points", link: "/demerit-points", isActive: false },
    ],
    contactPattern: "assets/img/pattern/sidebar-contact-pattern.png",
    contactIcon: "/assets/img/icon/about-v2-icon1.png",
    contactTitle: "Free Consultation",
    contactSubtitle: "Distracted Driving Defence",
    contactLink: "/contact",
    contactButtonText: "Contact Us",
    downloadTitle: "Resources",
    downloads: [],
    mainImage: "/assets/img/service/service-details-img5.jpg",
    serviceTitle: "Cell Phone Tickets (Distracted Driving) — Ontario",
    serviceDescription1:
      "Charged with using a hand‑held device while driving? We defend distracted driving tickets across Ontario — aiming to avoid fines, demerit points, short‑term suspensions, and insurance hikes. Clear strategy, strong advocacy, and timely action.",
    serviceDescription2:
      "What we do: review police disclosure, assess device usage and exceptions (hands‑free, emergency calls, parked off‑road), challenge observations and procedure, and negotiate withdrawals or reductions. You typically have 15 days to choose an option or request a trial — contact us promptly.",
    benefitTitle: "How We Help",
    benefitDescription:
      "From first notice to final outcome, we manage your case end‑to‑end and push for the best achievable result.",
    benefits: [
      { icon: "icon-icon-32", title: "Protect Your Licence" },
      { icon: "icon-icon-21", title: "Reduce Fines & Points" },
      { icon: "icon-icon-7", title: "Strategic Negotiation" },
      { icon: "icon-icon-31", title: "Representation at Court" },
    ],
    videoThumbnail: "/assets/img/service/service-details-video-thumb.jpg",
    justiceTitle: "Penalties and Impact",
    justiceText1:
      "Consequences scale with prior history. Actual outcomes depend on evidence, circumstances, and advocacy:",
    justiceList: [
      "Prohibited: calls, texting, typing, dialing on hand‑held devices",
      "Prohibited: programming GPS while the vehicle is moving",
      "Prohibited: watching video, recording, or taking photos while driving",
      "First offence (typical): $615–$1,000 fine, 3 points, 3‑day suspension",
      "Second offence (≤5 years): $615–$2,000 fine, 6 points, 7‑day suspension",
      "Third+ offence: $615–$3,000 fine, 6 points, 30‑day suspension",
      "Exceptions: true hands‑free, built‑in systems, 911/emergency, legally parked off the roadway",
      "Common defences: hands‑free lawful use, emergency necessity, observation challenges, paperwork/procedure defects",
      "Insurance: rates may rise for 3+ years after conviction",
      "Employment: commercial/professional driving may be affected",
      "Novice drivers: additional graduated licensing penalties",
      "Prevention: set up GPS before driving, use voice commands, pull over safely",
    ],
    contentImgs3: [
      "/assets/img/service/service-details-img1.jpg",
      "/assets/img/service/service-details-img2.jpg",
    ],
    faqTitle: "Frequently Asked Questions",
    faqIntro:
      "General guidance only. Get tailored advice in a consultation.",
    faqs: [
      {
        question: "What are my options after receiving a ticket?",
        answer:
          "You can seek early resolution, request a trial, or enter a plea. We advise the best course for your case and manage deadlines.",
      },
      {
        question: "Do I have to appear in court for a cell phone ticket?",
        answer:
          "It depends on the charge and options selected. We handle most appearances on your behalf and advise if attendance is required.",
      },
      {
        question: "Are hands‑free calls always permitted?",
        answer:
          "Hands‑free systems may be permitted when operated without touching the device. Facts and vehicle setup matter; we assess your specific scenario.",
      },
      {
        question: "What defences are commonly used?",
        answer:
          "Hands‑free lawful use, emergency necessity, observation challenges, and paperwork/procedure defects depending on circumstances.",
      },
      {
        question: "Will my insurance go up?",
        answer:
          "Insurers may increase premiums following a conviction. We work to avoid convictions or reduce impact where possible.",
      },
      {
        question: "How long do I have to request a trial?",
        answer:
          "In most cases you have 15 days to select an option or request a trial. Contact us promptly to preserve your rights and timelines.",
      },
      {
        question: "Is my licence suspended immediately?",
        answer:
          "Certain distracted driving charges can trigger immediate short‑term roadside suspensions. We advise on next steps and representation options.",
      },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Cell Phone Tickets">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}