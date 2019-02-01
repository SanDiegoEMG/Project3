import React, { Component } from 'react';
import SpeciesCalendar from "../pages/CalendarPage"
import '../App';

class App extends Component {

  render() {
    console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <div className="App">
        <SpeciesCalendar></SpeciesCalendar>
      </div>
    );
  }
}

export default App;
