import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//import components
import Navbar from '../components/navbar.jsx';
import Intro from '../components/intro.jsx';
import About from '../components/about.jsx';
import Portfolio from '../components/portfolio.jsx';
import Contact from '../components/contact.jsx';
import BackToTop from '../components/back-top.jsx';
import Preloader from '../components/preloader';
import Social from '../components/social'

import SelectType from '../components/portfolio/selectType.jsx'

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <Router>
        <Switch>
            
            <Route path="/portfolio">
                <Navbar />
                <SelectType/>
            </Route>
            <Route path="/">
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
            </Route>
          
        </Switch>
    </Router>
    )
  }
}

export default Main;
