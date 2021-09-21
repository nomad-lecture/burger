import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import UserContext from "../../context/UserContext";

const Login = (props) => {
  const ctx = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    ctx.loginUser(email, password);
  };
  return (
    <div className={css.Login}>
      {ctx.state.userId && <Redirect to="/orders" />}
      <input type="text" placeholder="Email" onChange={changeEmail} />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={changePassword}
      />
      {ctx.state.error && (
        <div style={{ color: "red" }}>
          {ctx.state.error} | {ctx.state.errorCode}
        </div>
      )}
      {ctx.state.logginIn ? (
        <Spinner />
      ) : (
        <Button text="Login" btnType="Success" clicked={login} />
      )}
    </div>
  );
};

export default Login;
