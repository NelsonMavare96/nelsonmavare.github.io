import * as general from '../general';

const ES = {
  //ABOUT ME
  aboutMeTitle: 'Sobre mi',
  aboutMe: [
    {
      id: "first-p-about",
      content:
      "Algo acá"
    },
    {
      id: "second-p-about",
      content:
      "Soy graduado como Ingeniero en Informática de la UCLA (Venezuela). Como programador me he dedicado a desarrollar aplicaciones web y móviles usando React y React Native respectivamente, además he trabajado el lado del servidor con Nojde usando NestJs"
    },
    {
      id: "third-p-about",
      content:
      "otra cosa"
    },
    {
      id: "fourth-p-about",
      content:
      "algo más"
    }
  ],
  //PORTFOLIO
  portfolioTitle: 'Portafolio',
  portfolioText: 'Proyecto en los que he estado involucrado como desarrollador u otros puestos a lo largo de mi carrera',
  navBar: {
    home: 'inicio',
    portfolio: 'portafolio',
    about: 'sobre mi',
    contact: 'contáctame'
  },
  downloadCV: 'Descargar currículo',
  greetings: 'Bienvenido a mi portafolio profesional',
  specalities: [
    "Desarrollador web con ReactJs",
    "Desarrollador móvil con React Native",
    "Desarrollador BackEnd con NodeJs"
  ],
  devElements: [
    { 
      id: "compety-gallery", 
      title:"'Compety mobile'", 
      more:"Componente móvil de Compety", 
      year: "2019", 
      images: general.COMPETY 
    },
    { 
      id: "nephron-gallery", 
      title:"'Nephron mobile'", 
      more:"Componente móvil de Nephron", 
      year: "2020", 
      images: general.NEPHRON 
    },
    { 
      id: "foodwize-gallery", 
      title:"'Foodwize'", 
      more:"Componente móvil de Nephron", 
      year: "2020", 
      images: general.NEPHRON 
    },
  ],
};

export default ES;