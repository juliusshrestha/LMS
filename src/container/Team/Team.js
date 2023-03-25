// import PropTypes from "prop-types";
// import React from "react";
// import SectionTitle from "../../components/SectionTitles/SectionTitle";
// import SwiperCore, { Pagination, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.scss";
// import "swiper/components/pagination/pagination.scss";
// import { useState, useEffect } from "react";
// // import axiosInstance from '../../axios/axiosInstance'
// // import SingleTeam from "../../components/Team/SingleTeam";
// import { getTeamDetails } from "../../axios/context/getTeamDetails";
// import { useTranslation } from "react-i18next";

// SwiperCore.use([Pagination, Autoplay]);

// const Team = ({ classOption }) => {
//   const { t } = useTranslation();
//   const [teamData, setTeamData] = useState([]);

//   // useEffect( async () => {
//   //     const result = await axiosInstance.get(
//   //         '/teams'
//   //     );

//   //     setTeamData(result.data);
//   // }, []);

//   useEffect(() => {
//     getTeamDetails()
//       .then((data) => {
//         // console.log('team data received ->', data)
//         setTeamData(data);
//         // console.log('Type of data', typeof teamData)
//       })
//       .catch((error) => {
//         // console.log('error ->', error)
//         return error;
//       });
//   }, []);

//   // console.log(teamData)

//   return (
//     <div></div>
//     // <div
//     //   className={`team-section section section-padding-t90 section-padding-bottom ${classOption}`}
//     // >
//     //   <div className="container-fluid">
//     //     <SectionTitle
//     //       headingOption="title fz-28"
//     //       title={t("s7.p1")}
//     //       subTitle={t("s7.p2")}
//     //     />

//     //     <Swiper
//     //       className="team-slider"
//     //       data-aos="fade-up"
//     //       data-aos-delay="300"
//     //       spaceBetween={50}
//     //       slidesPerView={3}
//     //       loop
//     //       // autoplay={{
//     //       // 	delay: 2000,
//     //       // 	// disableOnInteraction: true
//     //       // }}
//     //       pagination={{ clickable: true }}
//     //       breakpoints={{
//     //         1499: {
//     //           slidesPerView: 3,
//     //         },
//     //         999: {
//     //           slidesPerView: 3,
//     //           spaceBetween: 40,
//     //         },
//     //         799: {
//     //           slidesPerView: 2,
//     //         },

//     //         548: {
//     //           slidesPerView: 1,
//     //         },

//     //         499: {
//     //           slidesPerView: 1,
//     //         },

//     //         399: {
//     //           slidesPerView: 1,
//     //         },
//     //         299: {
//     //           slidesPerView: 1,
//     //         },
//     //       }}
//     //     >
//     //       {teamData &&
//     //         teamData.map((single, key) => {
//     //           // console.log(single);
//     //           return (
//     //             <SwiperSlide key={key}>
//     //               {/* <SingleTeam data={single} key={key} /> */}
//     //             </SwiperSlide>
//     //           );
//     //         })}
//     //     </Swiper>
//     //   </div>
//     // </div>
//   );
// };

// Team.propTypes = {
//   classOption: PropTypes.string,
// };
// Team.defaultProps = {
//   classOption:
//     "testimonial-section section section-padding-t90 section-padding-bottom",
// };

// export default Team;
