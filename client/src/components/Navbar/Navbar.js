import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';

// NEW PERSONALIZED NAVBAR ISAO-EDIT IMPORTS
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from "@material-ui/core/FormGroup";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";

// // NEW CONST FOR PERSONALIZED NAVBAR ISAO-EDIT
// const styles = {

//     // MAKE IT STATIC AND IN FRONT OF EVERYTHING
//     root:{
//         flexGrow: 1,
//         position: 'fixed',
//         zIndex: 2000
//     },
//     appBar: {
//       top: "auto",
//       bottom: 0,
//       height: 100,
//       backgroundColor: "#ef9a5c"
//       // backgroundColor: "#b62519",
//       // backgroundColor: "#7a5a40"
//     },
// }


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
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a className="nav-link" href="/" onClick={() => this.Auth.logout()}>Logout</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/speciespage">Our Mushrooms</Link>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/speciescalendar">Calendar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ourmushroom">Our Mushrooms</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/adminpage">Admin</Link>
                    </li>
                </ul>
            );
        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">You Me Mushrooms</Link>
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