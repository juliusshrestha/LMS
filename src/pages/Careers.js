import React from 'react'
import SEO from '../components/SEO'
import Header from '../partials/header/Header'
import Breadcrumb from '../container/Breadcrumb/Breadcrumb'
import Footer from '../container/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop.jsx'
import Career from '../container/Career/Career'
import { useTranslation } from 'react-i18next'

const Careers = () => {
	const { t } = useTranslation()

	return (
		<React.Fragment>
			<SEO title='Asha Inc. || Career' />
			<Header />

			<Breadcrumb
				image='images/bg/bg-career.jpg'
				title={t('career.p1')}
				content={t('navbar.home')}
				contentTwo={t('navbar.career')}
			/>
			<Career />
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	)
}

export default Careers
