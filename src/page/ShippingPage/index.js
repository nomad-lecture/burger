import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { Route } from "react-router-dom";
import ContactData from "../../components/ContactData";

class ShippingPage extends Component {
  goBack = () => {
    this.props.history.goBack();
  };

  showContactData = () => {
    this.props.history.push("/shipping/contact");
  };

  render() {
    console.log(this.props);
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "24px" }}>
          <strong> Your Order </strong>
        </p>
        <p style={{ fontSize: "24px" }}>
          <strong>Total Price: {this.props.totalPrice}</strong>
        </p>
        <Burger />
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
          <ContactData />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(ShippingPage);
