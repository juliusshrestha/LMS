import React, { useState, useEffect } from "react";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import NoticeList from "./NoticeList";
import { getNoticeDetails } from "../../axios/context/getNoticeDetails";
import { useTranslation } from "react-i18next";
const NoticeSection = () => {
  const { t } = useTranslation();
  const [noticeData, setNoticeData] = useState([]);
  useEffect(() => {
    getNoticeDetails()
      .then((data) => {
        // console.log('Notice data received ->', data)
        setNoticeData(data);
        // console.log(data)
        // console.log('Type of data', typeof noticeData)
      })
      .catch((error) => {
        // console.log('error ->', error)
        return error;
      });
  }, []);

  // console.log(noticeData)
  return (
    <div className="faq-section section section-padding-top bg-primary-blue">
      <div className="container">
        <div className="row row-cols-lg-1 row-cols-1 mb-n6">
          <div className="col mb-6" data-aos="fade-up">
            <div className="faq-content">
              <SectionTitleTwo subTitle={t("notice.p2")} />
              {noticeData.count > 0 ? (
                <NoticeList data={noticeData.results} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeSection;
