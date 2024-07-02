import React from "react";
import ES from "../constants/language/spanish";
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      professionalSkills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "100%", value: "100" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "100%", value: "100" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "95%",
          value: "95",
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS/ReactNative",
          porcentage: "90%",
          value: "90",
        },
        {
          id: "NodeJS_skill",
          content: "Express(NodeJs)",
          porcentage: "70%",
          value: "70",
        },
        {
          id: "NodeJS_skill",
          content: "NestJs(NodeJs)",
          porcentage: "70%",
          value: "70",
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "60%",
          value: "60",
        },
        { id: "Git", content: "Git", porcentage: "100%", value: "100" },
        /* { id: "English", content: "Inglés", porcentage: "70%", value: "70" }, */
        /* {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        }, */
      ],
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
                  <div className="col-md-7">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">{ES.aboutMeTitle}</h5>
                      </div>
                      {ES.aboutMe.map((content) => {
                        return (
                          <p className="p-about" key={content.id}>
                            <spam style={{fontSize:15}}>{"\u2B24"}</spam> {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <div className="col-sm-6 col-md-5" style={{ margin: "0 auto" }}>
                        <div className="about-img" style={{ textAlign: "center" }}>
                          <img className="img-fluid rounded b-shadow-a" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.professionalSkills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">{skill.porcentage}</span>
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
