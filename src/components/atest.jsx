import React, { Component } from "react";

class Input extends Component {
  state = { name: "" };

  myChangeHandler = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <p>Enter your name:</p>
        <input
          type="text"
          style={{ border: "2px solid black" }}
          onChange={this.myChangeHandler}
        />
        <button onClick={() => this.props.onClick(this.state.name)}>OK</button>
      </div>
    );
  }
}

export default Input;
