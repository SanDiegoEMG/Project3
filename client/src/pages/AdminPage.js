import React, {Component} from 'react';
// import AuthService from '../components/AuthService';
import API from "../utils/API";
// import './Login.css'
// import {Link} from 'react-router-dom';

class Batch extends Component {
  constructor() {
    super();
    this.state = {
      batchNum: "",
      bagNum: "",
      species: "",
      bagSize: "",
      growthStage: ""
  }
  }


  handleFormSubmit = event => {
    
    event.preventDefault();

    API.startBatch(this.state.batchNum, this.state.bagNum, this.state.species, this.state.bagSize, this.state.growthStage)
      .then(res => {
        alert(`Added: ${res.data.species}`)
        this.setState({ 
          batch: res.data,
          bag: res.data,
          species: res.data,
          bagSize: res.data,
          growth: res.data
        })

        // once user is logged in
        // take them to their profile page
        // this.props.history.replace(`/profile`);
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
  };

  render() {
    return (
      <div className="container">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1 className="AdminpageTitle">Batch Information</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="batchNum">Batch Number:</label>
            <input className="form-control"
                   placeholder="20190204"
                   name="batchNum"
                   type="number"
                   id="batchNum"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="bagNum">Bag Number:</label>
            <input className="form-control"
                   placeholder="Enter Bag Number"
                   name="bagNum"
                   type="number"
                   id="bagNum"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="species">Species:</label>
            <input className="form-control"
                   placeholder="Enter Species Here"
                   name="species"
                   type="text"
                   id="species"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="bagSize">Bag Size:</label>
            <input className="form-control"
                   placeholder="Enter Bag Size"
                   name="bagSize"
                   type="number"
                   id="bagSize"
                   onChange={this.handleChange}/>
          </div>
          {/* <div className="form-group">
            <label htmlFor="growthStage">Growth Stage:</label>
            <input className="form-control"
                   placeholder="Enter Growth Stage"
                   name="growthStage"
                   type="text"
                   id="growthStage"
                   onChange={this.handleChange}/>
          </div> */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {/* <p><Link to="/signup">Go to Signup</Link></p> */}
      </div>

    );
  }
}

export default Batch;