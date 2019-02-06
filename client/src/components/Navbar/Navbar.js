import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import '../Navbar/Navbar.css';
import YMMLogo from '../../images/ymmlogo3.png';


class Navbar extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    showNavigation = () => {
        if (this.Auth.loggedIn()) {
            return (
                <ul className="navbar-nav">

                    <li className="nav-item">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a className="nav-link" id="nav-for-mobile" href="/" onClick={() => this.Auth.logout()}>Logout</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="nav-for-mobile" to="/mushpage">Our Mushrooms</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="nav-for-mobile" to="/speciescalendar">Calendar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="nav-for-mobile" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="nav-for-mobile" to="/adminpage">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="nav-for-mobile" to="/signup">Signup</Link>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="navbar-nav">
                    
                    <li className="nav-item">
                        <Link className="nav-link" id="nav-for-mobile" to="/mushpage">Our Mushrooms</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="nav-for-mobile" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="nav-for-mobile" to="/">Home</Link>
                    </li>
                </ul>
            );
        }
    };

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                    
                    <img src={YMMLogo} alt="logo"/>
                    
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                        
                        </ul>
                        {this.showNavigation()}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;





