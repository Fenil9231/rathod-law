"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    rating: 5,
    feedback: "Rathod Law Firm provided exceptional legal representation for my immigration case. Their expertise and dedication helped me achieve a successful outcome. Highly recommended!",
    author: "Sarah M.",
    caseType: "Immigration Law",
  },
  {
    rating: 5,
    feedback: "The family law team at Rathod Law Firm guided me through a difficult divorce with compassion and professionalism. They protected my interests and my children's future.",
    author: "Michael R.",
    caseType: "Family Law",
  },
  {
    rating: 5,
    feedback: "Outstanding paralegal services! The team was thorough, efficient, and kept me informed throughout the entire process. Great value for professional legal assistance.",
    author: "Jennifer L.",
    caseType: "Paralegal Services",
  },
];

const formBackgroundImage = "/assets/img/shape/testimonials-v1-shape1.png";  // Replace with the actual path to your background image
const formActionUrl = "/submit-form";  // Replace with your actual form action URL

export default function Testimonial() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    query: "SELECT SERVICE*",
    message: "",
    smsConsent: false,
    emailConsent: false,
    marketingConsent: false,
    dataProcessing: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submitted
  };

  return (
    <>
      {/* Start Testimonials One */}
      <section className="testimonials-one">
        <div className="shape1">
          <img src={formBackgroundImage} alt="" />
        </div>
        <div className="container">
          <div className="row">
            {/* Start Testimonials One Form */}
            <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="testimonials-one__form">
                <div
                  className="testimonials-one__form-bg"
                  style={{ backgroundImage: `url(${formBackgroundImage})` }}
                ></div>
                <div className="title-box">
                  <h2>Free Appointment</h2>
                </div>
                <form method="post" action={formActionUrl} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="icon-box"><span className="icon-icon-17"></span></div>
                    <input
                      type="text"
                      name="username"
                      placeholder="FULL NAME*"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="icon-box"><span className="icon-icon-18"></span></div>
                    <input
                      type="email"
                      placeholder="EMAIL ADDRESS*"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="icon-box"><span className="icon-icon-17"></span></div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="PHONE NUMBER*"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="select-box">
                      <select
                        className="selectmenu wide"
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                        required
                      >
                        <option value="SELECT SERVICE*">SELECT SERVICE*</option>
                        <option value="Immigration Appeals">Immigration Appeals</option>
                        <option value="Family Law Services">Family Law Services</option>
                        <option value="Paralegal Services">Paralegal Services</option>
                        <option value="Lawyer Services">Lawyer Services</option>
                        <option value="Notarization Services">Notarization Services</option>
                        <option value="Real Estate Law">Real Estate Law</option>
                        <option value="Business Law">Business Law</option>
                        <option value="Other Legal Services">Other Legal Services</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="icon-box"><span className="icon-icon-19"></span></div>
                    <textarea
                      name="message"
                      placeholder="DESCRIBE YOUR LEGAL MATTER*"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  {/* Consent Checkboxes */}
                  <div className="consent-section" style={{marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px'}}>
                    <h4 style={{marginBottom: '15px', color: '#333', fontSize: '14px', fontWeight: '600'}}>Consent & Communication Preferences</h4>
                    
                    <div className="checkbox-group" style={{marginBottom: '10px'}}>
                      <label style={{display: 'flex', alignItems: 'flex-start', fontSize: '12px', lineHeight: '1.4'}}>
                        <input
                          type="checkbox"
                          name="smsConsent"
                          checked={formData.smsConsent}
                          onChange={(e) => setFormData({...formData, smsConsent: e.target.checked})}
                          required
                          style={{marginRight: '8px', marginTop: '2px'}}
                        />
                        <span><strong>SMS Notifications (Required):</strong> I consent to receive SMS notifications from Rathod Law Firm regarding my appointment and case updates.</span>
                      </label>
                    </div>
                    
                    <div className="checkbox-group" style={{marginBottom: '10px'}}>
                      <label style={{display: 'flex', alignItems: 'flex-start', fontSize: '12px', lineHeight: '1.4'}}>
                        <input
                          type="checkbox"
                          name="emailConsent"
                          checked={formData.emailConsent}
                          onChange={(e) => setFormData({...formData, emailConsent: e.target.checked})}
                          required
                          style={{marginRight: '8px', marginTop: '2px'}}
                        />
                        <span><strong>Email Communications (Required):</strong> I consent to receive email communications from Rathod Law Firm regarding my case and legal notices.</span>
                      </label>
                    </div>
                    
                    <div className="checkbox-group" style={{marginBottom: '10px'}}>
                      <label style={{display: 'flex', alignItems: 'flex-start', fontSize: '12px', lineHeight: '1.4'}}>
                        <input
                          type="checkbox"
                          name="marketingConsent"
                          checked={formData.marketingConsent}
                          onChange={(e) => setFormData({...formData, marketingConsent: e.target.checked})}
                          style={{marginRight: '8px', marginTop: '2px'}}
                        />
                        <span><strong>Marketing Communications (Optional):</strong> I consent to receive newsletters and legal updates from Rathod Law Firm.</span>
                      </label>
                    </div>
                    
                    <div className="checkbox-group" style={{marginBottom: '15px'}}>
                      <label style={{display: 'flex', alignItems: 'flex-start', fontSize: '12px', lineHeight: '1.4'}}>
                        <input
                          type="checkbox"
                          name="dataProcessing"
                          checked={formData.dataProcessing}
                          onChange={(e) => setFormData({...formData, dataProcessing: e.target.checked})}
                          required
                          style={{marginRight: '8px', marginTop: '2px'}}
                        />
                        <span><strong>Data Processing (Required):</strong> I understand and consent to the processing of my personal information as outlined in the Privacy Policy.</span>
                      </label>
                    </div>
                    
                    <div className="policy-links" style={{fontSize: '11px', color: '#666', padding: '10px', backgroundColor: '#fff', borderRadius: '3px'}}>
                      <p style={{margin: '0 0 8px 0', fontWeight: '600'}}>Legal Information:</p>
                      <p style={{margin: '0 0 8px 0'}}>By submitting this form, you agree to our:</p>
                      <div style={{marginLeft: '10px'}}>
                        <div><Link href="/privacy-policy" style={{color: '#d4af37', textDecoration: 'underline'}}>Privacy Policy</Link> - Information protection</div>
                        <div><Link href="/terms-and-conditions" style={{color: '#d4af37', textDecoration: 'underline'}}>Terms and Conditions</Link> - Service terms</div>
                        <div><Link href="/cookie-policy" style={{color: '#d4af37', textDecoration: 'underline'}}>Cookie Policy</Link> - Cookie usage</div>
                      </div>
                      <p style={{margin: '8px 0 0 0', fontSize: '10px', fontStyle: 'italic'}}>Note: This consultation request does not create an attorney-client relationship.</p>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="button-box">
                        <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                          Request Free Consultation
                          <span className="thm-btn__icon">
                            <i className="icon-icon-8"></i>
                          </span>
                          <span className="thm-btn__hover-group">
                            <span className="thm-btn__hover thm-btn__hover--1"></span>
                            <span className="thm-btn__hover thm-btn__hover--2"></span>
                            <span className="thm-btn__hover thm-btn__hover--3"></span>
                            <span className="thm-btn__hover thm-btn__hover--4"></span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* End Testimonials One Form */}

            {/* Start Testimonials One Content */}
            <div className="col-xl-8">
              <div className="testimonials-one__content">
                <div className="sec-title text-center">
                  <div className="sub-title center">
                    <div className="icon">
                      <img src="assets/img/icon/sec-title-img1.png" alt="Icon" />
                    </div>
                    <div className="text">
                      <p>Our Testimonials</p>
                    </div>
                  </div>
                  <h2>Clients Feedback</h2>
                </div>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                  breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 0 },
                    375: { slidesPerView: 1, spaceBetween: 30 },
                    575: { slidesPerView: 1, spaceBetween: 0 },
                    768: { slidesPerView: 1, spaceBetween: 0 },
                    992: { slidesPerView: 1, spaceBetween: 0 },
                    1200: { slidesPerView: 1, spaceBetween: 0 },
                  }}
                >
                  {testimonials.length > 0 ? (
                    testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="testimonials-one__single">
                          <div className="testimonials-one__single-inner">
                            <div className="icon-box">
                              <span className="icon-icon-20"></span>
                            </div>
                            <div className="content-box">
                              <div className="rating-box">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <i className="icon-icon-21" key={i}></i>
                                ))}
                              </div>
                              <h2>{testimonial.feedback}</h2>
                              <div className="author-box">
                                <h3>{testimonial.author}</h3>
                                <p>{testimonial.caseType}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  ) : (
                    <div>No testimonials available</div>
                  )}
                </Swiper>
              </div>
            </div>
            {/* End Testimonials One Content */}
          </div>
        </div>
      </section>
      {/* End Testimonials One */}
    </>
  );
}
