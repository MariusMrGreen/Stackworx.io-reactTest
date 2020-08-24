import React, { Component } from "react";
import ReactDOM from "react-dom";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleOnChange = (e) => {
    const inputText = e.target.value;
    this.setState({
      value: inputText,
    });
    this.props.onChange(inputText);
  };

  render() {
    return <input value={this.state.value} onChange={this.handleOnChange} />;
  }
}

export default Input;
