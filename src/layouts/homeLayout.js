import React from "react";

//import components
import BackToTop from '../components/back-top.jsx';
import Preloader from '../components/preloader';
import Navbar from '../components/navbar.jsx';

//import screens
import Intro from '../screens/home/intro.jsx';
import Portfolio from '../screens/home/portfolio.jsx';
import Contact from '../screens/home/contact.jsx';
import Commissions from '../screens/home/commissions.jsx'
//import Social from '../screens/portfolio/home/social.jsx'

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
            <Commissions />
            <Contact />
            <BackToTop />
            {/* <Preloader /> */}
        </React.Fragment>
    )
  }
}

export default HomeLayout;
