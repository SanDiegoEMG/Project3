import React, { Component } from 'react';
// import logo from './logo.svg';
import DatePicker from '../components/DatePicker/DatePicker';
import Table from '../components/Table/Table';
import InputField from '../components/InputField/InputField';

class AdminPage extends Component {

  render() {
    console.log(process.env.REACT_APP_SECRET_CODE);


    return (
      <div>


      {/* NEW HOME COMPONENT */}
        
        
        
        
        
        <DatePicker></DatePicker>
        
        <InputField></InputField>
        <Table></Table>
        {/* PREVIOUS CODE FOR REACT HEADER AND LOGO */}
        {/* <div className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* </div> */}

      </div>
    );
  }
}

export default AdminPage;