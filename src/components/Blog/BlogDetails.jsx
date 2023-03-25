import React from "react";
import { slugify } from "../../utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogDetails = ({ data }) => {
  let options = { month: "long", year: "numeric", day: "numeric" };
  const category = data.category;
  const blog = [];
  const blogDesc = [];
  let categories = [];
  blog.push(data);
  blogDesc.push(data.body);
  categories.push(category);
  // console.log("blogDetailsjsx", blog[0]?.blog_large_image);
  // console.log("type of data", typeof data);
  const current_url = window.location.href;
  const cate = categories.map((value, i) => {
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
  return (
    <div className="blog-3 blog-details col" data-aos="fade-up">
      <div className="thumbnail">
        <img
          className="w-100"
          src={`${process.env.PUBLIC_URL}/images/bg/breadcrumb-bg-five.jpg`}
          alt="Blog Image"
        />
        {/* <img className="w-100" src={blog[0].blog_large_image} alt="Blog Image" /> */}
      </div>
      {/* <div className='col-sm-12 mt-5'>
				<p><i className="fas fa-share-alt"></i> Share this post</p>
				<a
					href='https://twitter.com/share?ref_src=twsrc%5Etfw'
					className='twitter-share-button'
					data-size='large'
					data-text='#asha_inc'
					data-show-count='false'
				>
					Tweet
				</a>
				&nbsp;
				<a
					className='fb-share-button fb-xfbml-parse-ignore'
					data-href={current_url}
					data-text={blog[0].title}
					data-layout='button'
					data-size='large'
					target='_blank'
				>
					Share
				</a>
			</div> */}
      <div className="info">
        <h3 className="title">{blog[0].title}</h3>
        {blogDesc.map((value, i) => {
          return (
            <div
              key={i}
              className="desc"
              dangerouslySetInnerHTML={{ __html: value }}
            />
          );
        })}
        {/* <div className="desc">{ blog[0].body }</div> */}
        <ul className="meta mb-0 mt-12">
          <li>
            <i className="fal fa-pencil-alt"></i>
            {blog[0].author}
          </li>
          <li>
            <i className="far fa-calendar"></i>
            {new Date(blog[0].date).toLocaleDateString("en-US", options)}
          </li>
          <li>
            <i className="fas fa-tags"></i>
            {cate}
          </li>
          {/* <li><i className="fas fa-comments"></i>4 Comments</li> */}
          {/* <li className="media"><Link to={process.env.PUBLIC_URL + "/"}><i className="fas fa-share-alt"></i>Share this post</Link>
                        <div className="list">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.tumblr.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-tumblr-square"></i></a>
                        </div>
                    </li> */}
        </ul>
      </div>

      <Helmet>
        <title>Asha Inc.- {blog[0].title}</title>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ash_inc" />
        <meta name="twitter:title" content={blog[0].title} />
        <meta name="twitter:description" content={blogDesc} />
        <meta
          name="twitter:image"
          content={`${process.env.PUBLIC_URL}/${blog[0].blog_large_image}`}
        />

        <meta property="og:url" content={current_url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={blog[0].title} />
        <meta property="og:description" content={blogDesc} />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/${blog[0].blog_large_image}`}
        />
      </Helmet>
    </div>
  );
};

BlogDetails.propTypes = {
  data: PropTypes.object,
};

export default BlogDetails;
