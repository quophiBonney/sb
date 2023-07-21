import React from "react";
import {Container, Row, Col} from "react-bootstrap";
const Footer = () => {
  return (
    <div className="container-fluid footer">
      <Container className="text-light">
        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className="mt-3 mb-3 text-center"
          >
            <hr className="text-light" />
            <p>
              <strong>Solomon Kofi Bonney</strong>
            </p>
            <p>Copyright &copy; 2022 - 2023</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
