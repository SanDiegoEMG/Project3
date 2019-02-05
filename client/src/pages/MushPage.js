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
<<<<<<< HEAD
      description: "Get more info by clicking on a mushroom",
      grows_on: "",
      recipes: [],
      fun_facts: [],
=======
      click: true,
      description: "Get more info by click on a mushroom",
      gestation: "Gestation"
>>>>>>> 8b4f75c739334f75ff4f3a297fc8a4d9fe6c4936
  }
  };

  componentDidMount() {
    this.showSpecies();
  }

  // this code delivers all species in an array of objects
  showSpecies = () => {
    API.getAllSpecies()
      .then(res => {
<<<<<<< HEAD
        this.setState({ speciesArray: res.data});
        console.log(this.state.speciesArray)
=======
        this.setState({ speciesArray: res.data, });
>>>>>>> 8b4f75c739334f75ff4f3a297fc8a4d9fe6c4936
      })
      .catch(err => console.log(err));
  };

<<<<<<< HEAD
  getMushroomInfo = (description, recipes, fun_facts, grows_on) => {
    this.setState({
      description: description,
      recipes: recipes,
      fun_facts: fun_facts,
      grows_on: grows_on
    });
  };

  arrayInArray = (data) => {
        data.recipes.forEach ( e => {
        console.log ("this is e ", e)
          })      
    };


  render() {

=======
  getMushroomInfo = (description, gestation) => {
    this.setState({description: description, gestation: gestation});
  };

  render() {
>>>>>>> 8b4f75c739334f75ff4f3a297fc8a4d9fe6c4936
    return (
      <div className="Mushroompage">
      <Grid container spacing={16} style={{width: '100%', backgroundColor:"FEF2E4"}}>
        <Grid container spacing={24} style={{width: '100%', marginTop: "12%"}}>
<<<<<<< HEAD
=======
          
>>>>>>> 8b4f75c739334f75ff4f3a297fc8a4d9fe6c4936
          <Grid item xs={3} style={{marginTop: 100}}>
            {/* glossary sidebar */}
            <ControlledExpansionPanels />

          </Grid>
          <Grid item xs={9} style={{width:"100%"}}>
            
              <Grid container spacing={8} style={{width:"100%"}} direcion="row" justify="center" alignItems="center">
<<<<<<< HEAD
                  
=======
   
>>>>>>> 8b4f75c739334f75ff4f3a297fc8a4d9fe6c4936
                  {this.state.speciesArray.map(item => (
                    <Grid item xs={3} key={item._id}>
                    <MediaCard 
                      name_common={item.name_common} 
                      name_latin={item.name_latin}
                      picsrc = {item.imageUrl}
                      description = {item.description}
<<<<<<< HEAD
                      grows_on = {item.grows_on}
                      // recipes = {item.recipes}
                      fun_facts = {item.fun_facts}
=======
                      gestation = {item.gestation}
>>>>>>> 8b4f75c739334f75ff4f3a297fc8a4d9fe6c4936
                      getMushroomInfo={this.getMushroomInfo}
                      recipes= {this.arrayInArray(item)}
                    />
                    </Grid>
                   ))
                  }

                  <Grid item xs={3}></Grid>
                  <Grid item xs={6} style={{marginTop: 20}}>
<<<<<<< HEAD
                    {this.state.description}
                    {this.state.grows_on}
               
=======
                  <p>{this.state.description}</p>
                  <p>{this.state.gestation}</p>
                    
                      {/* <MainCard
                      src={this.state.currentSrc}
                      ></MainCard> */}
>>>>>>> 8b4f75c739334f75ff4f3a297fc8a4d9fe6c4936
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


