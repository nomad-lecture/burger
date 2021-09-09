import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "../General/Button";
import css from "./style.module.css";
import Spinner from "../General/Spinner";
import { withRouter } from "react-router-dom";
import * as actions from "../../redux/actions/orderActions";

const ContactData = (props) => {
  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);
  const [street, setStreet] = useState(null);

  useEffect(() => {
    if (props.newOrderStatus.finished && !props.newOrderStatus.error) {
      props.history.replace("/orders");
    }

    return () => {
      props.clearOrder();
    };
  }, [props.newOrderStatus.finished]);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeCity = (e) => {
    setCity(e.target.value);
  };

  const changeStreet = (e) => {
    setStreet(e.target.value);
  };

  const saveOrder = () => {
    const order = {
      userId: props.userId,
      ingredients: props.ingredients,
      totalPrice: props.totalPrice,
      address: {
        name,
        city,
        street,
      },
    };

    props.saveOrderAction(order);
  };

  return (
    <div className={css.ContactData}>
      Total Price : {props.totalPrice}
      <div>
        {props.newOrderStatus.error &&
          `Order save process failed : ${props.newOrderStatus.error}`}
      </div>
      {props.newOrderStatus.saving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={changeName}
            type="text"
            name="name"
            placeholder="your name"
          />
          <input
            onChange={changeCity}
            type="text"
            name="city"
            placeholder="your city"
          />
          <input
            onChange={changeStreet}
            type="text"
            name="street"
            placeholder="your street address"
          />
          <Button text="Sent" btnType="Success" clicked={saveOrder} />
        </div>
      )}
    </div>
  );
};

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
    clearOrder: () => dispatch(actions.clearOrder()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));
