import React from 'react'

function About1() {
  return (
    <>
        <div className="about-section pt-120 pb-120" id="about">
    <img src="assets/images/bg/section-bg1.svg" alt="image" className="section-bg1 img-fluid" />
    <div className="container">
        <div className="row">
        <div className="col-lg-6 text-lg-start text-center wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="200ms">
            <div className="section-title1">
            <h2>About Rathod Law</h2>
            <p>Rathod Law is a dedicated legal practice specializing in immigration and family law matters. Led by Kapil P. Rathod, Barrister, Solicitor & Notary Public, our firm is committed to providing comprehensive legal solutions to individuals and families navigating complex legal challenges in Canada.</p>
            </div>
            <div className="about-content1">
            <h3>Learn about our law firm and our comprehensive legal expertise.</h3>
            <div className="lawyer-word">
                <p>We seek to resolve immigration related issues as well as issues related to family law. With a system of law that is constantly evolving, our firm stays constantly updated with current laws and various immigration schemes.</p>
                <img src="assets/images/icons/lawyer-sign.svg" alt="image" />
                <h6>Kapil P. Rathod, Principal Lawyer</h6>
            </div>
            </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
            <div className="about1-img wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.2s">
            <img src="assets/images/bg/about1-bg.png" alt="image" className="img-fluid" />
            <div className="experience-tag">
                <h2>10+ <span>Years</span></h2>
                <p>Extensive Experience in Immigration & Family Law</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
   
    </>
  )
}

export default About1