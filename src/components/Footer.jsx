import React from "react";
import {Container, Row, Col} from "react-bootstrap";
const Footer = () => {
  return (
    <div>
      <Container className="mt-5 footer text-light">
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={12} lg={12} className="text-center">
            <hr className="text-light" />
            <p>Copyright &copy; 2022 - 2023</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
