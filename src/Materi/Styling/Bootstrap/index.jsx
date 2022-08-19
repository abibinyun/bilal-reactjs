import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcomp from "./KomponenItem/Navbar";
import Jumbotroncomp from "./KomponenItem/Jumbotron";
import Aboutcomp from "./KomponenItem/About";
import Projectcomp from "./KomponenItem/Project";
import PersonList from "./KomponenItem/Tugascallback";
import Contact from "./KomponenItem/Contact";
import Footer from "./KomponenItem/Footer";
import TableReact from "./KomponenItem/Gridjs";

export default class Bootstrap extends React.Component {
  render() {
    return (
      <div id="home">
        <Navbarcomp />
        <Jumbotroncomp />
        <Aboutcomp />
        <Projectcomp />
        <TableReact />
        <PersonList />
        <Contact />
        <Footer />
      </div>
    );
  }
}
