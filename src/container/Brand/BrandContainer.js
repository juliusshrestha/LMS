import PropTypes from "prop-types";
import React from "react";
import BrandData from "../../data/brand/brand.json";
import Brand from "../../components/Brand/Brand.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import { useTranslation } from "react-i18next";

const BrandContainer = () => {
  const { t } = useTranslation();
  return (
    <div
      className="section section-bg-image section-padding-t110-b120 newsletter-section overlay-two"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/newsletter.jpg)`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 m-auto">
            <div className="section cta-content text-center">
              <SectionTitle
                titleOption="color-light text-center mb-0"
                title={t("s5.p1")}
                subTitle={t("s5.p2")}
              />
              <div className="row">
                <div
                  className="col-lg-12"
                  data-aos="fade-up"
                  style={{ paddingTop: "100px" }}
                >
                  <div className="brand-wrapper">
                    <div className="brand-list">
                      <Swiper
                        className="brand-carousel"
                        spaceBetween={30}
                        slidesPerView={5}
                        loop
                        breakpoints={{
                          1200: {
                            slidesPerView: 5,
                          },

                          992: {
                            slidesPerView: 3,
                          },

                          768: {
                            slidesPerView: 3,
                          },

                          576: {
                            slidesPerView: 2,
                          },

                          320: {
                            slidesPerView: 1,
                          },
                        }}
                      >
                        {BrandData &&
                          BrandData.map((single, key) => {
                            return (
                              <SwiperSlide key={key}>
                                <Brand data={single} key={key} />
                              </SwiperSlide>
                            );
                          })}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className={`brand-section section ${classOption}`}>
    // 	<div className='container'>
    // 		<SectionTitle
    // 			title='Our Partners'
    // 			subTitle='We have worked with Following companies.'
    // 		/>
    // 		<div className='row'>
    // 			<div className='col-lg-12' data-aos='fade-up'>
    // 				<div className='brand-wrapper'>
    // 					<div className='brand-list'>
    // 						<Swiper
    // 							className='brand-carousel'
    // 							spaceBetween={30}
    // 							slidesPerView={6}
    // 							loop
    // 							breakpoints={{
    // 								1200: {
    // 									slidesPerView: 6,
    // 								},

    // 								992: {
    // 									slidesPerView: 5,
    // 								},

    // 								768: {
    // 									slidesPerView: 5,
    // 								},

    // 								576: {
    // 									slidesPerView: 4,
    // 								},

    // 								320: {
    // 									slidesPerView: 2,
    // 								},
    // 							}}
    // 						>
    // 							{BrandData &&
    // 								BrandData.map((single, key) => {
    // 									return (
    // 										<SwiperSlide key={key}>
    // 											<Brand data={single} key={key} />
    // 										</SwiperSlide>
    // 									)
    // 								})}
    // 						</Swiper>
    // 					</div>
    // 				</div>
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
  );
};

BrandContainer.propTypes = {
  classOption: PropTypes.string,
};
BrandContainer.defaultProps = {
  classOption: "brand-section section section-padding-bottom",
};

export default BrandContainer;
