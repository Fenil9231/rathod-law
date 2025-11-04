import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetails from '@/components/common/ServiceDetails';

export const metadata = {
  title: 'Red Light Tickets Ontario | Red Light Violation Defense | Rathod Law',
  description: 'Expert defense for red light tickets in Ontario. Fight fines, demerit points, and protect your driving record. Free consultation available.',
  keywords: 'red light tickets Ontario, red light violations, traffic violation defense, demerit points, Highway Traffic Act',
};

export default function RedLightTickets() {
  const serviceDetails = {
    serviceListTitle: 'Traffic Ticket Services',
    serviceList: [
      { name: 'Speeding Tickets', link: '/speeding-tickets', isActive: false },
      { name: 'Cell Phone Tickets', link: '/cell-phone-tickets', isActive: false },
      { name: 'Red Light Tickets', link: '#', isActive: true },
      { name: 'Seat Belt Tickets', link: '/seat-belt-tickets', isActive: false },
      { name: 'Stunt Driving', link: '/stunt-driving', isActive: false },
      { name: 'Suspended License', link: '/suspended-license', isActive: false },
      { name: 'Demerit Points', link: '/demerit-points', isActive: false },
    ],
    contactPattern: 'assets/img/pattern/sidebar-contact-pattern.png',
    contactIcon: '/assets/img/icon/about-v2-icon1.png',
    contactTitle: 'Free Consultation',
    contactSubtitle: 'Red Light Ticket Defense',
    contactLink: '/contact',
    contactButtonText: 'Speak with a Lawyer',
    downloadTitle: 'Helpful Resources',
    downloads: [
      { text: 'Understanding Red Light Camera Tickets', link: '/insights' },
      { text: 'Right Turn on Red Rules in Ontario', link: '/insights' },
    ],
    mainImage: '/assets/img/service/service-details-img6.jpg',
    serviceTitle: 'Red Light Tickets in Ontario',
    serviceDescription1:
      'A red light conviction can mean a $325 fine, 3 demerit points, and higher insurance. Camera tickets carry a fine but no points for the vehicle owner. We help you challenge tickets, protect your record, and minimize long-term costs.',
    serviceDescription2:
      'You generally have 15 days to request a trial or a meeting with the prosecutor. Acting quickly preserves options. We review photos, officer notes, camera system details, and intersection design to determine the strongest strategy—dismissal, reduction, or resolution that avoids points.',
    benefitTitle: 'Why work with us',
    benefitDescription:
      'We combine rigorous evidence review with practical advocacy. Every case gets a clear plan: validate the facts, test camera system reliability, consider amber/visibility defenses, and pursue outcomes that protect your driving record and insurance.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Protect driving record' },
      { icon: 'icon-icon-10', title: 'Reduce fines and points' },
      { icon: 'icon-icon-11', title: 'Clear, honest advice' },
      { icon: 'icon-icon-12', title: 'Court representation for you' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Ontario Red Light Law: What to Know',
    justiceText1:
      'Drivers must stop at a red light before the stop line or crosswalk. Right turns on red are allowed only after a complete stop and when safe, unless signs prohibit it. Camera enforcement uses photo sequences to document alleged violations.',
    justiceList: [
      'Violations: failing to stop, proceeding before green, illegal right turn on red',
      'Amber light: entering on amber is lawful if stopping was unsafe',
      'Standard penalties: $325 fine and 3 demerit points (officer-issued)',
      'Camera tickets: $325 fine; no points for vehicle owner',
      'Right turn rules: full stop, yield to pedestrians and traffic, obey posted signs',
      'Evidence: photos, timing data, officer notes, intersection visibility and design',
      'Defenses: emergency necessity, camera malfunction, observation or identification issues, procedural errors',
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
        question: 'Do red light camera tickets add demerit points?',
        answer:
          'No. Camera tickets issue a fine to the vehicle owner without demerit points. Officer-issued tickets can carry 3 points and affect insurance.',
      },
      {
        question: 'Is a right turn on red legal?',
        answer:
          'Yes, after a complete stop and only when safe. You must yield to pedestrians and traffic, and obey any posted “no right turn on red” signs.',
      },
      {
        question: 'Can I fight a red light camera ticket?',
        answer:
          'Yes. We can review photo sequences, timing, and system reliability to challenge the allegation or seek a favourable resolution.',
      },
      {
        question: 'What is the deadline to request a trial?',
        answer:
          'Generally 15 days from receiving the ticket. Acting promptly preserves options including early resolution or trial.',
      },
      {
        question: 'Will my insurance go up?',
        answer:
          'Officer-issued convictions can raise premiums for several years. We focus on outcomes that avoid points or reduce impact.',
      },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Red Light Tickets">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}