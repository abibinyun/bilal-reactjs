import React from "react";
import ClassComponent from "./pembahasan/ClassComopnent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama="ini adalah props" kota="Jakarta" />
        <FunctionalComponent nama="ini adalah props" kota="Jakarta" />
      </div>
    );
  }
}
