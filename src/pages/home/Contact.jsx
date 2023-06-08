import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Faq from "../../images/faq.png";
const Contact = () => {
  return (
    <div>
      <Container
        className="mt-5"
        data-aos="slide-right"
        data-aos-delay="100"
        data-aos-duration="2000"
      >
        <Row className="justity-content-center">
          <Col sm={12} md={6} lg={6} className="px-4 mt-5">
            <img
              src={Faq}
              alt="sending message png"
              className="img-fluid img-responsive"
              loading="lazy"
            />
          </Col>
          <Col sm={12} md={6} lg={6} className="px-4 text-light mt-5">
            <p>
              I'd love if you reached out to me. Even if it's just to say
              "Hey!". Don't hesitate! Drop me a line and I’ll get back to you
              ASAP!
            </p>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="name" className="text-light">
                  Your Name
                </label>
                <input
                  type="text"
                  onChange=""
                  placeholder="Your name"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email" className="text-light">
                  Your Email
                </label>
                <input
                  type="text"
                  onChange=""
                  placeholder="Your Email"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="message" className="text-light">
                  Your Message
                </label>
                <textarea
                  className="form-control py-5"
                  placeholder="your message"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="submit"
                  onClick=""
                  value="Send Message"
                  className="form-control btn btn-danger"
                />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
