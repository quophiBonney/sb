import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Movie from "../../images/moviestreaming.png";
import Solomon from "../../images/solomonbonneyinstitute.png";
import Ecommerce from "../../images/newPhone.jpg";
import Youtube from "../../images/youtube.png";
const Projects = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <h3 className="text-light text-uppercase section-title">Projects</h3>
          <hr className="text-light mb-3" />
          <Col
            sm={12}
            md={12}
            lg={6}
            className="mt-5"
            data-aos="slide-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img
              src={Movie}
              alt="movie collection"
              className="img-fluid img-responsive"
              id="project-img"
              loading="lazy"
            />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            className="text-light mt-3"
            data-aos="slide-up"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <h3 className="app-title mt-2">BTbue</h3>
            <div className="button-group">
              <button
                className="btn text-light btn-outline-light"
                style={{background: "rgba(0, 0, 0, 0.6)"}}
              >
                React
              </button>
              <button
                className="btn text-light btn-outline-light m-2"
                style={{background: "rgba(0, 0, 0, 0.6)"}}
              >
                Movie API
              </button>
              <button
                className="btn text-light btn-outline-light m-2"
                style={{background: "rgba(0, 0, 0, 0.6)"}}
              >
                AOS Library
              </button>
            </div>
            <p>
              BTube is a movie streaming platform that has collection of movies
              from different part of the world. It has the search box to allow
              you search for a a particular without you needing to go through
              all the movie list. It is mobile friendly(responsive), enriched
              user experience and fast loading to capture the interest of the
              visitor(s).
            </p>
            <Link
              to="https://ms-app-swart.vercel.app"
              className="btn btn-light text-decoration-none m-2"
            >
              View Demo
            </Link>
            <Link
              to="https://github.com/quophiBonney/ms-app"
              className="btn btn-light text-decoration-none m-2"
            >
              Source Code
            </Link>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            className="mt-5"
            data-aos="slide-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img
              src={Ecommerce}
              alt="ecommerce product listing png"
              className="img-fluid img-responsive"
              id="project-img"
              loading="lazy"
            />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            className="text-light mt-3"
            data-aos="slide-up"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <h3 className="app-title mt-2">Ecommerce Web App</h3>
            <div className="button-group">
              <button
                className="btn text-light btn-outline-light"
                style={{background: "rgba(0, 0, 0, 0.6)"}}
              >
                HTML
              </button>
              <button
                className="btn text-light btn-outline-light m-2"
                style={{background: "rgba(0, 0, 0, 0.6)"}}
              >
                CSS
              </button>
              <button
                className="btn text-light btn-outline-light m-2"
                style={{background: "rgba(0, 0, 0, 0.6)"}}
              >
                PHP/MySQL
              </button>
            </div>
            <p>
              A software application that allows you to add data into MySQL
              database and also displays in table, update the data and also
              delete the data.
            </p>
            <Link
              to="https://www.youtube.com/watch?v=1PY102CFkd0"
              className="btn btn-light text-decoration-none m-2"
            >
              View Demo
            </Link>
            <Link
              to="https://www.youtube.com/watch?v=1PY102CFkd0"
              className="btn btn-light text-decoration-none m-2"
            >
              Source Code
            </Link>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            className="mt-5"
            data-aos="slide-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img
              src={Solomon}
              alt="Solomon Bonney Institute"
              className="img-fluid img-responsive"
              id="project-img"
              loading="lazy"
            />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            className="text-light mt-3"
            data-aos="slide-up"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <h3 className="app-title mt-2">Solomon Bonney Institute</h3>
            <div className="button-group">
              <button
                className="btn text-light btn-outline-light"
                style={{background: "rgba(0, 0, 0, 0.6)"}}
              >
                React
              </button>
              <button
                className="btn text-light btn-outline-light m-2"
                style={{background: "rgba(0, 0, 0, 0.6)"}}
              >
                CSS
              </button>
              <button
                className="btn text-light btn-outline-light m-2"
                style={{background: "rgba(0, 0, 0, 0.6)"}}
              >
                AOS Library
              </button>
            </div>
            <p>
              Solomon Bonney Institute is a technological institute aims at
              empowering youths especiall Africa youths in the tech space. The
              institute believe technology is now and the future so they offer
              courses like WordPress, web development(Fronted & Backend) content
              writing and many others.
            </p>
            <Link
              to="https://solomonbonneyinstitute.vercel.app"
              className="btn btn-light text-decoration-none m-2"
            >
              View Demo
            </Link>
            <Link
              to="https://github.com/quophiBonney/solomonbonneyinstitute"
              className="btn btn-light text-decoration-none m-2"
            >
              Source Code
            </Link>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            className="mt-5"
            data-aos="slide-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img
              src={Youtube}
              alt="youtube video fetcher png"
              className="img-fluid img-responsive"
              id="project-img"
              loading="lazy"
            />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            className="text-light mt-3"
            data-aos="slide-up"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <h3 className="app-title mt-2">YTube Video Fetcher</h3>
            <div className="button-group">
              <button
                className="btn btn-outline-light text-light"
                style={{background: "rgba(0, 0, 0, 0.9)"}}
              >
                HTML
              </button>
              <button
                className="btn text-light btn-outline-light m-2"
                style={{background: "rgba(0, 0, 0, 0.9)"}}
              >
                CSS
              </button>
              <button
                className="btn text-light btn-outline-light m-2"
                style={{background: "rgba(0, 0, 0, 0.9)"}}
              >
                Bootstrap
              </button>
              <button
                className="btn text-light btn-outline-light m-2"
                style={{background: "rgba(0, 0, 0, 0.6)"}}
              >
                JavaScript
              </button>
              <button
                className="btn text-light btn-outline-light m-2"
                style={{background: "rgba(0, 0, 0, 0.6)"}}
              >
                Youtube API
              </button>
            </div>
            <p>
              YTube Video Fetcher is a web application that accepts the user
              input then fetch and display youtube videos based on the search
              query. It is mobile friendly and easy to be navigated with HTML5
              semantics.
            </p>
            <Link
              to="https://quophibonney.github.io/youtube_video"
              className="btn btn-light text-decoration-none m-2"
            >
              View Demo
            </Link>
            <Link
              to="https://github.com/quophiBonney/youtube_video"
              className="btn btn-light text-decoration-none m-2"
            >
              Source Code
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
