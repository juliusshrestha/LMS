import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const WorkItemTwo = ({ data }) => {
	const { t } = useTranslation()
	return (
		<div className='work'>
			<div className='thumbnail'>
				{/* <Link className="image" to={process.env.PUBLIC_URL + `/work-details/${data.id}`}><img src={process.env.PUBLIC_URL + data.image} alt="work" /></Link> */}
				<Link
					to={process.env.PUBLIC_URL + `/work-details/${data.id}`}
					className='image'
				>
					<img src={process.env.PUBLIC_URL + data.homeImage} alt='Work Image' />
				</Link>
			</div>
			<div className='info'>
				<h3 className='title'>
					<Link to={process.env.PUBLIC_URL + `/work-details/${data.id}`}>
						{data.title}
					</Link>
				</h3>
				{/* <p className="desc">{data.excerpt}</p> */}
				<div dangerouslySetInnerHTML={{ __html: data['excerpt'] }}></div>
				<Link to={process.env.PUBLIC_URL + `/work-details/${data.id}`}>
					{t('s9.p6')}
				</Link>
			</div>
		</div>
	)
}

WorkItemTwo.propTypes = {
	data: PropTypes.object,
}

export default WorkItemTwo
