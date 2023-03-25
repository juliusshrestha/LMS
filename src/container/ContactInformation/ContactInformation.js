import PropTypes from "prop-types";
import React from "react";
import { useEffect, useRef } from "react";
import contactData from "../../data/contactInfo/contactInfo.json";
import contactDataJap from "../../data/contactInfo/contactInfoJap.json";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import ContactInfoItem from "../../components/ContactInfo/ContactInfoItem.jsx";
import Parallax from "parallax-js";
import { useTranslation } from "react-i18next";

const ContactInformation = ({ classOption }) => {
  const { t } = useTranslation();

  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  let lang = localStorage.getItem("lang");

  const renderContactEng = () => {
    return (
      <React.Fragment>
        {contactData &&
          contactData.map((single, key) => {
            return (
              <div key={key} className="col mb-6" data-aos="fade-up">
                <ContactInfoItem data={single} key={key} />
              </div>
            );
          })}
      </React.Fragment>
    );
  };
  const renderContactJap = () => {
    return (
      <React.Fragment>
        {contactDataJap &&
          contactDataJap.map((single, key) => {
            return (
              <div key={key} className="col mb-6" data-aos="fade-up">
                <ContactInfoItem data={single} key={key} />
              </div>
            );
          })}
      </React.Fragment>
    );
  };

  return (
    <div className={`section section-padding-t90-b100 ${classOption}`}>
      <div className="container shape-animate">
        <SectionTitle
          titleOption="section-title text-center mb-lg-12 mb-sm-8 mb-xs-8"
          title={t("s10.p1")}
          subTitle={t("s8.p3")}
        />

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
          {lang === "en"
            ? renderContactEng()
            : lang === "ja"
            ? renderContactJap()
            : renderContactEng()}
        </div>

        <div className="shape shape-1" id="scene" ref={sceneEl}>
          <span data-depth="1">
            <img
              src={
                process.env.PUBLIC_URL +
                "images/shape-animation/video-shape-1.png"
              }
              alt="shape"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

ContactInformation.propTypes = {
  classOption: PropTypes.string,
};
ContactInformation.defaultProps = {
  classOption: "section section-padding-t90-b100",
};

export default ContactInformation;
