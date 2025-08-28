import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../common/Footer";
import Preloader from "../common/Preloader";
import Topbar from "../common/Topbar";
import About2 from "../components/about/About2";
import AttronySection from "../components/Attrony/AttronySection";
import Banner2 from "../components/banner/Banner2";
import AboutBlog from "../components/blog/AboutBlog";
import CaseStudy from "../components/caseStudy/CaseStudy";
import AboutContactArea from "../components/contact/AboutContactArea";
import Header2 from "../components/header/Header2";
import IntroSection2 from "../components/introSection/IntroSection2";
import Practice2 from "../components/practice/Practice2";
import PracticeTestimonial from "../components/testimonial/PracticeTestimonial";
import Counter2 from "../counter/Counter2";
import Attrony2 from "../components/Attrony/Attrony2";
import PrincipalLawyer from "../components/lawyer/PrincipalLawyer";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader style="home2preloader" />
      ) : (
        <>
        <Head>
        <title>Rathod Law Firm - Expert Immigration, Traffic & Family Law Services in Toronto</title>
        <meta name="description" content="Rathod Law Firm provides expert legal services in immigration appeals, traffic violations, family law, and notarization in Toronto. Experienced lawyers with proven results." />
        <meta name="keywords" content="immigration lawyer Toronto, traffic ticket lawyer, family law attorney, notarization services, legal services Toronto, Rathod Law Firm" />
        <meta name="author" content="Rathod Law Firm" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Rathod Law Firm - Expert Legal Services in Toronto" />
        <meta property="og:description" content="Professional legal services including immigration appeals, traffic violations, family law, and notarization. Contact us for expert legal representation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rathodlaw.com" />
        <meta property="og:image" content="/assets/images/logo/rathod-law-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rathod Law Firm - Expert Legal Services" />
        <meta name="twitter:description" content="Professional immigration, traffic, and family law services in Toronto" />
        <meta name="twitter:image" content="/assets/images/logo/rathod-law-logo.png" />
        <link rel="canonical" href="https://rathodlaw.com" />
        <link rel="icon" href="assets/images/icons/logo-icon.svg" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Rathod Law Firm",
          "description": "Expert legal services in immigration, traffic violations, family law, and notarization",
          "url": "https://rathodlaw.com",
          "telephone": "+1-647-490-4040",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5500 North Service Road, Suite 300",
            "addressLocality": "Burlington",
            "addressRegion": "ON",
            "postalCode": "L7L 6W6",
            "addressCountry": "CA"
          },
          "areaServed": "Toronto, Ontario, Canada",
          "serviceType": ["Immigration Law", "Traffic Law", "Family Law", "Notarization Services"]
        })}
        </script>
      </Head>
        <Topbar/>
          <Header2 />
          <Banner2 />
          <IntroSection2 />
          <PrincipalLawyer />
          <About2 />
          <Practice2 />
          <Counter2 />
          <Attrony2 />
          <CaseStudy style="casestudy-section2 pt-120" />
          <PracticeTestimonial />
          <AboutContactArea />
          <AboutBlog paddin="pt-120" />
          <Footer />
        </>
      )}
    </>
  );
}
