import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { slugify } from '../../utils'
import { useTranslation } from 'react-i18next'

const BlogItem = ({ data }) => {
	const { t } = useTranslation()
	// console.log("blog item", data);
	let options = { month: 'long', year: 'numeric', day: 'numeric' }
	const category = data.category
	// const tags = data.tags
	let categories = []
	categories.push(category)
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
				{i !== categories.length - 1 && ',  '}
			</Link>
		)
	})
	// console.log("categories.....", cate);
	return (
		<div className='blog'>
			<div className='thumbnail'>
				<Link
					to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}
					className='image'
				>
					<img
						src={process.env.PUBLIC_URL + data.blog_image}
						alt='Blog Image'
					/>
				</Link>
			</div>
			<div className='info'>
				<ul className='meta'>
					<li>
						<i className='far fa-calendar'></i>
						{new Date(data.date).toLocaleDateString('en-US', options)}
					</li>
					<li>
						<i className='fas fa-tags'></i>
						{cate}
					</li>
					{/* <li><i className="far fa-eye"></i>{data.view}</li> */}
				</ul>
				<h3 className='title'>
					<Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
						{data.title}
					</Link>
				</h3>
				<div
					className='desc'
					dangerouslySetInnerHTML={{ __html: data['excerpt'] }}
				></div>
				<Link
					to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}
					className='link'
				>
					{' '}
					<mark>{t('s9.p5')}</mark>{' '}
				</Link>
			</div>
		</div>
	)
}

BlogItem.propTypes = {
	data: PropTypes.object,
}

export default BlogItem
