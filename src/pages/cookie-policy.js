import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import CookiePolicySection from '../components/CookiePolicySection';

const CookiePolicy = () => {
  return (
    <>
      <Head>
        <title>Cookie Policy - Rathod Law Firm | Legal Services in Toronto</title>
        <meta
          name="description"
          content="Learn about Rathod Law Firm's cookie policy and how we use cookies to improve your browsing experience on our website."
        />
        <meta name="keywords" content="cookie policy, privacy, Rathod Law, legal services, Toronto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://rathodlaw.com/cookie-policy" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Cookie Policy - Rathod Law Firm" />
        <meta property="og:description" content="Learn about Rathod Law Firm's cookie policy and how we use cookies to improve your browsing experience." />
        <meta property="og:url" content="https://rathodlaw.com/cookie-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rathod Law Firm" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Cookie Policy - Rathod Law Firm" />
        <meta name="twitter:description" content="Learn about Rathod Law Firm's cookie policy and how we use cookies to improve your browsing experience." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Cookie Policy - Rathod Law Firm",
              "description": "Learn about Rathod Law Firm's cookie policy and how we use cookies to improve your browsing experience.",
              "url": "https://rathodlaw.com/cookie-policy",
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
            })
          }}
        />
      </Head>
      
      <Layout>
        <CookiePolicySection />
      </Layout>
    </>
  );
};

export default CookiePolicy;