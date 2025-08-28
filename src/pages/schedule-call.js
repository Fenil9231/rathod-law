import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import ScheduleCallSection from "../components/schedule/ScheduleCallSection";
import AboutContactArea from "../components/contact/AboutContactArea";
import Layout from "../components/layout/Layout";

function ScheduleCall() {
  return (
    <>
      <Layout>
        <Breadcrumb title="Schedule a Call" pageName="Schedule Call" />
        <ScheduleCallSection />
        <AboutContactArea />
      </Layout>
    </>
  );
}

export default ScheduleCall;