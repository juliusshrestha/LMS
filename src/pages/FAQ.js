import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
// import Faq from '../container/Faq/Faq'
import FaqTwo from "../container/Faq/FaqTwo";
import Footer from "../container/Footer/Footer";
import { useTranslation } from "react-i18next";
const FAQ = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <SEO title="Asha Inc. || FAQs" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg.jpg"
        title={t("navbar.faq")}
        content={t("navbar.home")}
        contentTwo={t("navbar.faq")}
      />
      <FaqTwo />
      <Footer />
    </React.Fragment>
  );
};

export default FAQ;
