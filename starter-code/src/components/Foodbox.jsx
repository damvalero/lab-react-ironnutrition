import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Foodbox extends Component {
  render() {
    const foods = this.props.foods;
    return (
      <div className="box d-flex align-items-start h-25">
        <Card className="my-3">
          <Card.Body className="">
            <Card.Img variant="left" src={foods.image} height="100px" />
            <Card.Title>{foods.name}</Card.Title>
            <Card.Text> {foods.calories}</Card.Text>
            <Card.Text> {foods.quantity}</Card.Text>
            <Button variant="primary">+</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Foodbox;
