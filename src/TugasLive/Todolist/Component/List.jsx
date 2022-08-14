import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import MapList from "./MapList";
// import "./index.css";

// List.jsx untuk menampung function input, update, dan delete

function Lists() {
  const [lists, setLists] = useState([]);

  const addLists = (list) => {
    const newLists = [list, ...lists];
    setLists(newLists);
  };

  const deleteList = (id) => {
    const deleteArr = [...lists].filter((list) => list.id !== id);
    setLists(deleteArr);
  };

  const updateLists = (listId, newValue) => {
    setLists((previous) => previous.map((item) => (item.id === listId ? newValue : item)));
  };

  return (
    <div>
      <Form onSubmit={addLists} />
      <MapList lists={lists} deleteList={deleteList} updateLists={updateLists} />
    </div>
  );
}
export default Lists;
