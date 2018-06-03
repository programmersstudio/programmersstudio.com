import React, { Component } from 'react';
import './src/Contact.css';

export default class Contact extends Component {
    render(){
        return(
            <div className="contact">
                <div className="left">
                    <h2>Do you think we can serve you with your needs?</h2>
                    <h3>Well, we would love to!!!</h3>
                    <br />
                    <h3>Please just fill a short form and we will contact you.</h3>
                </div>
                <div className="right">
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
        );
    }
}