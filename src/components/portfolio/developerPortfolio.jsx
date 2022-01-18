import React, { useState, useCallback } from "react";
import PortfolioElement from "./portfolioElement.jsx"
import * as constants from "../../constants/general";
import Collapse from 'react-bootstrap/Collapse'
//import Gallery from "react-photo-gallery";
//import Carousel, { Modal, ModalGateway } from "react-images";

class DeveloperPortfolio extends React.Component {
  
  constructor() {
    super();
    this.state = {
      currentImage:0,
      viewerIsOpen:false,
      myProjects:true,
      mySkills: false,
      others: false,
      devElements: [
        { 
          id: "nephron", 
          title:"Nephron Mobile", 
          more:"Mobile component of Nephron System", 
          year: "2020", 
          images: constants.NEPHRON
        },
      ],

    };
  }

handleShowGallery(type){
  if(type==='projects'){
    this.setState({myProjects:true})
    this.setState({mySkills:false})
    this.setState({others:false})
  }
  else if(type==='skills'){
    this.setState({myProjects:false})
    this.setState({mySkills:true})
    this.setState({others:false})
  }
  else if(type==='others'){
    this.setState({myProjects:false})
    this.setState({mySkills:false})
    this.setState({others:true})
  }
}

setCurrentImage(value){
  this.setState({currentImage: value})
}
setViewerIsOpen(value){
  this.setState({viewerIsOpen: value})
}

openLightbox = (e,photos) =>{
    this.setCurrentImage(photos.index);
      this.setViewerIsOpen(true);
}

closeLightbox = () => {
  this.setCurrentImage(0);
  this.setViewerIsOpen(false);
};
  render() {
      //images and thumbnails must been at the same order

    const {devElements,currentImage,viewerIsOpen, myProjects, mySkills, others} = this.state;
    return (
      <div>
        <div style={{width:"100%", height:35, backgroundColor:'rgb(36 36 40)'}}>
          <p className="center-elements">
            <a
              className={"btn js-scroll px-4 portfolio-banner-button "+(myProjects&&"portfolio-banner-button-selected")}
              //href="#"
              role="button"
              onClick={()=>{this.handleShowGallery('projects')}}
            >
              Projects
            </a>
            <a
              className={"btn js-scroll px-4 portfolio-banner-button "+(mySkills&&"portfolio-banner-button-selected")}
              //href="#"
              role="button"
              onClick={()=>{this.handleShowGallery('skills')}}
            >
              My Skills
            </a>
            <a
              className={"btn js-scroll px-4 portfolio-banner-button "+(others&&"portfolio-banner-button-selected")}
              //href="#"
              role="button"
              onClick={()=>{this.handleShowGallery('others')}}
            >
              Others
            </a>
          </p>
        </div>
        <section id="work" className="portfolio-mf route" style={{paddingTop:'3rem'}}>
          <div className="container" style={{position:'relative'}}>

            <div>
              <div className={"row "+(!myProjects?" hide-section":undefined)}>
                {devElements.map((element,index)=>{
                  return(
                    <PortfolioElement key={index} element={element}/>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DeveloperPortfolio;