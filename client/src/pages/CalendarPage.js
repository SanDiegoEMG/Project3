import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// let imgUrl = 'https://travelblond.files.wordpress.com/2015/11/gaslamp-quarter.jpg';
const styles = theme => ({
  


});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

      <Grid container spacing={22}>

        {/* THIS GRID IS JUST FOR ALIGNMENT */}
        <Grid item xs={3}>
          <p className={classes.paper}>leave blank</p>
        </Grid>

        <Grid item xs={3}>
          <p className={classes.paper}>
            hello2
          </p>
        </Grid>

        <Grid item xs={3}>
          <p className={classes.paper}>hello3</p>
        </Grid>
        

        <Grid item xs={3}>
          <p className={classes.paper}>
          </p>
        </Grid>

      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);