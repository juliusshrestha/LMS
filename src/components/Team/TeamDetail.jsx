import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const TeamDetails = ({ data }) => {
  const [inHover, setHover] = useState(true);

  return (
    <section className="section__padding bg-light team__section">
      <div className="teamdetails" item xs={3}>
        <div
          className="tcontainer"
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}
          onPointerEnter={() => setHover(false)}
          onPointerLeave={() => setHover(true)}
        >
          {inHover && (
            <React.Fragment>
              <div className="twrapper">
                <img src={data.team_image}></img>

                <div className="ttitle">{data.name}</div>
                <div className="tplace">{data.designation}</div>
              </div>
            </React.Fragment>
          )}
          {!inHover && (
            <React.Fragment>
              <div className="tcontent">
                <p>{data.quotes}</p>
              </div>
              <div className="icons">
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </section>
  );
};
TeamDetails.propTypes = {
  data: PropTypes.object,
};

export default TeamDetails;
