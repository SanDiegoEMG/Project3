import React, { Component } from 'react';
import ControlledExpansionPanels from "../components/Sidebar/Sidebar";
import RecipeReviewCard from "../components/MediaCard/MediaCard"
import MediaCard from "../components/Cards/Cards";
import Grid from "@material-ui/core/Grid";
import API from "../utils/API";



class MushPage extends Component {
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
      })},
      console.log("db object", this.state.speciesArray))
      .catch(err => console.log(err));
    };




  render () {
    return (
    <div className="Mushroompage">
      <Grid container spacing={24}>
        
        <Grid item xs={2}><MediaCard /></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}><MediaCard /></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}><MediaCard /></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}><MediaCard /></Grid>

        <Grid item xs={3} style={{marginTop: 100}}>
          <ControlledExpansionPanels /> </Grid>
        <Grid item xs={8} > <RecipeReviewCard/></Grid>
      </Grid> 
    </div>
    )}
};



export default MushPage;


// console.log(process.env.REACT_APP_SECRET_CODE);
// let test = this.state.click ? <div>Hello</div> : <div>Bye bye</div>
// return (
//   <div className="App">
//     <Ourmushroom 
//     speciesList={
//       this.state.speciesArray
//     }/>
//     { test }
//   </div>
// );
