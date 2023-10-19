import React from "react";
import { Collapse } from "antd";
import { Container } from "react-bootstrap";
const remoteJob = `Yes and I am not just available, I am having experience with remote jobs.`;
const location = "I am located at Kasoa-Bawjiase in the Central of Ghana.";
const work = `I first I engage them in detailed and descriptive conversation in order to know their requirement and I also interact with during every phase in the development process.`;
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
];
const Faq = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <div className="container-fluid aboutme" id="faqs">
        <Container style={{ marginTop: "150px" }}>
          <div className="row justify-content-center">
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
