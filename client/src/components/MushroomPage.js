import React, { Component } from 'react';
import MushPage from "../pages/MushPage";
import '../App';

class App extends Component {

  render() {
    console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <div className="App">
        <MushPage />
      </div>
    );
  }
}

export default App;
