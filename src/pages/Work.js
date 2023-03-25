import React from 'react'
import SEO from '../components/SEO'
import Header from '../partials/header/Header'
import Breadcrumb from '../container/Breadcrumb/Breadcrumb'
import WorkContainer from '../container/Work/WorkContainer'
import CallToAction from '../container/CallToAction/CallToAction'
// import AboutFive from '../container/About/AboutFive';
// import BrandContainer from '../container/Brand/BrandContainer';
// import Faq from '../container/Faq/Faq';
import Footer from '../container/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop.jsx'
import { useTranslation } from 'react-i18next'

const Work = () => {
	const { t } = useTranslation()

	return (
		<React.Fragment>
			<SEO title='Asha Inc. || Work' />
			<Header />
			<Breadcrumb
				image='images/bg/breadcrumb-bg-two.jpg'
				title={t('portfolio.p2')}
				content={t('navbar.home')}
				contentTwo={t('navbar.portfolio')}
			/>
			<WorkContainer />
			<CallToAction />
			{/* <AboutFive /> */}
			{/* <BrandContainer classOption="section-padding-bottom" /> */}
			{/* <Faq /> */}
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	)
}

export default Work
