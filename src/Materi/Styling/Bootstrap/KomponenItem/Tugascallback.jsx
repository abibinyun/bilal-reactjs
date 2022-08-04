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
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fillOpacity="1"
            d="M0,320L26.7,272C53.3,224,107,128,160,112C213.3,96,267,160,320,170.7C373.3,181,427,139,480,101.3C533.3,64,587,32,640,37.3C693.3,43,747,85,800,101.3C853.3,117,907,107,960,101.3C1013.3,96,1067,96,1120,85.3C1173.3,75,1227,53,1280,58.7C1333.3,64,1387,96,1413,112L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg>
        <h3 className="text-center">LIST NAME</h3>
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
          {this.state.persons.map((row, id) => {
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fillOpacity="1"
            d="M0,128L26.7,117.3C53.3,107,107,85,160,112C213.3,139,267,213,320,240C373.3,267,427,245,480,229.3C533.3,213,587,203,640,202.7C693.3,203,747,213,800,213.3C853.3,213,907,203,960,176C1013.3,149,1067,107,1120,117.3C1173.3,128,1227,192,1280,197.3C1333.3,203,1387,149,1413,122.7L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
}
