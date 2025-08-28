import React from "react";
import Head from "next/head";
import Breadcrumb from "../common/Breadcrumb";
import About1 from "../components/about/About1";
import About2 from "../components/about/About2";
import AttronySection from "../components/Attrony/AttronySection";
import AboutBlog from "../components/blog/AboutBlog";
import AboutContactArea from "../components/contact/AboutContactArea";
import Layout from "../components/layout/Layout";
import Counter2 from "../counter/Counter2";

function About() {
  return (
    <>
      <Head>
        <title>About Rathod Law Firm - Experienced Legal Team in Toronto</title>
        <meta name="description" content="Learn about Rathod Law Firm's experienced legal team specializing in immigration law, traffic violations, family law, and notarization services in Toronto." />
        <meta name="keywords" content="about Rathod Law, Toronto law firm, immigration lawyers, traffic lawyers, family law attorneys, legal team experience" />
        <meta name="author" content="Rathod Law Firm" />
        <meta property="og:title" content="About Rathod Law Firm - Experienced Legal Team" />
        <meta property="og:description" content="Discover our experienced legal team's commitment to providing exceptional legal services in immigration, traffic, and family law matters." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rathodlaw.com/about" />
        <link rel="canonical" href="https://rathodlaw.com/about" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Rathod Law Firm",
          "description": "Learn about Rathod Law Firm's experienced legal team specializing in immigration law, traffic violations, family law, and notarization services in Toronto.",
          "url": "https://rathodlaw.com/about",
          "mainEntity": {
            "@type": "LegalService",
            "name": "Rathod Law Firm",
            "description": "Expert legal services in immigration, traffic violations, family law, and notarization",
            "url": "https://rathodlaw.com",
            "telephone": "+1-647-654-9454",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street, Suite 456",
              "addressLocality": "Toronto",
              "addressRegion": "ON",
              "postalCode": "M5V 3A8",
              "addressCountry": "CA"
            },
            "areaServed": "Toronto, Ontario, Canada",
            "serviceType": ["Immigration Law", "Traffic Law", "Family Law", "Notarization Services"]
          }
        })}
        </script>
      </Head>
      <Layout>
        <Breadcrumb title="About Us" pageName="About Us" />
        <About1 />
        <Counter2 />
        <About2 />
        <AboutContactArea />
        <AttronySection />
        <AboutBlog />
      </Layout>
    </>
  );
}

export default About;
