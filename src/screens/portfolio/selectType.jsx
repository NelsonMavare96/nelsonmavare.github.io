import React from "react";
import "../../components/stars.scss";
import Navbar from '../../components/navbar.jsx';
import {Link} from 'react-router-dom'

class SelectType extends React.Component {
  
  render() {
    return (
      <div> 
        <Navbar/>
        <div id="portfolio" className="intro route bg-image">
          <div className="intro route bg-image " style={{backgroundColor:"#1B2735"}}>

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
                            <Link to="/portfolio/artist">
                              <div className="button-container-2  portfolio-type-button-container">
                                <span className="mas " >View more</span>
                                <button type="button" name="Hover">Artist</button>
                              </div>
                            </Link>
                        </div>
                        <div className="col-md-6 center-elements">
                            <Link to="/portfolio/developer">
                              <div className="button-container-1 portfolio-type-button-container">
                                  <span className="mas ">View more</span>
                                <button id='work' type="button" name="Hover">Developer</button>
                              </div>
                            </Link>
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
