import React from "react";
import "../../components/stars.scss";
import Typed from "react-typed";
import * as constants from "../../constants"

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
              <h1 className="intro-title mb-4">Hi, I'm Nelson Mavare</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Feel welcome to my page!",
                      "Sientete bienvenido a mi página"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
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
