import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {AiFillHtml5} from "react-icons/ai";
import {BsGit, BsGithub, BsWordpress} from "react-icons/bs";
import {DiCss3, DiBootstrap, DiJqueryLogo, DiReact} from "react-icons/di";
import {TbBrandJavascript} from "react-icons/tb";
import {SiPhp, SiMysql, SiFirebase} from "react-icons/si";
const Skill = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <h3 className="text-light text-uppercase section-title">Skills</h3>
          <hr className="text-light" />
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            className="px-4 cert-container text-center skill-container mb-3"
          >
            <AiFillHtml5 className="tech-icons" />
            <h5 className="text-light py-3 tech-name">HTML5</h5>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            className="px-4 cert-container text-center skill-container mb-3"
          >
            <DiCss3 className="tech-icons" />
            <h5 className="text-light py-3 tech-name">CSS3</h5>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            className="px-4 cert-container text-center skill-container mb-3"
          >
            <TbBrandJavascript className="tech-icons" />
            <h5 className="text-light py-3 tech-name">JavaScript</h5>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            className="px-4 cert-container text-center skill-container mb-3"
          >
            <DiBootstrap className="tech-icons" />
            <h5 className="text-light py-3 tech-name">Bootstrap</h5>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            className="px-4 cert-container text-center skill-container mb-3"
          >
            <DiJqueryLogo className="tech-icons" />
            <h5 className="text-light py-3 tech-name">JQuery</h5>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            className="px-4 cert-container text-center skill-container mb-3"
          >
            <DiReact className="tech-icons" />
            <h5 className="text-light py-3 tech-name">React</h5>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            className="px-4 cert-container text-center skill-container mb-3"
          >
            <BsGit className="tech-icons" />
            <h5 className="text-light py-3 tech-name">Git</h5>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            className="px-4 cert-container text-center skill-container mb-3"
          >
            <BsGithub className="tech-icons" />
            <h5 className="text-light py-3 tech-name">Github</h5>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            className="px-4 cert-container text-center skill-container mb-3"
          >
            <SiPhp className="tech-icons" />
            <h5 className="text-light py-3 tech-name">PHP</h5>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            className="px-4 cert-container text-center skill-container mb-3"
          >
            <SiMysql className="tech-icons" />
            <h5 className="text-light py-3 tech-name">MySQL</h5>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            className="px-4 cert-container text-center skill-container mb-3"
          >
            <BsWordpress className="tech-icons" />
            <h5 className="text-light py-3 tech-name">WordPress</h5>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            className="px-4 cert-container text-center skill-container mb-3"
          >
            <SiFirebase className="tech-icons" />
            <h5 className="text-light py-3 tech-name">Firebase</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skill;
