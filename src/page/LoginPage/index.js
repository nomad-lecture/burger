import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    props.login(email, password);
  };
  return (
    <div className={css.Login}>
      {props.userId && <Redirect to="/orders" />}
      <input type="text" placeholder="Email" onChange={changeEmail} />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={changePassword}
      />
      {props.firebaseError && (
        <div style={{ color: "red" }}>
          {props.firebaseError} | {props.firebaseErrorCode}
        </div>
      )}
      {props.logginIn ? (
        <Spinner />
      ) : (
        <Button text="Login" btnType="Success" clicked={login} />
      )}
    </div>
  );
};

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
