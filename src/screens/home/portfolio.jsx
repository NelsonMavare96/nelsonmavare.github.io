import React from "react";
import PortfolioElement from "../../components/portfolio/portfolioElement.jsx"
import * as constants from "../../constants";
// import { useTransition, animated } from "react-spring";
// import { Spring } from 'react-spring/renderprops'
// import { Transition, animated } from 'react-spring/renderprops'
// import Fade from 'react-bootstrap/Fade'
import Collapse from 'react-bootstrap/Collapse'

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      artistPortfolio: true,
      devPortfolio: false,
      artElements: [
        {
          id: "max1-gallery", 
          title:"'Max y la máquina de tercera dimensión, el cuerno de cristal'", 
          more:"Written by: Leduar Targen.", 
          year: "2019", 
          images: constants.MAX1 
        },
        { 
          id: "max2-gallery", 
          title:"'Max y la máquina de tercera dimensión'", 
          more:"Written by: Leduar Targen.", 
          year: "2019", 
          images: constants.MAX2 
        },
        { 
          id: "max3-gallery", 
          title:"'Max y la máquina de tercera dimensión'", 
          more:"Written by: Leduar Targen.", 
          year: "2020", 
          images: constants.MAX3 
        },
      ],
      devElements: [
        { 
          id: "nephron-gallery", 
          title:"'Nephron mobile'", 
          more:"Nephron mobile component", 
          year: "2020", 
          images: constants.NEPHRON 
        },
      ],

    };
  }

  onHandlePortfolioTypeChange(value){
    this.setState({artistPortfolio: value})
    this.setState({devPortfolio: !value})
  }

  render() {
    const {artistPortfolio, devPortfolio, artElements, devElements} = this.state;
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container" style={{position:'relative'}}>
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center">
                <h3 className="title-a">Some of my work</h3>
                <p className="subtitle-a">
                Sample of some of my projects as artist, you can view more clicking the button below
                </p>
                <div className="line-mf" style={{marginBottom:20}}/>
              </div>
            </div>
          </div>
          <div>
            <div className="row" >
              {artElements.map((element,index)=>{
                return(
                  <PortfolioElement element={element}/>
                )
              })}
            </div>
          </div>     
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center">
                <p className="pt-3">
                  <a
                    className="btn btn-primary btn js-scroll px-4"
                    style= {{margin:10}}
                    href={artistPortfolio?"/portfolio/artist":"/portfolio/developer"}
                    //target="_blank"
                    role="button"
                  >
                    View more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
