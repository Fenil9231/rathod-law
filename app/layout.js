import "react-modal-video/css/modal-video.css";
import "../public/assets/css/style.css";
import "../public/assets/css/theme-override.css";
import "../public/assets/css/custom-breadcrumb.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { DM_Sans, Marcellus } from "@/lib/font";

export const metadata = {
  title: "Rathod Law Firm | Immigration Lawyer & Paralegal Services in Brampton & Scarborough",
  description: "Expert immigration lawyer and paralegal services in Brampton & Scarborough. Specializing in Federal Court appeals, family law, traffic tickets, small claims, and notary services. Contact Rathod Law Firm today.",
  keywords: "immigration lawyer Brampton, paralegal services Scarborough, Federal Court appeals, traffic tickets, small claims court, family law, notary services, Canadian immigration law, refugee appeals, visa applications",
  authors: [{ name: "Rathod Law Firm" }],
  creator: "Rathod Law Firm",
  publisher: "Rathod Law Firm",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.rathodlaw.com",
    title: "Rathod Law Firm | Immigration Lawyer & Paralegal Services",
    description: "Expert immigration lawyer and paralegal services in Brampton & Scarborough. Specializing in Federal Court appeals, family law, traffic tickets, and more.",
    siteName: "Rathod Law Firm",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rathod Law Firm | Immigration Lawyer & Paralegal Services",
    description: "Expert immigration lawyer and paralegal services in Brampton & Scarborough. Contact us for Federal Court appeals, family law, and traffic tickets.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a365d",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Rathod Law Firm",
    "description": "Expert immigration lawyer and paralegal services in Brampton & Scarborough. Specializing in Federal Court appeals, family law, traffic tickets, small claims, and notary services.",
    "url": "https://www.rathodlaw.com",
    "logo": "https://www.rathodlaw.com/assets/img/logo.png",
    "image": "https://www.rathodlaw.com/assets/img/logo.png",
    "telephone": "+1-647-490-7051",
    "email": "info@rathodlaw.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Brampton & Scarborough",
      "addressLocality": "Brampton",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Brampton"
      },
      {
        "@type": "City",
        "name": "Scarborough"
      },
      {
        "@type": "City",
        "name": "Toronto"
      },
      {
        "@type": "Province",
        "name": "Ontario"
      }
    ],
    "serviceType": [
      "Immigration Law",
      "Federal Court Appeals",
      "Traffic Tickets",
      "Family Law",
      "Small Claims",
      "Notary Services",
      "Paralegal Services"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-17:00",
    "sameAs": [
      "https://www.facebook.com/rathodlaw",
      "https://www.linkedin.com/company/rathod-law-firm"
    ]
  };

  return (
    <html lang="en" className={`${DM_Sans.variable} ${Marcellus.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
          crossOrigin="anonymous"
          defer
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
