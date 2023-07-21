import React, {useState, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/bundle";
import "../../App.css";
import youtubepng from "../../images/youtube.png";
import {
  Keyboard,
  Navigation,
  A11y,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setSlidesToShow(1);
      } else if (screenWidth >= 768 && screenWidth < 992) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);
  return (
    <div className="container-fluid aboutme">
      <div className="container">
        <h3 className="title text-light text-uppercase py-4">Projects</h3>
        <Swiper
          modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={slidesToShow}
          slidesPerColumn={1}
          scrollbar={{draggable: true, snapOnRelease: true, height: 100}}
          keyboard={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide className="swiper-container">
            <div>
              <img src={youtubepng} alt="" className="img-fluid" />
              <p className="mt-3 text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut
                enim blanditiis unde? Illo id excepturi repellat debitis quis
                officiis? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Itaque neque, blanditiis provident eaque adipisci
                explicabo, tenetur quo commodi non, autem eveniet? Corrupti
                dolor omnis dolorum modi molestias illum nostrum perferendis!
              </p>
              <a
                href=""
                className="btn btn-outline-light text-light btn-view-demo"
              >
                View Demo
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <div className="">
              <img src={youtubepng} alt="" className="img-fluid" />
              <p className="mt-3 text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut
                enim blanditiis unde? Illo id excepturi repellat debitis quis
                officiis? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Itaque neque, blanditiis provident eaque adipisci
                explicabo, tenetur quo commodi non, autem eveniet? Corrupti
                dolor omnis dolorum modi molestias illum nostrum perferendis!
              </p>
              <a
                href=""
                className="btn btn-outline-light text-light btn-view-demo"
              >
                View Demo
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <div className="">
              <img src={youtubepng} alt="" className="img-fluid" />
              <p className="mt-3 text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut
                enim blanditiis unde? Illo id excepturi repellat debitis quis
                officiis? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Itaque neque, blanditiis provident eaque adipisci
                explicabo, tenetur quo commodi non, autem eveniet? Corrupti
                dolor omnis dolorum modi molestias illum nostrum perferendis!
              </p>
              <a
                href=""
                className="btn btn-outline-light text-light btn-view-demo"
              >
                View Demo
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <div className="">
              <img src={youtubepng} alt="" className="img-fluid" />
              <p className="mt-3 text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut
                enim blanditiis unde? Illo id excepturi repellat debitis quis
                officiis? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Itaque neque, blanditiis provident eaque adipisci
                explicabo, tenetur quo commodi non, autem eveniet? Corrupti
                dolor omnis dolorum modi molestias illum nostrum perferendis!
              </p>
              <a
                href=""
                className="btn btn-outline-light text-light btn-view-demo"
              >
                View Demo
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <div className="">
              <img src={youtubepng} alt="" className="img-fluid" />
              <p className="mt-3 text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut
                enim blanditiis unde? Illo id excepturi repellat debitis quis
                officiis? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Itaque neque, blanditiis provident eaque adipisci
                explicabo, tenetur quo commodi non, autem eveniet? Corrupti
                dolor omnis dolorum modi molestias illum nostrum perferendis!
              </p>
              <a
                href=""
                className="btn btn-outline-light text-light btn-view-demo"
              >
                View Demo
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
