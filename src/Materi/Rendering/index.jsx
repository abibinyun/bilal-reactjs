import React from "react";
import Conditional from "./pembahasan/Conditional";
import List from "./pembahasan/List";
import Variable from "./pembahasan/Variable";

export default class Rendering extends React.Component {
  render() {
    return (
      <div>
        <h1>hello from Rendering component</h1>
        <hr />
        <Variable />
        <Conditional />
        <List />
      </div>
    );
  }
}
