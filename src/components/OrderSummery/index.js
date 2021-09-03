import React from "react";
import { connect } from "react-redux";

import Button from "../General/Button";

const OrderSummery = (props) => {
  return (
    <div>
      <h3>Your Order</h3>
      <p>your chosen ingredients</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <strong>Your Total Price : {props.totalPrice} MNT </strong>
      <p>go to next step ?</p>
      <Button clicked={props.onCancel} btnType="Danger" text="Decline" />
      <Button clicked={props.onContinue} btnType="Success" text="Continue" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    ingredientNames: state.burgerReducer.ingredientNames,
    totalPrice: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(OrderSummery);
