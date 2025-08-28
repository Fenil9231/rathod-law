import React from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function About2() {
  const value1 = 95
  const value2 = 90
  const value3 = 88
  return (
    <>
      <div className="about-section2 pt-120 pb-120">
        <div className="container">
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="about2-img">
                <img
                  src="assets/images/bg/experience-bg.png"
                  alt="image"
                  className="img-fluid experience-img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title2 sibling3 text-lg-start text-center">
                <span>Our Expertise</span>
                <h2>
                  Comprehensive Legal Solutions in Immigration & Family Law
                </h2>
              </div>
              <div className="about2-counter-area text-lg-start text-center">
                <p className="para">
                  Canada is a wonderful country and a lot of people from around the world intend to settle down in Canada. With a system of law that is constantly evolving, our firm stays constantly updated with current laws and various immigration schemes. We assess prospective applicants' profiles and suggest suitable programs for permanent residence, study permit, work permit as well as other relevant programs.
                </p>
                <div className="progress-area2">
                  <div id="progress4" className="progress-item">
                   
                        <CircularProgressbar
                          className="yes"
                          value={value1}
                          text={`95%`}
                          circleRatio={0.75}
                          styles={buildStyles({
                            rotation: 1 / 2 + 1 / 8,
                            strokeLinecap: "butt",
                            trailColor: "#005153",
                            textColor: "#000",
                            textSize: "15",
                            pathColor: "#ca9457",
                            dominantBaseline: "text-before-edge",
                          })}
                        />
                      
                    <h5>Immigration Success</h5>
                  </div>

                  <div id="progress3" className="progress-item">
                    
                     
                        <CircularProgressbar
                          value={value2}
                          text={`90%`}
                          circleRatio={0.75}
                          styles={buildStyles({
                            rotation: 1 / 2 + 1 / 8,
                            strokeLinecap: "red",
                            trailColor: "#005153",
                            textColor: "#000",
                            textSize: "15",
                            pathColor: "#ca9457",
                          })}
                        />
                     
                    <h5>Family Law Success</h5>
                  </div>
                  <div id="progress4" className="progress-item">
                   
                      
                        <CircularProgressbar
                          value={value3}
                          text={`88%`}
                          circleRatio={0.75}
                          styles={buildStyles({
                            rotation: 1 / 2 + 1 / 8,
                            strokeLinecap: "butt",
                            trailColor: "#005153",
                            textColor: "#000",
                            textSize: "15",
                            pathColor: "#ca9457",
                          })}
                        />
                     
                    <h5>Client Satisfaction</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About2;
