import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const IntroThree = () => {
	const { t } = useTranslation()
	return (
		<div
			className='intro-section section overlay'
			style={{
				backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-image/hero-4.jpg)`,
			}}
		>
			<div >
				<div className='row row-cols-lg-1 row-cols-1'>
					<div className='col align-self-center'>
						<div className='intro-content-two headline-active text-center mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8'>
							<h2 className='title ah-headline'>
								<Typed
									strings={[
										'Welcome to Asha Inc.',
										'Asha Inc. へようこそ!',
										// 'आशा इंकमा तपाईलाई स्वागत छ',
									]}
									typeSpeed={100}
									backSpeed={110}
									loop
								/>
								{/* brands &amp; experiences{' '} */}
							</h2>
							<div className='desc'>
								<p>
									{/* As a leading IT company in Nepal, we thrive off pushing the
									boundaries of our clients’ expectations to turn their ideas
									into beautiful products */}
									{/* Way to go, we are a Leading IT company who thrive on pushing
									the boundaries of our client&apos;s expectations and our own
									capabilities. */}
									{t('s1.p1')}
								</p>
							</div>
							<Link
								to={process.env.PUBLIC_URL + '/contact'}
								className='btn btn-primary btn-hover-secondary'
							>
								{t('s1.btn1')}
							</Link>
							<Link
								to={process.env.PUBLIC_URL + '/service'}
								className='btn btn-outline-white btn-hover-primary'
							>
								{' '}
								{t('s1.btn2')}{' '}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default IntroThree
