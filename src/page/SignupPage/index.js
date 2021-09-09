import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/signupActions";

export class Signup extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    error: "",
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
    if (this.state.password1 === this.state.password2) {
      this.props.signupUser(this.state.email, this.state.password1);
    } else {
      this.setState({ error: "Password does not match" });
    }
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
        {this.state.error && (
          <div style={{ color: "red" }}>{this.state.error}</div>
        )}
        <Button text="Register" btnType="Success" clicked={this.signup} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
