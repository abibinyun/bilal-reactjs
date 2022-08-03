import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-white text-center pb-5">
        <p>
          Created with <i className="bi bi-suit-heart-fill text-danger" /> by{" "}
          <a href="https://www.instagram.com/abibinyun/" className="text-white fw-bold">
            Muhammad Bilal
          </a>
        </p>
      </footer>
    );
  }
}
