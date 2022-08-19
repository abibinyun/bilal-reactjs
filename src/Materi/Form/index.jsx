import React from "react";
import FormElement from "./pembahasan/FormElement";
import Validation from "./pembahasan/Validation";

export default class Form extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Form Component</h1>
        <FormElement />
        <Validation />
      </div>
    );
  }
}
