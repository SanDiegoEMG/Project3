import React, { Component } from 'react';
import OurMushroom from "../pages/Ourmushroom.js";
import '../App';

class App extends Component {

  render() {
    console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <div className="App">
        <OurMushroom />
      </div>
    );
  }
}

export default App;
