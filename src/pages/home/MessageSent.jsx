import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BiHome} from "react-icons/bi";
import MessageSentGif from "../../images/msgsent.gif";
const MessageSent = () => {
  return (
    <>
      <Container
        style={{
          height: "100vh",
          justifyContent: "center",
          alignItem: "center",
          display: "flex",
        }}
      >
        <Row
          className=""
          style={{justifyContent: "center", alignItems: "center"}}
        >
          <Col sm={12} md={12} lg={12} className="border-0 text-center">
            <div
              className="w-100"
              style={{overflowX: "hidden", overflowY: "hidden"}}
            >
              <img
                src={MessageSentGif}
                className="img-fluid img-responsive w-50 h-50"
                alt="message sent gif"
              />
              <p className="paragraph">Message Sent Successfully</p>
              <Link
                to="/"
                className="text-light btn m-2 text-decoration-none text-center px-3"
                style={{backgroundColor: "lightskyblue"}}
              >
                <BiHome className="m-2" /> Return Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MessageSent;
