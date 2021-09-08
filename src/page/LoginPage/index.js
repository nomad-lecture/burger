import React, { Component } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";

export class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    alert("login ..." + this.state.password + "....." + this.state.email);
  };

  render() {
    return (
      <div className={css.Login}>
        <input type="text" placeholder="Email" onChange={this.changeEmail} />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={this.changePassword}
        />
        <Button text="Login" btnType="Success" clicked={this.login} />
      </div>
    );
  }
}

export default Login;
