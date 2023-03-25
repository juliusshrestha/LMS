import React, { useState } from "react";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import "../../../src/assets/scss/elements/_about.scss";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     image: {
//         display: 'block',
// 		width: '100%',
// 		transition: 'all 1.5s cubic-bezier(0, 0, 0.2, 1)',
// 	},
// })

const Message = () => {
  const { t } = useTranslation();
  const [scale] = useState(1.04);

  // const classes = useStyles()
  return (
    <div className="section section-padding-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area">
              {/* <div className='image'>
								<img
									src={process.env.PUBLIC_URL + 'images/blog/770/sharadsir.jpg'}
									className='w-100'
								/>
							</div> */}
              <Tilt scale={scale} transitionSpeed={4000}>
                <img
                  src={process.env.PUBLIC_URL + "images/blog/770/sharadsir.jpg"}
                  alt=""
                />
              </Tilt>
            </div>
          </div>

          <div
            className="col-xl-6 col-lg-6 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* <div className='about-content-area'> */}
            <SectionTitleTwo subTitle={t("about.p2")} title={t("about.p12")} />
            <p align="justify">{t("about.p10")}</p>
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
