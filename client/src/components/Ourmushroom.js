import React from "react";
import ControlledExpansionPanels from "./Sidebar/Sidebar";
import MediaCard from "./Cards/Cards";
import Grid from "@material-ui/core/Grid";


function Ourmushroom(props) {

  console.log(props)

  // const { classes } = props;
  return (
    // <div className={classes.root}>
    <div className="Mushroompage">


      <Grid container spacing={22}>
      
        <Grid item xs={3} style={{marginTop: 100}}>
          <ControlledExpansionPanels />
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid item xs={2}><MediaCard speciesList={props.speciesList}/></Grid>
        <Grid item xs={2}><MediaCard /></Grid>
        <Grid item xs={2}><MediaCard /></Grid>
        <Grid item xs={2}><MediaCard /></Grid>
        
      </Grid>
    </div>

  )
};
export default Ourmushroom;