import React from 'react'
import SEO from '../components/SEO'
import Header from '../partials/header/Header'
import Breadcrumb from '../container/Breadcrumb/Breadcrumb'
import ServiceIconBoxTwo from '../container/service/ServiceIconBoxTwo'
// import ServiceSkill from '../container/service/ServiceSkill'
import AboutSix from '../container/About/AboutSix'
// import FunfactTwo from '../container/Funfact/FunfactTwo';
// import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import Footer from '../container/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop.jsx'
import HomeSuccess from '../components/Success/HomeSuccess'
import { useTranslation } from 'react-i18next'

const Service = () => {
	const { t } = useTranslation()

	return (
		<React.Fragment>
			<SEO title='Asha Inc. || Service' />
			<Header />
			<Breadcrumb
				image='images/bg/breadcrumb-bg-three.jpg'
				title={t('services.p1')}
				content={t('navbar.home')}
				contentTwo={t('navbar.service')}
			/>
			<ServiceIconBoxTwo />
			{/* <ServiceSkill /> */}
			<HomeSuccess classOption='section-padding bg-primary-blue' />
			<AboutSix />
			{/* <FunfactTwo /> */}
			{/* <ContactInformationThree /> */}
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	)
}

export default Service
