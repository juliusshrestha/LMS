import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";
// import BlogClassicData from '../../data/blog/BlogClassic.json';
import BlogClassic from '../../components/Blog/BlogClassic.jsx';
import SidebarWrap from '../../components/Sidebar/SidebarWrap.jsx';
import SidebarWidget from '../../components/Sidebar/SidebarWidget.jsx';
import SidebarBanner from '../../components/Sidebar/SidebarBanner.jsx';
import SidebarTitle from '../../components/Sidebar/SidebarTitle';
import SidebarSearch from '../../components/Sidebar/SidebarSearch.jsx';
import SidebarCategories from '../../components/Sidebar/SidebarCategories.jsx';
import SidebarPost from '../../components/Sidebar/SidebarPost.jsx';
import SidebarTag from '../../components/Sidebar/SidebarTag.jsx';
import { useState, useEffect } from "react";
import { getBlogsData } from '../../axios/context/getBlogDetails';

const BlogClassicContainer = () => {

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        
        getBlogsData()
          .then((data) => {
            //   console.log('blog data received ->', data);
              setBlogData(data);
            //   console.log('Type of data', typeof blogData);
          })
          .catch((error) => {
            //   console.log('error ->', error);
              return error;
          });
    }, []);

    // console.log(blogData);    

    return (
        <div className="section section-padding fix">
            <div className="container">
                <div className="row mb-n10">

                    <div className="col-lg-8 col-12 order-lg-1 mb-10">
                        <div className="row row-cols-1 no-gutters">

                        {blogData && blogData.slice(0, 3).map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up">
                                    <BlogClassic data={single} key={key} />
                                </div>
                            ); 
                        })}



                        </div>

                        <div className="row">
                            <div className="col">

                                <ul className="pagination center">
                                    <li><Link to={process.env.PUBLIC_URL + "/"} className="prev"><i className="fal fa-angle-left"></i></Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/"} className="active">1</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/"}>2</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/"}>3</Link></li>
                                    <li><span className="page-numbers dots"><i className="fal fa-ellipsis-h"></i></span></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/"}>5</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/"} className="next"><i className="fal fa-angle-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 order-lg-2 mb-10">
                        <SidebarWrap>
                            <SidebarWidget>
                                <SidebarSearch />
                            </SidebarWidget>
                            <SidebarWidget>
                                <SidebarTitle title="Categories" />
                                <SidebarCategories />
                            </SidebarWidget>
                            <SidebarWidget>
                                <SidebarTitle classOption="mb-2" title="Popular Posts" />
                                <SidebarPost />
                            </SidebarWidget>
                            <SidebarWidget>
                                <SidebarBanner />
                            </SidebarWidget>
                            <SidebarWidget>
                                <SidebarTitle title="Popular tags" />
                                <SidebarTag />
                            </SidebarWidget>
                        </SidebarWrap>
                    </div>

                </div>
            </div>
        </div>
    )
}

BlogClassicContainer.propTypes = {
    data: PropTypes.object
};

export default BlogClassicContainer;
