import React, {Component} from 'react';
// import AuthService from '../components/AuthService';
import API from "../utils/API";
import axios from "axios";
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
      growthStage: "",
      bagSize: ""
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

  // Kat Search Batch --------------------
  searchBatch = () => {
    const { searchNumber } = this.state;
    axios
      .get("/api/batch" + searchNumber)
      .then(data => {
        console.log(data);
        this.setState({ batches: data.data });
      })
      .catch(err => console.log(err));
  };
  // Kat Search Batch --------------------

  render() {
    // Kat Search Batch --------------------
    const { batches } = this.state;
    let batchRows;
    if (batches) {
      batchRows = batches.map(batch => {
        return (
          <div
            style={{
              border: "1px solid #ced4da",
              backgroundColor: "white",
              borderRadius: ".25rem",
              color: "#007bff",
              textDecoration: "underline",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 10,
              marginBottom: 5
            }}
          >
            <div>
              {`Batch Number: ${batch.batchNum}, Bag Size: ${batch.bagSize}`}
            </div>
          </div>
        );
      });
    } else {
      batchRows = <p>Loading...</p>;
    }
    // Kat Search Batch --------------------

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

        {/* Kat Search Batch -------------------- */}
        <br/>
        <div>
          <label htmlFor="bagSize">Search for a batch:</label>
          <input
            className="form-control"
            placeholder="Enter batch #"
            name="searchNumber"
            type="number"
            id="bagSize"
            onChange={this.handleChange}
          />
          <br/>
          <button onClick={this.searchBatch} className="btn btn-primary">Search</button>
        </div>
        <br/>
        {batchRows}
        {/* Kat Search Batch -------------------- */}
        
      </div>

    );
  }
}

// export default Batch;
export default withAuth(Batch);