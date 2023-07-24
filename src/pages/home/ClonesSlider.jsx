import React, {useState, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/bundle";
import "../../App.css";
import kuuotepng from "../../images/kuuote.PNG";
import {BsArrowRight, BsEye} from "react-icons/bs";
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
import jssvg from "../../images/javascript.svg";
import bootstrapsvg from "../../images/bootstrap-svg.svg";
import reactsvg from "../../images/react-svg.svg";
import githubsvg from "../../images/github-142-svgrepo-com.svg";
import sonobopng from "../../images/sonobo.png";
import mysqlsvg from "../../images/mysql-svg.svg";
import htmlsvg from "../../images/html-svg.svg";
import csssvg from "../../images/css-svg.svg";
import phpsvg from "../../images/php-svgrepo-com.svg";
import wordpresssvg from "../../images/wordpress-svgrepo-com.svg";
import reactnativesvg from "../../images/react-native-svg.svg";
import vitesvg from "../../images/vite-svg.svg";
const ClonesSlider = () => {
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
    <div className="container-fluid slider">
      <div
        className="container"
        data-aos="zoom-out"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <div>
          <h3 className="title text-light text-uppercase py-4">
            Clones
            <span className="swipe">
              swipe left <BsArrowRight className="m-1" />
            </span>
          </h3>
        </div>

        <Swiper
          modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={slidesToShow}
          slidesPercolumn={1}
          scrollbar={{
            draggable: true,
            snapOnRelease: true,
          }}
          keyboard={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide className="swiper-container">
            <div>
              <img src={kuuotepng} alt="Kuuote" className="img-fluid" />
              <h4 className="project-name  text-light text-uppercase">
                Kuuote Clone
              </h4>
              <img
                src={vitesvg}
                alt="vite svg"
                className="img-fluid tech-used m-2"
              />
              <img
                src={bootstrapsvg}
                alt="boostrap svg"
                className="img-fluid tech-used m-2"
              />
              <img
                src={reactsvg}
                alt="react svg"
                className="img-fluid tech-used m-2"
              />
              <img
                src={jssvg}
                alt="javascript svg"
                className="img-fluid tech-used m-2"
              />
              <p className="mt-3 text-light">
                This Kuuote Clone is an impressive platform built to connect
                people with similar interest through sharing of quotes. I was
                impress by the UI/UX so I thought of replicating it. The
                platform comes with much inspiration such as authentication,
                follower's feature, emojis, categories of interest and a lot
                more. I am not really close to finishing it, but I am determined
                to do finish so I am tackling the frontend challenges then later
                gets into the backend. You can visit the real&nbsp;
                <a
                  href="https://kuuote.com"
                  className="text-decoration-none"
                  target="_blank"
                >
                  Kuuote Site
                </a>
                &nbsp; today.
              </p>
              <a
                href="https://sonobo-app.vercel.app"
                className="btn text-light btn-view-demo"
              >
                View Demo
                <BsEye className="m-2" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClonesSlider;
