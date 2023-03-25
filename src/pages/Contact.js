import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import ContactInformation from "../container/ContactInformation/ContactInformation";
import GoogleMap from "../container/Map/GoogleMap";
import ContactFromContainer from "../container/ContactFromContainer/ContactFromContainer";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <SEO title="Asha Inc. || Contact" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-five.jpg"
        title={t("s8.p4")}
        content={t("navbar.home")}
        contentTwo={t("navbar.contact")}
      />
      <ContactInformation />
      <GoogleMap />
      <ContactFromContainer />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Contact;
