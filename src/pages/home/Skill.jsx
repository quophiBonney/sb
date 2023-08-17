import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import htmlsvg from "../../images/html-svg.svg";
import csssvg from "../../images/css-svg.svg";
import jssvg from "../../images/javascript.svg";
import bootstrapsvg from "../../images/bootstrap-svg.svg";
import reactsvg from "../../images/react-svg.svg";
import githubsvg from "../../images/github-142-svgrepo-com.svg";
import firebasesvg from "../../images/firebase-svg.svg";
import mysqlsvg from "../../images/mysql-svg.svg";
import phpsvg from "../../images/php-svgrepo-com.svg";
import wordpresssvg from "../../images/wordpress-svgrepo-com.svg";
import reactnativesvg from "../../images/react-native-svg.svg";
import vitesvg from "../../images/vite-svg.svg";
const Skill = () => {
  return (
    <div className="container-fluid aboutme" id="skills">
      <Container className="">
        <Row className="justify-content-center">
          <h3 className="title text-light text-uppercase mt-5">My Skills</h3>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4">
                <img
                  src={htmlsvg}
                  alt="html svg"
                  className="img-fluid img-responsive"
                />
              </div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name text-uppercase">
                  HTML5
                </h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            data-aos="flip-right"
            data-aos-duration="2000"
            data-aos-delay="100"
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4">
                <img
                  src={csssvg}
                  alt="css svg"
                  className="img-fluid img-responsive"
                />
              </div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name text-uppercase">
                  CSS3
                </h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            data-aos="flip-right"
            data-aos-duration="3000"
            data-aos-delay="100"
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4">
                <img
                  src={jssvg}
                  alt="js svg"
                  className="img-fluid img-responsive"
                />
              </div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name text-uppercase">
                  JavaScript
                </h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4">
                <img
                  src={bootstrapsvg}
                  alt="bootstrap svg"
                  className="img-fluid img-responsive"
                />
              </div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name text-uppercase">
                  Bootstrap
                </h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            data-aos="flip-right"
            data-aos-duration="2000"
            data-aos-delay="100"
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4">
                <img
                  src={reactsvg}
                  alt="reactjs svg"
                  className="img-fluid img-responsive"
                />
              </div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name text-uppercase">
                  React
                </h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            data-aos="flip-right"
            data-aos-duration="3000"
            data-aos-delay="100"
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4">
                <img
                  src={githubsvg}
                  alt="github svg"
                  className="img-fluid img-responsive"
                />
              </div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name text-uppercase">
                  Github
                </h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4">
                <img
                  src={reactnativesvg}
                  alt="react native svg"
                  className="img-fluid img-responsive"
                />
              </div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name text-uppercase">
                  React Native
                </h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            data-aos="flip-right"
            data-aos-duration="2000"
            data-aos-delay="100"
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4">
                <img
                  src={phpsvg}
                  alt="php svg"
                  className="img-fluid img-responsive"
                />
              </div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name text-uppercase">PHP</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            data-aos="flip-right"
            data-aos-duration="3000"
            data-aos-delay="100"
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4">
                <img
                  src={mysqlsvg}
                  alt="mysql svg"
                  className="img-fluid img-responsive"
                />
              </div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name text-uppercase">
                  MySQL
                </h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4">
                <img
                  src={wordpresssvg}
                  alt="wordpress svg"
                  className="img-fluid img-responsive"
                />
              </div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name text-uppercase">
                  WordPress
                </h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            data-aos="flip-right"
            data-aos-duration="2000"
            data-aos-delay="100"
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4">
                <img
                  src={firebasesvg}
                  alt="firebase svg"
                  className="img-fluid img-responsive"
                />
              </div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 text-uppercase">Firebase</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            data-aos="flip-right"
            data-aos-duration="3000"
            data-aos-delay="100"
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4">
                <img
                  src={vitesvg}
                  alt="vite svg"
                  className="img-fluid img-responsive"
                />
              </div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 text-uppercase">Vite</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skill;
