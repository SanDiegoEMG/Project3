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


      {/* NEW HOME COMPONENT */}
        
<<<<<<< HEAD
        
        
        
        
=======
        <Grid container spacing={24} style={{width:"100%"}}>

>>>>>>> ed60cb0bff3f0292950662143ff2078213cf0cd7
        <DatePicker></DatePicker>
        
        <InputField></InputField>
        <Table></Table>
        {/* PREVIOUS CODE FOR REACT HEADER AND LOGO */}
        {/* <div className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* </div> */}
        </Grid>
      </div>
    );
  }
}

export default AdminPage;