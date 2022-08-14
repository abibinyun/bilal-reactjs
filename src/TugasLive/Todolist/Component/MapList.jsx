import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// MapList.jsx untuk menamilkan data yang telah di input dari user

const BtnUpdate = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: #fbff01;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 0 6px;

  &&::before {
    content: "";
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &&::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000000;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;
const BtnDelete = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: #ff0000;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 0 6px;

  &&:before {
    content: "";
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &&:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000000;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

function MapList({ lists, deleteList, updateLists }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateLists(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        {lists.map((item, index) => (
          <Col>
            <Card
              style={{
                width: "18rem",
                margin: "5px auto",
                color: "#FFBE32",
                background: "url(https://media.istockphoto.com/vectors/abstract-technology-dot-and-line-connection-digital-hi-tech-design-vector-id1187730870?k=20&m=1187730870&s=170667a&w=0&h=tTMIaNtTS5QcCH3doNalRd8zASDX-wMVMUIRq_-wUlE=)",
              }}
              key={index}
              border="primary"
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "15px" }}>ID: {item.id}</Card.Title>
                <Card.Text style={{ color: "#00FF13", fontSize: "20px", fontWeight: "bold" }}>{item.text}</Card.Text>
                <BtnUpdate variant="primary" onClick={() => setEdit({ id: item.id, value: item.text })}>
                  Update
                </BtnUpdate>
                <BtnDelete variant="warning" onClick={() => deleteList(item.id)}>
                  Delete
                </BtnDelete>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default MapList;
