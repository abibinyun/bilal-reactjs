import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

// Form.jsx untuk formulir user interface
// sebagai input, update, dan delete

const LabelAdd = styled.label`
  //   background-color: #ffffff;
  margin-bottom: 1rem;
  color: #ffffff;
  font-size: 60px;
  text-shadow: -3px 2px 0px #00e6e6;
`;
const LabelUpdate = styled.label`
  //   background-color: #00a3e0;
  margin-bottom: 1rem;
  color: #fbff01;
  font-size: 60px;
  text-shadow: -3px 2px 0px #00e6e6;
`;

const ButtonAdd = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: #00e6e6;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

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

  @keyframes glowing {
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

const ButtonUpdate = styled.button`
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

  @keyframes glowing {
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

const Input = styled.input`
  border: 1px solid blue;
  border-radius: 5px;
  width: 200px;
  margin-right: 15px;

  &&::placeholder {
    text-align: center;
  }
`;

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleForm = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        {props.edit ? (
          <>
            {/* Update todo */}
            <LabelUpdate>Update Todo</LabelUpdate>
            <br />
            <Input type="text" placeholder="Please update your todo" onChange={handleChange} value={input} />
            <ButtonUpdate>Update</ButtonUpdate>
          </>
        ) : (
          <>
            {/* Input todo */}
            <LabelAdd>Input Todo</LabelAdd>
            <br />
            <Input type="text" placeholder="Please input your todo" onChange={handleChange} value={input} />
            <ButtonAdd>add</ButtonAdd>
          </>
        )}
      </form>
    </div>
  );
}

export default Form;
