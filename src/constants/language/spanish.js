import * as general from "../general";

const ES = {
  //ABOUT ME
  aboutMeTitle: "Sobre mis habilidades y servicios",
  aboutMe: [
    {
      id: "first-p-about",
      content:
        "Diseño y plafinicación de software: Como ingeniero en informática me especializo en el estudio del modelo de negocio y plantear una solución tecnológica factible definiendo los flujos de información necesario en cada uno de los procesos y estableciendo un modelo de datos correspondiente al caso.",
    },
    {
      id: "second-p-about",
      content:
        "Manejo de tecnologías para el desarrollo de la aplicación del lado del cliente tanto web como móvil, teniendo una mayor experiencia laboral en esta última con el uso de React Native.",
    },
    {
      id: "third-p-about",
      content:
        "Desarrollo y despliegue de API's haciendo uso de NodeJs y trabajando con servicios de Amazon Web Service como EC2, S3, RDS y Route 53.",
    },
    /*     {
      id: "fourth-p-about",
      content: "algo más",
    }, */
  ],
  //CONTACT
  errorForm:{
    name: 'Debe ingresar su nombre',
    email: 'Debe ingresar su correo',
    emailFormat: 'Formato de correo no válido',
    subject: 'Debe ingresar el asunto',
    message: 'Debe ingresar el mensaje'
  },
  contactTitle: "Envíame un mensaje",
  contactSecondTitle: "Contacto",
  contactText:
    "Si me quieres contactar puedes enviarme un correo a mi email a través del formulario, o a través de las siguientes redes, intentaré responder lo más rápido posible.",
  nameField: "Tu nombre",
  emailField: "Tu correo",
  subjectField: "Asunto",
  messageField: "Mensaje",
  messageSend: "Tu mensaje ha sido enviardo, te responderé en la mayor brevedad posible.",
  contactButton: "Enviar mensaje",
  contactButtonSendingMessage: "Enviando...",
  //PORTFOLIO
  portfolioTitle: "Portafolio",
  portfolioText:
    "Proyecto en los que he estado involucrado como desarrollador u otros puestos a lo largo de mi carrera",
  navBar: {
    home: "inicio",
    portfolio: "portafolio",
    about: "sobre mi",
    contact: "contáctame",
  },
  downloadResume: "Ver currículo",
  greetings: "Bienvenido a mi portafolio profesional",
  specalities: [
    "Desarrollador web con ReactJs",
    "Desarrollador móvil con React Native",
    "Desarrollador BackEnd con NodeJs",
  ],
  devElements: [
    {
      id: "compety-gallery",
      title: "'Compety mobile'",
      more: "Componente móvil de Compety",
      team: "Equipo de trabajo: 3 personas",
      year: "2019",
      images: general.COMPETY,
      description:
        "Componente móvil de compety (www.compety.app), una aplicación desarrollada con el framework React Native, React Router para el manejo de pantallas, y Redux para los estados generales de la app." +
        "\n ",
      rol: ["Desarrollador frontend"],
    },
    {
      id: "nephron-gallery",
      title: "'Nephron mobile'",
      team: "Equipo de trabajo: 5 personas",
      more: "Componente móvil de Nephron",
      description:
        `Nephron mobile es un componente del sistema 'Nephron', desarrollado por el equipo Aido para apoyar la gestión de pacientes de la Unidad de Dialisis Lara II C.A. de Barquisimeto (Lara, Venezuela).` +
        `\nPara este proyecto se utilizó el framework React Native e implementando Redux para el manejo general de estados de la app.` +
        `\n El equipo Aido estuvo conformado por 25 personas que dieron solución a esta necesidad de optimización e innovación.` +
        `\nEl equipo de desarrollo para esta aplicación estuvo conformado por 5 personas dentro de las cuales mi rol se estuvo en coordinar el trabajo de cada uno de estos aparte de desarrollar directamente el códgo de la misma.`,
      year: "2020",
      images: general.NEPHRON,
      rol: ["Project manager", "Desarrollador frontend"],
    },
    {
      id: "foodwize-gallery",
      title: "'Foodwize'",
      team: "Equipo de trabajo: 5 personas",
      more: "Foodwize",
      year: "2020 - 2021",
      images: general.FOODWIZE,
      description:
        '"Foodwize es un comedor conectado comprometido con la transición ecológica al ofrecer una solución de catering ultra local de comidas orgánicas, frescas y equilibradas a un precio justo. ' +
        'Nuestros platos son elaborados diariamente por chefs socios, asegurando una oferta ética y llave en mano a nuestros clientes." (Extracto recuperado de www.foodwize.co).' +
        "\n Este proyecto ha sido desarrollado utilizando React Native soportando los sistemas operativos Android y iOS, en su estructura se ha utilizado Redux para manejos de estado general, integración de pagos mediante Stripe, inicio de sesión y registro con Google, Facebook y Apple, manejo de pantallas haciendo uso de React Navigation, y OneSignal para las notificaciones push.",
      rol: ["Desarrollador frontend"],
    },
    {
      id: "akkordar-gallery",
      title: "'Akkordar'",
      team: "Equipo de trabajo: 5 personas",
      more: "Akkordar app",
      year: "2021 - 2022",
      images: general.AKKORDAR,
      description:
        "Akkordar® es una plataforma que busca conectar a distintas personas que requieren soluciones y a aquellos que están dispuestos a ofrecer el servicio necesario para dar respuesta a esa necesidad." +
        "\nDentro de esta aplicación las personas podrán anunciar a la comunidad de Akkordar aquellos servicios que realizan, e igualmente contrararlos mediante un proceso bastante amigable al usuario, que mantiene seguro su dinero en todo momento y además posibilita la fácil comunicación entre las dos partes." +
        "\nLa app móvil ha sido desarrollada haciendo uso de React Native, Redux para el manejo de estados generales, React Navigation para la transición entre pantallas, OneSignal para las notificaciones push y Socket.io para el chat integrado" +
        "\n Para la parte del servidor se ha utilizado NodeJs con NestJs, TypeORM para el mapeo de los objetos, OneSignal para la integración de notificacones push dentro de la app, Swagger con el fin de obtener una correcta documentación, SDK de AWS para el uso de Butckets en S3, además esta API está enlazada a Transbank como pasarela de pago seguro para los usuarios de la aplicación.",
      rol: ["Project Manager", "DBA", "Desarrollador fullstack"],
    },
  ],
  year: "Año",
  projectDetails: "Detalles del proyecto",
  rol: "Mi cargo desempeñado",
  roles: "Mis cargos desempeñados",
};

export default ES;
