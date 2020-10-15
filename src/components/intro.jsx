import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import * as constants from "../constants"

class Intro extends React.Component {
  
  render() {
    return (
      //<div id="home" className="intro route bg-image background"> 
      <div id="home" className="intro route bg-image" style={{backgroundImage: "url("+constants.MAIN_PICTURE+")"}}>
      <div className="intro route bg-image" style={{backgroundColor:"rgba(27, 39, 53, 0.65)"}}>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I'm Nelson Mavare</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "2D Digital Artist",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  style= {{marginRight:10,marginLeft:10}}
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  style= {{marginRight:10,marginLeft:10}}
                  href=""
                  role="button"
                >
                  View My Work
                </a>
              </p>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Intro;
