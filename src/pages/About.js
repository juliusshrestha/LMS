import React from 'react'
import SEO from '../components/SEO'
import Header from '../partials/header/Header'
import Breadcrumb from '../container/Breadcrumb/Breadcrumb'
// import AboutFour from '../container/About/AboutFour';
// import Video from '../container/Video/Video';
import AboutFive from '../container/About/AboutFive'
// import TestimonialContainer from '../container/Testimonial/TestimonialContainer';
import CallToActionTwo from '../container/CallToAction/CallToActionTwo'
import Footer from '../container/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop.jsx'
import AboutAsha from '../container/About/AboutAsha'
import Message from '../container/About/Message'
import { useTranslation } from 'react-i18next'
// import GallaryView from '../container/About/GallaryView'

const AboutUs = () => {
	const { t } = useTranslation()
	return (
		<React.Fragment>
			<SEO title='Asha Inc. || About' />
			<Header />
			<Breadcrumb
				image='images/bg/breadcrumb-bg.jpg'
				title={t('about.p1')}
				content={t('navbar.home')}
				contentTwo={t('navbar.about')}
			/>
			<Message />
			<AboutAsha />
			{/* <AboutFour /> */}
			{/* <Video /> */}
			<AboutFive />
			{/* <GallaryView /> */}
			{/* <TestimonialContainer classOption="bg-primary-blue" /> */}
			<CallToActionTwo />
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	)
}

export default AboutUs
