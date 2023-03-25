import React from "react";
import PropTypes from "prop-types";

const NoticeDetailSection = (props) => {
  // console.log(noticeData)
  let item = {};
  const noticeData = props.noticeData.results;
  if (noticeData == null) {
    // console.log("The data is undefined");
    item = null;
  } else {
    item = noticeData.find((data) => data.id == props.noticeId);
    // console.log(item);
  }

  if (item == null) {
    return (
      <div className="container ">
        <div className="col-9">
          <h1>No new Notices</h1>
          <p>No Notice</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container p-10">
        <div className="row p-5">
          <div className="col-md-6">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div className="fixed bottom">
              <i
                className="far fa-calendar"
                style={{ color: "blue" }}
                aria-hidden="true"
              ></i>
              &nbsp;{item.published_date.split("T")[0]}
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <img
              src={item.image}
              alt=""
              className="float-right w-100 img-thumbnail"
            />
          </div>
        </div>
      </div>
    );
  }
};
export default NoticeDetailSection;

NoticeDetailSection.propTypes = {
  noticeId: PropTypes.string.isRequired,
  noticeData: PropTypes.object.isRequired,
};
