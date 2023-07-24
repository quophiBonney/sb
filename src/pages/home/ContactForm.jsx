import React, {useState, useRef} from "react";
import {Container, Row, Col} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import {useNavigate} from "react-router-dom";
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
      newErrors.push("First name is required");
    }
    if (lastName.trim() === "") {
      newErrors.push("Last name is required");
    }
    if (email.trim() === "") {
      newErrors.push("Email address is required");
    }
    if (contact.trim() === "") {
      newErrors.push("Contact is required");
    }
    if (message.trim() === "") {
      newErrors.push("Please type a message");
    }
    // Update errors state
    setErrors(newErrors);

    // If there are no errors, you can proceed with form submission
    if (newErrors.length === 0) {
      setSendMessage("Sending Message....");
      setTimeout(() => {
        emailjs
          .sendForm(
            "service_2ccvxdk",
            "template_c014sdc",
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
        alert("Message sent successfully");
      }, 3500);
      setTimeout(() => {
        setSendMessage("Send Message");
      }, 3505);
    }
  };
  return (
    <>
      <div className="container-fluid aboutme" id="contact">
        <Container className="">
          <Row className="justify-content-center">
            <Col sm={12} md={7} lg={7} className="mt-5 text-light">
              <div className="card-header text-center py-3">
                <h3 className="third-text card-title">Let Me Hear From You</h3>
                <p className="paragraph">
                  Fill the form below to send me your message.
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
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
                      {errors.includes("First name is required") && (
                        <div className="text-danger mt-2">
                          First Name is required
                        </div>
                      )}
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
                      {errors.includes("Last name is required") && (
                        <div className="text-danger mt-2">
                          Last Name is required
                        </div>
                      )}
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
                      {errors.includes("Email address is required") && (
                        <div className="text-danger mt-2">
                          Email address is required
                        </div>
                      )}
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
                      {errors.includes("Contact is required") && (
                        <div className="text-danger mt-2">
                          Contact is required
                        </div>
                      )}
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
                    {errors.includes("Please type a message") && (
                      <div className="text-danger mt-2">
                        Please type a message
                      </div>
                    )}
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="submit"
                      value="Clear Fields"
                      className="btn btn-clear-fields py-2 form-control"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="submit"
                      value={sendMessage}
                      className="btn btn-send-message py-2 mb-3 form-control"
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
