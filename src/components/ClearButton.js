import React, { Component } from "react";

class ClearButton extends Component {
  state = {};
  render() {
    return (
      <button onClick={() => this.props.handleClick()} className="clear-btn">
        Clear
      </button>
    );
  }
}

export default ClearButton;
