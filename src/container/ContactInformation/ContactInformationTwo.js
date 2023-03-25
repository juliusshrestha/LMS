import React from "react";
import { useEffect, useRef } from "react";
import contactDataTwo from "../../data/contactInfo/contactInfoTwo.json";
import contactDataTwoJap from "../../data/contactInfo/contactInfoJap.json";
// import ContactInfoItem from '../../components/ContactInfo/ContactInfoItemTwo.jsx'
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import Parallax from "parallax-js";
import { useTranslation } from "react-i18next";
import ContactInfoItemTwo from "../../components/ContactInfo/ContactInfoItemTwo.jsx";

const ContactInformationTwo = () => {
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
        {contactDataTwo &&
          contactDataTwo.map((single, key) => {
            return (
              <React.Fragment key={key}>
                <ContactInfoItemTwo
                  classOption="ct-info-two"
                  data={single}
                  key={key}
                />
              </React.Fragment>
            );
          })}
      </React.Fragment>
    );
  };
  const renderContactJap = () => {
    return (
      <React.Fragment>
        {contactDataTwoJap &&
          contactDataTwoJap.map((single, key) => {
            return (
              <React.Fragment key={key}>
                <ContactInfoItemTwo
                  classOption="ct-info-two"
                  data={single}
                  key={key}
                />
              </React.Fragment>
            );
          })}
      </React.Fragment>
    );
  };

  return (
    <div className="section contact-section" style={{ padding: "100px" }}>
      <div className="container">
        <div className="row row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col" data-aos="fade-up">
            <div className="contact-Information mr-xl-7">
              <SectionTitleTwo subTitle={t("s10.p1")} title={t("s10.p2")} />

              {lang === "en"
                ? renderContactEng()
                : lang === "ja"
                ? renderContactJap()
                : renderContactEng()}
            </div>
          </div>
          <div className="col mt-lg-0 mt-md-10 mt-8" data-aos="fade-up">
            <div className="contact-form-area box-shadow">
              <SectionTitle
                titleOption="section-title text-center mb-7"
                headingOption="title fz-28"
                title={t("s10.p8")}
                subTitle={t("s10.p9")}
              />

              <ProjectForm />

              <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/shape-animation/contact-shape.png"
                    }
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape shape-1 scene">
        <span data-depth="1">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/shape-animation/newsletter-shape.png"
            }
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default ContactInformationTwo;
