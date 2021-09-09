import React, { Component } from "react";
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
class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");

    if (token && userId) {
      if (expireDate > new Date()) {
        this.props.autoLogin(token, userId);
        this.props.autoLogoutAfterMillisec(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        this.props.logout();
      }
    }
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={css.Content}>
          UserID: {this.props.userId}
          {this.props.userId ? (
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
  }
}

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
