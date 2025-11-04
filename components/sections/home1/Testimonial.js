"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    rating: 5,
    feedback:
      "Rathod Law Firm provided exceptional legal representation for my immigration case. Their expertise and dedication helped me achieve a successful outcome. Highly recommended!",
    author: "Sarah M.",
    caseType: "Immigration Law",
  },
  {
    rating: 5,
    feedback:
      "The family law team at Rathod Law Firm guided me through a difficult divorce with compassion and professionalism. They protected my interests and my children's future.",
    author: "Michael R.",
    caseType: "Family Law",
  },
  {
    rating: 5,
    feedback:
      "Outstanding paralegal services! The team was thorough, efficient, and kept me informed throughout the entire process. Great value for professional legal assistance.",
    author: "Jennifer L.",
    caseType: "Paralegal Services",
  },
  {
    rating: 5,
    feedback:
      "Professional and prompt notarization service. Booking was simple and the process was seamless. Highly reliable.",
    author: "David K.",
    caseType: "Notarization",
  },
  {
    rating: 5,
    feedback:
      "Our real estate closing was handled flawlessly. The team anticipated issues and kept everything on schedule.",
    author: "Priya S.",
    caseType: "Real Estate Law",
  },
  {
    rating: 5,
    feedback:
      "Business incorporation and contract review were clear and efficient. They explained risks and options in plain language.",
    author: "Alex T.",
    caseType: "Business Law",
  },
  {
    rating: 5,
    feedback:
      "Our refugee appeal succeeded thanks to their thorough preparation and compassionate approach.",
    author: "Nadia R.",
    caseType: "Refugee Appeals",
  },
  {
    rating: 5,
    feedback:
      "Responsive and detail‑oriented. They resolved my traffic matter quickly and minimized impact on my record.",
    author: "Omar H.",
    caseType: "Paralegal – Traffic",
  },
];

const formBackgroundImage = "/assets/img/shape/testimonials-v1-shape1.png";  // Decorative shape used in testimonials section

export default function Testimonial() {

  return (
    <>
      {/* Start Testimonials One */}
      <section className="testimonials-one">
        <div className="shape1">
          <img src={formBackgroundImage} alt="" />
        </div>
        <div className="container">
          <div className="row">
            {/* Removed hidden Free Appointment form to clean up unused code */}

            {/* Start Testimonials One Content */}
            <div className="col-12">
              <div className="testimonials-one__content">
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
                  modules={[Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                  breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 0 },
                    375: { slidesPerView: 1, spaceBetween: 0 },
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
      {/* Removed cloned Free Appointment form section (full width) to keep testimonials focused */}
    </>
  );
}
