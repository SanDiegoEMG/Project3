import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import API from "../utils/API"
import './HomeStyle.css';


let imgUrl = 'https://travelblond.files.wordpress.com/2015/11/gaslamp-quarter.jpg';
const styles = theme => ({
  paper: {
    // padding: theme.spacing.unit * 2,
    textAlign: "center",
    backgroundColor: "none",
    color: "4e4a4a",
    fontFamily: "Chelsea Market",
    fontSize: "larger",
    fontWeight: 525,
  },
  root: {
    backgroundImage : 'url(' + imgUrl + ')',
    flexGrow: 1,
    backgroundSize: 1000,
    backgroundPosition: 'center',
    // SHOULD CHANGE MARGINTOP WITH NEW NAVBAR
    marginTop: 0,
    backgroundColor: "#fcf1e5",
    height: 500
  },
  headline: {
    fontFamily: "Chelsea Market",
    fontSize: "x-large",
    fontWeight: 600,
    marginBottom: 0,
    color: "#000000"
  },
  headline2: {
    fontFamily: "Chelsea Market",
    fontSize: "23px",
    fontWeight: 600,
    marginBottom: 0,
    color: "#2f2f2f"
  },
  noBulletList: {
    listStyleType: "none"
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

      <Grid container spacing={16} style={{width: '100%'}}>

        {/* THIS GRID IS JUST FOR ALIGNMENT */}
        <Grid item xs={1}>
          <p className={classes.paper}></p>
        </Grid>

        <Grid item xs={7}>
          <p className={classes.paper}>
            <Paper style={{padding: 10, marginTop: 455}}>
              <p className={classes.headline}>
                You. Me. Mushrooms.
              </p>
              <p className={classes.headline}>
                Who we are and what we do
              </p>
              <hr></hr>
              We grow, harvest, and deliver specialty gourmet culinary & medicinal mushrooms for San Diego restaurants, neighborhood markets, and direct-to-public sales.

              We are on a mission to expand awareness & availability of these healthy delectibles to our San Diego community.
          </Paper>
          </p>
        </Grid>

        <Grid item xs={4}>
          <p className={classes.paper}></p>
        </Grid>
        
        <Grid item xs={4}></Grid>

        <Grid item xs={7}>
            <p className={classes.paper}>
              <Paper style={{padding: 10, marginBottom: 200}}>
                <p className={classes.headline2}>
                Local. Nutritious. Delicious.               
                </p> 
                <p className={classes.headline2}>
                ALL the mushrooms we grow are naturally          
                </p>
                <hr></hr>
                <ul className={classes.noBulletList}>
                  <li>No fat | choloestorol | gluten </li>
                  <li>Low in calories, high in nutrition</li>
                  <li>On average, contain over 18 different amino acids</li>
                  <li>High in niacin</li>
                  <li>Good source of: potassium | riboflavin | pantothenic acid | phosphorus | copper</li>
                  <li>Contain 1,3/1,6 Beta-Glucans</li>
                </ul>
                

               
  
        
              </Paper>
            </p>
            </Grid>

            <Grid item xs={1}>
            <p className={classes.paper}></p>
            </Grid>
        
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);