import React, { useState, useCallback } from "react";
import PortfolioElement from "./portfolioElement.jsx"
import * as constants from "../../constants";
import Collapse from 'react-bootstrap/Collapse'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

class ArtistPortfolio extends React.Component {
  
  constructor() {
    super();
    this.state = {
      currentImage:0,
      viewerIsOpen:false,
      myProjects:false,
      featured:true,
      illustrations:false,
      artElements: [
        { 
          id: "max3-gallery", 
          title:"'Max y la máquina de tercera dimensión'", 
          more:"Written by: Leduar Targen.", 
          year: "2020", 
          images: constants.MAX3 
        },
        {
          id: "syfy-troopers",
          title: "Syfy Troopers",
          more: "Characters concept art",
          year: "2020",
          images: constants.SYFY_TROOPERS
        },
        {
          id: "heroes-and-villains",
          title: "Elite Heroes and Majestic Villains",
          more: "Comic novel saga, written by: Rob Zamora",
          year: "2019",
          images: constants.HEROES_AND_VILLAINS
        },
        { 
          id: "max2-gallery", 
          title:"'Max y la máquina de tercera dimensión'", 
          more:"Written by: Leduar Targen.", 
          year: "2019", 
          images: constants.MAX2 
        },
        { 
          id: "max1-gallery", 
          title:"'Max y la máquina de tercera dimensión, el cuerno de cristal'", 
          more:"Written by: Leduar Targen.", 
          year: "2019", 
          images: constants.MAX1 
        },
      ],

    };
  }

handleShowGallery(type){
  if(type==='projects'){
    this.setState({myProjects:true})
    this.setState({featured:false})
    this.setState({illustrations:false})
  }
  else if(type==='featured'){
    this.setState({myProjects:false})
    this.setState({featured:true})
    this.setState({illustrations:false})
  }
  else if(type==='illustrations'){
    this.setState({myProjects:false})
    this.setState({featured:false})
    this.setState({illustrations:true})
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

    const {artElements,currentImage,viewerIsOpen, myProjects, featured, illustrations} = this.state;
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
              className={"btn js-scroll px-4 portfolio-banner-button "+(featured&&"portfolio-banner-button-selected")}
              //href="#"
              role="button"
              onClick={()=>{this.handleShowGallery('featured')}}
            >
              Featured
            </a>
            <a
              className={"btn js-scroll px-4 portfolio-banner-button "+(illustrations&&"portfolio-banner-button-selected")}
              //href="#"
              role="button"
              onClick={()=>{this.handleShowGallery('illustrations')}}
            >
              illustrations
            </a>
          </p>
        </div>
        <section id="work" className="portfolio-mf route" style={{paddingTop:'3rem'}}>
          <div className="container" style={{position:'relative'}}>

            <div>
              <div className={"row "+(!myProjects?" hide-section":undefined)}>
                {artElements.map((element,index)=>{
                  return(
                    <PortfolioElement key={index} element={element}/>
                  )
                })}
              </div>
              <div className={!featured?" hide-section":undefined}>
                <Gallery  photos={constants.MY_ILLUSTRATIONS_THUMBNAILS} onClick={(e,photos)=>{this.openLightbox(e,photos)}} />
                <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={this.closeLightbox}>
                      <Carousel
                        //styles={{background:'red'}}
                        currentIndex={currentImage}
                        views={constants.MY_ILLUSTRATIONS.map(x => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
              </div>
              <div className={!illustrations?" hide-section":undefined}>
                <Gallery  photos={constants.SCRAPS_THUMBNAILS} onClick={(e,photos)=>{}} />
                {/* <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={this.closeLightbox}>
                      <Carousel
                        //styles={{background:'red'}}
                        currentIndex={currentImage}
                        views={constants.MY_ILLUSTRATIONS.map(x => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway> */}
              </div>
              {/* <Gallery images={IMAGES_} enableImageSelection={false}/> */}
            </div>

          </div>
        </section>
      </div>
    );
  }
}

export default ArtistPortfolio;