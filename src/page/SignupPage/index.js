import React, { useEffect, useState, useContext } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Signup = (props) => {
  const ctx = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const signup = () => {
    if (password1 === password2) {
      ctx.signUpUser(email, password1);
    } else {
      setError("Password does not match");
    }
  };

  return (
    <div className={css.Signup}>
      {ctx.state.userId && <Redirect to="/" />}
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
      {ctx.state.error && <div style={{ color: "red" }}>{ctx.state.error}</div>}
      {ctx.state.saving && <Spinner />}
      <Button text="Register" btnType="Success" clicked={signup} />
    </div>
  );
};

export default Signup;
