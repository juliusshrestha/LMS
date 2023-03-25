import React, { useRef } from "react";
// import {Link} from "react-router-dom";
// import BlogClassicData from '../../data/blog/BlogClassic.json';
import BlogItem from "../../components/Blog/BlogItem";
import { useState, useEffect } from "react";
import { getBlogsDataByPage } from "../../axios/context/getBlogDetails";
import usePagination from "../../utils/pagination";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";
//For search
import SearchBar from "material-ui-search-bar";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../axios/axiosInstance";
//import Search  from "../../axios/context/getSearchedBlog";
//import axios from 'axios'

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: "#1292EE",
      color: "#FFFFFF",
      fontFamily: "Muli",
    },
  },
}));

const PageBlog = () => {
  const { t } = useTranslation();
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

  //const classes = useStyles();
  let [triggerSearch, setTriggerSearch] = useState(1);
  const searchRef = useRef(null);
  useEffect(() => {
    const getBlog = async () => {
      if (window.location.search.startsWith("?search=")) {
        axiosInstance
          .get(`blogs/` + `${window.location.search}`)
          .then((res) => {
            setCounter(res.data.count);
            setBlogData(res.data.results);
            // console.log(res.data);
            // console.log('Type of data', typeof blogData);
            // console.log('search blog data received ->', res);
          });
      } else {
        await getBlogsDataByPage(page)
          .then((data) => {
            // console.log('blog data received ->', data);
            setCounter(data.count);
            setBlogData(data.data);
            // console.log('Type of data', typeof blogData);
          })
          .catch((error) => {
            // console.log('error ->', error);
            return error;
          });
      }
    };

    getBlog();
    //window.scrollTo(0,0);
    if (searchRef !== null) {
      searchRef.current?.scrollIntoView({ block: "start" });
    }
  }, [page, triggerSearch]);

  // console.log("blogData", blogData);
  // console.log("page", page);
  // console.log("countereee", counter)

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

  let history = useHistory();
  const [data, setData] = useState({ search: "" });

  const goSearch = (e) => {
    console.log(e);
    history.push({
      pathname: "blogs",
      search: "?search=" + data.search,
    });

    setTriggerSearch(triggerSearch + 1);
  };

  return (
    <div className="section section-padding fix">
      <div className="mx-auto search-parent" ref={searchRef}>
        <SearchBar
          className=" material-search"
          placeholder="Search blogs here ..."
          value={data.search}
          onChange={(newValue) => setData({ search: newValue })}
          onRequestSearch={() => goSearch(data.search)}
        />
      </div>
      <div className="container">
        {blogData.length > 0 ? renderBlogList() : t("s9.p3")}

        {/* 
                            <ul className="pagination center">
                                <li><Link to={process.env.PUBLIC_URL + "/"} className="prev"><i className="fal fa-angle-left"></i></Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/"} className="active">1</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/"}>2</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/"}>3</Link></li>
                                <li><span className="page-numbers dots"><i className="fal fa-ellipsis-h"></i></span></li>
                                <li><Link to={process.env.PUBLIC_URL + "/"}>5</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/"} className="next"><i className="fal fa-angle-right"></i></Link></li>
                            </ul> */}
      </div>
    </div>
  );
};

export default PageBlog;
