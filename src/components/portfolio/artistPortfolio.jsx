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
          source: {
            download: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/The-Lady-of-the-rising-sun_mid_itneth.jpg",
            fullscreen: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/The-Lady-of-the-rising-sun_mid_itneth.jpg",
            regular: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/The-Lady-of-the-rising-sun_mid_itneth.jpg",
            thumbnail: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/The-Lady-of-the-rising-sun_mid_itneth.jpg",
          },
          title:"Lady of the rising sun",
          caption:"Ilustración realizada en photoshop"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/Honor_half_uqiobh.jpg",
          caption: "Vermillion Flycatcher - 2018"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/Zuko_peq_lui77t.jpg",
          caption: "Vermillion Flycatcher - 2018"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/The-Zabrak_peqInst_qjnuna.jpg",
          caption: "Vermillion Flycatcher - 2018"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/samurai-jack_peq_mezysg.jpg",
          caption: "Vermillion Flycatcher - 2018"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/Knight-of-the-Kingdom_half_xkbrco.jpg",
          caption: "Vermillion Flycatcher - 2018"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/Only-the-stars-can-guide-us_half_eu56vw.jpg",
          caption: "Vermillion Flycatcher - 2018"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/Emerald-Dream_half_otnana.jpg",
          caption: "Vermillion Flycatcher - 2018"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/flycatcher_half_ekvr6u.jpg",
          caption: "Vermillion Flycatcher - 2018"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/my%20art/VarokSaurfang_half_uhdlkn.jpg",
          caption: "Vermillion Flycatcher - 2018"
        },
        {
          source: "https://res.cloudinary.com/clowth/image/upload/v1602784728/Griffin_iocdbf.jpg",
          caption: "Boats (Jeshu John - designerspics.com)"
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
    

      

    const {artistPortfolio, artElements,currentImage,viewerIsOpen} = this.state;
    return (
      <section id="work" className="portfolio-mf route" style={{paddingTop:'5rem'}}>
        <div className="container" style={{position:'relative'}}>

          <div>
            <div className="row" >
              {artElements.map((element,index)=>{
                return(
                  <PortfolioElement element={element}/>
                )
              })}
            </div>
            <Gallery photos={thumbnails} onClick={(e,photos)=>{this.openLightbox(e,photos)}} />
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
            {/* <Gallery images={IMAGES_} enableImageSelection={false}/> */}
          </div>

        </div>
      </section>
    );
  }
}

export default ArtistPortfolio;