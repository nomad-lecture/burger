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
      <Button text="decline" />
      <Button text="continue" />
    </div>
  );
};

export default OrderSummery;
