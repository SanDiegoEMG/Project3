import React, { Component } from 'react';
// import logo from './logo.svg';
import DatePicker from '../components/DatePicker/DatePicker';
import Table from '../components/Table/Table';
import InputField from '../components/InputField/InputField';
import Grid from "@material-ui/core/Grid";

class AdminPage extends Component {

  render() {
    console.log(process.env.REACT_APP_SECRET_CODE);


    return (
      <div>
        <br/><br/><br/><br/><br/><br/>
        
        <Grid container spacing={24} style={{width:"100%", marginBottom: "10%"}}>

        <DatePicker></DatePicker>
        
        <InputField></InputField>
        <Table></Table>
        </Grid>
      </div>
    );
  }
}

export default AdminPage;