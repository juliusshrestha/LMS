import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import TeamDetail from "../container/Team/TeamDetails";
import { useTranslation } from "react-i18next";

const TeamDetails = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <SEO title="Asha Inc. || Team" />
      <Header />

      <Breadcrumb
        image="images/bg/bg-career.jpg"
        title={t("about.p1")}
        content={t("navbar.home")}
        contentTwo={t("navbar.about")}
      />
      <TeamDetail />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default TeamDetails;
