import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Project from './Components/Project';
import Clients from './Components/Clients';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            
            <div className="Header">
              <ul>
                <li className="Header-logo"><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}> PROGRAMMERS <span style={{color: 'rgb(103,202,218)'}}>STUDIO</span> </Link></li>
                <li className="Header-content hover"><Link to={'/About'} style={{ textDecoration: 'none', color: 'white' }}> ABOUT </Link></li>
                <li className="Header-content hover"><Link to={'/Services'} style={{ textDecoration: 'none', color: 'white' }}> SERVICES </Link></li>
                <li className="Header-content hover"><Link to={'/Project'} style={{ textDecoration: 'none', color: 'white' }}> PROJECT </Link></li>
                <li className="Header-content hover"><Link to={'/Clients'} style={{ textDecoration: 'none', color: 'white' }}> CLIENTS </Link></li>
                <li className="Header-content hover"><Link to={'/Blog'} style={{ textDecoration: 'none', color: 'white' }}> BLOG </Link></li>
                <li className="Header-content hover"><Link to={'/Contact'} style={{ textDecoration: 'none', color: 'white' }}> CONTACT </Link></li>
              </ul>
            </div>
            
            {/* <div className="Space"></div> */}

            <div className="App-Body">
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/About' component={About} />
                <Route exact path='/Services' component={Services} />
                <Route exact path='/Project' component={Project} />
                <Route exact path='/Clients' component={Clients} />
                <Route exact path='/Blog' component={Blog} />
                <Route exact path='/Contact' component={Contact} />
              </Switch>
            </div>
          
          </div>  
        </Router>
    );
  }
}

export default App;
