import PropTypes from "prop-types";
import React from "react";
// import { Link } from "react-router-dom";

const Brand = ({ data }) => {
  console.log(data);
  return (
    <div className="brand">
      {/* <Link to={data.link} target="_blank"> */}
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <img src={data.image} alt="logo image" />
      </a>
    </div>
  );
};

Brand.propTypes = {
  data: PropTypes.object,
};

export default Brand;
