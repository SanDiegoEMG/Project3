import React, { Component } from "react";
import logo from "./SingleYMMLogo.png";
import "./App.css";

class App extends Component {
  render() {
    
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          
          <div className="content">
            <h1 className="heading">Google Fonts in React</h1>
            <h2 className="subheading">
              Learn how to add fonts in a React Project
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <hr />
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
          </div>
      </div>
    );
  }
}

export default App;
