import React from "react";
import Button from "../General/Button";

const OrderSummery = (props) => {
  return (
    <div>
      <h3>Your Order</h3>
      <p>your chosen ingredients</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientsNames[el]} : {props.ingredients[el]}
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

export default OrderSummery;
