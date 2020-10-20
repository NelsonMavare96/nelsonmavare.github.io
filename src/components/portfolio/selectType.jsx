import React from "react";
import "../stars.scss";
import Typed from "react-typed";
import * as constants from "../../constants"

class SelectType extends React.Component {
  
  render() {
    return (
      //<div id="home" className="intro route bg-image background"> 
      <div id="portfolio" className="intro route bg-image">
      <div className="intro route bg-image" style={{backgroundColor:"rgb(14 21 29)"}}>
        {/* <div id="stars" />
        <div id="stars2" />
        <div id="stars3" /> */}

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
                <div className="row row-type-portfolio">
                    <div className="col-md-6 center-elements">
                        {/* <button
                        className="btn btn js-scroll px-4 portfolio-type-button-container"
                        style= {{margin:20}}
                        href={constants.ARTIST_RESUME}
                        >
                        Artist Resume
                        </button> */}
                        
                        <div class="button-container-2  portfolio-type-button-container">
                          <span class="mas " >View more</span>
                          <button type="button" name="Hover">Artist</button>
                        </div>
                    </div>
                    <div className="col-md-6 center-elements">
                        {/* <button
                        className="btn btn js-scroll px-4 portfolio-type-button-container"
                        style= {{margin:20}}
                        href="#work"
                        >
                        Developer Resume
                        </button> */}
                        <div class="button-container-1 portfolio-type-button-container">
                            <span class="mas ">View more</span>
                          <button id='work' type="button" name="Hover">Developer</button>
                        </div>
                    </div>
                    
                    
                  

                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default SelectType;
