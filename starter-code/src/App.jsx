import React, { Component } from "react";
import "./App.css";

import foods from "./foods.json";

import AddFood from "./components/AddFood";

import FoodBox from "./components/Foodbox";
import Button from "react-bootstrap/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      active: event.target.checked
    });
  }

  render() {
    return (
      <div className="App">
        {/* TODO save the food variable in a state */}
        {foods.map(food => (
          <FoodBox foods={food} />
        ))}
        <div>
          <Button onClick={this.handleClick && <AddFood />} variant="success">
            Add Food
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
