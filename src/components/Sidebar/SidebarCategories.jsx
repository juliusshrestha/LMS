import React, { useState, useEffect } from "react";
import { flatDeep, slugify, containsObject } from "../../utils";
// import BlogClassicData from '../../data/blog/BlogClassic.json';
import { Link } from "react-router-dom";
import { getBlogsData } from "../../axios/context/getBlogDetails";

const SidebarCategories = () => {
  const [blogData, setBlogData] = useState([]);

  const cats = blogData.map((item) => {
    return item.category;
  });
  // console.log("cats", cats);
  let singleCatArray = flatDeep(cats);
  let categories = [];
  singleCatArray.forEach((cat) => {
    const obj = {
      title: cat.trim(),
      slug: slugify(cat),
      count: 1,
    };
    const objIndex = containsObject(obj, categories);
    if (objIndex !== -1) {
      const prevCount = categories[objIndex].count;
      categories[objIndex] = {
        title: cat.trim(),
        slug: slugify(cat),
        count: prevCount + 1,
      };
    } else {
      categories.push(obj);
    }
  });

  useEffect(() => {
    getBlogsData()
      .then((data) => {
        // console.log("blog data received category ->", data);
        setBlogData(data.results);
        // console.log("Type of data category", typeof blogData);
      })
      .catch((error) => {
        // console.log("error ->", error);
        return error;
      });
  }, []);

  // console.log("blog data category ----", blogData);

  return (
    <div className="sidebar-widget-content">
      <ul className="sidebar-widget-cate-list">
        {categories.map((cat) => {
          return (
            <li key={cat.slug}>
              <Link
                to={
                  process.env.PUBLIC_URL + `/blog-details/category/${cat.slug}`
                }
              >
                <span className="text">{cat.title}</span>
                <span className="count">{cat.count}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarCategories;
