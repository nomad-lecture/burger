import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Ingredients : Bacon : {props.order.ingredients.bacon}, Salad :
        {props.order.ingredients.salad}, Meat : {props.order.ingredients.meat},
        Cheese : {props.order.ingredients.cheese},
      </p>
      <p>
        Address :{props.order.address.name} | {props.order.address.street} |
        {props.order.address.city}
      </p>
      <p>
        Total Price : <strong>{props.order.totalPrice} MNT</strong>
      </p>
    </div>
  );
};

export default Order;
