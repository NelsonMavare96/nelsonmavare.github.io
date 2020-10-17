import React from "react";
import { Icon } from '@iconify/react';
import logoBehance from '@iconify/icons-ion/logo-behance';
import logoTwitter from '@iconify/icons-ion/logo-twitter';
import logoInstagram from '@iconify/icons-ion/logo-instagram';
import logoFacebook from '@iconify/icons-ion/logo-facebook';
import logoLinkedin from '@iconify/icons-ion/logo-linkedin';
import logoGitHub from '@iconify/icons-ion/logo-github';
import { FaArtstation } from 'react-icons/fa';
import {SiFiverr} from 'react-icons/si';

class Social extends React.Component {
  constructor() {
    super();
    this.state = {
      artistSocialMedia: [
        {
          id: "behance",
          content: logoBehance,
          link:"https://www.behance.net/NelsonMavare",
        },
        {
          id: "linkedin",
          content: logoLinkedin,
          link:"https://www.linkedin.com/in/nelson-mavare-illustrator/",
        },
        {
            id: "instagram",
            content: logoInstagram,
            link:"https://www.instagram.com/clowth",
           },
      ],
      developerSocialMedia: [
        {
          id: "linkedin",
          content: logoLinkedin,
          link:"https://www.linkedin.com/in/nelson-mavare-developer/",
        },
        {
          id: "github",
          content: logoGitHub,
          link:"https://github.com/nelsonmavare",
        },
      ]
    };
  }
  render() {
    const {artistSocialMedia, developerSocialMedia} = this.state;
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        //style={{ backgroundImage: "url(" + imageOverlay + ")" }}
        style={{padding:0}}
      >
       <div className="overlay-mf" style={{opacity:1}}></div> 
        <div className="container" style={{maxWidth:'100%'}}>
          <div className="row">
            <div className="col-sm-12">

                <div className="socials" style={{justifyContent:'center',display:'flex'}}>
                    <ul>
                        <li>
                            <a
                                href="https://artstation.com/clowth"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="ico-circle ico-social" style={{color:'white'}}>
                                <FaArtstation style={{height:"100%",verticalAlign:"top"}} />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.fiverr.com/nelsonmavare"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="ico-circle ico-social" style={{color:'white'}}>
                                <SiFiverr style={{height:"100%",verticalAlign:"top"}} />
                                </span>
                            </a>
                        </li>
                        {artistSocialMedia.map((artistSocialMedia,index)=>{
                            return(
                            <li key={index}>
                                <a
                                href={artistSocialMedia.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span className="ico-circle ico-social" style={{color:'white'}}>
                                    <Icon style={{height:"100%",verticalAlign:"top"}} icon={artistSocialMedia.content} />
                                </span>
                                </a>
                            </li>
                            ) 
                        })}
                    </ul>
                </div>
                <div className="socials" style={{justifyContent:'center',display:'flex'}}>
                    <ul>
                        {developerSocialMedia.map((developerSocialMedia,index) =>{
                            return(
                            <li key={index}>
                                <a
                                href={developerSocialMedia.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span className="ico-circle ico-social" style={{color:'white'}}>
                                    <Icon style={{height:"100%",verticalAlign:"top"}} icon={developerSocialMedia.content} />
                                </span>
                                </a>
                            </li>
                            ) 
                        })}
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Social;


