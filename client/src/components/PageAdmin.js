import React, { Component } from 'react';
import AdminPage from "../pages/AdminPage"
import '../App';

class App extends Component {

  render() {
    console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <div className="App">
        <AdminPage></AdminPage>
      </div>
    );
  }
}

export default App;
