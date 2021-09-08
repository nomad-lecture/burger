import React, { Component } from "react";
import css from "./style.module.css";
import { Route, Switch } from "react-router-dom";

import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import Signup from "../SignupPage";

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
          <Switch>
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/orders" component={OrderPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={BurgerPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
