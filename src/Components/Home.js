import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './src/Home.css';
import Services from './Services';
import Project from './Project';
import Clients from './Clients';
import Blog from './Blog'

export default class Home extends Component {
    render(){
        return(
        <Router>
            <div>
                <div id="parallax" className="parallax"></div>
                
                <div id="info-part" className="info-part">
                    <div id="box1" className="box">
                        <h1>Services</h1>
                        <h4>Checkout our services here.</h4>
                        <button id="services-more" >More Info.</button>
                    </div>
                    <div id="box2" className="box">
                        <h1>Projects</h1>
                        <h4>Have a look at our work.</h4>
                        <button id="h4rojects-more" >More Info.</button>
                    </div>
                    <div id="box3" className="box">
                        <h1>Clients</h1>
                        <h4>Our trusted clients.</h4>
                        <button id="clients-more" >More Info.</button>
                    </div>
                </div>

                <div id="myAbout" className="about-us">
                    <div className="about-child">
                        <h1>ABOUT US</h1>
                        <p id="read-more-normal"><b>Programmers Studio</b> was founded by Mr. Pulkit Khullar in the year 2018, with the sole motive of changing the world with technology.
                            The idea of flying cars and speaking robots in the future has been on the minds of people in this world. And here, at Programmers Studio, through hard work and determination, we strive to achieve that.
                            Here, at this company, we believe that, “The best way to predict the future is to invent it. ”, as rightly said by Alan Kay.
                        </p>
                        <button id="read-more">Read More</button>
                    </div>
                </div>

                <div id="myContact" className="contact-us">
                    <div className="contact-child">
                        <h1>CONTACT US</h1>
                        <p>
                            C-572A, Street-12, Majlis Park, Adarsh Nagar, Delhi - 110033.<br/>
                            Nearest Metro - Adarsh Nagar<br/>
                            Email Us : info.programmersstudio@gmail.com<br/>
                            Call Us : +91 9650684491
                        </p>
                        <form className="form-group">
                            <input className="form-control" type="text" placeholder="Name" />
                            <input className="form-control" type="email" placeholder="Email" />
                            <input className="form-control" type="text" placeholder="Subject" />
                            <input className="form-control" type="text" placeholder="Message" />
                            <button className="form-control" id="form-btn">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </Router>
        );
    }
}