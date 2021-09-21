import React, { useState } from "react";
import axios from "../axios-orders";

const Context = React.createContext();

const initialState = {
  saving: false,
  token: null,
  userId: null,
  logginIn: false,
  errorCode: "",
  error: "",
};

export const UserStore = (props) => {
  const [state, setState] = useState(initialState);

  const signUpUser = (email, password) => {
    setState({ ...state, saving: true });

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBynCwZZ2y9ytKQOlon2_FODGqvu55jN44",
        data
      )
      .then((result) => {
        const token = result.data.idToken;
        const userId = result.data.localId;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);

        setState({
          ...state,
          saving: false,
          token,
          userId,
          error: null,
          errorCode: null,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          saving: false,
          error: err.message,
          errorCode: err.code,
        });
      });
  };

  return (
    <Context.Provider value={{ state, signUpUser }}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
