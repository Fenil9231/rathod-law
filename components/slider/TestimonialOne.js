"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    rating: 5,
    feedback: "Have the of third divide foreign bring give void rise you'll grass ton fowl forth morning gathering main also evening were intro the yielding spirit called be form grass face into begger you is.",
    author: "John Doe",
    caseType: "Digital Marketing",
  },
  {
    rating: 4,
    feedback: "Have the of third divide foreign bring give void rise you'll grass ton fowl forth morning gathering main also evening were intro the yielding spirit called be form grass face into begger you is.",
    author: "Jane Smith",
    caseType: "Web Development",
  },
  {
    rating: 5,
    feedback: "Have the of third divide foreign bring give void rise you'll grass ton fowl forth morning gathering main also evening were intro the yielding spirit called be form grass face into begger you is.",
    author: "Alice Johnson",
    caseType: "Digital Experience",
  },
];

const formBackgroundImage = "/assets/img/shape/testimonials-v1-shape1.png";  // Replace with the actual path to your background image
const formActionUrl = "/submit-form";  // Replace with your actual form action URL

export default function TestimonialOne() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    query: "YOUR QUERY*",
    message: "",
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
        <div className="container-fluid px-0">
          <div className="row no-gutters">
            {/* Start Testimonials One Form - Full Width */}
            <div className="col-12 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="testimonials-one__form testimonials-one__form--fullwidth">
                <div
                  className="testimonials-one__form-bg"
                  style={{ backgroundImage: `url(${formBackgroundImage})` }}
                ></div>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="title-box">
                        <h2>Free Appointment</h2>
                        <p className="text-white mb-0">Get expert legal consultation for your case. Fill out the form and we'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <form method="post" action={formActionUrl} onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <div className="icon-box"><span className="icon-icon-17"></span></div>
                              <input
                                type="text"
                                name="username"
                                placeholder="YOUR NAME*"
                                value={formData.username}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <div className="icon-box"><span className="icon-icon-18"></span></div>
                              <input
                                type="email"
                                placeholder="YOUR EMAIL*"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <div className="select-box">
                                <select
                                  className="selectmenu wide"
                                  name="query"
                                  value={formData.query}
                                  onChange={handleChange}
                                >
                                  <option value="YOUR QUERY*">YOUR QUERY*</option>
                                  <option value="Immigration Law">Immigration Law</option>
                                  <option value="Family Law">Family Law</option>
                                  <option value="Paralegal Services">Paralegal Services</option>
                                  <option value="Notary Services">Notary Services</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <div className="icon-box"><span className="icon-icon-19"></span></div>
                              <textarea
                                name="message"
                                placeholder="MESSAGE HERE*"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="button-box text-center">
                              <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                Send Request
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
                </div>
              </div>
            </div>
            {/* End Testimonials One Form */}

            {/* Start Testimonials One Content */}
            <div className="col-12">
              <div className="testimonials-one__content">
                <div className="container">
                  <div className="sec-title text-center">
                    <div className="sub-title center">
                      <div className="icon">
                        <img src="/assets/img/icon/sec-title-img1.png" alt="Icon" />
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
                      768: { slidesPerView: 2, spaceBetween: 30 },
                      992: { slidesPerView: 3, spaceBetween: 30 },
                      1200: { slidesPerView: 3, spaceBetween: 30 },
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
            </div>
            {/* End Testimonials One Content */}
          </div>
        </div>
      </section>
      {/* End Testimonials One */}
    </>
  );
}
