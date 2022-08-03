import React from "react";
import axios from "axios";
import Table from "react-bootstrap/esm/Table";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      // <h3 className="text-center">LIST NAME</h3>
      <Table className="container mt-5 sm-3 table table-dark table-striped">
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>USERNAME</td>
            <td>EMAIL</td>
            <td>ADDRESS</td>
            <td>PHONE</td>
            <td>WEBSITE</td>
            <td>COMPANY</td>
          </tr>
        </thead>
        {this.state.persons.map((row) => {
          return (
            <tbody>
              <tr>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.username}</td>
                <td>{row.email}</td>
                <td>
                  {row.address.street}
                  {row.address.suite}
                  {row.address.city}
                </td>
                <td>{row.phone}</td>
                <td>{row.website}</td>
                <td>{row.company.name}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    );
  }
}
