import React, { Component } from "react";
import ControlledExpansionPanels from "../components/Sidebar/Sidebar";
import MainCard from "../components/MainCard/MainCard";
import MediaCard from "../components/MediaCard/MediaCard";
import Grid from "@material-ui/core/Grid";
import API from "../utils/API";


class MushPage extends Component {
  
  constructor () {
    super()
    this.state = {
      speciesArray: [],
      click: true,
      description: "Get more info by click on a mushroom"
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
      })
      .catch(err => console.log(err));
  };

  getMushroomInfo = (description) => {
    this.setState({description: description});
  };


  // PSEUDO CODE if there is nothing assigned to 'mainCardContent' state, show the 'landing' info in the mainCard - otherwise, show info associated with each mushroom from the components -> SpeciesDetails 
  // changeMainCardContent = event => {
  //   if (!mainCardContent) {

  //   }
  // };




  render() {
 

    return (

      <div className="Mushroompage">

      <Grid container spacing={16} style={{width: '100%', backgroundColor:"FEF2E4"}}>
      
        <Grid container spacing={24} style={{width: '100%'}}>

          
          <Grid item xs={3} style={{marginTop: 100}}>
          {/* here goes sidebar */}

            <ControlledExpansionPanels />
          </Grid>

          <Grid item xs={9} style={{width:"100%"}}>
            
              <Grid container spacing={8} style={{width:"100%"}} direcion="row" justify="center" alignItems="center">

            
                  <Grid item xs={1}></Grid>
                  {this.state.speciesArray.map(item => (
                    <Grid item xs={2} key={item._id}>
                    <MediaCard 
                      name_common={item.name_common} 
                      name_latin={item.name_latin}
                      picsrc = {item.imageUrl}
                      description = {item.description}
                      getMushroomInfo={this.getMushroomInfo}
                    />
                  </Grid>
                  ))}

                  <Grid item xs={3}></Grid>
                  <Grid item xs={6} style={{marginTop: 20}}>
                    <p>{this.state.description}</p>
                    {/* <MainCard
                    src={this.state.currentSrc}
                    ></MainCard> */}
                  </Grid>
                  <Grid item xs={2}></Grid>

              </Grid>
          
          
          </Grid>


        </Grid>
      
      </Grid>








        <Grid container spacing={24}>
          

        <Grid item xs={1}></Grid>
        <Grid item xs={2}
          onClick={(event) => { 
            console.log("lion's mane")
            // this.setState({ mainCardContent: {lionsmane} })
          }}
        ><MediaCard 
          modifiedCardSrc = {this.modifiedCardSrc}
          showMushData={showMushData[0]} 
          picsrc = {lionsMane}
          pictitle = {"Lion's mane mushroom"}
        />
        
        </Grid>


        <Grid item xs={1}></Grid>
        <Grid item xs={2}
          onClick={() => { 
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
          onClick={() => { 
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
          onClick={() => { 
            console.log("king oyster")
            this.setState({ mainCardContent: {KingOyster} })
          }}
        ><MediaCard 
          showMushData={ showMushData[3] }  
          picsrc = {kingOyster}
          pictitle = "king oyster mushrooms"
          /></Grid>


        <Grid item xs={3} style={{border: 'red 1px solid', marginTop: 100,width:"100%"}} direcion="row" justify="center" alignItems="center">
            <ControlledExpansionPanels /> </Grid>
          <Grid container spacing={24} direcion="row" justify="center" alignItems="center">
          <Grid item xs={8}  style={{border: 'red 1px solid'}}> 
          
          <MainCard
          src={this.state.currentSrc}
          ></MainCard>
          {/* // stateTextTest = {test} />  */}
          </Grid>
          
          </Grid>
        </Grid>

      </div>
      );
    }
  };

  export default MushPage;


