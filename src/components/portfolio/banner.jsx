import React from "react";
import * as constants from "../../constants"

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: constants.IMG_PROFILE
    };
  }
  
  render() {
    return (
      //<div id="home" className="intro route bg-image" style={{backgroundImage: "url("+constants.MAIN_PICTURE+")"}}>
      <div id="home" className=" route bg-image"> 
        <div className="intro route bg-image" style={{backgroundColor:"rgb(14 21 29)", height:'22rem'}}>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container" style={{marginTop:'16vh'}}>
              <a className="js-scroll" href="#page-top">
                <img
                  src={this.state.logo}
                  alt="logo"
                  style={{ maxWidth: "130px", borderRadius:100 }}
                />
              </a>
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
