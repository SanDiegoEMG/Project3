import React from "react";
import ControlledExpansionPanels from "../components/Sidebar/Sidebar";
import MediaCard from "../components/Cards/Cards";
import MediaCard2 from "../components/Cards/Card2";
import MediaCard3 from "../components/Cards/Card3";
import MediaCard4 from "../components/Cards/Card4";
import Grid from "@material-ui/core/Grid";
// import MushroomImageCard1 from "../components/MushroomGallery/Mushroom4Gallery";


function Mushroom(props) {
  // const { classes } = props;
  return (
    // <div className={classes.root}>
    <div className="Mushroompage">

      <Grid container spacing={16} style={{width: '100%'}}>
      
      <Grid container spacing={24} style={{marginTop: 100}}>
      
        <Grid item xs={3} style={{marginTop: 100}}>
          <ControlledExpansionPanels />
        </Grid>
        
        <Grid item xs={1}></Grid>
        <Grid item xs={2}><MediaCard /></Grid>
        <Grid item xs={2}><MediaCard2 /></Grid>
        <Grid item xs={2}><MediaCard3 /></Grid>
        <Grid item xs={2}><MediaCard4 /></Grid>
        

        <Grid item xs={4}></Grid>
        {/* <Grid item xs={6}><MushroomImageCard1></MushroomImageCard1></Grid> */}
        <Grid item xs={2}></Grid>
        
        </Grid>
      </Grid>
    </div>

  )
};
export default Mushroom;