import React, { Component } from 'react';
import BatchForm from "../components/BatchForm/BatchForm"
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

        <BatchForm/>

        </Grid>
      </div>
    );
  }
}

export default AdminPage;


