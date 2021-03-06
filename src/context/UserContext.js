import React, { useState } from "react";
import axios from "../axios-orders";

const Context = React.createContext();

const initialState = {
  saving: false,
  token: null,
  userId: null,
  logginIn: false,
  errorCode: null,
  error: null,
  expireDate: null,
};

export const UserStore = (props) => {
  const [state, setState] = useState(initialState);

  const loginUserSuccess = (userId, token, expireDate, refreshToken) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("expireDate", expireDate);
    localStorage.setItem("refreshToken", refreshToken);

    setState({
      ...state,
      logginIn: false,
      userId,
      token,
      error: null,
      errorCode: null,
      expireDate,
    });
  };

  const autoRenewTokenAfterMillisec = (ms) => {
    axios
      .post(
        "https://securetoken.googleapis.com/v1/token?key=AIzaSyBynCwZZ2y9ytKQOlon2_FODGqvu55jN44",
        {
          grant_type: "refresh_token",
          refresh_token: localStorage.getItem("refreshToken"),
        }
      )
      .then((result) => {
        const token = result.data.id_token;
        const userId = result.data.user_id;
        const expiresIn = result.data.expires_in;
        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        const refreshToken = result.data.refresh_token;

        loginUserSuccess(userId, token, expireDate, refreshToken);
      })
      .catch((err) => {
        setState({
          ...state,
          logginIn: false,
          error: err.message,
          errorCode: err.code,
          token: null,
          userId: null,
          expireDate: null,
        });
      });

    setTimeout(() => {
      autoRenewTokenAfterMillisec(3600 * 1000);
    }, ms);
  };

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

  const loginUser = (email, password) => {
    setState({ ...state, logginIn: true });

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBynCwZZ2y9ytKQOlon2_FODGqvu55jN44",
        data
      )
      .then((result) => {
        const token = result.data.idToken;
        const userId = result.data.localId;
        const expiresIn = result.data.expiresIn;
        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        const refreshToken = result.data.refreshToken;

        loginUserSuccess(userId, token, expireDate, refreshToken);

        // dispatch(autoLogoutAfterMillisec(expiresIn * 1000));
      })
      .catch((err) => {
        setState({
          ...state,
          logginIn: false,
          error: err.message,
          errorCode: err.code,
          token: null,
          userId: null,
          expireDate: null,
        });
      });
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expireDate");
    localStorage.removeItem("refreshToken");

    setState({ initialState });
  };

  return (
    <Context.Provider
      value={{
        state,
        signUpUser,
        loginUser,
        logoutUser,
        loginUserSuccess,
        autoRenewTokenAfterMillisec,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
