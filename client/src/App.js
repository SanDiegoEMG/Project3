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

      <BottomAppBar/>

      </div>
    );
  }
}

export default App;
