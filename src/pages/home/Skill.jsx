import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import htmlsvg from "../../images/html-svg.svg";
import csssvg from "../../images/css-svg.svg";
import jssvg from "../../images/javascript.svg";
import bootstrapsvg from "../../images/bootstrap-svg.svg";
import reactsvg from "../../images/react-svg.svg";
import wordpresssvg from "../../images/wordpress-svgrepo-com.svg";
const Skill = () => {
  return (
    <div className="container-fluid aboutme">
      <Container
        className=""
        data-aos="slide-right"
        data-aos-delay="100"
        data-aos-duration="2000"
      >
        <Row className="justify-content-center">
          <h3 className="text-dark text-uppercase section-title mt-5">
            Skills
          </h3>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
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
                <h5 className="text-dark mt-5 tech-name">HTML5</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
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
                <h5 className="text-dark mt-5 tech-name">CSS3</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
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
                <h5 className="text-dark mt-5 tech-name">JavaScript</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
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
                <h5 className="text-dark mt-5 tech-name">Bootstrap</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4"></div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name">JQuery</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4"></div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name">React</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4"></div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name">Git</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4"></div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name">Github</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4"></div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name">PHP</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4"></div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name">MySQL</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4"></div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5 tech-name">WordPress</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            className="cert-container text-center skill-container mb-3"
          >
            <div className="d-flex">
              <div className="py-4"></div>
              <div className="ms-auto">
                <h5 className="text-dark mt-5">Firebase</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skill;
