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
      myIllustrations:true,
      scraps:false,
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

    };
  }

handleShowGallery(type){
  if(type==='projects'){
    this.setState({myProjects:true})
    this.setState({myIllustrations:false})
    this.setState({scraps:false})
  }
  else if(type==='illustrations'){
    this.setState({myProjects:false})
    this.setState({myIllustrations:true})
    this.setState({scraps:false})
  }
  else if(type==='scraps'){
    this.setState({myProjects:false})
    this.setState({myIllustrations:false})
    this.setState({scraps:true})
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
      const images =
      [
        
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/The-Lady-of-the-rising-sun_mid_itneth.jpg",
          title:"Lady of the rising sun - 2020",
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/Honor_half_uqiobh.jpg",
          title: "Honor - 2020"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/Zuko_peq_lui77t.jpg",
          title: "Prince Zuko - 2020"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/The-Zabrak_peqInst_qjnuna.jpg",
          title: "The Zabrak - 2020"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/samurai-jack_peq_mezysg.jpg",
          title: "Timeless warrior - 2020"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/Knight-of-the-Kingdom_half_xkbrco.jpg",
          title: "Knight of the kingdom - 2020"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/Only-the-stars-can-guide-us_half_eu56vw.jpg",
          title: "Only the stars can guide us (for the Emerald Muse) - 2019"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1603377458/my%20art/Emerald-Dream_half_otnana.jpg",
          title: "Emerald Dream (for the Emerald Muse) - 2019"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/flycatcher_half_ekvr6u.jpg",
          title: "Vermillion Flycatcher - 2018"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/VarokSaurfang_half_uhdlkn.jpg",
          title: "High Overlord Varok Saurfang - 2018"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/Griffin_iocdbf.jpg",
          title: "Griffin"
        },

      ]
      //images and thumbnails must been at the same order
      const thumbnails=[
        {
          //src: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/The-Lady-of-the-rising-sun_mid_itneth.jpg",
          src: "https://res.cloudinary.com/clowth/image/upload/c_limit,h_500,w_500/my%20art/The-Lady-of-the-rising-sun_mid_itneth.jpg",
          width: 400,
          height: 500,
        },
        {
          src: "https://res.cloudinary.com/clowth/image/upload/c_limit,h_500,w_500/my%20art/Honor_half_uqiobh.jpg",
          width: 353,
          height: 500
        },
        {
          src: "https://res.cloudinary.com/clowth/image/upload/c_limit,h_500,w_500/my%20art/Zuko_peq_lui77t.jpg",
          width: 444,
          height: 500
        },
        {
          src: "https://res.cloudinary.com/clowth/image/upload/c_limit,h_500,w_500/my%20art/The-Zabrak_peqInst_qjnuna.jpg",
          width: 500,
          height: 375
        },
        {
          src: "https://res.cloudinary.com/clowth/image/upload/c_limit,h_500,w_500/my%20art/samurai-jack_peq_mezysg.jpg",
          width: 500,
          height: 281
        },
        {
          src: "https://res.cloudinary.com/clowth/image/upload/c_limit,h_500,w_500/my%20art/Knight-of-the-Kingdom_half_xkbrco.jpg",
          width: 500,
          height: 494
        },
        {
          src: "https://res.cloudinary.com/clowth/image/upload/c_limit,h_500,w_500/my%20art/Only-the-stars-can-guide-us_half_eu56vw.jpg",
          width: 500,
          height: 444
        },
        {
          src: "https://res.cloudinary.com/clowth/image/upload/c_limit,h_500,w_500/my%20art/Emerald-Dream_half_otnana.jpg",
          width: 481,
          height: 500
        },
        {
          src: "https://res.cloudinary.com/clowth/image/upload/c_limit,h_500,w_500/my%20art/flycatcher_half_ekvr6u.jpg",
          width: 356,
          height: 500
        },
        {
          src: "https://res.cloudinary.com/clowth/image/upload/c_limit,h_500,w_500/my%20art/VarokSaurfang_half_uhdlkn.jpg",
          width: 500,
          height: 333
        },
        {
          src: "https://res.cloudinary.com/clowth/image/upload/c_limit,h_500,w_500/Griffin_iocdbf.jpg",
          width: 500,
          height: 417,
        },

      ];
    

      

    const {artistPortfolio, artElements,currentImage,viewerIsOpen, myProjects, myIllustrations, scraps} = this.state;
    return (
      <div>
        <div style={{width:"100%", height:'6vh', backgroundColor:'rgb(36 36 40)'}}>
          <p className="center-elements">
            <a
              className={"btn js-scroll px-4 portfolio-banner-button "+(myProjects&&"portfolio-banner-button-selected")}
              href="#"
              role="button"
              onClick={()=>{this.handleShowGallery('projects')}}
            >
              Projects
            </a>
            <a
              className={"btn js-scroll px-4 portfolio-banner-button "+(myIllustrations&&"portfolio-banner-button-selected")}
              href="#"
              role="button"
              onClick={()=>{this.handleShowGallery('illustrations')}}
            >
              My illustrations
            </a>
            <a
              className={"btn js-scroll px-4 portfolio-banner-button "+(scraps&&"portfolio-banner-button-selected")}
              href="#"
              role="button"
              onClick={()=>{this.handleShowGallery('scraps')}}
            >
              Scraps
            </a>
          </p>
        </div>
        <section id="work" className="portfolio-mf route" style={{paddingTop:'3rem'}}>
          <div className="container" style={{position:'relative'}}>

            <div>
              <div className={"row "+(!myProjects&&" hide-section")}>
                {artElements.map((element,index)=>{
                  return(
                    <PortfolioElement element={element}/>
                  )
                })}
              </div>
              <div class={!myIllustrations&&" hide-section"}>
                <Gallery  photos={thumbnails} onClick={(e,photos)=>{this.openLightbox(e,photos)}} />
                <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={this.closeLightbox}>
                      <Carousel
                        //styles={{background:'red'}}
                        currentIndex={currentImage}
                        views={images.map(x => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
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