import React, { Component } from "react";

class AddFood extends Component {
  constructor() {
    super();
    this.state = {
      name: "José",
      age: 26,
      profession: "Lead Teacher at Ironhack Lisbon",
      reportsTo: "",
      teamMembers: [
        { id: "alvaro", name: "Álvaro" },
        { id: "goncalo", name: "Gonçalo" },
        { id: "carmen", name: "Carmen" }
      ]
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleProfessionChange = this.handleProfessionChange.bind(this);
    this.handleManagerChange = this.handleManagerChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleAgeChange(event) {
    this.setState({
      age: event.target.valueAsNumber
    });
  }

  handleProfessionChange(event) {
    this.setState({
      profession: event.target.value
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
            />
          </div>
          <div>
            <label htmlFor="profession">Profession</label>
            <input
              type="text"
              value={this.state.profession}
              onChange={this.handleProfessionChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddFood;
