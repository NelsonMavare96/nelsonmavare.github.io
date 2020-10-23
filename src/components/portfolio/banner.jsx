import React from "react";
import "./../stars.scss";
import Typed from "react-typed";
import * as constants from "../../constants"

class Banner extends React.Component {
  
  render() {
    return (
      //<div id="home" className="intro route bg-image" style={{backgroundImage: "url("+constants.MAIN_PICTURE+")"}}>
      <div id="home" className=" route bg-image"> 
      <div className="intro route bg-image" style={{backgroundColor:"rgb(14 21 29)", height:'50vh'}}>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="portfolio-banner-title mb-4">Nelson Mavare</h1>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Banner;
