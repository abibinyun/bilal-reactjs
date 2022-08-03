import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import fotoprofil from "../asset/foto-profil.jpg";

const Jumbo = styled.div`
  background-color: #eee;
  margin-bottom: 30px;
  padding-top: 25rem;
  text-align: center;
`;

export default class Jumbotroncomp extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0 ">
        <Jumbo>
          <img src={fotoprofil} alt="Muhammad bilal ismail" width="200" className="rounded-circle shadow-lg img-thumbnail" />
          <h1 className="display-4">Muhammad Bilal Ismail</h1>
          <p className="lead">Freelancer | Web Developer | Content Creator</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,128C96,160,192,224,288,250.7C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </Jumbo>
      </div>
    );
  }
}
