import React from 'react'
import PropTypes from "prop-types";

export default function ErrorAlert(props) {
    return (
        <div className="alert alert-danger" role="alert">
            {props.message}
        </div>
    )
}

ErrorAlert.propTypes = {
  message: PropTypes.string,
};

