import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import history from '../history'

//import components
import Navbar from '../views/navbar.jsx';
import Intro from '../views/intro.jsx';
import About from '../views/about.jsx';
import Portfolio from '../views/portfolio.jsx';
import Contact from '../views/contact.jsx';
import BackToTop from '../views/back-top.jsx';
import Preloader from '../views/preloader';
import Social from '../views/social'

import HomeLayout from './homeLayout'
import SelectType from '../views/portfolio/selectType.jsx'
import DeveloperPortfolio from '../views/portfolio/developerPortfolio.jsx'
import PortfolioBanner from '../views/portfolio/banner'

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <Router>
        <Switch>         
            <Route exact path="/portfolio" component={SelectType} />
            <Route exact path="/portfolio/artist">
              <Navbar/>
              <PortfolioBanner/>
              <BackToTop />
            </Route>
            <Route exact path="/portfolio/developer">
              <Navbar/>
              <PortfolioBanner/>
              <DeveloperPortfolio/>
              <BackToTop />
            </Route>
            <Route exact path="/" component={HomeLayout}/>        
        </Switch>
    </Router>
    )
  }
}

export default Main;
