import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetails from '@/components/common/ServiceDetails';

export const metadata = {
  title: 'Seat Belt Tickets Ontario | Fight Fines & Points | Rathod Law',
  description:
    'Ontario seat belt ticket defense: fight $240 fines, 2 demerit points, and insurance impact. Clear options, strong representation, free consultation.',
  keywords:
    'seat belt tickets Ontario, seat belt violation defense, Highway Traffic Act, demerit points, trial request 15 days, medical exemption',
};

export default function SeatBeltTickets() {
  const serviceDetails = {
    serviceListTitle: 'Traffic Ticket Services',
    serviceList: [
      { name: 'Speeding Tickets', link: '/speeding-tickets', isActive: false },
      { name: 'Cell Phone Tickets', link: '/cell-phone-tickets', isActive: false },
      { name: 'Seat Belt Tickets', link: '#', isActive: true },
      { name: 'Red Light Tickets', link: '/red-light-tickets', isActive: false },
      { name: 'Stunt Driving', link: '/stunt-driving', isActive: false },
      { name: 'Suspended License', link: '/suspended-license', isActive: false },
      { name: 'Demerit Points', link: '/demerit-points', isActive: false },
    ],
    contactPattern: 'assets/img/pattern/sidebar-contact-pattern.png',
    contactIcon: '/assets/img/icon/about-v2-icon1.png',
    contactTitle: 'Free Consultation',
    contactSubtitle: 'Seat Belt Ticket Defense',
    contactLink: '/contact',
    contactButtonText: 'Speak with a Lawyer',
    downloadTitle: 'Helpful Resources',
    downloads: [
      { text: 'Understanding Ontario Seat Belt Laws', link: '/insights' },
      { text: 'How Demerit Points Work', link: '/demerit-points' },
    ],
    mainImage: '/assets/img/service/service-details-img6.jpg',
    serviceTitle: 'Seat Belt Tickets in Ontario',
    serviceDescription1:
      'A seat belt conviction can lead to a $240 fine, 2 demerit points, and insurance increases. We help drivers challenge tickets, protect driving records, and avoid unnecessary penalties. Our approach is practical and outcome-focused—clear advice, strategic representation, transparent fees.',
    serviceDescription2:
      'You typically have 15 days to request a trial or meeting with the prosecutor. Acting quickly preserves your options. Many cases can be resolved without you appearing in court. We review disclosure, officer notes, and any legal exemptions to pursue the best available outcome.',
    benefitTitle: 'Why work with us',
    benefitDescription:
      'We combine deep knowledge of the Highway Traffic Act with disciplined case preparation. Every matter gets a clear strategy: review the facts, evaluate exemptions, and determine whether to challenge evidence or seek a resolution that avoids points and minimizes insurance impact.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Protect driving record' },
      { icon: 'icon-icon-10', title: 'Reduce fines and points' },
      { icon: 'icon-icon-11', title: 'Clear, honest advice' },
      { icon: 'icon-icon-12', title: 'Court representation for you' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Ontario Seat Belt Law: What to Know',
    justiceText1:
      'Ontario requires properly worn seat belts for drivers and passengers. Drivers are responsible for passengers under 16. There are limited exemptions. Understanding the rules helps determine whether to fight the ticket or pursue a negotiated outcome.',
    justiceList: [
      'Requirements: belt across chest and lap—not under the arm',
      'Penalties: $240 fine; 2 demerit points for drivers',
      'Passenger 16+: generally responsible for their own compliance',
      'Passenger under 16: driver is responsible and may receive points',
      'Exemptions: valid medical certificate; frequent stops in limited scenarios; reversing; specific professional contexts',
      'Common defenses: medical exemption proof, observation or identification issues, seat belt malfunction, procedural errors',
      'Insurance & employment: convictions can raise premiums and affect roles needing clean records',
      'Next steps: request trial within 15 days to preserve options',
    ],
    contentImgs3: [
      '/assets/img/service/service-details-img3.jpg',
      '/assets/img/service/service-details-img4.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro:
      'Quick answers to common questions. For tailored advice, speak with a lawyer—your circumstances matter.',
    faqs: [
      {
        question: 'How many demerit points for a seat belt ticket?',
        answer:
          'Typically 2 points for drivers. For passengers under 16, the driver is responsible and can receive points. Points can affect insurance and accumulate toward suspensions.',
      },
      {
        question: 'Do I have to go to court?',
        answer:
          'Often, no. We can typically appear on your behalf. We review disclosure, consider exemptions, and pursue dismissal or resolution without you needing to attend.',
      },
      {
        question: 'Are there valid medical exemptions?',
        answer:
          'Yes, with a physician’s certificate stating you cannot wear a seat belt for medical reasons. We advise on documentation and how to present this properly.',
      },
      {
        question: 'What is the deadline to request a trial?',
        answer:
          'You generally have 15 days from receiving the ticket to request a trial or meeting with the prosecutor. Acting quickly preserves all options.',
      },
      {
        question: 'Will my insurance go up?',
        answer:
          'A conviction may increase premiums for several years. We focus on outcomes that avoid points or reduce impact to protect your record and costs.',
      },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Seat Belt Tickets">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}