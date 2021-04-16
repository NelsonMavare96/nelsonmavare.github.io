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
import BackToTop from '../components/back-top.jsx';
import Preloader from '../components/preloader';
import PortfolioBanner from '../components/portfolio/banner'

//import screens
import PortfolioLayout from './portfolioLayout'
import SelectType from '../screens/portfolio/selectType.jsx'
import ArtistPortfolio from '../screens/portfolio/artistPortfolio.jsx'
import DeveloperPortfolio from '../screens/portfolio/developerPortfolio.jsx'
import HomeLayout from './homeLayout'


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <Router>
        <Switch>        
            <Route exact path="/portfolio" component={PortfolioLayout}/>   
            <Route exact path="/portfolio/select-type" component={SelectType} />
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
