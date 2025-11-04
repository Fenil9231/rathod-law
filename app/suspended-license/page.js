import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetails from '@/components/common/ServiceDetails';

export const metadata = {
  title: 'Suspended Licence (Ontario) | Reinstatement & Defence | Rathod Law',
  description:
    'Protect your ability to drive. We help challenge suspensions, reduce penalties, and guide reinstatement in Ontario. Speak with a paralegal today.',
};

export default function SuspendedLicense() {
  const serviceDetails = {
    serviceListTitle: 'Traffic Tickets & Driving Offences',
    serviceList: [
      { name: 'Speeding Tickets', link: '/speeding-tickets', isActive: false },
      { name: 'Stunt Driving', link: '/stunt-driving', isActive: false },
      { name: 'Red Light Tickets', link: '/red-light-tickets', isActive: false },
      { name: 'Seat Belt Tickets', link: '/seat-belt-tickets', isActive: false },
      { name: 'Cell Phone Tickets', link: '/cell-phone-tickets', isActive: false },
      { name: 'Suspended Licence', link: '#', isActive: true },
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
    serviceTitle: 'Suspended Licence Defence (Ontario)',
    serviceDescription1:
      "A suspension affects work, family, and independence. We quickly assess why it happened, explain your options, and take action to protect your ability to drive.",
    serviceDescription2:
      'Whether from demerit points, impaired-related measures, unpaid fines, medical reasons, or court orders, we challenge improper suspensions and guide you through reinstatement.',
    benefitTitle: 'What You Gain',
    benefitDescription:
      'Clear strategy, strong advocacy, and practical steps to get you legally back on the road.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Faster reinstatement guidance' },
      { icon: 'icon-icon-10', title: 'Challenge unfair suspensions' },
      { icon: 'icon-icon-11', title: 'Reduce penalties & risk' },
      { icon: 'icon-icon-12', title: 'Dedicated client support' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    justiceTitle: 'When Suspensions Happen (Ontario)',
    justiceText1:
      'Common triggers under the Highway Traffic Act and related laws:',
    justiceList: [
      'Demerit points: 15+ for full, 9+ for novice drivers',
      'Stunt driving / racing: immediate 30-day + court suspension',
      'Impaired or warn range: administrative and court measures',
      'Unpaid fines or court-ordered conditions',
      'Medical suspensions requiring clearance',
    ],
    contentImgs3: [
      '/assets/img/service/service-details-img3.jpg',
      '/assets/img/service/service-details-img4.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro:
      'Short answers to common concerns about suspended licences in Ontario.',
    faqs: [
      {
        question: 'Can I appeal a suspension?',
        answer:
          'Many administrative suspensions can be appealed within strict time limits. We review your case and file the right appeal or application where available.',
      },
      {
        question: 'How do I reinstate my licence?',
        answer:
          'Complete the suspension period, pay fines, fees, meet any program or interlock requirements, and provide medical clearance if needed. We guide each step.',
      },
      {
        question: 'What happens if I drive while suspended?',
        answer:
          'Penalties include heavy fines, longer suspensions, vehicle impoundment, and possible jail for repeats. Speak to us before risking further consequences.',
      },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Suspended Licence">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}