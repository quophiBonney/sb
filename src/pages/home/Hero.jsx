import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Typewriter, Cursor} from "react-simple-typewriter";
import instagramsvg from "../../images/instagram-svg.svg";
import youtubesvg from "../../images/youtube-svgrepo-com.svg";
import githubsvg from "../../images/github-142-svgrepo-com.svg";
import linkedinsvg from "../../images/linkedin-color-svgrepo-com.svg";
const Hero = () => {
  const text = Typewriter({
    words: [
      "Hello, I'm Bonney ...👋",
      "front-end developer...💻",
      "Bringing Ideas To Life...💡",
      "Aim At Client's Satisfaction...🔥",
      "Bridging Design & Code...🎯",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <>
      <div className="container-fluid hero">
        <Container>
          <Row className="justify-content-center">
            <Col sm={12} md={12} lg={8} className="text-center text-light">
              <div className="hero-gap">
                <p>
                  Join Me As We Make The World Beautiful Through Seamless
                  Projects
                </p>
                <h1 className="main-text">
                  {text}
                  <Cursor className="text-primary" />
                </h1>
                <p>
                  I am a front-end developer specialized in building unique and
                  brilliant websites and mobile apps to meet the expectations of
                  clients, employers and users. I am focused on building
                  responsive front-end applications while consistently learning
                  back-end technologies and its architecture.
                </p>
                <div className="icon-container d-flex">
                  <a
                    href="https://linkedin.com/in/solomon-bonney"
                    target="_blank"
                    title="LinkedIn"
                    className="bg-light "
                  >
                    <img
                      src={linkedinsvg}
                      alt="linkedin svg"
                      className="img-fluid img-responsive"
                    />
                  </a>
                  <a
                    href="https://www.github.com/quophiBonney"
                    target="_blank"
                    title="Github"
                    className="bg-light "
                  >
                    <img
                      src={githubsvg}
                      alt="github svg"
                      className="img-fluid img-responsive"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/@quophiclef"
                    target="_blank"
                    title="Instagram"
                    className="bg-light "
                  >
                    <img
                      src={instagramsvg}
                      alt="instagram svg"
                      className="img-fluid img-responsive"
                    />
                  </a>
                  <a
                    title="Youtube"
                    href="https://www.youtube.com/channel/UCjw5YXLYOU4fLIwSUS9zRyg"
                    target="_blank"
                    className="bg-light "
                  >
                    <img
                      src={youtubesvg}
                      alt="youtube svg"
                      className="img-fluid img-responsive"
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
