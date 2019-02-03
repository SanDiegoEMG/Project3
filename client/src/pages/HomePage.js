import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../utils/API"
import './HomeStyle.css';


let imgUrl = 'https://travelblond.files.wordpress.com/2015/11/gaslamp-quarter.jpg';
const styles = theme => ({
  paper: {
    // padding: theme.spacing.unit * 2,
    textAlign: "center",
    backgroundColor: "none",
    color: theme.palette.text.secondary
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
              
                Big Box
              
              <br></br>
              Two words.
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
                
                  Big Box 2
                
                 <br></br>
                  One.
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