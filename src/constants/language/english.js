import * as general from "../general";

const EN = {
  // ABOUT ME
  aboutMeTitle: "About My Skills and Experience",
  aboutMe: [
    {
      id: "first-p-about",
      content:
        "Software design and planning: As a computer engineer, I specialize in analyzing business models and proposing feasible technological solutions. I define the necessary information flows in each process and establish corresponding data models.",
    },
    {
      id: "second-p-about",
      content:
        "Application development: I have experience in developing both web and mobile applications, with a particular focus on React Native for mobile applications. In recent years, I have focused on developing apps (plugins) for Shopify stores, using React Native and APIs in Node.",
    },
    {
      id: "third-p-about",
      content:
        "API development and deployment: I have knowledge in using NodeJs and working with Amazon Web Services such as EC2, S3, RDS, and Route 53. Additionally, I have managed MySQL and Firebase databases and integrated GraphQL and REST APIs from Shopify.",
    },
    {
      id: "fourth-p-about",
      content:
        "Recent projects: I have worked on a variety of applications, with the last two projects focused on Shopify. In total, I have successfully completed six projects.",
    },
    {
      id: "fifth-p-about",
      content:
        "Project deployment: I have experience in deploying projects on servers, primarily using Fly.io, ensuring that applications are available and function correctly in the production environment.",
    },
    {
      id: "sixth-p-about",
      content:
        "Asynchronous processing: I implement queues in the APIs to process tasks asynchronously using BullMQ and Redis, thereby improving the efficiency and responsiveness of applications.",
    },
    {
      id: "seventh-p-about",
      content:
        "Continuous integration: I use continuous integration to verify changes before each update, ensuring the quality and stability of the code before deployment to production.",
    },
    {
      id: "eighth-p-about",
      content:
        "Project management: In addition to my technical role, I have acted as a Project Manager, managing project activities in development and coordinating with other departments such as QA and Design. I ensure that each phase of the project is executed efficiently and effectively, working as a team to meet the established objectives.",
    },
  ],
  // CONTACT
  errorForm: {
    name: "You must enter your name",
    email: "You must enter your email",
    emailFormat: "Invalid email format",
    subject: "You must enter the subject",
    message: "You must enter the message",
  },
  contactTitle: "Send Me a Message",
  contactSecondTitle: "Contact",
  contactText:
    "If you want to contact me, you can send me an email through the form, or through the following networks, and I will try to respond as soon as possible.",
  nameField: "Your Name",
  emailField: "Your Email",
  subjectField: "Subject",
  messageField: "Message",
  messageSend: "Your message has been sent, I will reply as soon as possible.",
  contactButton: "Send Message",
  contactButtonSendingMessage: "Sending...",
  // PORTFOLIO
  portfolioTitle: "Portfolio",
  portfolioText:
    "Projects I have been involved in as a developer or other roles throughout my career",
  navBar: {
    home: "home",
    portfolio: "portfolio",
    about: "about me",
    contact: "contact me",
  },
  downloadResume: "View Resume",
  greetings: "Welcome to my professional portfolio",
  specialities: [
    "Web Developer with ReactJs",
    "Mobile Developer with React Native",
    "BackEnd Developer with NodeJs",
  ],
  devElements: [
    {
      id: "compety-gallery",
      title: "'Compety mobile'",
      more: "Compety mobile component",
      team: "Work team: 3 people",
      year: "2019",
      images: general.COMPETY,
      description:
        "Compety mobile component (www.compety.app), an application developed with the React Native framework, React Router for screen management, and Redux for the app's general states." +
        "\n ",
      rol: ["Frontend Developer"],
    },
    {
      id: "nephron-gallery",
      title: "'Nephron mobile'",
      team: "Work team: 5 people",
      more: "Nephron mobile component",
      description:
        `Nephron mobile is a component of the 'Nephron' system, developed by the Aido team to support the patient management of the Unidad de Dialisis Lara II C.A. in Barquisimeto (Lara, Venezuela).` +
        `\nFor this project, the React Native framework was used, implementing Redux for the general state management of the app.` +
        `\n The Aido team consisted of 25 people who provided a solution for this optimization and innovation need.` +
        `\nThe development team for this application consisted of 5 people, among whom my role was to coordinate the work of each one and directly develop the code for it.`,
      year: "2020",
      images: general.NEPHRON,
      rol: ["Project Manager", "Frontend Developer"],
    },
    {
      id: "foodwize-gallery",
      title: "'Foodwize'",
      team: "Work team: 5 people",
      more: "Foodwize",
      year: "2020 - 2021",
      images: general.FOODWIZE,
      description:
        '"Foodwize is a connected dining room committed to the ecological transition by offering an ultra-local catering solution of organic, fresh, and balanced meals at a fair price. ' +
        'Our dishes are prepared daily by partner chefs, ensuring an ethical and turnkey offer to our customers." (Excerpt recovered from www.foodwize.co).' +
        "\n This project was developed using React Native, supporting Android and iOS operating systems, with Redux for general state management, Stripe integration for payments, login and registration with Google, Facebook, and Apple, screen management using React Navigation, and OneSignal for push notifications.",
      rol: ["Frontend Developer"],
    },
    {
      id: "akkordar-gallery",
      title: "'Akkordar'",
      team: "Work team: 5 people",
      more: "Akkordar app",
      year: "2021 - 2022",
      images: general.AKKORDAR,
      description:
        "Akkordar® is a platform that seeks to connect different people who need solutions with those willing to offer the necessary service to meet that need." +
        "\nWithin this application, people can announce to the Akkordar community the services they provide, and also hire them through a very user-friendly process that keeps their money safe at all times and facilitates easy communication between both parties." +
        "\nThe mobile app was developed using React Native, Redux for general state management, React Navigation for screen transitions, OneSignal for push notifications, and Socket.io for integrated chat." +
        "\n For the server-side, NodeJs was used with NestJs, TypeORM for object mapping, OneSignal for push notification integration within the app, Swagger for proper documentation, AWS SDK for using S3 buckets, and this API is linked to Transbank as a secure payment gateway for app users.",
      rol: ["Project Manager", "DBA", "Fullstack Developer"],
    },
    {
      id: "storewide-flash-sales-gallery",
      title: "'Storewide Flash Sales / Inventory Hero'",
      team: "Work team: 6 people",
      more: "Shopify app (pluggin)",
      year: "2022 - 2024",
      images: general.AKKORDAR,
      description:
        "Akkordar® is a platform that seeks to connect different people who need solutions with those willing to offer the necessary service to meet that need." +
        "\nWithin this application, people can announce to the Akkordar community the services they provide, and also hire them through a very user-friendly process that keeps their money safe at all times and facilitates easy communication between both parties." +
        "\nThe mobile app was developed using React Native, Redux for general state management, React Navigation for screen transitions, OneSignal for push notifications, and Socket.io for integrated chat." +
        "\n For the server-side, NodeJs was used with NestJs, TypeORM for object mapping, OneSignal for push notification integration within the app, Swagger for proper documentation, AWS SDK for using S3 buckets, and this API is linked to Transbank as a secure payment gateway for app users.",
      rol: ["Project Manager", "DBA", "Fullstack Developer"],
    }
  ],
  year: "Year",
  projectDetails: "Project Details",
  rol: "My Role",
  roles: "My Roles",
};

export default EN;
