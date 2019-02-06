import React, { Component } from "react";
import ControlledExpansionPanels from "../components/Sidebar/Sidebar";
import MediaCard from "../components/MediaCard/MediaCard";
import Grid from "@material-ui/core/Grid";
import '../pages/MushPage.css';
import API from "../utils/API";

class MushPage extends Component {

  constructor () {
    super()
    this.state = {
      speciesArray: [],
      description: "Get more info by clicking on a mushroom",
      grows_on: "",
      recipesArray: [],
      fun_facts: []
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
        console.log(this.state.speciesArray)
      })
      .catch(err => console.log(err));
  };

  getMushroomInfo = (description) => {
    this.setState({
      description
    });
  };


  render() {

    return (
      <div className="Mushroompage">
      <Grid container spacing={16} style={{width: '100%', backgroundColor:"FEF2E4"}}>
        <Grid container spacing={24} style={{width: '100%', marginTop: "12%"}}>
          <Grid item xs={3} style={{marginTop: 100}}>
            {/* glossary sidebar */}
            <ControlledExpansionPanels />

          </Grid>
          <Grid item xs={9} style={{width:"100%"}}>
            
              <Grid container spacing={8} style={{width:"100%"}} direcion="row" justify="center" alignItems="center">
                  
                  {this.state.speciesArray.map(item => (
                    <Grid item xs={3} key={item._id}>
                    <MediaCard 
                      name_common={item.name_common} 
                      name_latin={item.name_latin}
                      picsrc = {item.imageUrl}
                      description = {item.description}
                      grows_on = {item.grows_on}
                      getMushroomInfo={this.getMushroomInfo}
                      recipesArray= {item.recipes}
                      fun_facts= {item.fun_facts}
                    />
                    </Grid>
                   ))
                  }

                  <Grid item xs={3}></Grid>
                  <Grid item xs={6} style={{marginTop: 20}}>
                    {this.state.description}
                  </Grid>
                  <Grid item xs={2}></Grid>
              </Grid>
          </Grid>
        </Grid>
      </Grid>

      </div>
      );
    }
  };

  export default MushPage;


