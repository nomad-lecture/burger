import React, { Component } from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { Route } from "react-router-dom";
import ContactData from "../../components/ContactData";

export default class ShippingPage extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let totalPrice = 0;
    for (let param of query.entries()) {
      if (param[0] !== "totalPrice") ingredients[param[0]] = param[1];
      else totalPrice = param[1];
    }
    this.setState({ ingredients, totalPrice });
  }

  goBack = () => {
    this.props.history.goBack();
  };

  showContactData = () => {
    this.props.history.push("/shipping/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "24px" }}>
          <strong> Your Order </strong>
        </p>
        <p style={{ fontSize: "24px" }}>
          <strong>Total Price: {this.state.totalPrice}</strong>
        </p>
        <Burger ingredients={this.state.ingredients} />
        <Button
          clicked={this.goBack}
          btnType="Danger"
          text="Decline shipping"
        />
        <Button
          clicked={this.showContactData}
          btnType="Success"
          text="Enter shipping information"
        />

        <Route path="/shipping/contact">
          <ContactData
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
          />
        </Route>
      </div>
    );
  }
}
