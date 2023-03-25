import React from "react";
import SEO from "../components/SEO";
import PropTypes from "prop-types";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import BlogCategoryContainer from "../container/BlogGrid/BlogCategoryContainer";
import CallToAction from "../container/CallToAction/CallToAction";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { capitalize } from "../utils/index";

const BlogCategories = (props) => {
  //     {
  //   match: {
  //     params: { slug },
  //   },
  // }

  const category = capitalize(props.match.params.slug);
  // console.log("category", typeof category);

  return (
    <React.Fragment>
      <SEO title="Asha Inc. || Blog" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-four.jpg"
        title={category}
        content="Home"
        contentTwo="Blogs"
      />
      <BlogCategoryContainer cate={category} />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

BlogCategories.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
};

export default BlogCategories;
