import React from "react";
import * as icon from "react-bootstrap-icons";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-white text-center pb-5">
        <p>
          Created with <icon.HeartFill color="red" /> by{" "}
          <a href="https://www.instagram.com/abibinyun/" className="text-white fw-bold">
            Muhammad Bilal
          </a>
        </p>
      </footer>
    );
  }
}
