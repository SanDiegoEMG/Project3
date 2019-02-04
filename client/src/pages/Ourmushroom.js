import React, { Component } from "react";
import ControlledExpansionPanels from "../components/Sidebar/Sidebar";
import MediaCard from "../components/Cards/Cards";
import MediaCard2 from "../components/Cards/Card2";
import MediaCard3 from "../components/Cards/Card3";
import MediaCard4 from "../components/Cards/Card4";
import Grid from "@material-ui/core/Grid";
import MushroomImageCard1 from "../components/MushroomGallery/Mushroom4Gallery";
import BottomAppBar from "../components/Footer/Footer";


class Mushroom extends Component {

    state ={
      currentSrc:null,
      currentTitle: null

    }

  modifyCardSrc = (src, MushroomTypeTitle) => {
    this.setState({currentSrc:src});
    this.setState({currentTitle:MushroomTypeTitle});
  }

  // const { classes } = props;
  
  render(){
  return (
    // <div className={classes.root}>
    <div className="Mushroompage">

      <Grid container spacing={16} style={{width: '100%', backgroundColor:"FEF2E4"}}>
      
      <Grid container spacing={24} style={{width: '100%', marginTop: 100}}>
      
        <Grid item xs={3} style={{marginTop: 100}}>
          <ControlledExpansionPanels />
        </Grid>

        <Grid item xs={9} style={{width:"100%"}}>
        
        <Grid container spacing={8} style={{width:"100%"}} direcion="row" justify="center" alignItems="center">
          {/* <Grid item xs={12}> */}
            <Grid item xs={1}></Grid>
            <Grid item xs={2}><MediaCard modifyCardSrc={this.modifyCardSrc} /></Grid>
            <Grid item xs={2}><MediaCard2 modifyCardSrc={this.modifyCardSrc} /></Grid>
            <Grid item xs={2}><MediaCard3 modifyCardSrc={this.modifyCardSrc} /></Grid>
            <Grid item xs={2}><MediaCard4 modifyCardSrc={this.modifyCardSrc} /></Grid>
        

            <Grid item xs={3}></Grid>
            <Grid item xs={6} style={{marginTop: 20}}><MushroomImageCard1 src={this.state.currentSrc} titleOfMush={this.state.currentTitle} /></Grid>
            <Grid item xs={2}></Grid>
            
          </Grid>
        {/* </Grid> */}
        
        </Grid>
        </Grid>
        
      </Grid>
      <BottomAppBar/>
    </div>

  )
  }
};

export default Mushroom;