import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../General/Button";
import css from "./style.module.css";
import Spinner from "../General/Spinner";
import { withRouter } from "react-router-dom";
import * as actions from "../../redux/actions/orderActions";

class ContactData extends Component {
  state = {
    name: null,
    city: null,
    street: null,
  };

  componentDidUpdate() {
    if (
      this.props.newOrderStatus.finished &&
      !this.props.newOrderStatus.error
    ) {
      this.props.history.replace("/orders");
    }
  }

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
    const order = {
      userId: this.props.userId,
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      address: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
      },
    };

    this.props.saveOrderAction(order);
  };

  render() {
    return (
      <div className={css.ContactData}>
        Total Price : {this.props.totalPrice}
        <div>
          {this.props.newOrderStatus.error &&
            `Order save process failed : ${this.props.newOrderStatus.error}`}
        </div>
        {this.props.newOrderStatus.saving ? (
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
    totalPrice: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrderStatus,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));
