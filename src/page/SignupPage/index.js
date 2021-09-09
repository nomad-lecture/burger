import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/signupActions";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const signup = () => {
    if (password1 === password2) {
      props.signupUser(email, password1);
    } else {
      setError("Password does not match");
    }
  };

  return (
    <div className={css.Signup}>
      {props.userId && <Redirect to="/" />}
      <h1>Login Form</h1>
      <div>Enter Your information</div>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword1(e.target.value)}
      />
      <input
        type="password"
        placeholder="Re-Enter your password"
        onChange={(e) => setPassword2(e.target.value)}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {props.firebaseError && (
        <div style={{ color: "red" }}>{props.firebaseError}</div>
      )}
      {props.saving && <Spinner />}
      <Button text="Register" btnType="Success" clicked={signup} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.signupLoginReducer.saving,
    firebaseError: state.signupLoginReducer.firebaseError,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
