import React, { useContext } from "react";
import BurgerContext from "../../context/BurgerContext";
import Button from "../General/Button";

const OrderSummery = (props) => {
  const ctx = useContext(BurgerContext);

  return (
    <div>
      <h3>Your Order</h3>
      <p>your chosen ingredients</p>
      <ul>
        {Object.keys(ctx.burger.ingredients).map((el) => (
          <li key={el}>
            {ctx.burger.ingredientNames[el]} : {ctx.burger.ingredients[el]}
          </li>
        ))}
      </ul>
      <strong>Your Total Price : {ctx.burger.totalPrice} MNT </strong>
      <p>go to next step ?</p>
      <Button clicked={props.onCancel} btnType="Danger" text="Decline" />
      <Button clicked={props.onContinue} btnType="Success" text="Continue" />
    </div>
  );
};

export default OrderSummery;
