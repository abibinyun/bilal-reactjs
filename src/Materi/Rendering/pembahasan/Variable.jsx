import React from "react";

export default class Variable extends React.Component {
  state = {
    a: null,
    b: true,
    c: "",
    d: 0,
  };

  render() {
    return (
      <div>
        <h1>ini Variable Component</h1>
        <hr />
        <div> a: {this.state.a}</div>
        <div> b: {this.state.b}</div>
        <div> c: {this.state.c}</div>
        <div> d: {this.state.d}</div>
        <div> e: {this.props.d}</div>
      </div>
    );
  }
}
