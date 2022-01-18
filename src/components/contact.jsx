import React from "react";
import { Icon } from '@iconify/react';
import logoBehance from '@iconify/icons-ion/logo-behance';
import logoTwitter from '@iconify/icons-ion/logo-twitter';
import logoInstagram from '@iconify/icons-ion/logo-instagram';
import logoFacebook from '@iconify/icons-ion/logo-facebook';
import logoLinkedin from '@iconify/icons-ion/logo-linkedin';
import logoGitHub from '@iconify/icons-ion/logo-github';
import { FaArtstation } from 'react-icons/fa';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name:"",
      email:"",
      subject:"",
      message:"",
      emailStatus: 0, //0. null , 1. inProcess, 2. Succeeded, 3. Failed
      submitButton:"",
      emptyFields: true,
      artistSocialMedia: [
        {
          id: "instagram",
          content: logoInstagram,
          link:"https://www.instagram.com/clowth",
         },
        {
          id: "facebook",
          content: logoFacebook,
          link:"https://www.facebook.com/ClowthArt",
        },
        {
          id: "twitter",
          content: logoTwitter,
          link:"",
        },
        {
          id: "behance",
          content: logoBehance,
          link:"https://www.behance.net/NelsonMavare",
        },
        {
          id: "linkedin",
          content: logoLinkedin,
          link:"https://www.linkedin.com/in/nelson-mavare-illustrator/",
        },
      ],
      developerSocialMedia: [
        {
          id: "linkedin",
          content: logoLinkedin,
          link:"https://www.linkedin.com/in/nelson-mavare-developer/",
        },
        {
          id: "github",
          content: logoGitHub,
          link:"https://github.com/nelsonmavare",
        },
      ]
    };
  }

  onHandleInputChange(e){
    this.setState({[e.target.name]:e.target.value})
    this.setState({emailStatus:0})
    this.setState({emptyFields:false})
  }

  handleMailSubmitResult(result){
    this.setState({name:""})
    this.setState({email:""})
    this.setState({subject:""})
    this.setState({message:""})
    this.setState({emailStatus:result})
    if(result===2)
      this.setState({submitButton:"Succeeded"})
    else if(result===3)
      this.setState({submitButton:"Failed"})
  }

  validateEmptyFields(){
    const {name,email,subject,message} = this.state;
    if(name=="" || email=="" || subject=="" || message==""){
      this.setState({emptyFields:true})
      return true
    }
    return false
  }


  handleSubmit (event) {
    const templateId = 'template_9p7evf2';
    this.setState({emailStatus:1})

    this.sendFeedback(templateId, 
      {
        message: this.state.message, 
        from_name: this.state.name,
        reply_to: this.state.email, 
        email: this.state.email,
        subject: this.state.subject,
      })
    }
  
  sendFeedback (templateId, variables) {
    window.emailjs.send(
      'serviceMailNEMA', templateId,
      variables
      ).then(res => {
        this.handleMailSubmitResult(2)
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => {
        this.handleMailSubmitResult(3)
        console.error('Oh well, you failed. Here some thoughts on the error that occured:', err);
      })
    }

  render() {
    const {artistSocialMedia, developerSocialMedia, name, email, subject, message} = this.state;
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
                        <h5 className="title-left">Send A Message</h5>
                      </div>
                      <div>
                        <div
                          //action=""
                          //method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                  value={name}
                                  onChange={(e)=>{this.onHandleInputChange(e)}}
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                  value={email}
                                  onChange={(e)=>{this.onHandleInputChange(e)}}
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                  value={subject}
                                  onChange={(e)=>{this.onHandleInputChange(e)}}
                                />
                                <div className="validation"></div>
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
                                  placeholder="Message"
                                  value={message}
                                  onChange={(e)=>{this.onHandleInputChange(e)}}
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                //type="submit"
                                onClick={(e)=>{this.validateEmptyFields()?console.log("empty fields"):this.handleSubmit(e)}}
                                className="button button-a button-big button-rouded"
                              >
                                {this.state.emailStatus===0?"Send Message":(this.state.emailStatus===1?"Sending...":this.state.submitButton)}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Contact</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          If you want contact me you can send me a mail trought the left form, or you can send me a message on any social media down below!
                        </p>
                        {/* <!-- <ul class="list-ico">
                                <li><span class="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                                <li><span class="ion-ios-telephone"></span> (617) 557-0089</li>
                                <li><span class="ion-email"></span> contact@example.com</li>
                                </ul> --> */}
                      </div>
                      <div className="socials" style={{padding:0}}>
                        <ul>
                            {artistSocialMedia.map((artistSocialMedia,index)=>{
                              return(
                                <li key={index}>
                                  <a
                                    href={artistSocialMedia.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <span className="ico-circle">
                                      <Icon style={{height:"100%",verticalAlign:"top"}} icon={artistSocialMedia.content} />
                                    </span>
                                  </a>
                                </li>
                              ) 
                            })}
                            <li>
                                <a
                                  href="https://artstation.com/clowth"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="ico-circle">
                                    <FaArtstation style={{height:"100%",verticalAlign:"top"}} />
                                  </span>
                                </a>
                              </li>
                            
                        </ul>
                      </div>
                      <div className="socials" style={{padding:0}}>
                        <ul>
                            {developerSocialMedia.map((developerSocialMedia,index) =>{
                              return(
                                <li key={index}>
                                  <a
                                    href={developerSocialMedia.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <span className="ico-circle">
                                      <Icon style={{height:"100%",verticalAlign:"top"}} icon={developerSocialMedia.content} />
                                    </span>
                                  </a>
                                </li>
                              ) 
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
                <div className="copyright-box">
                  All Rights Reserved © 2020, Nelson Mavare
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;


