import React, { Component } from 'react';
import McForm from "../components/McForm/McForm"
// import logo from './logo.svg';
// import DatePicker from '../components/DatePicker/DatePicker';
// import Table from '../components/Table/Table';
// import InputField from '../components/InputField/InputField';
import Grid from "@material-ui/core/Grid";

class AdminPage extends Component {

  render() {

    return (
      <div>
        <Grid container spacing={20} style={{width:"100%"}}>

        <McForm/>

        </Grid>
      </div>
    );
  }
}

export default AdminPage;


