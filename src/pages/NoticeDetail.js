import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import NoticeDetailSection from "../container/Notice/NoticeDetailSection";
import { getNoticeDetails } from "../axios/context/getNoticeDetails";

const NoticeDetail = () => {
  const { noticeId } = useParams();
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
  return (
    <React.Fragment>
      <SEO title="Asha Inc. || Notice" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg.jpg"
        title="Notices"
        content="Notice"
        contentTwo="Detail"
      />
      <NoticeDetailSection noticeId={noticeId} noticeData={noticeData} />
      <Footer />
    </React.Fragment>
  );
};
export default NoticeDetail;
