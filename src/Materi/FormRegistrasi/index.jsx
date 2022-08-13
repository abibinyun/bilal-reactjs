import React from "react";
import * as Validator from "validatorjs";
import ShowErrors from "./Komponen/ShowErrors";
import Input from "./Komponen/Input";
import swal from "sweetalert";
import "./index.css";

export default class FormRegistrasi extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    errors: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;

    let data = {
      username,
      email,
      password,
    };

    let rules = {
      username: "required|min:3",
      email: "required|email",
      password: "min:8|required|max:8",
    };

    let validation = new Validator(data, rules);
    validation.passes();
    this.setState({
      errors: [...validation.errors.get("username"), ...validation.errors.get("email"), ...validation.errors.get("password")],
    });

    if (validation.passes()) {
      //   alert(
      //     (<h3>Berhasil daftar</h3>)`
      //   Username: ${this.state.username}
      //   Email: ${this.state.email}
      //   Password: ${this.state.password}
      //   `
      //   );
      swal(
        "Success !",
        `
          Username: ${this.state.username}
          Email: ${this.state.email}
          Password: ${this.state.password}
          `
      );
    }
  };

  render() {
    return (
      <div className="container">
        <div className="bg-form">
          {this.state.errors && <ShowErrors errors={this.state.errors} />}
          <h3>Register Page</h3>
          <form onSubmit={this.handleSubmit} className="form">
            <Input type="text" name="username" label="Username" onChange={(value) => this.setState({ username: value })} placeholder="James joe" />
            <Input type="email" name="email" label="Email" onChange={(value) => this.setState({ email: value })} placeholder="joe@example.com" />
            <Input type="password" name="password" label="Password" onChange={(value) => this.setState({ password: value })} placeholder="joexxxxx" />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
