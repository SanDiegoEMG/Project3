import React, { Component } from 'react';
import PropTypes from "prop-types";
import Calendar from 'react-calendar';
import { withStyles } from '@material-ui/core';
const styles = theme => ({
  onChange: {
    color: "#fcfc1e5"
  }
})
 
class MyApp extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div style={{
        marginTop: 100
      }}>
        <Calendar 
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

MyApp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyApp);