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
  }
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        //style={{ backgroundImage: "url(" + imageOverlay + ")" }}
        style={{padding:0}}
      >
        <div className="container" style={{maxWidth:'100%'}}>
          <div className="row" style={{background:'white'}}>
            <div className="col-sm-7" style={{background:"white", height:350,alignItems:'center',display:'flex'}}>
              <div className="col-sm-12">
                <div className="text-center" >
                    <h3 className="title-a" style={{fontSize:'2rem'}}>Lorem ipsum ay que dolor</h3>
                    <div className="line-mf" style={{marginBottom:20}}/>
                </div>
                <div className="col-sm-12">
                  <p>Aqui se supone que puede ir algun tipo de texto que no tengo idea que pero alguo explicativo con respecto a las comisiones (brevemente) e indicando que al darle click al boton de abajo te llevara a la pagina deseada</p>
                </div>
              </div>
            </div>
            <div className="col-sm-5 slide-section" ></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Social;


