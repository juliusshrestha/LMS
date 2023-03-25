import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import BlogClassicData from "../../data/blog/BlogClassic.json";
import { getSimilarBlog } from '../../axios/context/getBlogDetails'
// import { slugify } from "../../utils";
import { useTranslation } from 'react-i18next'

const SidebarPost = (props) => {
	const { t } = useTranslation()

	// console.log("props", props);
	const id = props.data
	const category = props.category
	// console.log("idddddddddd",  id);
	// console.log("category", category);

	const [similarBlog, setSimilarBlog] = useState([])

	useEffect(() => {
		const getBlog = async () => {
			await getSimilarBlog(category, id)
				.then((data) => {
					// console.log("side data received ->", data);
					setSimilarBlog(data.data)
					// console.log("Type of data", typeof similarBlog);
				})
				.catch((error) => {
					// console.log("error ->", error);
					return error
				})
		}

		getBlog()
	}, [id])

	// console.log("blogData.sidebar.:", similarBlog);

	return (
		<React.Fragment>
			<div className='sidebar-widget-content'>
				<ul className='sidebar-widget-list-post'>
          {similarBlog.length > 0
            ? similarBlog.slice(0, 4).map((value) => {
              return (
                <li key={value.id}>
                  {/* <span className="cate">{value.category.slice(0, 1)}</span> */}
                  <Link
                    to={process.env.PUBLIC_URL + `/blog-details/${value.id}`}
                  >
                    {value.title}
                  </Link>
                </li>
              )
            })
            : t('sidebar.p3')
          }
				</ul>
			</div>
		</React.Fragment>
	)
}

SidebarPost.propTypes = {
	data: PropTypes.number,
	category: PropTypes.string,
}

export default SidebarPost
