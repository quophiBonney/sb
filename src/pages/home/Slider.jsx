import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "../../App.css";
import youtubepng from "../../images/youtube.png";
import moviestream from "../../images/moviestreaming.png";
import quoteGenerator from "../../images/QuoteGenerator.PNG";
import sbinstitute from "../../images/solomonbonneyinstitute.png";
import { BsArrowRight, BsEye } from "react-icons/bs";
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
    <div className="container-fluid slider">
      <div
        className="container"
        data-aos="flip-right"
        data-aos-delay="00"
        data-aos-duration="3000"
        style={{ overflowX: "hidden" }}
      >
        <div class="space-content">
          <h3 className="title text-light text-uppercase py-4">
            Projects
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
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="swiper-container">
            <div>
              <img src={sonobopng} alt="Sonono" className="img-fluid" />
              <h4 className="project-name  text-light text-uppercase">
                SONOBO
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
                This is a platform built to help Ghanaians know the charges on
                their mobile money withdrawals. Ghana introduced a new charge in
                the form of tax on all mobile money above &#8373;100 called
                e-levy. The introduction of this e-levy brought a lot of
                confusion so I decided to curb the situation. During the
                building of this project, I really came to understood the
                workings of framer motion, useEffect and useState hooks. I also
                got the chance to enrich my user interface and experience
                skills.
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
          <SwiperSlide className="swiper-container">
            <div>
              <img
                src={quoteGenerator}
                alt="Quote Generator"
                className="img-fluid"
              />
              <h4 className="project-name  text-light text-uppercase">
                Quote Generator
              </h4>
              <img
                src={htmlsvg}
                alt="svg svg"
                className="img-fluid tech-used m-2"
              />
              <img
                src={csssvg}
                alt="svg svg"
                className="img-fluid tech-used m-2"
              />
              <img
                src={bootstrapsvg}
                alt="boostrap svg"
                className="img-fluid tech-used m-2"
              />
              <img
                src={jssvg}
                alt="javascript svg"
                className="img-fluid tech-used m-2"
              />
              <p className="mt-3 text-light">
                This platform provides you with million of quotes that inspire
                you and also cause you to achieve greatness in whatever you do.
                It comes with friendly and awesome interface that you can easily
                find your way out. Join the few people that step out every day
                with new mindset, energy and positivity.
              </p>
              <a
                href="https://quophibonney.github.io/quote_generator/"
                className="btn text-light btn-view-demo"
              >
                View Demo
                <BsEye className="m-2" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <div className="">
              <img
                src={moviestream}
                alt="movie streaming png"
                className="img-fluid"
              />
              <h4 className="project-name  text-light text-uppercase">BTube</h4>
              <img
                src={githubsvg}
                alt="github svg"
                className="img-fluid tech-used m-2"
              />
              <img
                src={htmlsvg}
                alt="html svg"
                className="img-fluid tech-used m-2"
              />
              <img
                src={bootstrapsvg}
                alt="boostrap svg"
                className="img-fluid tech-used m-2"
              />
              <img
                src={jssvg}
                alt="javascript svg"
                className="img-fluid tech-used m-2"
              />
              <p className="mt-3 text-light">
                This is a movie streaming website that built with the help of
                react, bootstrap, javascript which was powered by the TMDB API.
                The application comes with search feature where you can search
                for a video and if it is available you get it rendered,
                otherwise it shows not found message, this feature makes it
                super cool. The movies listed on the website is coming the API,
                the movies comes with their respective details such as title,
                genre, description author and many others.
              </p>
              <a
                href="https://ms-app-swart.vercel.app"
                className="btn btn-outline-light text-light btn-view-demo"
              >
                View Demo
                <BsEye className="m-2" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <div className="">
              <img src={youtubepng} alt="" className="img-fluid" />
              <h4 className="project-name  text-light text-uppercase">
                YTube Video Fetcher
              </h4>
              <img
                src={githubsvg}
                alt="github svg"
                className="img-fluid tech-used m-2"
              />
              <img
                src={htmlsvg}
                alt="html svg"
                className="img-fluid tech-used m-2"
              />
              <img
                src={bootstrapsvg}
                alt="boostrap svg"
                className="img-fluid tech-used m-2"
              />
              <img
                src={jssvg}
                alt="javascript svg"
                className="img-fluid tech-used m-2"
              />
              <p className="mt-3 text-light">
                This is an efficient and awesome web application built with the
                usage of html, bootstrap, javascript and the Youtube Data API.
                The Youtube API provides seamless and efficient way to fetch and
                display youtube videos based on your search query. The
                application is very user- friendly thus it works fine across all
                mobile devices, it also comes with easy navigation and concise
                design to enrich your experience.
              </p>
              <a
                href="https://quophibonney.github.io/youtube_videos/"
                className="btn btn-outline-light text-light btn-view-demo"
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

export default Slider;
