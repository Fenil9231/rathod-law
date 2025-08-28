import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import PrivacyPolicySection from "../components/legal/PrivacyPolicySection";
import Layout from "../components/layout/Layout";

function PrivacyPolicy() {
  return (
    <>
      <Layout>
        <Breadcrumb title="Privacy Policy" pageName="Privacy Policy" />
        <PrivacyPolicySection />
      </Layout>
    </>
  );
}

export default PrivacyPolicy;