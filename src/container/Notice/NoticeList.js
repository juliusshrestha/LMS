import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const NoticeList = (data) => {
  // console.log(data)
  const { t } = useTranslation();
  return (
    <div className="list-group">
      {data.data.map((item, index) => {
        // console.log(index)
        if (item.status === "Published") {
          return (
            <Link to={process.env.PUBLIC_URL + `/notice/${item.id}`}>
              <div className="card mb-2">
                <div
                  key={index}
                  className="d-flex w-100 justify-content-between p-2"
                >
                  <h5 className="mb-1">{item.title}</h5>
                  <small>{item.published_date.split("T")[0]}</small>
                </div>
                <p className="mb-1 p-2">
                  {item.description.length >= 200
                    ? item.description.slice(0, 200) + "...."
                    : item.description}
                </p>
                <div className="cardbody">
                  <a className="btn-sm btn-primary m-2" href="#" role="button">
                    {t("s9.p5")}
                  </a>
                </div>
              </div>
              {/* <small>{item.status}</small> */}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default NoticeList;
