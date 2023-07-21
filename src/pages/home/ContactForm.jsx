import React, {useState, useRef} from "react";
import {Container, Row, Col} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import {useNavigate} from "react-router-dom";
import side from "../../images/faq.png";
const ContactForm = () => {
  const navigate = useNavigate();
  const [sendMessage, setSendMessage] = useState("Send Message");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const form = useRef();
  const sendEmail = event => {
    event.preventDefault();
    // Validate input fields
    const newErrors = [];
    if (firstName.trim() === "") {
      newErrors.push("First Name is required");
    }
    if (lastName.trim() === "") {
      newErrors.push("Last name is required");
    }
    if (email.trim() === "") {
      newErrors.push("Email is required");
    }
    if (contact.trim() === "") {
      newErrors.push("Contact is required");
    }
    if (message.trim() === "") {
      newErrors.push("Message is required");
    }
    // Update errors state
    setErrors(newErrors);

    // If there are no errors, you can proceed with form submission
    if (newErrors.length === 0) {
      setSendMessage("Sending Message....");
      setTimeout(() => {
        emailjs
          .sendForm(
            "service_72s3mjd",
            "template_rz55686",
            form.current,
            "eWajEKtVogHGSP8cC"
          )
          .then(
            result => {
              console.log(result.text);
            },
            error => {
              console.log(error.text);
            }
          );
        navigate("/success");
      }, 3500);
      setTimeout(() => {
        setSendMessage("Send Message");
      }, 3505);
    }
  };
  return (
    <>
      <div className="container-fluid aboutme">
        <Container className="">
          <Row className="justify-content-center">
            <Col sm={12} md={6} lg={6} className="mt-5">
              <img
                src={side}
                alt="friends reading message"
                className="img-fluid w-100 h-100 w-100 img-responsive my-pic contact-form-img"
                style={{objectFit: "cover"}}
              />
            </Col>
            <Col sm={12} md={6} lg={6} className="mt-5 text-light">
              <div className="card-header text-center py-3">
                <h3 className="third-text card-title">Let Me Hear From You</h3>
                <p className="paragraph">
                  Fill the form below to send me your message.
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  {errors.map((error, index) => {
                    return (
                      <div className="col-sm-6 col-md-4 col-lg-4">
                        <span
                          key={index}
                          className="alert alert-danger d-block my-2"
                        >
                          {error}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group mt-3">
                      <label htmlFor="first name">
                        First Name<sup className="text-danger">*</sup>
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                        className="form-control py-2"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group mt-3">
                      <label htmlFor="last name">
                        Last Name<sup className="text-danger">*</sup>
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                        className="form-control py-2"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group mt-3">
                      <label htmlFor="email">
                        Email<sup className="text-danger">*</sup>
                      </label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        name="user_email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        className="form-control py-2"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group mt-3">
                      <label htmlFor="contact">
                        Contact<sup className="text-danger">*</sup>
                      </label>
                      <input
                        type="number"
                        placeholder="Contact"
                        name="contact"
                        value={contact}
                        onChange={event => setContact(event.target.value)}
                        className="form-control py-2"
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="message">
                      Message<sup className="text-danger">*</sup>
                    </label>
                    <textarea
                      style={{height: "250px"}}
                      name="message"
                      placeholder="Write your message here..."
                      value={message}
                      onChange={event => setMessage(event.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="submit"
                      value="Clear Fields"
                      className="btn btn-light text-dark btn-clear-fields py-2 form-control"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="submit"
                      value={sendMessage}
                      className="btn text-light btn-send-message py-2 mb-3 form-control"
                    />
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactForm;