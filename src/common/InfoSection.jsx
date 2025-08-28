import React from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function InfoSection() {
  const value1 = 80
  const value2 = 60
  return (
    <>
      <div className="info-section">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-xl-2 col-lg-3 col-md-12 order-lg-1 order-3">
              <div className="progress-area">
                <div
                  id="progress"
                  className="progress-item mb-lg-4 mb-md-0 mb-4"
                >
               
                      <CircularProgressbar
                        className="yes"
                        value={value2}
                        text={`60%`}
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
               
                  <h5>Case Win</h5>
                </div>
                <div id="progress1" className="progress-item">
                 
                      <CircularProgressbar
                        value={value1}
                        text={`80%`}
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
                    
                  <h5>Legal Solutions</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-9 order-lg-2 order-1">
              <div className="info-content">
                <h2>We Are The Most Popular Traffic Law Firm in Ontario.</h2>
                <p>
                  At Rathod Law, we specialize in traffic violations and driving offenses across Ontario. 
                  Our experienced legal team has successfully defended thousands of clients against speeding tickets, 
                  stunt driving charges, license suspensions, and other traffic-related matters. We provide 
                  personalized legal solutions with a proven track record of achieving favorable outcomes for our clients.
                </p>
                <ul className="info-list">
                  <li>
                    <h4>Office Hours</h4>
                    <p>
                      Monday To Friday <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </li>
                  <li>
                    <h4>Location</h4>
                    <p>
                      Serving Clients Across <br /> Ontario, Canada
                    </p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default InfoSection;
