import CaseThree from "@/components/common/CaseThree";
import TeamOne from "@/components/common/TeamOne";
import CtaOne from "@/components/common/CtaOne";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Our Team - Rathod Law Firm | Experienced Immigration & Legal Professionals",
  description: "Meet our experienced legal team at Rathod Law Firm. Kapil Rathod - Principal Lawyer with 13+ years in Canadian Immigration Law, and Saleema Panjwani - Licensed Paralegal specializing in traffic tickets, small claims, and landlord-tenant disputes.",
  keywords: "Rathod Law Firm team, Kapil Rathod lawyer, Saleema Panjwani paralegal, Canadian immigration lawyer, licensed paralegal Ontario, Federal Court appeals, traffic tickets, small claims court",
};

export default function Home() {
  const caseStudies = [
    {
      category: "Immigration Law",
      title: "Federal Court Appeals",
      image: "/assets/img/resource/case-v3-img7.jpg",
      link: "/case-details",
    },
    {
      category: "Paralegal Services",
      title: "Traffic Tickets & Small Claims",
      image: "/assets/img/resource/case-v3-img8.jpg",
      link: "/case-details",
    },
    {
      category: "Legal Services",
      title: "Landlord-Tenant Disputes",
      image: "/assets/img/resource/case-v3-img9.jpg",
      link: "/case-details",
    },
  ];

  return (
    <>
      <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Expert lawyer">
        <>
          {/* Team Page Start */}
          <TeamOne
            className="team-one team-one--team"
            sectionTitle="Our Legal Team"
            subTitle="Meet Our Experienced Professionals"
            teamData={[
              {
                name: "Kapil Rathod",
                position: "Principal Lawyer & Barrister",
                image: "/assets/img/team/team-v1-img1.png",
                description: "Mr. Kapil Rathod brings over 13 years of experience in Canadian Immigration Law. He started as a Regulated Canadian Immigration Consultant in 2011 and became a Lawyer in Canada in 2019. He specializes in Federal Court appeals, Immigration and Refugee Board representations, and also practices Criminal Law and Family Law.",
                email: "rathod@hplaw.org",
                phone: "647-654-9454",
                social: [
                  { url: "mailto:rathod@hplaw.org", iconClass: "icon-icon-4" },
                  { url: "tel:647-654-9454", iconClass: "icon-icon-3" },
                  { url: "#", iconClass: "icon-icon-2" },
                  { url: "#", iconClass: "icon-icon-1" },
                ],
              },
              {
                name: "Saleema Panjwani",
                position: "Licensed Paralegal & Notary Public",
                image: "/assets/img/team/team-v1-img2.png",
                description: "Saleema Panjwani is a Licensed Paralegal and Notary Public who joined the team in September 2023. She holds an LL.B from University of London and LL.M from Northwestern University. She handles Traffic Ticket Cases, Small Claims Cases, and Landlord-Tenant Disputes, representing clients at various courts and tribunals.",
                email: "saleema@hplaw.org",
                phone: "647-654-9454",
                license: "P19780",
                social: [
                  { url: "mailto:saleema@hplaw.org", iconClass: "icon-icon-4" },
                  { url: "tel:647-654-9454", iconClass: "icon-icon-3" },
                  { url: "https://lso.ca/public-resources/finding-a-lawyer-or-paralegal", iconClass: "icon-icon-2" },
                  { url: "#", iconClass: "icon-icon-1" },
                ],
              },
            ]}
          />
          {/* Team Page End */}

          {/* CTA One Start */}
          <CtaOne
            ctaTitle="Have any query, contact us!"
            queryText="Contact with us"
          />
          {/* CTA One End */}

          {/* Case Studies Start */}
          <CaseThree caseStudies={caseStudies} />
          {/* Case Studies End */}
        </>
      </Layout>
    </>
  );
}
