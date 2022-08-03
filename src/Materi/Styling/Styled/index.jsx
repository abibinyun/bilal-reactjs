import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  border-color: blueviolet;
  color: violet;
  border-radius: 5px;

  &:hover {
    background: rgb(131, 131, 252);
    color: aquamarine;
  }
`;

export default class Styled extends React.Component {
  render() {
    return (
      <div>
        <Button>Pencet Saya</Button>
      </div>
    );
  }
}
