import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
// import IntroSlider from '../container/IntroSlider/IntroSlider';
import HomeAbout from "../components/About/HomeAbout.jsx";
import ServiceIconBox from "../container/service/ServiceIconBox";
import HomeSuccess from "../components/Success/HomeSuccess";
// import Portfolio from '../container/Portfolio/Portfolio'
import HomeBlog from "../container/BlogGrid/HomeBlog";
// import Newsletter from '../container/Newsletter/Newsletter';
// import ContactInformation from '../container/ContactInformation/ContactInformation';
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import IntroThree from "../container/IntroSlider/IntroThree";
import ContactInformationTwo from "../container/ContactInformation/ContactInformationTwo";
import BrandContainer from "../container/Brand/BrandContainer";
// import Team from "../container/Team/Team";
// import TestimonialContainer from '../container/Testimonial/TestimonialContainer';
import CallToAction from "../container/CallToAction/CallToAction";
// import Funfact from '../container/Funfact/Funfact';
// for pop up
import PopUp from "../components/PopUp/PopUp";
import axiosInstance from "../axios/axiosInstance";
const HomeOne = () => {
  let visitState = 0;
  const [popupNotice, setPopupNotice] = React.useState(null);
  React.useEffect(() => {
    const getPopUpNotice = async () => {
      axiosInstance.get(`notice/popup/`).then((res) => {
        setPopupNotice(res.data.results);
        //setPopupNotice(null)

        //console.log(res.data.results);
        //console.log(res.data);
      });
    };

    getPopUpNotice();
  }, []);
  const getVisitState = () => {
    return visitState;
  };
  const changeVisitState = () => {
    //console.log("before setting" , visitState)

    visitState = 1;
    // setVisitState(1)
    // console.log("from home one", visitState);
    // const data1 = popupNotice.map((item) => {
    //   return item;
    // });
  }; //to do later for making pop up show only once
  return (
    <React.Fragment>
      <SEO title="Asha Inc. || Home" />
      <Header />
      <IntroThree />
      {popupNotice === null ? null : (
        <PopUp
          data={popupNotice}
          getVisitState={getVisitState}
          changeVisitState={changeVisitState}
        />
      )}

      {/* <IntroSlider /> */}
      <HomeAbout />
      {/* <Funfact classOption="section-padding bg-primary-blue" /> */}
      <ServiceIconBox classOption="bg-color-1" />
      <HomeSuccess classOption="section-padding bg-primary-blue" />
      <BrandContainer />
      {/* classOption='section-padding' */}
      {/* <Portfolio /> */}
      {/* <Team classOption="bg-color-1" /> */}
      {/* <TestimonialContainer />  */}

      <HomeBlog SectionBgColor="bg-primary-blue" />
      <CallToAction />
      {/* <Newsletter /> */}
      {/* <ContactInformation /> */}

      <ContactInformationTwo classOption="bg-primary-blue" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default HomeOne;
