import { useEffect } from 'react';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

// Override console.log in production
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  console.log = () => {};
}

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Import Bootstrap JS only on client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Script
        src="/js/wow.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
          }
        }}
      />
    </>
  );
}