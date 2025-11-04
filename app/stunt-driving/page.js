import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetails from '@/components/common/ServiceDetails';

export const metadata = {
  title: 'Stunt Driving & Racing Defence in Ontario | Rathod Law',
  description:
    'Defence for stunt driving and street racing across Ontario. We aim to protect your licence, reduce penalties, and mitigate insurance impact. Free consultation.',
};

export default function StuntDriving() {
  const serviceDetails = {
    serviceListTitle: 'Traffic Ticket Services',
    serviceList: [
      { name: 'Speeding Tickets', link: '/speeding-tickets', isActive: false },
      { name: 'Cell Phone Tickets', link: '/cell-phone-tickets', isActive: false },
      { name: 'Red Light Tickets', link: '/red-light-tickets', isActive: false },
      { name: 'Seat Belt Tickets', link: '/seat-belt-tickets', isActive: false },
      { name: 'Stunt Driving', link: '#', isActive: true },
      { name: 'Suspended License', link: '/suspended-license', isActive: false },
      { name: 'Demerit Points', link: '/demerit-points', isActive: false },
    ],
    contactPattern: 'assets/img/pattern/sidebar-contact-pattern.png',
    contactIcon: '/assets/img/icon/about-v2-icon1.png',
    contactTitle: 'Free Consultation',
    contactSubtitle: 'Stunt Driving & Racing Defence',
    contactLink: '/contact',
    contactButtonText: 'Speak with a Lawyer',
    downloadTitle: 'Helpful Resources',
    downloads: [
      { text: 'Understanding Stunt Driving Laws in Ontario', link: '/insights' },
      { text: 'How Demerit Points Work', link: '/demerit-points' },
    ],
    mainImage: '/assets/img/service/service-details-img6.jpg',
    serviceTitle: 'Stunt Driving & Racing — Ontario',
    serviceDescription1:
      'Charged with stunt driving or street racing? We defend these high‑stakes tickets across Ontario — aiming to avoid licence suspensions, impound costs, heavy fines, and insurance fallout. Clear strategy, strong advocacy, and timely action.',
    serviceDescription2:
      'Stunt driving under the Highway Traffic Act (O. Reg. 455/07) includes extreme speeding and dangerous maneuvers. Roadside penalties can include a 30‑day licence suspension and 14‑day vehicle impound. You typically have 15 days to request early resolution or a trial — acting quickly protects your options. A conviction can trigger substantial fines, possible jail, and lengthy licence suspensions.',
    benefitTitle: 'Why Choose Our Defence',
    benefitDescription:
      'We focus on outcomes that protect your licence, limit penalties, and reduce long‑term costs. Every case receives careful disclosure review, strategic negotiation, and courtroom advocacy when needed.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Protect your licence & mobility' },
      { icon: 'icon-icon-10', title: 'Target reduced charges or dismissal' },
      { icon: 'icon-icon-11', title: 'Insurance impact mitigation' },
      { icon: 'icon-icon-12', title: 'Clear plan and communication' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    justiceTitle: 'What Counts as Stunt Driving',
    justiceText1:
      'Ontario has strict thresholds and behaviours that qualify as stunt driving. These laws were strengthened under the MOMS Act to deter high‑risk driving.',
    justiceList: [
      'Speed thresholds: 40+ km/h over where the limit is under 80 km/h',
      'Speed thresholds: 50+ km/h over where the limit is 80 km/h or higher',
      '150+ km/h regardless of posted limit',
      'Racing or competing with another vehicle on a roadway',
      'Aggressive maneuvers: tailgating, unsafe lane changes, weaving, cutting off',
      'Loss of traction: drifting, donuts, wheelies or lifting tires from pavement',
      'Other dangerous conduct creating risk to persons or property',
    ],
    contentImgs3: [
      '/assets/img/service/service-details-img3.jpg',
      '/assets/img/service/service-details-img4.jpg',
    ],
    faqTitle: 'Stunt Driving FAQs',
    faqIntro:
      'Quick answers to common questions. For tailored advice, request a free consultation — timelines move quickly.',
    faqs: [
      {
        question: 'Does stunt driving create a criminal record?',
        answer:
          'No. Stunt driving is a provincial offence under the Highway Traffic Act, not a Criminal Code offence. That said, penalties are severe and insurance impact can be significant.',
      },
      {
        question: 'What are the roadside penalties?',
        answer:
          'Police may impose a 30‑day licence suspension and 14‑day impound at the roadside. Towing and storage costs are the driver’s responsibility.',
      },
      {
        question: 'Can a stunt charge be reduced?',
        answer:
          'Often possible depending on evidence, officer observations, speed measurement calibration, and circumstances. We aim for strategic reductions or withdrawals where the record supports it.',
      },
      {
        question: 'How long do I have to respond?',
        answer:
          'You generally have 15 days to request early resolution or a trial. Acting promptly lets us secure disclosure and plan defence before deadlines.',
      },
      {
        question: 'Will my insurance be affected?',
        answer:
          'Major convictions can cause significant premium increases or policy cancellation. Our focus is on outcomes that reduce or avoid long‑term insurance impact.',
      },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Stunt Driving">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}