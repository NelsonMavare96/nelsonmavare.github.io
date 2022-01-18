import React from "react";
import PortfolioElement from "./portfolio/portfolioElement.jsx";
//import Collapse from 'react-bootstrap/Collapse';
import ES from "../constants/language/spanish.js";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="portfolio" className="portfolio-mf sect-pt4 route">
        
        <div className="container" style={{ position: "relative" }}>
          <div className="row" style={{ marginBottom: 20 }}>
            <div className="col-sm-12">
              <div className="text-center">
                <h3 className="title-a">{ES.portfolioTitle}</h3>
                <p className="subtitle-a">{ES.portfolioText}</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              {ES.devElements.map((element, index) => {
                return <PortfolioElement element={element} />;
              })}
            </div>
          </div>
          {/* <Collapse in={devPortfolio} timeout={1000}>
          </Collapse> */}
          {/* <div className="row">
            <div className="col-sm-12">
              <div className="text-center">
                <p className="pt-3">
                  <a
                    className="btn btn-primary btn js-scroll px-4"
                    style={{ margin: 10 }}
                    href={"/portfolio/developer"}
                    //target="_blank"
                    role="button"
                  >
                    View more
                  </a>
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    );
  }
}

export default Portfolio;
