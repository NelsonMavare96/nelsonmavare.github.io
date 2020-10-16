import React from "react";
import PortfolioElement from "./portfolioElement.jsx"
import * as constants from "../constants";
//import { useTransition, animated } from "react-spring";
import { Spring } from 'react-spring/renderprops'
import { Transition, animated } from 'react-spring/renderprops'
import Fade from 'react-bootstrap/Fade'
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
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                Sample of some of my projects as developer or artist, you can view more clicking the button below
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="title-box text-center">
                <p className="pt-3">
                  <button
                    className="btn btn-primary btn js-scroll px-4"
                    style= {{margin:10, color:"white"}}
                    role="button"
                    onClick={()=>{this.onHandlePortfolioTypeChange(true)}}
                  >
                    Artist
                  </button>
                  <button
                    className="btn btn-primary btn js-scroll px-4"
                    style= {{margin:10, color:"white"}}
                    role="button"
                    onClick={()=>{this.onHandlePortfolioTypeChange(false)}}
                  >
                    Developer
                  </button>
                </p>
              </div>
            </div>
          </div>
          <Collapse in={artistPortfolio} timeout={1000}>
            <div>
              <div className="row" >
                {artElements.map((element,index)=>{
                  return(
                    <PortfolioElement element={element}/>
                  )
                })}
              </div>
            </div>
          </Collapse>
          <Collapse in={devPortfolio} timeout={1000}>
            <div>
              <div className="row" >
                {devElements.map((element,index)=>{
                  return(
                    <PortfolioElement element={element}/>
                  )
                })}
              </div>
            </div>
          </Collapse>
          {/* <Transition
            items={artistPortfolio}
            from= {{ opacity: 0, }}
            enter= {{ opacity: 1  }}
            leave= { {opacity: 0, display:'none' }}
            config={{ duration: 1000 }}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <div className="row" >
                    {artElements.map((element,index)=>{
                      return(
                        <PortfolioElement element={element}/>
                      )
                    })}
                  </div>
                </animated.div>
              ))
            }
          </Transition>
          <Transition
            items={devPortfolio}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0, display:'none' }}
            config={{ duration: 1000 }}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <div className="row">
                    <PortfolioElement element={devElements[0]}/>
                  </div>
                </animated.div>
              ))
            }
          </Transition> */}
          {/*artistPortfolio &&
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 100, duration: 400 }}
            >
              {props => (
                <div style={props}>
                  <div className="row" >
                    {artElements.map((element,index)=>{
                      return(
                        <PortfolioElement element={element}/>
                      )
                    })}
                  </div>
                </div>
              )}
            </Spring>

            */}
            
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center">
                <p className="pt-3">
                  <a
                    className="btn btn-primary btn js-scroll px-4"
                    style= {{margin:10}}
                    href="#work"
                    target="_blank"
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
