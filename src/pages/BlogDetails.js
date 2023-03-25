import React, { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import PropTypes from 'prop-types'
import Header from '../partials/header/Header'
import Breadcrumb from '../container/Breadcrumb/Breadcrumb'
// import BlogClassicData from '../data/blog/BlogClassic.json';
import BlogDetailsContainer from '../container/BlogGrid/BlogDetailsContainer'
import CallToAction from '../container/CallToAction/CallToAction'
import Footer from '../container/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop.jsx'
import { getBlogsDatabyId } from '../axios/context/getBlogDetails'
// import axios from 'axios';
import { useTranslation } from 'react-i18next'

const BlogDetails = (props) => {
	const { t } = useTranslation()

	// {match: {params: {id}}}
	const blogId = parseInt(props.match.params.id, 10)
	// console.log("BlogId--", blogId)

	const [blogDataById, setBlogDataById] = useState([])

	useEffect(() => {
		let mounted = true

		const getBlog = () => {
			getBlogsDatabyId(blogId)
				.then((data) => {
					if (mounted) {
						// console.log('blog data receieved ->', data);
						setBlogDataById([data])
						// console.log('Type of data', typeof blogDataById);
					}
				})
				.catch((error) => {
					// console.log('error ->', error);
					return error
				})
		}
		getBlog()
		return () => {
			mounted = false
		}
	}, [blogId])

	// useEffect(() => {
	//     console.log("useEffect called");
	//     const getBlog = async () => {
	//         try {
	//             const res = await axios.get(`http://localhost:8000/api/blog/${blogId}`)
	//             console.log('blog data received ->', res.data);
	//             setBlogDataById([res.data]);

	//         } catch (e) {
	//             console.log(e);
	//         }
	//     }
	//     getBlog();
	// }, [blogId]);

	// console.log('blogDataById:::', blogDataById);
	// console.log('type of state', typeof blogDataById)

	// const data = BlogClassicData.filter(blog => blog.id === blogId);
	return (
		<React.Fragment>
			<SEO title='Asha Inc. || Blog Details' />
			<Header />
			{blogDataById &&
				blogDataById.map((single, key) => {
					// console.log("type of data", typeof single)
					return (
						//     <div key={key} className="col mb-6" data-aos="fade-up">
						//         <BlogClassic data={single} key={key} />
						//     </div>
						<div key={key}>
							<Breadcrumb
								image='images/bg/breadcrumb-bg-four.jpg'
								title={single.title}
								content={t('navbar.home')}
								contentTwo={t('navbar.blog')}
							/>
							<BlogDetailsContainer data={single} />
						</div>
					)
				})}
			{/* <Breadcrumb 
                image="images/bg/breadcrumb-bg-four.jpg"
                title={blogDataById[0]?.title}
                content="Home"
                contentTwo="Blog Classic"
            />
            <BlogDetailsContainer data={blogDataById[0]} /> */}
			<CallToAction />
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	)
}

BlogDetails.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		}),
	}),
}

export default BlogDetails
