import { useState, useEffect, useRef } from "react";
//import { Progress } from "reactstrap";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import { useTranslation } from "react-i18next";
import Chart from "react-google-charts";
const HomeSuccess = () => {
  const { t } = useTranslation();
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div className="section section-padding-top success-section-padding-bottom-180">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="about-image-area right-0 skill-image-area">
              <div className="about-image js-tilt">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.PUBLIC_URL + "images/skill/skill-1.jpg"}
                    alt=""
                  />
                </Tilt>
              </div>
              <div className="about-image js-tilt">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.PUBLIC_URL + "images/skill/skill-2.jpg"}
                    alt=""
                  />
                </Tilt>
              </div>
              <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/shape-animation/video-shape-1.png"
                    }
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>

          <div
            className="offset-lg-1 col-lg-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="success-content mt-lg-0 mt-md-50 mt-sm-50 mt-40">
              <SectionTitleTwo subTitle={t("s4.p1")} title={t("s4.p2")} />

              <Chart
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Task", "Division"],
                  ["Web Application", 4],

                  ["Enterprise Application", 2],
                  ["Cloud Computing", 4],

                  ["Open Source Software", 3],
                  ["Machine Learning", 1],
                ]}
                options={{
                  is3D: true,
                  fontSize: 12,
                  width: "100%",
                  height: "300",
                  chartArea: {
                    left: 5,
                    top: 20,
                    width: "100%",
                    height: "100%",
                  },
                  animation: {
                    easing: "linear",
                    duration: 1500,
                  },
                  legend: { position: "right", alingnment: "end" },
                  slices: {
                    0: { color: "#40b0ff", offset: 0.2 },
                    1: { color: "#2a93fb", offset: 0 },
                    2: { color: "#0070c0", offset: 0 },
                    3: { color: "#005490", offset: 0 },
                    4: { color: "#003860", offset: 0 },
                  },
                  tooltip: { isHtml: true },
                }}
                rootProps={{ "data-testid": "1" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSuccess;
