import React from "react";
import Link from "next/link";
import attornyData from "../../data/attrony_data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function AttronySection() {
  const arrtornySlider = {
    slidesPerView: 3,
    speed: 0,
    spaceBetween: 30,
    autoplay: false,
    loop: false,
    allowTouchMove: false,
    allowSlideNext: false,
    allowSlidePrev: false,
    roundLengths: true,
    centeredSlides: false,
    pagination: false,
    navigation: false,
    breakpoints: {
      280: {
        slidesPerView: 1,
        navigation: false,
        centeredSlides: false,
      },
      576: {
        slidesPerView: 2,
        navigation: false,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 2,
        navigation: false,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 3,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 3,
        centeredSlides: false,
      },
    },
  };
  return (
    <>
      <div className="attorneys-section pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="section-title1 text-center">
                <h2>Our Attorneys</h2>
                <p>
                  In consequat tincidunt turpis sit amet imperdiet. Praesent
                  Class officelan nonatoureanor mauris laoreet, iaculis libero
                  quis.Curabitur et tempus eri consequat tincidunt.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper
                {...arrtornySlider}
                className="swiper attorney-slider pb-65"
              >
                <div className="swiper-wrapper">
                  {attornyData.slice(0,4).map((item) => {
                    return (
                      <SwiperSlide
                        key={item.id}
                        className="swiper-slide wow fadeInDown"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.2s"
                      >
                        <div className="attorney-single">
                          <img
                            src={item.images}
                            className="casestudy1"
                            alt="image"
                          />
                          <div className="content">
                            <h4>
                              <Link href={item.link}>
                                <a>{item.name}</a>
                              </Link>
                            </h4>
                            <p>{item.designation}</p>
                            <ul className="social-list gap-3">
                              <li>
                                <a href="https://www.facebook.com/">
                                  <i className="bx bxl-facebook" />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.twitter.com/">
                                  <i className="bx bxl-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.instagram.com/">
                                  <i className="bx bxl-instagram" />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.pinterest.com/">
                                  <i className="bx bxl-pinterest" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>

              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttronySection;
