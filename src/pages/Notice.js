import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import NoticeSection from "../container/Notice/NoticeSection";
import { useTranslation } from "react-i18next";
const Notice = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <SEO title="Asha Inc. || Notice" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg.jpg"
        title={t("notice.p1")}
        content={t("navbar.home")}
        contentTwo={t("navbar.notice")}
      />
      <NoticeSection />

      <Footer />
    </React.Fragment>
  );
};

export default Notice;
