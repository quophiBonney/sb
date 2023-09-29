import React from "react";
import { Collapse } from "antd";
import { Container } from "react-bootstrap";
const remoteJob = `Yes and I am not just available, I am having experience with remote jobs.`;
const location = "I am located at Kasoa-Bawjiase in the Central of Ghana.";
const work = `I first I engage them in detailed and descriptive conversation in order to know their requirement and I also interact with during every phase in the development process.`;
const items = [
  {
    key: "1",
    label: <p class="fw-bold">Are you available for remote job?</p>,
    children: <p>{remoteJob}</p>,
  },
  {
    key: "2",
    label: <p class="fw-bold">Why are you located in Ghana?</p>,
    children: <p>{location}</p>,
  },
  {
    key: "3",
    label: <p class="fw-bold">How do you work with your clients?</p>,
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
        <Container>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
              <Collapse
                items={items}
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
