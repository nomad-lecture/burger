import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>
        Total Price: <strong>{props.price}</strong>
      </p>

      {Object.keys(props.ingredientsNames).map((el) => {
        return (
          <BuildControl
            addEvent={props.addEvent}
            deleteEvent={props.deleteEvent}
            disabledIngredient={props.disabledIngredients[el]}
            type={el}
            ingredient={props.ingredientsNames[el]}
            key={el}
          />
        );
      })}

      <button
        onClick={props.showConfirmModal}
        className={css.OrderButton}
        disabled={props.disabledOrder}
      >
        Check Out
      </button>
    </div>
  );
};

export default BuildControls;
