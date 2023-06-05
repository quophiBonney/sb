import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Cert from "../../images/cert.jpg";
import JavaScript from "../../images/js.jpeg";
import Laravel from "../../images/laravel.jpg";
const Certifications = () => {
  return (
    <div>
      <Container
        className="mt-5"
        data-aos="zoom-out"
        data-aos-duration="2000"
        data-aos-delay="200"
      >
        <Row className="justify-content-center">
          <h3 className="section-title text-light text-uppercase px-4">
            Certifications
          </h3>
          <hr className="text-light" />
          <Col
            sm={12}
            md={4}
            lg={4}
            className="px-4 cert-container text-center"
          >
            <h5 className="text-light py-3">
              Introduction To Coding Fundamentals
            </h5>
            <img
              src={Cert}
              alt="certificate"
              className="img-fluid img-responsive mb-3"
            />
          </Col>
          <Col
            sm={12}
            md={4}
            lg={4}
            className="px-4 cert-container text-center"
          >
            <h5 className="text-light py-3">
              Introduction To Advance JavaScript
            </h5>
            <img
              src={JavaScript}
              alt="javascript certificate"
              className="img-fluid img-responsive mb-3"
            />
          </Col>
          <Col
            sm={12}
            md={4}
            lg={4}
            className="px-4 cert-container text-center"
          >
            <h5 className="text-light py-3">
              Certificate For Laravel Completion
            </h5>
            <img
              src={Laravel}
              alt="laravel certificate"
              className="img-fluid img-responsive mb-3"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Certifications;
