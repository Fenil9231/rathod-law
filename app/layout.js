import "react-modal-video/css/modal-video.css";
import "../public/assets/css/style.css";
import "../public/assets/css/theme-override.css";
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
  return (
    <html lang="en" className={`${DM_Sans.variable} ${Marcellus.variable}`}>
      <body>{children}</body>
    </html>
  );
}
