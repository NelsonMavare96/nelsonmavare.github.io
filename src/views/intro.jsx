import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import * as constants from "../constants/general"
import ES from '../constants/language/spanish'
import background from '../img/background-image.jpg'
class Intro extends React.Component {
  
  render() {
    return (
      //<div id="home" className="intro route bg-image background"> 
      <div id="home" className="intro route bg-image" style={{backgroundImage: `url(${background})`}}>
      <div className="intro route bg-image" style={{backgroundColor:"rgba(27, 39, 53, 0.65)"}}>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">{ES.greetings}</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={ES.specalities}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3" style={{marginTop:"1rem"}}>
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  style= {{margin:10}}
                  href={constants.DEV_RESUME}
                  target="_blank"
                  role="button"
                >
                  {ES.downloadResume}
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
