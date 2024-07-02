import * as general from "../general";

const ES = {
  //ABOUT ME
  aboutMeTitle: "Sobre mis habilidades y experiencia",
  aboutMe: [
    {
      id: "first-p-about",
      content:
        "Diseño y planificación de software: Como ingeniero en informática, me especializo en analizar modelos de negocio y en plantear soluciones tecnológicas factibles. Defino los flujos de información necesarios en cada proceso y establezco modelos de datos correspondientes a cada caso.",
    },
    {
      id: "second-p-about",
      content:
        "Desarrollo de aplicaciones: Tengo experiencia en el desarrollo de aplicaciones tanto web como móviles, con un enfoque particular en React Native para aplicaciones móviles. En los últimos años, me he centrado en desarrollar apps (plugins) para tiendas de Shopify, utilizando React Native y APIs en Node.",
    },
    {
      id: "third-p-about",
      content:
        "Desarrollo y despliegue de API's: Tengo conocimientos en el uso de NodeJs y en trabajar con servicios de Amazon Web Services como EC2, S3, RDS y Route 53. Además, he gestionado bases de datos MySQL y Firebase, y he integrado APIs de GraphQL y REST de Shopify.",
    },
    {
      id: "fourth-p-about",
      content:
        "Proyectos recientes: He trabajado en una variedad de aplicaciones, con los últimos dos proyectos centrados en Shopify. En total, he llevado a cabo seis proyectos exitosos.",
    },
    {
      id: "fifth-p-about",
      content:
        "Despliegue de proyectos: Tengo experiencia en el despliegue de proyectos en servidores, principalmente usando Fly.io, garantizando que las aplicaciones estén disponibles y funcionen correctamente en el entorno de producción.",
    },
    {
      id: "sixth-p-about",
      content:
        "Procesamiento asíncrono: Implemento colas en las APIs para procesar tareas de manera asíncrona utilizando BullMQ y Redis, mejorando así la eficiencia y la capacidad de respuesta de las aplicaciones.",
    },
    {
      id: "seventh-p-about",
      content:
        "Integración continua: Utilizo integración continua para verificar los cambios antes de cada actualización, asegurando la calidad y estabilidad del código antes de su despliegue en producción.",
    },
    {
      id: "eighth-p-about",
      content:
        "Gestión de proyectos: Además de mi rol técnico, he actuado como Project Manager, gestionando las actividades del proyecto en desarrollo y coordinando con otros departamentos como QA y Diseño. Me aseguro de que cada fase del proyecto se ejecute de manera eficiente y efectiva, trabajando en equipo para cumplir con los objetivos establecidos.",
    },
  ],
  //CONTACT
  errorForm: {
    name: "Debe ingresar su nombre",
    email: "Debe ingresar su correo",
    emailFormat: "Formato de correo no válido",
    subject: "Debe ingresar el asunto",
    message: "Debe ingresar el mensaje",
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
    home: { label: "inicio", id: "#home" },
    portfolio: { label: "portafolio", id: "#portfolio" },
    about: { label: "sobre mi", id: "#about" },
    contact: { label: "contáctame", id: "#contact" },
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
    {
      id: "alt-text-generator-gallery",
      title: "'Alt Text Generator'",
      team: "Equipo de trabajo: 6 personas",
      more: "Shopify app (pluggin)",
      year: "Febrero (2024) - Julio (2024)",
      images: general.AKKORDAR,
      description:
        "Alt Text Generator (AATG) es una avanzada herramienta de gestión de imágenes de productos específicamente diseñada para plataformas de comercio electrónico como Shopify y WordPress. Utilizando inteligencia artificial, la aplicación genera automáticamente descripciones de texto alternativo (alt text) para imágenes de productos, lo que mejora significativamente la accesibilidad del sitio y la optimización en motores de búsqueda (SEO). Desarrollada con tecnologías modernas como TypeScript y React para el frontend, y Node.js con Express para el backend, la aplicación se despliega y gestiona en la plataforma de alojamiento Fly.io. Además, integra servicios de OpenAI GPT-4 para el análisis de imágenes y la generación de texto, lo que permite automatizar procesos que tradicionalmente son manuales y laboriosos." +
        "\nEl objetivo principal de la aplicación es reducir el tiempo y esfuerzo necesarios para actualizar descripciones de imágenes, mejorando al mismo tiempo la accesibilidad y visibilidad de los productos en la web. La solución ofrece una integración sencilla con plataformas de comercio electrónico, facilitando a los usuarios la actualización de sus tiendas sin necesidad de conocimientos técnicos avanzados. La arquitectura de la aplicación está diseñada para ser escalable, capaz de manejar grandes volúmenes de datos y tráfico, asegurando un rendimiento consistente y confiable. Además, se presta especial atención a la facilidad de uso, proporcionando una interfaz intuitiva que permite a los comerciantes gestionar sus productos y configuraciones de manera eficiente y eficaz. Con estas características, la aplicación no solo optimiza el SEO y la accesibilidad, sino que también automatiza y simplifica la gestión de tiendas en línea, ofreciendo una solución integral para comerciantes modernos.",
      rol: ["Project Manager", "DBA", "Fullstack Developer"],
    },
  ],
  year: "Año",
  projectDetails: "Detalles del proyecto",
  rol: "Mi cargo desempeñado",
  roles: "Mis cargos desempeñados",
};

export default ES;
