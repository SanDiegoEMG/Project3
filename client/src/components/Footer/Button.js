import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MailOutline from "@material-ui/icons/MailOutline";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: 16,
    height: 55,
    marginLeft: 20,
    marginRight: 20,
    textTransform: "lowercase",
    backgroundColor: "#ef9a5c",
    color: "#b62519",
    fontSize: "1.8em",
    fontFamily: "Cookie"
    // fontFamily: "Rancho",
    // fontStyle: "italic",
  },
  input: {
    display: "none"
  }
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div className={classes.btnTxt}>
      <Button variant="contained" className={classes.button} onClick={(e) => { if (window.confirm('Congratulations! You are now signed up to receive news!')) this.deleteItem(e) } }>
        <MailOutline />
        Subscribe
      </Button >
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContainedButtons); 