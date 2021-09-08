import React, { Component } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";

export class Signup extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword1 = (e) => {
    this.setState({ password1: e.target.value });
  };

  changePassword2 = (e) => {
    this.setState({ password2: e.target.value });
  };

  signup = () => {
    alert(
      "Sign Up ..." +
        this.state.email +
        "...." +
        this.state.password1 +
        " ... " +
        this.state.password2
    );
  };

  render() {
    return (
      <div className={css.Signup}>
        <h1>Login Form</h1>
        <div>Enter Your information</div>
        <input type="text" placeholder="Email" onChange={this.changeEmail} />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={this.changePassword1}
        />
        <input
          type="password"
          placeholder="Re-Enter your password"
          onChange={this.changePassword2}
        />
        <Button text="Register" btnType="Success" clicked={this.signup} />
      </div>
    );
  }
}

export default Signup;
