import React from "react";
import PropTypes from "prop-types";
import BlogItem from "../../components/Blog/BlogItem";
import { useState, useEffect } from "react";
import { getBlogsDataByCategory } from "../../axios/context/getBlogDetails";
import usePagination from "../../utils/pagination";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: "#1292EE",
      color: "#FFFFFF",
      fontFamily: "Muli",
    },
  },
}));

const BlogCategoryContainer = (props) => {
  // console.log("category container", Object.entries(cate));
  // const arr = Object.entries(cate)
  const category = props.cate;
  // console.log('caaaaaa', category)
  const classes = useStyles();
  const [blogData, setBlogData] = useState([]);
  let [page, setPage] = useState(1);
  let [counter, setCounter] = useState(null);
  const PER_PAGE = 6;

  const count = Math.ceil(counter / PER_PAGE);
  const _DATA = usePagination(blogData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  useEffect(() => {
    const getBlog = async () => {
      await getBlogsDataByCategory(category, page)
        .then((data) => {
          // console.log("blog data received ->", data);
          setCounter(data.count);
          setBlogData(data.data);
          // console.log("Type of data", typeof blogData);
        })
        .catch((error) => {
          // console.log("error ->", error);
          return error;
        });
    };

    getBlog();
    window.scrollTo(0, 0);
  }, [page]);

  // console.log("blogData", blogData);
  // console.log("page", page);
  // console.log("countereee", counter);

  const renderBlogList = () => {
    return (
      <React.Fragment>
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
          {_DATA.currentData() &&
            blogData.map((single, key) => {
              // console.log("single blog:::", single);
              return (
                <div key={key} className="col mb-6" data-aos="fade-up">
                  <BlogItem data={single} key={key} />
                </div>
              );
            })}
        </div>

        <div className="row mt-10">
          <div className="col">
            <Pagination
              count={count}
              page={page}
              variant="outlined"
              shape="rounded"
              size="large"
              onChange={handleChange}
              className={["pagination center"]}
              classes={{ ul: classes.ul }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="section section-padding fix">
      <div className="container">
        {blogData.length > 0 ? renderBlogList() : "No Blogs"}

      </div>
    </div>
  );
};

BlogCategoryContainer.propTypes = {
  cate: PropTypes.string
};

export default BlogCategoryContainer;
