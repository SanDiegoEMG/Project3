import React, { Component } from 'react';
import withAuth from './withAuth';
import API from '../utils/API';
import { Link } from 'react-router-dom';

class Profile extends Component {

  state = {
    username: "",
    email: "",
    name:[],
    name_latin: [],
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });

    API.getAllSpecies(this.props.species).then(res => {
      this.setState ({
      name: res.data.name_common,
      name_latin: res.data.name_latin
    })
    console.log(this.state)
  })
  }

  render() {
    return (
      <div className="container Profile">
        <h1>On the profile page!</h1>
        <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p>
        <p>mush name: {this.state.name}</p>
        <p>formal name: {this.state.name_latin}</p>
        <Link to="/">Go home</Link>
      </div>
    )
  }
}

export default withAuth(Profile);