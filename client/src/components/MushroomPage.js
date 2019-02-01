import React, { Component } from 'react';
import Ourmushroom from "../pages/Ourmushroom"
import '../App';

class App extends Component {

  render() {
    console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <div className="App">
        <Ourmushroom></Ourmushroom>
      </div>
    );
  }
}

export default App;
