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
import Navbar from '../components/navbar.jsx';
import Intro from '../components/intro.jsx';
import About from '../components/about.jsx';
import Portfolio from '../components/portfolio.jsx';
import Contact from '../components/contact.jsx';
import BackToTop from '../components/back-top.jsx';
import Preloader from '../components/preloader';
import Social from '../components/social'

import HomeLayout from './homeLayout'
import SelectType from '../components/portfolio/selectType.jsx'

import ArtistPortfolio from '../components/portfolio/artistPortfolio.jsx'
import DeveloperPortfolio from '../components/portfolio/developerPortfolio.jsx'
import PortfolioBanner from '../components/portfolio/banner'

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <Router basename={process.env.REACT_APP_PUBLIC_URL}>
        <Switch>         
            <Route exact path="/portfolio" component={SelectType} />
            <Route exact path="/portfolio/artist">
              <Navbar/>
              <PortfolioBanner/>
              <ArtistPortfolio/>
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
