import React, { Component } from "react";
// import logo from './logo.svg';

import Home from "./pages/HomePage"
import './App.css';
import BottomAppBar from "./components/Footer/Footer"


class App extends Component {
  render() {
    console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <div className="App">
        {/* NEW HOME COMPONENT */}
        <Home />

        {/* PREVIOUS CODE FOR REACT HEADER AND LOGO */}
        {/* <div className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* </div> */}

      <BottomAppBar/>

      </div>
    );
  }
}

export default App;
