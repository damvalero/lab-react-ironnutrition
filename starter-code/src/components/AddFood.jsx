import React, { Component } from "react";

class AddFood extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <form>
          {/* add the image */}
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="calories">Calories</label>
            <input type="number" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddFood;
