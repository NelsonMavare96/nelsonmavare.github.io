import React from "react";
import { Icon } from "@iconify/react";
import logoLinkedin from "@iconify/icons-ion/logo-linkedin";
import logoGitHub from "@iconify/icons-ion/logo-github";
import ES from "../constants/language/spanish";
/* import logoBehance from "@iconify/icons-ion/logo-behance";
import logoTwitter from "@iconify/icons-ion/logo-twitter";
import logoInstagram from "@iconify/icons-ion/logo-instagram";
import logoFacebook from "@iconify/icons-ion/logo-facebook"; */

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      isButtonPressed: false,
      isSubmitting: false,
      devSocialMedia: [
        {
          id: "linkedin",
          content: logoLinkedin,
          link: "https://www.linkedin.com/in/nelson-mavare-developer/",
        },
        {
          id: "github",
          content: logoGitHub,
          link: "https://github.com/nelsonmavare",
        },
      ],
    };
  }

  onHandleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value, isButtonPressed: false });
  }

  handleSubmit(event) {
    const { name, email, subject, message } = this.state;
    this.setState({ isButtonPressed: true });
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      const templateId = process.env.REACT_APP_EMAILJS_ID;
      this.setState({ isSubmitting: true });
      this.sendFeedback(templateId, {
        message: this.state.message,
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
      });
    }
  }

  restoreDefaultValues = () => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      isButtonPressed: false,
      isSubmitting: false,
    });
  };

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("serviceMailNEMA", templateId, variables)
      .then((res) => {
        alert("Email successfully sent!");
        this.restoreDefaultValues();
      })
      .catch((err) => {
        alert("Error sending message, please retry later.");
        this.restoreDefaultValues();
      });
  }

  validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  render() {
    const { devSocialMedia, name, email, subject, message, isSubmitting, isButtonPressed } = this.state;
    return (
      <section
        className="paralax-mf footer-paralax bg-imageroute"
        //style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        {/* <div className="overlay-mf" style={{opacity:1}}></div>  */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">{ES.contactTitle}</h5>
                      </div>
                      <div>
                        <div className="contactForm">
                          <div id="sendmessage">{ES.messageSend}</div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder={ES.nameField}
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                  value={name}
                                  onChange={(e) => {
                                    this.onHandleInputChange(e);
                                  }}
                                />
                                {isButtonPressed && name === "" && (
                                  <p className="validation">{ES.errorForm.name}</p>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder={ES.emailField}
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                  value={email}
                                  onChange={(e) => {
                                    this.onHandleInputChange(e);
                                  }}
                                />
                                {isButtonPressed &&
                                  (email === "" || !this.validateEmail(email)) && (
                                    <p className="validation">
                                      {!this.validateEmail(email) && email !== ""
                                        ? ES.errorForm.emailFormat
                                        : ES.errorForm.email}
                                    </p>
                                  )}
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder={ES.subjectField}
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                  value={subject}
                                  onChange={(e) => {
                                    this.onHandleInputChange(e);
                                  }}
                                />
                                {isButtonPressed && subject === "" && (
                                  <p className="validation">{ES.errorForm.subject}</p>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder={ES.messageField}
                                  value={message}
                                  onChange={(e) => {
                                    this.onHandleInputChange(e);
                                  }}
                                ></textarea>
                                {isButtonPressed && message === "" && (
                                  <p className="validation">{ES.errorForm.message}</p>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                style={
                                  isSubmitting || isButtonPressed
                                    ? {
                                        backgroundColor: "#f5f5f5",
                                        borderColor: "#f5f5f5",
                                        color: "#E0E0E0",
                                      }
                                    : {}
                                }
                                onClick={(e) => {
                                  this.handleSubmit(e);
                                }}
                                className="button button-a button-big button-rouded"
                              >
                                {isSubmitting ? ES.contactButtonSendingMessage : ES.contactButton}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">{ES.contactSecondTitle}</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">{ES.contactText}</p>
                        {/* <!-- <ul class="list-ico">
                                <li><span class="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                                <li><span class="ion-ios-telephone"></span> (617) 557-0089</li>
                                <li><span class="ion-email"></span> contact@example.com</li>
                                </ul> --> */}
                      </div>
                      <div className="socials" style={{ padding: 0 }}>
                        <ul>
                          {devSocialMedia.map((devSocialMedia, index) => {
                            return (
                              <li key={index}>
                                <a
                                  href={devSocialMedia.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="ico-circle">
                                    <Icon
                                      style={{ height: "100%", verticalAlign: "top" }}
                                      icon={devSocialMedia.content}
                                    />
                                  </span>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div>
                  <p className="copyright-box">All Rights Reserved © 2022, Nelson Mavare</p>
                </div>
                <a href="https://www.freepik.es/vectores/fondo">
                  Vector de Fondo creado por freepik - www.freepik.es
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
