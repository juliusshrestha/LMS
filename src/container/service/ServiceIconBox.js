import PropTypes from "prop-types";
import React from "react";
import IconBoxData from "../../data/iconBox/icon-box.json";
import IconBoxJap from "../../data/iconBox/icon-box-jap.json";
// import { getServiceIconDetails } from '../../axios/context/getServiceIconDetails'
import IconBox from "../../components/IconBox/IconBox.jsx";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Pagination]);
import { useTranslation } from "react-i18next";

const ServiceIconBox = ({ classOption }) => {
  const { t } = useTranslation();
  // const [serviceIcon, setServiceIcon] = useState([])
  // useEffect(() => {
  // 	getServiceIconDetails()
  // 		.then((data) => {
  // 			console.log('iconbox data received ->', data)
  // 			setServiceIcon(data)
  // 			console.log('Type of data', typeof serviceIcon)
  // 		})
  // 		.catch((error) => {
  // 			console.log('error ->', error)
  // 		})
  // }, [])

  // console.log(serviceIcon)

  let lang = localStorage.getItem("lang");

  const renderServiceEng = () => {
    return (
      <React.Fragment>
        {IconBoxData &&
          IconBoxData.map((single, key) => {
            return (
              <SwiperSlide key={key} className="col mb-6">
                <IconBox classOption="box-border" data={single} key={key} />
              </SwiperSlide>
            );
          })}
      </React.Fragment>
    );
  };
  const renderServiceJap = () => {
    return (
      <React.Fragment>
        {IconBoxJap &&
          IconBoxJap.map((single, key) => {
            return (
              <SwiperSlide key={key} className="col mb-6">
                <IconBox classOption="box-border" data={single} key={key} />
              </SwiperSlide>
            );
          })}
      </React.Fragment>
    );
  };

  return (
    <div className={`section section-padding-t90-b100 ${classOption}`}>
      <div className="container">
        <SectionTitle title={t("s3.p1")} subTitle={t("s3.p2")} />
        <Swiper
          className="service-slider"
          data-aos="fade-up"
          data-aos-delay="300"
          spaceBetween={50}
          slidesPerView={3}
          // loop
          pagination={{ clickable: true }}
          breakpoints={{
            1600: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },

            992: {
              slidesPerView: 2,
            },

            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            478: {
              slidesPerView: 1,
            },
            200: {
              slidesPerView: 1,
            },
          }}
        >
          {/* <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6'> */}
          {lang === "en"
            ? renderServiceEng()
            : lang === "ja"
            ? renderServiceJap()
            : renderServiceEng()}
          {/* </div> */}
        </Swiper>

        {/* <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6'> */}

        {/* {serviceIcon &&
						serviceIcon.slice(0,3).map((single, key) => {
							return (
								<div key={key} className="col mb-6" data-aos="fade-up">
									<IconBox classOption="box-border" data={single} key={key} />
								</div>
							)
						})} */}
        {/* </div> */}
      </div>
    </div>
  );
};

ServiceIconBox.propTypes = {
  classOption: PropTypes.string,
};
ServiceIconBox.defaultProps = {
  classOption: "section section-padding-t90-b100",
};

export default ServiceIconBox;
