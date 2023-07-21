import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import mypic from "../../images/mypic.webp";
import mycv from "../../images/mycv.pdf";
import {BsDownload} from "react-icons/bs";

const AboutMe = () => {
  return (
    <>
      <div className="container-fluid aboutme">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={7} className="text-light mt-5 ">
              <div>
                <h3 className="title about-text-gap text-uppercase">
                  About Me
                </h3>
                <p className="">
                  👋 Hi there! I'm Bonney Quophi Solomon, an alumnus of IPMC
                  College & Technology. 💪💻 As a hardworking and passionate
                  front-end developer, I'm dedicated to crafting exceptional
                  projects that leave a lasting impression. 🚀✨ With a solid
                  skill set in HTML, CSS, Bootstrap, Node.js, Javascript, Git &
                  GitHub, React.js, Redux, PHP, MySQL, Vite.js, Firebase,
                  Tailwind.css I'm ready to bring your ideas to life! 🎉🌟 📚 I
                  believe in constant growth and staying up-to-date with the
                  latest developments in the software development world. 🌱
                </p>
                <p className="second-paragraph">
                  That's why I invest a significant amount of time and effort
                  into acquiring new skills and staying current with the
                  ever-changing demands of this industry. 💡📚 Driven by my
                  motto "Following One Course Until Success," 🚀🎯 I am
                  committed to continuous learning and growth. Let's embark on
                  this journey together and create remarkable experiences that
                  push boundaries! 🌟✨ I am focused on delivering exceptional
                  results and working collaboratively with any team to achieve
                  our shared goals. 🤝🌟 Thank you for visiting my portfolio.
                  🙏✨ I look forward to connecting with you and exploring
                  exciting opportunities together! 🚀🔥 Peace out! ✌️😊
                </p>
                <a
                  href={mycv}
                  download={true}
                  className="btn btn-light text-dark mt-3"
                >
                  Download Resume
                  <BsDownload className="m-2" />
                </a>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={5} className="text-light mt-5">
              <div className="mb-3">
                <img
                  src={mypic}
                  alt="Solomon Bonney"
                  className="img-fluid img-responsive my-pic"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutMe;
