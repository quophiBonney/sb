import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Container, Col, Row} from "react-bootstrap";
import {BsLinkedin} from "react-icons/bs";
import {FaHandshake} from "react-icons/fa";
import {FaUserCog} from "react-icons/fa";
function Banner() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Container fluid className="banner">
        <Container>
          <Row>
            <Col
              sm={12}
              md={12}
              lg={12}
              className="banner-container text-light mt-3"
            >
              <h1 className="text-uppercase name">
                <FaHandshake />
                <br /> I'm Solomon Bonney
              </h1>
              <p>Frontend Web Developer With Backend Experience</p>
              <div className="button-group">
                <a
                  href="#"
                  className="btn btn-danger btn-sm mb-2 m-2"
                  onClick={handleShow}
                >
                  <FaUserCog className="icons m-2" /> Hire Me
                </a>
                <a href="https://" className="btn btn-danger btn-sm mb-2 m-2">
                  <BsLinkedin className="icons m-2" /> Connect With Me
                </a>
              </div>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title className="text-uppercase">
                    Project Ordering Form
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        onChange=""
                        placeholder="Your name"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        onChange=""
                        placeholder="Your Email"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <textarea
                        className="form-control py-5"
                        placeholder="project details/description"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="file"
                        onChange=""
                        accept="image/jpg, image/jpeg, image/png, image/pdf"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="submit"
                        onClick=""
                        value="Send Project"
                        className="form-control btn btn-danger"
                      />
                    </div>
                  </form>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Banner;
