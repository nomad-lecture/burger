import React, { Component } from "react";
import css from "./style.module.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import Signup from "../SignupPage";
import Logout from "../../components/Logout";

class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
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
          <Switch>
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/orders" component={OrderPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={Signup} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={BurgerPage} />
          </Switch>
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

export default connect(mapStateToProps)(App);
