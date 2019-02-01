import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

import FilledTextFields from "./Text-fields";
import ContainedButtons from "./Button";


const styles = theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    height: 100,
    // backgroundColor: "#b62519",
    backgroundColor: "#7a5a40"
  },
  textInput: {
    width: 600
  },
  stayInfo: {
    color: "#fcf1e5",
    position: "absolute",
    marginTop: 5,
    right: 330,
    fontSize: ".9em",
    display: "flex",
    textTransform: "lowercase"
  },
  signUp: {
    position: "absolute",
    marginTop: 5,
    right: 0,
    padding: 10,
    display: "flex"
  },
  signUpTxt: {
    fontFamily: "DryBrush",
    color: "#ef9a5c",
    // color: "#fcf1e5",
    fontSize: "3em",
    marginTop: 5,
    paddingRight: 100
  }
});

class BottomAppBar extends Component {
  state = {
    name: "",
    email: ""
  };
  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <div className={classes.stayInfo}>
            <p>Stay informed as we grow and harvest ...</p>
          </div>
          <div className={classes.signUp}>
            <div className={classes.signUpTxt}>
              <p>Newsletter Sign Up!</p>
            </div>
            <div>
              <FilledTextFields />
            </div>

            <div>

              <ContainedButtons />
            </div>
          </div>
          {/* {this.state.name}
          {this.state.email}
          <input
            className={classes.textInput}
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <input
            className={classes.textInput}
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
          /> */}
        </AppBar>
      </Fragment>
    );
  }
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomAppBar);
