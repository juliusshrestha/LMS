import React, { useState, useEffect } from 'react'
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo'
import ApplyForm from '../../components/Career/ApplyForm'
import Vacancy from '../../components/Career/Vacancy'

import { getVacancyDetails } from '../../axios/context/getVacancyDetails'
import { Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Career = () => {
	const { t } = useTranslation()
	const [vacancyData, setVacancyData] = useState([])
	useEffect(() => {
		getVacancyDetails()
			.then((data) => {
				// console.log('vacancy data received ->', data)
				setVacancyData(data)
				// console.log('Type of data', typeof vacancyData)
			})
			.catch((error) => {
				// console.log('error ->', error)
				return error
			})
	}, [])

	// console.log(vacancyData)

	return (
		<div className='section section-padding-top section-padding-bottom-180'>
			<div className='container'>
				<div className='row'>
					<div className='col-xl-6 col-lg-6 col-12 ' data-aos='fade-up'>
						<div className='about-image-area'>
							{/* <div className='about-image'> */}
							<img
								src={process.env.PUBLIC_URL + 'images/blog/770/blog-2.jpg'}
								alt=''
							/>
							{/* </div> */}
						</div>
					</div>

					<div
						className='col-xl-6 col-lg-6 col-12'
						data-aos='fade-up'
						data-aos-delay='300'
					>
						<div className='about-content-area'>
							<SectionTitleTwo
								subTitle={t('career.p2')}
								title={t('career.p3')}
							/>
							<p>{t('career.p4')}</p>

							{/* <Link className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/"}>OPEN POSITIONS</Link> */}
						</div>
					</div>
				</div>

				<div className='row'>
					<div
						className='section-padding-top col-xl-6 col-lg-6 col-12'
						data-aos='fade-up'
						data-aos-delay='300'
					>
						{vacancyData.length > 0 ? (
							<div className='contact-Information'>
								<SectionTitleTwo
									classOption='color-dark'
									subTitle={t('career.p5')}
								/>
								<div className='section section-padding-top-100'>
									{vacancyData &&
										vacancyData.map((single, key) => {
											return (
												<div key={key}>
													<Vacancy data={single} key={key} />
												</div>
											)
										})}
								</div>
							</div>
						) : (
							<div className='contact-Information'>
								<SectionTitleTwo
									classOption='color-dark'
									subTitle={t('career.p7')}
								/>
								<Card className='border-0'>
									<Card.Body>
										<Card.Text>{t('career.p8')}</Card.Text>
										{/* <Button
											className='btn btn-primary btn-hover-secondary'
											>Drop Here</Button> */}
									</Card.Body>
								</Card>
							</div>
						)}
					</div>
					<div
						className='col col-xl-6 col-lg-6 col-12 section-padding-top-100'
						data-aos='fade-up'
					>
						<div className='contact-form-area'>
							<SectionTitleTwo
								classOption='color-dark'
								subTitle={t('career.p6')}
							/>
							<ApplyForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Career
