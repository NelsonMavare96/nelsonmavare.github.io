import React from "react";
//import components
import Navbar from '../components/navbar.jsx';
import Intro from '../screens/portfolio/home/intro.jsx';
import About from '../screens/portfolio/home/about.jsx';
import Portfolio from '../screens/portfolio/home/portfolio.jsx';
import Contact from '../screens/portfolio/home/contact.jsx';
import BackToTop from '../components/back-top.jsx';
import Preloader from '../components/preloader';
import Social from '../screens/portfolio/home/social.jsx'

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
            {/* <Preloader /> */}
        </React.Fragment>
    )
  }
}

export default HomeLayout;
