import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";

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
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className={css.Login}>
        {this.props.userId && <Redirect to="/orders" />}
        <input type="text" placeholder="Email" onChange={this.changeEmail} />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={this.changePassword}
        />
        {this.props.firebaseError && (
          <div style={{ color: "red" }}>
            {this.props.firebaseError} | {this.props.firebaseErrorCode}
          </div>
        )}
        {this.props.logginIn ? (
          <Spinner />
        ) : (
          <Button text="Login" btnType="Success" clicked={this.login} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logginIn: state.signupLoginReducer.logginIn,
    firebaseError: state.signupLoginReducer.firebaseError,
    firebaseErrorCode: state.signupLoginReducer.firebaseErrorCode,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDipatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(Login);
