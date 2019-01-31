import React, { Component } from "react";
import withAuth from "./withAuth";
import API from "../utils/API";
import { Link } from "react-router-dom";


class Profile extends Component {
  state = {
    username: "",
    email: "",
    mushroom: "",
  };



  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      });
    });
    this.loadMushrooms()
  }

  loadMushrooms = () => {
    API.getAllSpecies()
      .then(res =>
        // console.log(res.data[1].name_common),
        this.setState({ mushroom: res.data[1].name_common}),
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="container Profile">
        <h1>On the profile page!</h1>
        <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p>
        <p>Just One meager mushroom:{this.state.mushroom}</p>
        <Link to="/">Go home</Link>
      </div>
    );
  }
}

export default withAuth(Profile);
