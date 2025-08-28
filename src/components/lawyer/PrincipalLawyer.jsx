import React from 'react'
import Link from 'next/link'

function PrincipalLawyer() {
  return (
    <>
      <div className="principal-lawyer-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-title1 text-center mb-60">
                <h2>Principal Lawyer</h2>
                <p>
                  Meet our principal lawyer, Kapil P. Rathod, a dedicated Barrister, Solicitor & Notary Public 
                  with extensive experience in Immigration and Family Law.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center align-items-start g-5">
            <div className="col-lg-5 col-md-8">
              <div className="lawyer-image-wrapper position-relative">
                <div className="lawyer-image text-center">
                  <img 
                    src="assets/images/kapil-rearhod-home.avif" 
                    className="img-fluid rounded-3 shadow-lg" 
                    alt="Kapil P. Rathod - Principal Lawyer" 
                  />
                  <div className="lawyer-badge position-absolute">
                    <span className="badge theme-badge">Principal Lawyer</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7">
              <div className="lawyer-profile">
                <div className="lawyer-header mb-5">
                  <h3 className="lawyer-name mb-3">Kapil P. Rathod</h3>
                  <span className="designation-badge">Barrister, Solicitor & Notary Public</span>
                </div>
                
                <p className="lawyer-description mb-5">
                  With years of dedicated practice in Immigration and Family Law, Kapil P. Rathod 
                  provides comprehensive legal services with a commitment to excellence and client satisfaction. 
                  His expertise spans across various areas including judicial reviews, refugee appeals, 
                  immigration applications, and family law matters.
                </p>
                
                <div className="lawyer-specialties mb-5">
                  <h4 className="specialty-title mb-4">
                    <i className="bx bx-briefcase-alt-2 me-2 theme-icon"></i>
                    Areas of Expertise
                  </h4>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <ul className="specialty-list list-unstyled">
                        <li className="mb-3">
                          <i className="bx bx-check-circle theme-icon me-2"></i>
                          Immigration Law & Applications
                        </li>
                        <li className="mb-3">
                          <i className="bx bx-check-circle theme-icon me-2"></i>
                          Family Law & Domestic Relations
                        </li>
                        <li className="mb-3">
                          <i className="bx bx-check-circle theme-icon me-2"></i>
                          Judicial Reviews
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="specialty-list list-unstyled">
                        <li className="mb-3">
                          <i className="bx bx-check-circle theme-icon me-2"></i>
                          Refugee Appeals
                        </li>
                        <li className="mb-3">
                          <i className="bx bx-check-circle theme-icon me-2"></i>
                          Notarization Services
                        </li>
                        <li className="mb-3">
                          <i className="bx bx-check-circle theme-icon me-2"></i>
                          Legal Document Preparation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="lawyer-info-cards mb-5">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="info-card p-4 border rounded-3 h-100">
                        <div className="info-icon mb-3">
                          <i className="bx bx-award theme-icon fs-3"></i>
                        </div>
                        <h5 className="info-title mb-3">Professional Credentials</h5>
                        <p className="info-text mb-0">
                          Licensed Barrister & Solicitor<br/>
                          Certified Notary Public
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-card p-4 border rounded-3 h-100">
                        <div className="info-icon mb-3">
                          <i className="bx bx-world theme-icon fs-3"></i>
                        </div>
                        <h5 className="info-title mb-3">Languages</h5>
                        <p className="info-text mb-0">
                          English, Hindi, Gujarati
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lawyer-cta d-flex flex-wrap gap-3">
                  <Link href="/contact">
                    <a className="eg-btn btn--primary2 capsule btn--lg">
                      <i className="bi bi-dash-lg"></i>
                      Schedule Consultation
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </Link>
                  <Link href="/kapil-rathod">
                    <a className="eg-btn btn--primary btn--outline btn--lg capsule">
                      View Full Profile
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .lawyer-image-wrapper {
          position: relative;
        }
        
        .lawyer-badge {
          top: 20px;
          right: 20px;
          z-index: 2;
        }
        
        .theme-badge {
          background: linear-gradient(135deg, var(--primary-color1), var(--primary-color2)) !important;
          color: white !important;
          font-size: 0.875rem;
          padding: 10px 18px;
          border-radius: 25px;
          font-weight: 600;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(222, 160, 87, 0.3);
        }
        
        .lawyer-name {
          color: var(--primary-color1);
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
        }
        
        .designation-badge {
          background: linear-gradient(135deg, var(--primary-color1), var(--primary-color2));
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.95rem;
          font-weight: 600;
          display: inline-block;
        }
        
        .lawyer-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--paragraph-color1);
        }
        
        .theme-icon {
          color: var(--primary-color1) !important;
        }
        
        .specialty-title {
          color: var(--primary-color1);
          font-size: 1.4rem;
          font-weight: 600;
        }
        
        .specialty-list li {
          font-size: 1.05rem;
          color: var(--text-color1);
          transition: all 0.3s ease;
          padding: 8px 0;
        }
        
        .specialty-list li:hover {
          color: var(--primary-color1);
          transform: translateX(5px);
        }
        
        .info-card {
          background: #fbf8f6;
          border: 1px solid #f0e6d6 !important;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, var(--primary-color1), var(--primary-color2));
        }
        
        .info-card:hover {
          background: #f8f4ef;
          border-color: var(--primary-color1) !important;
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(222, 160, 87, 0.15);
        }
        
        .info-title {
          color: var(--primary-color1);
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .info-text {
          color: var(--paragraph-color1);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        .lawyer-cta .eg-btn {
          transition: all 0.3s ease;
        }
        
        .lawyer-cta .eg-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        @media (max-width: 992px) {
          .row.g-5 {
            gap: 2rem !important;
          }
          
          .lawyer-image-wrapper {
            margin-bottom: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .lawyer-name {
            font-size: 2rem;
            text-align: center;
          }
          
          .designation-badge {
            display: block;
            text-align: center;
            margin: 0 auto;
            width: fit-content;
          }
          
          .lawyer-description {
            text-align: center;
          }
          
          .lawyer-cta {
            justify-content: center;
          }
          
          .lawyer-cta .eg-btn {
            width: 100%;
            text-align: center;
          }
          
          .specialty-title {
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}

export default PrincipalLawyer