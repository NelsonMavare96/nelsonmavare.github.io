import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "100%", value: "100" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "100%", value: "100" },
        {
          id: "Photoshop_skill",content: "Photoshop",porcentage: "90%",value: "90"
        },
        {
          id: "Illustrator_skill",content: "Illustrator",porcentage: "90%",value: "90"
        },
        {
          id: "JavaScript_skill",content: "JavaScript",porcentage: "90%",value: "90"
        },
        {
          id: "ReactJS_skill",content: "ReactJS/ReactNative",porcentage: "80%",value: "80"
        },
        { id: "C#_skill", content: "C#", porcentage: "50%", value: "50" },
        {
          id: "Python_skill",content: "Python",porcentage: "60%",value: "60"
        },
        /* {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        }, */

      ],


      
      about_me: [
        {
          id: "first-p-about",
          content:
          "Hi! my name is Nelson Mavare, I am from Venezuela.I'm a software engineer centered on FrontEnd and I'm also a freelance artist who focuses on character and creature development."
        },
        {
          id: "second-p-about",
          content:
          "I'm graduated as software engineering at UCLA (Venezuela). As a programmer I have dedicated myself to developing web and mobile applications with React and React Native, and also participated in the development of API's using node."
        },
        {
          id: "third-p-about",
          content:
          "Since I was a child I have liked fantasy and whole worlds of magic and fantastic creatures that no one had seen before. All of this inspired me to learn to draw when I was 16 years old, taking references from many current artists such as Stanley Lau, Ross Tran, Peter Peter Mohrbacher, Dmitry Prozorov, who have inspired me to be better and better in my work."
        },
        {
          id: "fourth-p-about",
          content:
          "As an illustrator and programmer, I have dedicated time to the field where these two branches come together: videogames, making use of graphics engines like unity and godot. Working for a video game company has been one of my biggest dreams, so every day I develop my skills in what I love."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-8">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
