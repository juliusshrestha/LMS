import React from 'react'
import PropTypes from "prop-types";

export default function SuccessAlert(props) {
    return (
        <div className="alert alert-success" role="alert" >
            {props.message}
        </div>
    )
}
SuccessAlert.propTypes = {
  message: PropTypes.string,
};
