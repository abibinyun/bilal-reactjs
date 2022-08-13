import React from "react";

export default class List extends React.Component {
  state = {
    users: ["abi", "ganteng", "banget"],
  };
  render() {
    return (
      <div>
        <h1>List Component</h1>
        <div>
          <ul>
            {this.state.users.map((user, id) => (
              <li key={id}>{user}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
