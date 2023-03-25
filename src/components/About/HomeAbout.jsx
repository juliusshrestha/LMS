import { useState, useEffect, useRef } from 'react'
import SectionTitle from '../SectionTitles/SectionTitle'
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo'
import Tilt from 'react-parallax-tilt'
import Parallax from 'parallax-js'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HomeAbout = () => {
	const { t } = useTranslation()
	const [scale] = useState(1.04)
	const sceneEl = useRef(null)

	useEffect(() => {
		const parallaxInstance = new Parallax(sceneEl.current, {
			relativeInput: true,
		})

		parallaxInstance.enable()

		return () => parallaxInstance.disable()
	}, [])
	return (
		<div className='section section-padding-t90 section-padding-bottom-200'>
			<div className='container'>
				<SectionTitle
					title={t('s2.p1')}
					subTitle={t('s2.p2')}
				/>

				<div className='row'>
					<div className='col-xl-7 col-lg-6 col-12' data-aos='fade-up'>
						<div className='about-image-area'>
							<div className='about-image'>
								<Tilt scale={scale} transitionSpeed={4000}>
									<img
										src={
											process.env.PUBLIC_URL +
											'images/about/home-one-about/home_agency_about_1.jpg'
										}
										alt=''
									/>
								</Tilt>
							</div>

							<div className='about-image'>
								<Tilt scale={scale} transitionSpeed={4000}>
									<img
										src={
											process.env.PUBLIC_URL +
											'images/about/home-one-about/home_agency_about_2.jpg'
										}
										alt=''
									/>
								</Tilt>
							</div>
							<div className='shape shape-1' id='scene' ref={sceneEl}>
								<span data-depth='1'>
									<img
										src={
											process.env.PUBLIC_URL +
											'images/shape-animation/about-shape-1.png'
										}
										alt=''
									/>
								</span>
							</div>
						</div>
					</div>

					<div
						className='col-xl-5 col-lg-6 col-12'
						data-aos='fade-up'
						data-aos-delay='300'
					>
						<div className='about-content-area'>
							<SectionTitleTwo
								subTitle={t('s2.p3')}
								title={t('s2.p4')}
							/>

							<p>
								{t('s2.p5')}
							</p>

							<Link
								className='btn btn-primary btn-hover-secondary mt-xl-8 mt-lg-8 mt-md-6 mt-4'
								to={process.env.PUBLIC_URL + '/about'}
							>
								{t('s2.btn1')}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeAbout
