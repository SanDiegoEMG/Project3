import React from "react";
import API from "../../utils/API";



class McForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '', source: '', number: null};
      
  
        // makes sure this method doesn't ever get reassigned
        // like using const instead of let
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeSource = this.handleChangeSource.bind(this);
      this.handleChangeNumber = this.handleChangeNumber.bind(this);
      this.startMotherculture = this.addMotherculture.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeName(event) {
      this.setState({name: event.target.value});
    }
    handleChangeSource(event) {
      this.setState({source: event.target.value});
    }
    handleChangeNumber(event) {
      this.setState({number: event.target.value});
    }
  
    handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      this.addMotherculture(this.state.name, this.state.source, this.state.number)
    }

    // this code delivers all species in an array of objects
    addMotherculture = (name, source, number) => {
        API.startMotherculture(name, source, number)
        .then(res => { 
            console.log(res)
        })
        .catch(err => console.log(err));
    };
  
    render() {
        console.log(this.state)
      return (
        <div>
        <h2>Create a new Mother Culture!</h2>
        <form onSubmit={this.handleSubmit}>
          <label> Name:
            <input type="text" value={this.state.value} onChange={this.handleChangeName} />
          </label>
          <br/>
          <label> Source:
            <input type="text" value={this.state.value} onChange={this.handleChangeSource} />
          </label>
          <br/>
          <label> Number:
            <input type="number" value={this.state.value} onChange={this.handleChangeNumber} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
}

export default McForm;