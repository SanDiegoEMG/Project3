import React, { Component } from 'react';
import ControlledExpansionPanels from "../components/Sidebar/Sidebar";
import RecipeReviewCard from "../components/MediaCard/MediaCard"
import MediaCard from "../components/Cards/Cards";
import Grid from "@material-ui/core/Grid";

// holding place for this code - will be moved to mushrooms pages ... delivers all species in an array of objects
// function showSpecies () {
//   API.getAllSpecies() 
//   .then(res => {console.log(res.data)})
//   .catch(err => console.log(err));
// }

// showSpecies()
// end code to be moved to mushroom pages

class Mushroom extends Component {
  state = {
    name: "",

    };

    componentDidMount() {

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
    );
  }
};
export default Mushroom;
