import React from "react";
//import components
import Navbar from "../views/navbar.jsx";
import Intro from "../views/intro.jsx";
import About from "../views/about.jsx";
import Portfolio from "../views/portfolio.jsx";
import Contact from "../views/contact.jsx";
import BackToTop from "../views/back-top.jsx";
import Preloader from "../views/preloader";
//import Social from '../views/social'

class HomeLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Intro />
        <Portfolio />
        <About />
        <Contact />
        <BackToTop />
        <Preloader />
      </React.Fragment>
    );
  }
}

export default HomeLayout;
