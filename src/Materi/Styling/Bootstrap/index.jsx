import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcomp from "./KomponenItem/Navbar";
import Jumbotroncomp from "./KomponenItem/Jumbotron";
import Aboutcomp from "./KomponenItem/About";
import Projectcomp from "./KomponenItem/Project";
import Gridjs from "./KomponenItem/Gridjs";
// import Tugascallback from "./KomponenItem/Tugascallback";
import PersonList from "./KomponenItem/Tugascallback";
import Contact from "./KomponenItem/Contact";
import Footer from "./KomponenItem/Footer";
// import styled from "styled-components";

// const TinggiPage = styled.div`
//   height: 4500px;
// `;

export default class Bootstrap extends React.Component {
  render() {
    return (
      // <TinggiPage>
      <div>
        <Navbarcomp />
        <Jumbotroncomp />
        <Aboutcomp />
        <Projectcomp />
        <Gridjs />
        <PersonList />
        <Contact />
        <Footer />
      </div>
      // </TinggiPage>
    );
  }
}
