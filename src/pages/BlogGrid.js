import React from 'react'
import SEO from '../components/SEO'
import Header from '../partials/header/Header'
import Breadcrumb from '../container/Breadcrumb/Breadcrumb'
import PageBlog from '../container/BlogGrid/PageBlog'
import CallToAction from '../container/CallToAction/CallToAction'
import Footer from '../container/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop.jsx'
import { useTranslation } from 'react-i18next'

const BlogGrid = () => {
	const { t } = useTranslation()

	return (
		<React.Fragment>
			<SEO title='Asha Inc. || Blog' />
			<Header />
			<Breadcrumb
				image='images/bg/breadcrumb-bg-four.jpg'
				title={t('s9.p4')}
				content={t('navbar.home')}
				contentTwo={t('navbar.blog')}
			/>
			<PageBlog />
			<CallToAction />
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	)
}

export default BlogGrid
