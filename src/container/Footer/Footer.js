import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/logo/Logo'
import FooterData from '../../data/Footer/footerItem.json'
import FooterJap from '../../data/Footer/FooterJap.json'
import FooterLinkItem from '../../components/Footer/FooterLinkItem.jsx'

const Footer = () => {
	let lang = localStorage.getItem('lang')

	const renderFooterEng = () => {
		return (
			<React.Fragment>
				{FooterData &&
					FooterData.map((single, key) => {
						return (
							<div
								key={key}
								className='col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-6'
							>
								<FooterLinkItem data={single} key={key} />
							</div>
						)
					})}
			</React.Fragment>
		)
	}
	const renderFooterJap = () => {
		return (
			<React.Fragment>
				{FooterJap &&
					FooterJap.map((single, key) => {
						return (
							<div
								key={key}
								className='col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-6'
							>
								<FooterLinkItem data={single} key={key} />
							</div>
						)
					})}
			</React.Fragment>
		)
	}

	return (
    <div className="footer-section section footer-bg-color">
      <div className="container">
        <div className="row mb-lg-14 mb-md-10 mb-6">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 col-12 mb-6">
            <div className="footer-widget">
              <div className="footer-logo">
                <Logo
                  image={`${process.env.PUBLIC_URL}/images/logo/logo2.png`}
                />
              </div>
              <div className="footer-widget-content">
                <div className="content">
                  <p>
                    <Link to={process.env.PUBLIC_URL + "/"}>01-5905279</Link>
                  </p>
                  <p>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      asha.inc10@gmail.com
                    </Link>{" "}
                  </p>
                </div>
                {/* <div className="footer-social-inline">
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                </div> */}
              </div>
            </div>
          </div>
          {lang === "en"
            ? renderFooterEng()
            : lang === "ja"
            ? renderFooterJap()
            : renderFooterEng()}
        </div>

        <div className="row">
          <div className="col">
            <p className="copyright">
              &copy; 2021 <strong>Asha Inc Pvt. Ltd.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
