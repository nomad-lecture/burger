import React, { Component } from "react";
import css from "./style.module.css";
import { Route, Switch } from "react-router-dom";

import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";

class App extends Component {
  state = {
    showSidebar: false,
    favorite: "N/A",
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  choose = (ingredient) => {
    this.setState({ favorite: ingredient });
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
          <p>Chosen ingredient: {this.state.favorite}</p>
          <Switch>
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/orders" component={OrderPage} />
            <Route
              path="/"
              render={() => <BurgerPage choose={this.choose} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
