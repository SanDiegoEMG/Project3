import React, { Component } from "react";
import ControlledExpansionPanels from "../components/Sidebar/Sidebar";
import RecipeReviewCard from "../components/MediaCard/MediaCard";
import MediaCard from "../components/Cards/Cards";
import Grid from "@material-ui/core/Grid";
import API from "../utils/API";
// import Ourmushroom from "../components/Ourmushroom";

class MushPage extends Component {
  
  constructor () {
    super()
    this.state = {
      speciesArray: [],
      click: false,
      speciesName0: "",
      speciesName1:"",
      speciesName2:"",
      speciesName3:""
  }
  };

  componentDidMount() {
    this.showSpecies();
  }

  // this code delivers all species in an array of objects
  showSpecies = () => {
    API.getAllSpecies()
      .then(res => {
        this.setState({ speciesArray: res.data, speciesName0: res.data[0].name_common, speciesName1: res.data[1].name_common, speciesName2: res.data[2].name_common, speciesName3: res.data[3].name_common});
        console.log("res.data ", res.data)
        // console.log("'state' of speciesArray", this.state.speciesArray);
        // console.log("'state' of speciesName0", this.state.speciesName0);
        // console.log("'state' of speciesName1", this.state.speciesName1);
        // console.log("'state' of speciesName2", this.state.speciesName2);
        // console.log("'state' of speciesName3", this.state.speciesName3);
      })
      .catch(err => console.log(err));
  };


  render() {
    // variable declaration goes before the return
    let test = this.state.click ? <div>Hello</div> : <div>Bye bye</div>;


    const showMushData = this.state.speciesArray.map(function(data, foo) {
      return ([
          <p key={foo}>{data.name_common}</p>,
          <p key={foo}>{data.name_call}</p>,
          <p key={foo}>{data.name_latin}</p>
      ]);
   });
 

    return (

      <div className="Mushroompage">

        <Grid container spacing={24}>
          
        <Grid item xs={1}></Grid>
        <Grid item xs={2}><MediaCard /> { showMushData[0]} </Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2}><MediaCard />{ showMushData[1]} </Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2}><MediaCard />{ showMushData[2]} </Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2}><MediaCard />{ showMushData[3]} </Grid>

        <Grid item xs={3} style={{marginTop: 100}}>
            <ControlledExpansionPanels /> </Grid>
          <Grid item xs={8} > <RecipeReviewCard/>{ test } </Grid>
        </Grid>

      </div>
      );
    }
  };




  export default MushPage;


