import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import Loader from "../images/load-white.gif";
function Preloader() {
  return (
    <div className="preloader">
      <Container fluid>
        <Row className="justify-content-center">
          <Col sm={12} md={12} lg={12} className="text-center">
            <img
              src={Loader}
              alt="load-white gif"
              className="img-fluid img-responsive gif"
            />
            <h3 className="text-light text-uppercase">Please Wait....</h3>
            <p className="text-light text-uppercase">Solomon Bonney</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Preloader;
