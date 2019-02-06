import React, { Component } from "react";
import Home from "./pages/HomePage"
import './App.css';
import BottomAppBar from "./components/Footer/Footer"


class App extends Component {
  render() {
    console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <div className="App">
        <Home />

      <BottomAppBar/>

      </div>
    );
  }
}

export default App;
