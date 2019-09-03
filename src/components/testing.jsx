import React, { Component } from "react";
import Input from "./atest";
import Text from "./atest1";

class Testing extends Component {
  state = { answer: "" };

  handleClick = answer => {
    this.setState({ answer });
  };

  render() {
    return (
      <div>
        <Text answer={this.state.answer} />
        <Input onClick={this.handleClick} />
      </div>
    );
  }
}

export default Testing;
