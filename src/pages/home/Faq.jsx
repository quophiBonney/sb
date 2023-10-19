import React from "react";
import { Collapse } from "antd";
import { Container } from "react-bootstrap";
const remoteJob = `Yes I am available with full experience and taste of remote job.`;
const location =
  "I am in Ghana but really travel around the world for work and relaxations.";
const work = `I first I engage them in detailed and descriptive conversation in order to know their requirements, then again interact with them during every phase in the development process.`;
const mentoring = `My mentoring sessions are divided into three sections thus knowing thy self, theory and practicals. So before I dive into teaching you, I will first get to know you(e.g strength and weakeness) and then project the various fields present in the tech space. Once you choose your field, then the magic happens`;
const items = [
  {
    key: "1",
    label: (
      <p className="fw-bold text-light">Are you available for remote job?</p>
    ),
    children: <p>{remoteJob}</p>,
  },
  {
    key: "2",
    label: <p className="fw-bold text-light">Why are you located in Ghana?</p>,
    children: <p>{location}</p>,
  },
  {
    key: "3",
    label: (
      <p className="fw-bold text-light">How do you work with your clients?</p>
    ),
    children: <p>{work}</p>,
  },
  {
    key: "4",
    label: (
      <p className="fw-bold text-light">
        How do you begin mentoring a beginner, student or aspirant?
      </p>
    ),
    children: <p>{mentoring}</p>,
  },
];
const Faq = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <div className="container-fluid aboutme" id="faqs">
        <Container style={{ marginTop: "150px" }}>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 mt-5 mb-3">
              <Collapse
                items={items}
                className="border-0"
                defaultActiveKey={["1"]}
                onChange={onChange}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Faq;
