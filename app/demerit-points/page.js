import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetails from '@/components/common/ServiceDetails';

export const metadata = {
  title: 'Demerit Points (Ontario) | Protect Your Licence | Rathod Law',
  description:
    'Understand and manage Ontario demerit points. We help reduce impact, avoid suspension, and protect your driving record. Speak with a paralegal today.',
};

export default function DemeritPoints() {
  const serviceDetails = {
    serviceListTitle: 'Traffic Tickets & Driving Offences',
    serviceList: [
      { name: 'Speeding Tickets', link: '/speeding-tickets', isActive: false },
      { name: 'Stunt Driving', link: '/stunt-driving', isActive: false },
      { name: 'Red Light Tickets', link: '/red-light-tickets', isActive: false },
      { name: 'Seat Belt Tickets', link: '/seat-belt-tickets', isActive: false },
      { name: 'Cell Phone Tickets', link: '/cell-phone-tickets', isActive: false },
      { name: 'Suspended Licence', link: '/suspended-license', isActive: false },
      { name: 'Demerit Points', link: '#', isActive: true },
    ],
    contactPattern: 'assets/img/pattern/sidebar-contact-pattern.png',
    contactIcon: '/assets/img/icon/about-v2-icon1.png',
    contactTitle: 'Request a Consultation',
    contactSubtitle: 'Protect Your Licence',
    contactLink: '/contact',
    contactButtonText: 'Speak with a Paralegal',
    downloadTitle: 'Helpful Links',
    downloads: [
      { text: 'Contact Our Team', link: '/contact' },
      { text: 'Schedule a Call', link: '/schedule-call' },
    ],
    mainImage: '/assets/img/service/service-details-img6.jpg',
    serviceTitle: 'Ontario Demerit Points — Clear Guidance & Defence',
    serviceDescription1:
      "Ontario’s demerit points track driving convictions. Too many points can trigger warnings, interviews, higher insurance, and even licence suspension. We explain your options, challenge improper convictions, and help you minimize impact.",
    serviceDescription2:
      'Points are added on conviction (not charge) and most are removed 2 years from the offence date. Novice drivers face lower thresholds. We help you plan a path to protect your record and ability to drive.',
    benefitTitle: 'What You Gain',
    benefitDescription:
      'Practical strategies to reduce risk, protect your licence, and move forward confidently.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Point impact assessment' },
      { icon: 'icon-icon-10', title: 'Ticket defence & negotiations' },
      { icon: 'icon-icon-11', title: 'Clear reinstatement guidance' },
      { icon: 'icon-icon-12', title: 'Support at every step' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    justiceTitle: 'Understanding Ontario Demerit Points',
    justiceText1: 'Key rules and thresholds to know under the Highway Traffic Act:',
    justiceList: [
      'Points added on conviction; not when charged',
      'Most points removed 2 years from offence date',
      'Full licence: 15+ points can trigger suspension',
      'Novice licence (G1/G2/M1/M2): 9+ points can trigger suspension',
      'Some out-of-province convictions may add points',
    ],
    contentImgs3: [
      '/assets/img/service/service-details-img3.jpg',
      '/assets/img/service/service-details-img4.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro:
      'Short answers to common concerns about demerit points and their impact in Ontario.',
    faqs: [
      {
        question: 'How many points lead to suspension?',
        answer:
          'Full licence holders risk suspension at 15+ points; novice drivers at 9+. Warnings may start earlier. We help plan proactive steps to avoid escalation.',
      },
      {
        question: 'Do points affect my insurance?',
        answer:
          'Insurers care more about convictions than points, but accumulating points usually reflects multiple convictions. We focus on reducing charge impact and future risk.',
      },
      {
        question: 'Can points be removed early?',
        answer:
          'There is no early removal program. Most points drop off 2 years after the offence date. We can work on lowering future impact and contesting active tickets.',
      },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Demerit Points">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}