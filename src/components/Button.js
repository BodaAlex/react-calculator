import React, { Component } from "react";

class Button extends Component {
  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };

  render() {
    return (
      <button
        className={this.isOperator(this.props.children) ? "" : "operator"}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
