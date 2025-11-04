import ServiceDetails from '@/components/common/ServiceDetails';
import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Small Claims Court (Ontario) | Paralegal Representation | Rathod Law',
  description:
    'Cost-effective representation for Ontario Small Claims Court. Pursue or defend claims up to $35,000 with practical guidance and strong advocacy.',
};

export default function SmallClaims() {
  const serviceDetails = {
    serviceListTitle: 'Service List',
    serviceList: [
      { name: 'Paralegal Services', link: '/paralegal-services', isActive: false },
      { name: 'Landlord–Tenant', link: '/paralegal-services/landlord-tenant', isActive: false },
      { name: 'Tribunal Representation', link: '/paralegal-services/tribunal-representation', isActive: false },
      { name: 'Legal Research', link: '/paralegal-services/legal-research', isActive: false },
      { name: 'Small Claims', link: '/small-claims', isActive: true },
    ],
    contactPattern: 'assets/img/pattern/sidebar-contact-pattern.png',
    contactIcon: '/assets/img/icon/about-v2-icon1.png',
    contactTitle: 'Speak with a paralegal',
    contactSubtitle: 'Request a consultation',
    contactLink: '/contact',
    contactButtonText: 'Contact Us',
    downloadTitle: 'Download File',
    downloads: [
      { text: 'Small Claims Guide (PDF)', link: '/assets/files/small-claims-guide.pdf' },
      { text: 'Fee Schedule', link: '/assets/files/fees.pdf' },
    ],
    mainImage: '/assets/img/service/service-details-img3.jpg',
    serviceTitle: 'Small Claims Court (Ontario)',
    serviceDescription1:
      'Ontario’s Small Claims Court resolves civil disputes up to $35,000 (excluding interest and costs). We help individuals and businesses pursue or defend claims efficiently, with clear strategy, organized evidence, and firm advocacy.',
    serviceDescription2:
      'We manage filings, service, settlement conferences, motions, and trial preparation. Whether you are seeking payment, defending a claim, or enforcing a judgment, we focus on practical outcomes and cost control.',
    benefitTitle: 'Why work with Rathod Law',
    benefitDescription:
      'Professional representation improves case organization, negotiation leverage, and courtroom effectiveness. We prepare you for each stage, handle procedure, and protect your interests without overcomplicating the process.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Clear, practical guidance' },
      { icon: 'icon-icon-10', title: 'Cost-effective representation' },
      { icon: 'icon-icon-11', title: 'Organized evidence strategy' },
      { icon: 'icon-icon-12', title: 'Responsive client communication' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    justiceTitle: 'A focused path to resolution',
    justiceText1:
      'We approach each claim with a structured plan: assess merits, map procedure, prepare evidence, and aim for settlement when beneficial. If trial is required, we present your case clearly and persuasively.',
    justiceList: [
      'Demand letters, claims, and defences prepared correctly',
      'Settlement conference strategy with realistic outcomes',
      'Enforcement options to collect on judgments',
    ],
    contentImgs3: [
      '/assets/img/service/service-details-img4.jpg',
      '/assets/img/service/service-details-img5.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro:
      'Common questions about Small Claims Court in Ontario. This is general information, not legal advice.',
    faqs: [
      {
        question: 'What kinds of disputes can I bring?',
        answer:
          'Typical claims include unpaid invoices, loans, simple contract disputes, property damage, and consumer issues. The monetary limit is $35,000 excluding interest and costs.',
      },
      {
        question: 'Do I need a lawyer for Small Claims?',
        answer:
          'No. Paralegals can represent you in Small Claims Court and often provide a cost-effective option. Professional help can improve filings, evidence, and case presentation.',
      },
      {
        question: 'How long does a case take?',
        answer:
          'Timelines vary by court. Many matters resolve within several months to a year, depending on scheduling, complexity, and whether settlement is reached.',
      },
      {
        question: 'Can I recover my costs?',
        answer:
          'Some costs may be recoverable if you succeed, subject to the court’s discretion and reasonableness. We discuss cost risks early and help manage your budget.',
      },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Small Claims Court">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}