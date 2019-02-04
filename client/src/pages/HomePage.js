import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
<<<<<<< HEAD
=======
// import API from "../utils/API"
import './HomeStyle.css';

>>>>>>> ed60cb0bff3f0292950662143ff2078213cf0cd7

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
                Welcome to You Me Mushrooms!
              </p>
              <hr></hr>
              Growing and harvesting specialty gourmet, medicinal mushrooms for San Diego restaurants, neighborhood markets, and community members.
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
                Local. Nutritious. Delicious. Sustainable.                
                </p> 
                <hr></hr>
                 Available at local restaurants, neighborhood markets, and direct to public sale.
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