import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";
import PropTypes from "prop-types";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
// import WorkData from "../data/work/workDetails.json";
import WorkDetailsContainer from "../container/Work/WorkDetailsContainer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { getWorkDatabyId } from "../axios/context/getWorkDetails";
import { useTranslation } from "react-i18next";

const WorkDetails = (props) => {
  const { t } = useTranslation();

  const workId = parseInt(props.match.params.id, 10);
  // const data = WorkData.filter(work => work.id === workId);
  const [workDataById, setWorkDataById] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getWork = () => {
      getWorkDatabyId(workId)
        .then((data) => {
          if (mounted) {
            // console.log("work data receieved ->", data);
            setWorkDataById([data]);
            // console.log("Type of data", typeof workDataById);
          }
        })
        .catch((error) => {
          // console.log("error ->", error);
          return error;
        });
    };
    getWork();
    return () => {
      mounted = false;
    };
  }, [workId]);

  return (
    <React.Fragment>
      <SEO title="Asha Inc. || Work Details" />
      <Header />
      {/* <Breadcrumb 
                image="images/bg/breadcrumb-bg-two.jpg"
                title={single.title}
                content="Home"
                contentTwo="Work"
            />
            <WorkDetailsContainer data={single} /> */}
      {workDataById &&
        workDataById.map((single, key) => {
          // console.log("type of data", typeof single);
          return (
            <div key={key}>
              <Breadcrumb
                image="images/bg/breadcrumb-bg-four.jpg"
                title={single.title}
                content={t("navbar.home")}
                contentTwo={t("navbar.portfolio")}
              />
              <WorkDetailsContainer data={single} />
            </div>
          );
        })}
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

WorkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default WorkDetails;
