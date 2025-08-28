import React from "react";
import Head from "next/head";
import Footer from "../../common/Footer";
import Topbar from "../../common/Topbar";
import Header2 from "../header/Header2";
function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="assets/images/icons/logo-icon.svg" />
      </Head>
      <Topbar />
      <Header2 />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
