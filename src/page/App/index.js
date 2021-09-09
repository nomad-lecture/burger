import React, { useState, useEffect } from "react";
import css from "./style.module.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import Signup from "../SignupPage";
import Logout from "../../components/Logout";
import * as loginActions from "../../redux/actions/loginActions";

const App = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSideBar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));

    if (token && userId) {
      if (expireDate > new Date()) {
        props.autoLogin(token, userId);
        props.autoLogoutAfterMillisec(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        props.logout();
      }
    }
  }, []);

  return (
    <div>
      <Toolbar toggleSideBar={toggleSideBar} />
      <SideBar showSidebar={showSidebar} toggleSideBar={toggleSideBar} />
      <main className={css.Content}>
        UserID: {props.userId}
        {props.userId ? (
          <Switch>
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/orders" component={OrderPage} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={BurgerPage} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/login" />
          </Switch>
        )}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(loginActions.loginUserSuccess(token, userId)),
    logout: () => {
      dispatch(loginActions.logout());
    },
    autoLogoutAfterMillisec: (ms) => {
      dispatch(loginActions.autoLogoutAfterMillisec(ms));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
