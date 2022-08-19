import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Lists from "./Component/List";
import "./index.css";

const style = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
};

function TodoList() {
  return (
    <div style={style} className="bg">
      <Lists />
    </div>
  );
}

export default TodoList;
