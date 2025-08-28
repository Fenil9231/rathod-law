import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import TermsConditionsSection from "../components/legal/TermsConditionsSection";
import Layout from "../components/layout/Layout";

function TermsConditions() {
  return (
    <>
      <Layout>
        <Breadcrumb title="Terms & Conditions" pageName="Terms & Conditions" />
        <TermsConditionsSection />
      </Layout>
    </>
  );
}

export default TermsConditions;