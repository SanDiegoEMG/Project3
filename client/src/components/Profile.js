import React, { Component } from "react";
import withAuth from "./withAuth";
import API from "../utils/API";
import { Link } from "react-router-dom";


class Profile extends Component {
  state = {
    username: "",
    email: "",
    mushrooms: [],
    admins: [],
    name_first:"",
    common_name: "",
    formal_name: "",
  };



  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      });
    });
    this.loadMushrooms()
    this.loadAdmin()
  }

    // Em code ... pulls getAllSpecies from utils->API which uses axios to connect with server API routes in server.js
  loadMushrooms = () => {
    API.getAllSpecies()
      .then(res =>
        // console.log(res.data),
        this.setState({ mushrooms: res.data[3]}),
      )
      .catch(err => console.log(err));
  };

    loadAdmin = () => {
      API.getAllAdmin()
      .then(res => 
        this.setState({admins: res.data[0]}))
    }


  render() {
    return (
      <div className="container Profile">
        <h1>On the profile page!</h1>
        <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p>
        <Link to="/">Go home</Link>
        {/* Em added code */}
        <hr/>
        <p><strong>Listing one meager mushroom...</strong></p>
        <hr/>  
        <p> Common name: {this.state.mushrooms.name_common} </p>
        <p> Species name: {this.state.mushrooms.name_latin}</p>
        <h3>Display from admin array</h3>
        <p> Admin: {this.state.admins.name_first}</p>
        
        
        {/* End Em code */}
      </div>
    );
  }
}

export default withAuth(Profile);
