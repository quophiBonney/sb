import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Bonney from "../../images/bg.jpg";
import CV from "../../images/cv.pdf";
import {
  BsDownload,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import {Link} from "react-router-dom";
const About = () => {
  return (
    <div>
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={12}
            lg={6}
            className="text-center align-items-center mt-2 px-3"
          >
            <img
              src={Bonney}
              alt="Solomon Bonney"
              loading="lazy"
              className="img-fluid img-responsive"
              id="mypic"
            />
          </Col>
          <Col sm={12} md={12} lg={6} className="text-light mt-2 px-4">
            <h2 className="text-uppercase mt-5">I'm Solomon Bonney</h2>
            <p>
              I am a <strong>software engineer</strong> based in &nbsp;
              <strong>Ghana</strong> that uses all the stages in the software
              development life cycle to build, maintain and update optimized,
              efficient and robust applications to meet the industry standard.
            </p>
            <p>
              One of my favorite activities is to educate and mentor others in
              the field to fulfill their potential and also deepen my knowledge.
              You can find more about this on my &nbsp;
              <a
                href="https://www.youtube.com/@programmingwithbonney6024"
                className="text-decoration-none"
              >
                YouTube Channel
              </a>
              .
            </p>
            <a
              href={CV}
              download={true}
              className="btn btn-primary btn-sm mb-2"
            >
              <BsDownload className="icons m-2" /> Download CV
            </a>
            <div className="button-group">
              <Link to="https://wwww.github.com/quophiBonney">
                <BsGithub className="icons m-2" />
              </Link>
              <Link to="https://www.linkedin.com/in/solomon-bonney-7911a8220/">
                <BsLinkedin className="icons m-2" />
              </Link>
              <Link to="https://www.youtube.com/@programmingwithbonney6024">
                <BsYoutube className="icons m-2" />
              </Link>
              <Link to="https://wwww.instagram.com/quophiBonney">
                <BsInstagram className="icons m-2" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
