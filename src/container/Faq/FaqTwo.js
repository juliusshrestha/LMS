import React, { useState, useEffect } from "react";
// import AccordionWrapTwo from '../../components/Accordion/AccordionWrapTwo';
import Accordion from "../../components/Accordion/Accordion";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import { getFaqDetails } from "../../axios/context/getFaqDetails";
import { useTranslation } from "react-i18next";

const FaqTwo = () => {
  const { t } = useTranslation();
  const [faqData, setFaqData] = useState([]);
  useEffect(() => {
    getFaqDetails()
      .then((data) => {
        // console.log('vacancy data received ->', data)
        setFaqData(data);
        // console.log(data)
        // console.log('Type of data', typeof vacancyData)
      })
      .catch((error) => {
        // console.log('error ->', error)
        return error;
      });
  }, []);

  return (
    <div className="faq-section section section-padding-top bg-primary-blue">
      {/* {console.log(faqData)} */}
      <div className="container">
        <div className="row row-cols-lg-1 row-cols-1 mb-n6">
          <div className="col mb-6" data-aos="fade-up">
            <div className="faq-content">
              <SectionTitleTwo subTitle={t("faq.p1")} title={t("faq.p2")} />
              <hr />
              {/* {console.log(faqData.results.forEach((item) => console.log(item)))} */}
              {faqData.count > 0 ? (
                <Accordion data={faqData.results} />
              ) : (
                <h1>No data </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqTwo;
