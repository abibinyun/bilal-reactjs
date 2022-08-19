import React from "react";
import Bar from "./Bar";
import Product from "./Product";

export default class Reusable extends React.Component {
  state = {
    value: 0,
  };

  handleValue = (data) => {
    this.setState({
      value: data,
    });
  };

  render() {
    return (
      <div className="main" style={{ marginTop: "20px" }}>
        <Bar value={this.state.value} />
        <Product reciveValue={this.handleValue} />
      </div>
    );
  }
}
