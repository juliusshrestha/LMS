import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../utils";

const BlogClassic = ({ value }) => {
  // console.log("blog item", typeof value);
  let options = { month: "long", year: "numeric", day: "numeric" };
  const category = value.category;
  // const tags = value.tags
  let categories = [];
  categories.push(category);
  // arr.push(tags)
  // console.log("arr", categories);
  const cate = categories.map((value, i) => {
    // console.log("valueeee", value);
    return (
      <Link
        to={process.env.PUBLIC_URL + `/blog-details/category/${slugify(value)}`}
        key={i}
      >
        {value}
        {i !== categories.length - 1 && ",  "}
      </Link>
    );
  });
  // console.log("categories.....", cate);
  return (
    <div className="blog">
      <div className="thumbnail">
        <Link
          to={process.env.PUBLIC_URL + `/blog-details/${value.id}`}
          className="image"
        >
          <img
            src={process.env.PUBLIC_URL + value.blog_image}
            alt="Blog Image"
          />
        </Link>
      </div>
      <div className="info">
        <ul className="meta">
          <li>
            <i className="far fa-calendar"></i>
            {new Date(value.date).toLocaleDateString("en-US", options)}
          </li>
          <li>
            <i className="fas fa-tags"></i>
            {cate}
          </li>
          {/* <li><i className="far fa-eye"></i>{value.view}</li> */}
        </ul>
        <h3 className="title">
          <Link to={process.env.PUBLIC_URL + `/blog-details/${value.id}`}>
            {value.title}
          </Link>
        </h3>
        <div
          className="desc"
          dangerouslySetInnerHTML={{ __html: value["excerpt"] }}
        ></div>
        <Link
          to={process.env.PUBLIC_URL + `/blog-details/${value.id}`}
          className="link"
        >
          {" "}
          <mark>Read More</mark>{" "}
        </Link>
      </div>
    </div>
  );
};

BlogClassic.propTypes = {
  value: PropTypes.object,
};

export default BlogClassic;
