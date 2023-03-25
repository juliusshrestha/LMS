import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import BlogClassicData from '../../data/blog/BlogClassic.json';
import BlogItem from '../../components/Blog/BlogItem'
import SectionTitle from '../../components/SectionTitles/SectionTitle'
import { getBlogsData } from '../../axios/context/getBlogDetails'
import { useTranslation } from 'react-i18next'

const HomeBlog = ({ SectionBgColor }) => {
	const { t } = useTranslation()

	const [blogData, setBlogData] = useState([])

	useEffect(() => {
		getBlogsData()
			.then((data) => {
				// console.log('blog data received ->', data)
				setBlogData(data.results)
				// console.log('Type of data', typeof blogData)
			})
			.catch((error) => {
				// console.log('error ->', error)
				return error;
			})
	}, [])

	// console.log(blogData)

	return (
    <div className={`section section-padding-t90-b100 ${SectionBgColor}`}>
      {blogData.length > 0 ? (
        <div className="container">
          <SectionTitle title={t("s9.p1")} subTitle={t("s9.p2")} />

          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
            {blogData &&
              blogData.slice(0, 3).map((single, key) => {
                return (
                  <div key={key} className="col mb-6" data-aos="fade-up">
                    <BlogItem data={single} key={key} />
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className="container">
          <SectionTitle subTitle={t("s9.p3")} />
        </div>
      )}
    </div>
  );
}
HomeBlog.propTypes = {
	SectionBgColor: PropTypes.string,
}
HomeBlog.defaultProps = {
	SectionBgColor: 'section section-padding-t90-b100',
}

export default HomeBlog
