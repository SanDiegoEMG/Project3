import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    position: "absolute",
    backgroundSize: 1000,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    // SHOULD CHANGE MARGINTOP WITH NEW NAVBAR
    marginTop: 0,
    backgroundColor: "#fcf1e5",
    height: 1000
  },
  secondCardOverlap: {
    position: "absolute",
    marginLeft: 500,
    marginTop: 390
  }


});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

      <Grid container spacing={22}>

        {/* THIS GRID IS JUST FOR ALIGNMENT */}
        <Grid item xs={1}>
          <p className={classes.paper}></p>
        </Grid>

        <Grid item xs={7}>
          <p className={classes.paper}>
            <Paper style={{padding: 10, marginTop: 15}}>
              <h1>
                Title 1
              </h1>
              <br></br>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </Paper>
          </p>
        </Grid>

        <Grid item xs={4}>
          <p className={classes.paper}></p>
        </Grid>
        
        <div className={classes.secondCardOverlap}>

            <Grid item xs={10} style={{marginBottom: 100}}>
            <p className={classes.paper}>
              <Paper style={{padding: 10}}>
                <h1>
                  Title 2
                </h1>
                 <br></br>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </Paper>
            </p>

            </Grid>
        </div>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);