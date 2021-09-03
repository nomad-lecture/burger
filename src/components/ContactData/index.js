import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../General/Button";
import css from "./style.module.css";
import axios from "../../axios-orders";
import Spinner from "../General/Spinner";
import { withRouter } from "react-router-dom";

class ContactData extends Component {
  state = {
    name: null,
    city: null,
    street: null,
    loading: false,
  };

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };

  changeStreet = (e) => {
    this.setState({ street: e.target.value });
  };

  saveOrder = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      address: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
      },
    };

    axios
      .post("orders.json", order)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ loading: false });
        this.props.history.replace("/orders");
      });
  };

  render() {
    return (
      <div className={css.ContactData}>
        Total Price : {this.props.totalPrice}
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div>
            <input
              onChange={this.changeName}
              type="text"
              name="name"
              placeholder="your name"
            />
            <input
              onChange={this.changeCity}
              type="text"
              name="city"
              placeholder="your city"
            />
            <input
              onChange={this.changeStreet}
              type="text"
              name="street"
              placeholder="your street address"
            />
            <Button text="Sent" btnType="Success" clicked={this.saveOrder} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.totalPrice,
    ingredients: state.ingredients,
  };
};

export default connect(mapStateToProps)(withRouter(ContactData));
