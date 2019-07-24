import React, { Component } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import FlipMove from "react-flip-move";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      currentNumber: "",
      prevNumber: "",
      operand: ""
    };
  }

  addInput = val => {
    this.setState({ input: this.state.input + val });
  };

  addZeroInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  addDecimal = val => {
    if (!this.state.input.includes(".")) {
      this.setState({ input: this.state.input + val });
    }
  };

  deleteInput = () => {
    this.setState({ input: "" });
  };

  add = () => {
    this.setState({
      prevNumber: this.state.input,
      input: "",
      operand: "plus"
    });
  };

  minus = () => {
    this.setState({
      prevNumber: this.state.input,
      input: "",
      operand: "minus"
    });
  };

  ori = () => {
    this.setState({
      prevNumber: this.state.input,
      input: "",
      operand: "ori"
    });
  };

  divide = () => {
    this.setState({
      prevNumber: this.state.input,
      input: "",
      operand: "divide"
    });
  };

  equal = () => {
    // de ce nu merge daca folosesc setState() ?
    this.state.currentNumber = this.state.input;
    if (this.state.operand == "plus") {
      this.setState({
        input:
          parseFloat(this.state.prevNumber) +
          parseFloat(this.state.currentNumber)
      });
    }
    if (this.state.operand == "minus") {
      this.setState({
        input:
          parseFloat(this.state.prevNumber) -
          parseFloat(this.state.currentNumber)
      });
    }
    if (this.state.operand == "ori") {
      this.setState({
        input:
          parseFloat(this.state.prevNumber) *
          parseFloat(this.state.currentNumber)
      });
    }
    if (this.state.operand == "divide") {
      this.setState({
        input:
          parseFloat(this.state.prevNumber) /
          parseFloat(this.state.currentNumber)
      });
    }
  };

  render() {
    var rez = this.state.input;
    return (
      <div className="mainContainer">
        <div className="left">
          <h1>CALCULATOR APP</h1>
          <p>Made with React</p>
        </div>
        <div>
          <div className="calculator">
            {/* nu vre flip move-u asta fut gura lui */}
            <FlipMove>
              <Input duration={150} easing="linear">
                {rez}
              </Input>
            </FlipMove>

            <div>
              <Button handleClick={this.addInput}>7</Button>
              <Button handleClick={this.addInput}>8</Button>
              <Button handleClick={this.addInput}>9</Button>
              <Button handleClick={this.divide}>/</Button>
            </div>
            <div>
              <Button handleClick={this.addInput}>4</Button>
              <Button handleClick={this.addInput}>5</Button>
              <Button handleClick={this.addInput}>6</Button>
              <Button handleClick={this.ori}>x</Button>
            </div>
            <div>
              <Button handleClick={this.addInput}>1</Button>
              <Button handleClick={this.addInput}>2</Button>
              <Button handleClick={this.addInput}>3</Button>
              <Button handleClick={this.add}>+</Button>
            </div>
            <div>
              <Button handleClick={this.addDecimal}>.</Button>
              <Button handleClick={this.addZeroInput}>0</Button>
              <Button handleClick={this.equal}>=</Button>
              <Button handleClick={this.minus}>-</Button>
            </div>
            <ClearButton handleClick={this.deleteInput} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
