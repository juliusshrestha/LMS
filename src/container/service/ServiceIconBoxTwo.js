import PropTypes from 'prop-types'
import React from 'react'
import { useEffect, useRef } from 'react'
import IconBoxData from '../../data/iconBox/icon-box.json'
import IconBoxTwo from '../../components/IconBox/IconBoxTwo.jsx'
import SectionTitle from '../../components/SectionTitles/SectionTitle'
import Parallax from 'parallax-js'
import IconBoxJap from '../../data/iconBox/icon-box-jap.json'
import { useTranslation } from 'react-i18next'

const ServiceIconBoxTwo = ({ classOption }) => {
	const { t } = useTranslation()
	const sceneEl = useRef(null)
	useEffect(() => {
		const parallaxInstance = new Parallax(sceneEl.current, {
			relativeInput: true,
		})

		parallaxInstance.enable()

		return () => parallaxInstance.disable()
	}, [])
	let lang = localStorage.getItem('lang')

	const renderServiceEng = () => {
		return (
			<React.Fragment>
				{IconBoxData &&
					IconBoxData.map((single, key) => {
						return (
							<div
								key={key}
								className='col mb-6'
								data-aos='fade-up'
								data-aos-delay='300'
							>
								<IconBoxTwo classOption='box-border' data={single} key={key} />
							</div>
						)
					})}
			</React.Fragment>
		)
	}
	const renderServiceJap = () => {
		return (
			<React.Fragment>
				{IconBoxJap &&
					IconBoxJap.map((single, key) => {
						return (
							<div
								key={key}
								className='col mb-6'
								data-aos='fade-up'
								data-aos-delay='300'
							>
								<IconBoxTwo classOption='box-border' data={single} key={key} />
							</div>
						)
					})}
			</React.Fragment>
		)
	}

	return (
    <div
      className={`section section-padding-t90 section-padding-bottom ${classOption}`}
    >
      <div className="container">
        <SectionTitle
          headingOption="fz-32"
          title={t("services.p2")}
          // subTitle='We develop beautifully designed creative solutions that help you achieve your business goals.
          // We provide the exceptional service we’d want to experience ourselves!'
        />

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6 icon-box-shape-animation">
          {lang === "en"
            ? renderServiceEng()
            : lang === "ja"
            ? renderServiceJap()
            : renderServiceEng()}

          {/* {IconBoxData &&
						IconBoxData.slice(0, 3).map((single, key) => {
							return (
								<div
									key={key}
									className='col mb-6'
									data-aos='fade-up'
									data-aos-delay='300'
								>
									<IconBox classOption='box-border' data={single} key={key} />
								</div>
							)
						})} */}

          <div className="shape shape-1" id="scene" ref={sceneEl}>
            <span data-depth="1">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/shape-animation/video-shape-1.png"
                }
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

ServiceIconBoxTwo.propTypes = {
	classOption: PropTypes.string,
}
ServiceIconBoxTwo.defaultProps = {
	classOption: 'section section-padding-t90 section-padding-bottom',
}

export default ServiceIconBoxTwo
