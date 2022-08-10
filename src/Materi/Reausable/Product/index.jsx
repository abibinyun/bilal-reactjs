import React from "react";
import styled from "styled-components";
import Counter from "../Counter";

const imageProduct = "https://source.unsplash.com/collection/190727/400x300";

const CardContainer = styled.div`
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font:family: arial;
`;

const Image = styled.img`
  width: 100%;
`;
const Heading = styled.h1`
  font-size: 18px;
`;
const Price = styled.p`
  color: grey;
  font-size: 22px;
`;
const Description = styled.p`
  font-size: small;
  margin: auto 10px;
`;

export default class Product extends React.Component {
  handleValue = (value) => {
    this.props.reciveValue(value);
  };

  render() {
    return (
      <div>
        <CardContainer>
          <Image src={imageProduct} alt="img" />
          <Heading>Title Card</Heading>
          <Price>0</Price>
          <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni fugit excepturi sunt nam eos sapiente repellat maxime. Assumenda, nisi et.</Description>
          <Counter reciveValue={this.handleValue} />
        </CardContainer>
      </div>
    );
  }
}
