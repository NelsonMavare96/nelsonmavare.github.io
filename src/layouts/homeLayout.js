import React from "react";
//import components
import Navbar from '../components/navbar.jsx';
import Intro from '../components/intro.jsx';
import About from '../components/about.jsx';
import Portfolio from '../components/portfolio.jsx';
import Contact from '../components/contact.jsx';
import BackToTop from '../components/back-top.jsx';
import Preloader from '../components/preloader';
import Social from '../components/social'

class HomeLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <React.Fragment>
            <Navbar />
            <Intro />
            <Portfolio />
            <Social/>
            <About />
            <Contact />
            <BackToTop />
            <Preloader />
        </React.Fragment>
    )
  }
}

export default HomeLayout;
