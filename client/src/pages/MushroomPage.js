import React, { Component } from 'react';
import Ourmushroom from "../components/Ourmushroom"
import '../App';
import API from "../utils/API";


class MushroomPage extends Component {

  state = {
    speciesArray: "",
    click: false
  };

  componentDidMount() {
    this.showSpecies();
  };

// this code delivers all species in an array of objects
 showSpecies () {
  API.getAllSpecies() 
  .then(res => {this.setState({
    speciesArray: res.data
  })})
  .catch(err => console.log(err));
}



  render() {
    console.log(process.env.REACT_APP_SECRET_CODE);
    let test = this.state.click ? <div>Hello</div> : <div>Bye bye</div>
    return (
      <div className="App">
        <Ourmushroom 
        speciesList={
          this.state.speciesArray
        }/>
        { test }
      </div>
    );
  }
}

export default MushroomPage;
