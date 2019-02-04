import React, { Component } from "react";
import ControlledExpansionPanels from "../components/Sidebar/Sidebar";
import MainCard from "../components/MainCard/MainCard";
import MediaCard from "../components/MushCard/MushCard";
import Grid from "@material-ui/core/Grid";
import API from "../utils/API";
import pinkMushroom from "../images/pink-oyster.jpg"
import lionsMane from "../images/lions-mane.jpg"
import pearlOyster from "../images/pearl-oyster.jpg"
import kingOyster from "../images/king-oyster.jpg"
import KingOyster from "../components/SpeciesDetails/KingOyster"
// import Ourmushroom from "../components/Ourmushroom";

class MushPage extends Component {
  
  constructor () {
    super()
    this.state = {
      speciesArray: [],
      click: true,
      mainCardContent: ""

      //USED these to get dif info on the mush cards but was too limited
      // speciesName0: "",
      // speciesName1:"",
      // speciesName2:"",
      // speciesName3:""
  }
  };

  componentDidMount() {
    this.showSpecies();
  }

  // this code delivers all species in an array of objects
  showSpecies = () => {
    API.getAllSpecies()
      .then(res => {
        this.setState({ speciesArray: res.data});
        console.log("res.data ", res.data)


        // First way to get the mushroom cards to display different data - too limited
        // this.setState({ speciesArray: res.data, speciesName0: res.data[0].name_common, speciesName1: res.data[1].name_common, speciesName2: res.data[2].name_common, speciesName3: res.data[3].name_common});
        // console.log("res.data ", res.data)
        // console.log("'state' of speciesArray", this.state.speciesArray);
        // console.log("'state' of speciesName0", this.state.speciesName0);
        // console.log("'state' of speciesName1", this.state.speciesName1);
        // console.log("'state' of speciesName2", this.state.speciesName2);
        // console.log("'state' of speciesName3", this.state.speciesName3);
      })
      .catch(err => console.log(err));
  };


  // PSEUDO CODE if there is nothing assigned to 'mainCardContent' state, show the 'landing' info in the mainCard - otherwise, show info associated with each mushroom from the components -> SpeciesDetails 
  // changeMainCardContent = event => {
  //   if (!mainCardContent) {

  //   }
  // };




  render() {

    // VARIABLE DECLARATIONS GO BEFORE THE RETURN
    // let test = this.state.click ? <div>Hello</div> : <div>Bye bye</div>;
    // let test2 = this.state

    // code from stackOverflow 
    let showMushData = this.state.speciesArray.map(function(data, foo) {
      return ([
        <div key={foo}>
          <p >{data.name_common}</p>
          {/* <p >{data.name_call}</p> */}
          <p >{data.name_latin}</p>
        </div>
      ]);
   });
 

    return (

      <div className="Mushroompage">

        <Grid container spacing={24}>
          

        <Grid item xs={1}></Grid>
        <Grid item xs={2}
          onClick={(event) => { 
            event.preventDefault() 
            console.log("lion's mane")
            // this.setState({ mainCardContent: {lionsmane} })
          }}
        ><MediaCard 
          showMushData={showMushData[0]} 
          picsrc = {lionsMane}
          pictitle = {"Lion's mane mushroom"}
        /></Grid>


        <Grid item xs={1}></Grid>
        <Grid item xs={2}
          onClick={(event) => { 
            event.preventDefault() 
            console.log("pearl oyster")
            // this.setState({ mainCardContent: {pearloyster} })
          }}
        ><MediaCard 
          showMushData={showMushData[1]}
          picsrc = {pearlOyster}
          pictitle = { "Pearl Oysters"}
          /> </Grid>


        <Grid item xs={1}></Grid>
        <Grid item xs={2}
          onClick={(event) => { 
            event.preventDefault() 
            console.log("pink oyster")
            // this.setState({ mainCardContent: {pinkoyster} })

          }}
        ><MediaCard 
          showMushData = { showMushData[2] }
          picsrc = {pinkMushroom}
          pictitle = "pink oysters on white background"
          /> </Grid>


        <Grid item xs={1}></Grid>
        <Grid item xs={2}
          onClick={(event) => { 
            event.preventDefault() 
            console.log("king oyster")
            this.setState({ mainCardContent: {KingOyster} })
          }}
        ><MediaCard 
          showMushData={ showMushData[3] }  
          picsrc = {kingOyster}
          pictitle = "king oyster mushrooms"
          /></Grid>


        <Grid item xs={3} style={{marginTop: 100}}>
            <ControlledExpansionPanels /> </Grid>
          <Grid item xs={8} > 
          
          <MainCard><KingOyster/></MainCard>
          {/* // stateTextTest = {test} />  */}
          </Grid>
        </Grid>

      </div>
      );
    }
  };




  export default MushPage;


