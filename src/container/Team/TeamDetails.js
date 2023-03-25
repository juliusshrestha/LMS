import PropTypes from "prop-types";
import React from "react";
import TeamDetail from "../../components/Team/TeamDetail";
import { useState, useEffect } from "react";
// import Divider from "@material-ui/core/Divider";
import { getTeamDetails } from "../../axios/context/getTeamDetails";
//import { useTranslation } from "react-i18next";

const TeamDetails = ({ classOption }) => {
  //	const { t } = useTranslation();
  const [teamData, setTeamData] = useState([]);
  useEffect(() => {
    getTeamDetails()
      .then((data) => {
        // console.log('team data received ->', data)
        setTeamData(data);
        // console.log('Type of data', typeof teamData)
      })
      .catch((error) => {
        // console.log('error ->', error)
        return error;
      });
  }, []);
  // console.log(teamData);
  return (
    <div
      className={`team-section section section-padding-t90 section-padding-bottom ${classOption}`}
    >
      <h2
        className="section__title text-center mx-auto mb-10x aos-init aos-animate"
        data-aos="fade"
      >
        <span className="color-primary">
          World-class talents making an impact
        </span>
      </h2>
      {/* <Divider variant="middle" /> */}

      <div className="teamInfo">
        {teamData &&
          teamData.map((single, key) => {
            if (single.level === 1)
              return <TeamDetail data={single} key={key} />;
          })}
      </div>
      {/* <Divider variant="middle" /> */}

      <div className="teamInfo">
        {teamData &&
          teamData.map((single, key) => {
            if (single.level == 2)
              return <TeamDetail data={single} key={key} />;
          })}
      </div>
      {/* <Divider variant="middle" /> */}

      <div className="teamInfo">
        {teamData &&
          teamData.map((single, key) => {
            if (single.level === 3)
              return <TeamDetail data={single} key={key} />;
          })}
      </div>
      {/* <Divider variant="middle" /> */}

      <div className="teamInfo">
        {teamData &&
          teamData.map((single, key) => {
            if (single.level === 4)
              return <TeamDetail data={single} key={key} />;
          })}
      </div>
    </div>
  );
};

TeamDetails.propTypes = {
  classOption: PropTypes.string,
};
TeamDetails.defaultProps = {
  classOption:
    "testimonial-section section section-padding-t90 section-padding-bottom",
};
export default TeamDetails;
