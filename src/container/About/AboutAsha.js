import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
// import Carousel from 'react-bootstrap/Carousel'
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";

const AboutAsha = () => {
  const { t } = useTranslation();
  const [scale] = useState(1.04);

  return (
    <div>
      <div className="section section-padding-top" id="story">
        <div className="container">
          <div className="row" id="story">
            <div
              id=" text"
              className="col-xl-6 col-lg-6 col-12 "
              data-aos="fade-up"
            >
              <SectionTitle
                // headingOption="title fz-32"
                title={t("about.p3")}
                subTitle={t("about.p4")}
              />
              <p align="justify">{t("about.p11")}</p>
              <div style={{ paddingBottom: "20px" }}>
                <a
                  className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4"
                  href="/team-details"
                >
                  {t("about.btn3")}
                </a>
              </div>
            </div>

            <div
              id="image"
              className="col-xl-6 col-lg-6 col-12"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Tilt scale={scale} transitionSpeed={4000}>
                <img
                  src={process.env.PUBLIC_URL + "images/about/asha.jpg"}
                  alt=""
                />
              </Tilt>
            </div>
          </div>
          {/* <Carousel fade>
						<Carousel.Item>
							<img
								className='image d-block w-100'
								src={
									process.env.PUBLIC_URL + 'images/bg/breadcrumb-bg-five.jpg'
								}
								alt=''
							/>
							<Carousel.Caption>
								<h3>Our enthusiastic Members</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='image d-block w-100'
								src={process.env.PUBLIC_URL + 'images/bg/breadcrumb-bg.jpg'}
								alt=''
							/>

							<Carousel.Caption>
								<h3>Our Creative Team</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='image d-block w-100'
								src={process.env.PUBLIC_URL + 'images/bg/video-bg.jpg'}
								alt=''
							/>

							<Carousel.Caption>
								<h3>Shaping Our Goal To Lead The Tech World</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel> */}
        </div>
      </div>
    </div>
  );
};

export default AboutAsha;
