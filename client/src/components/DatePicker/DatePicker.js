
// A native date picker example with type="date", it can be used as a calendar too.

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";


const styles = theme => ({
    root:{
        marginTop: 60,
        marginLeft: 30
    },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // width: 1500,
  },
});

function DatePickers(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        
            <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="Select Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </form>
         
        
    </div>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);