import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  background-color: lightgreen;
  overflow: auto;
  margin: 0 auto;
`;
const Link = styled.a`
  float: right;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 24px;
`;

export default class Bar extends React.Component {
  render() {
    return (
      <Nav>
        <Link href="#">{this.props.value}</Link>
      </Nav>
    );
  }
}
