import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import FeautureOne from "@/components/sections/home1/FeautureOne"
import About from "@/components/sections/home1/About"
import ChooseOne from "@/components/sections/home1/ChooseOne"
import ServicesOne from "@/components/sections/home1/ServicesOne"
import Testimonial from "@/components/sections/home1/Testimonial"
import Team from "@/components/sections/home1/Team"
import Cta from "@/components/sections/home1/Cta"

export const metadata = {
  title: "Rathod Law Firm | Expert Immigration Lawyer & Paralegal Services in Brampton",
  description: "Rathod Law Firm offers expert immigration lawyer and paralegal services in Brampton & Scarborough. Specializing in Federal Court appeals, family law, traffic tickets, small claims, refugee appeals, and notary services. Contact us for professional legal assistance.",
  keywords: "Rathod Law Firm, immigration lawyer Brampton, Kapil Rathod lawyer, paralegal services Scarborough, Federal Court appeals, traffic tickets defense, small claims court, family law services, refugee appeals, visa applications, notary services Ontario",
  openGraph: {
    title: "Rathod Law Firm | Expert Immigration Lawyer & Paralegal Services",
    description: "Professional immigration lawyer and paralegal services in Brampton & Scarborough. Expert representation for Federal Court appeals, family law, and traffic violations.",
    url: "https://www.rathodlaw.com",
    type: "website",
  },
};


export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <FeautureOne />
                <About />
                <ChooseOne />
                <ServicesOne />
                <Testimonial />
                <Team />
                <Cta/>
            </Layout>
        </>
    )
}