import React from "react";
import css from "./style.module.css";

const BuildControl = (props) => {
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.ingredient}</div>
      <button
        className={css.Less}
        onClick={() => props.deleteEvent(props.type)}
        disabled={props.disabledIngredient}
      >
        Delete
      </button>
      <button className={css.More} onClick={() => props.addEvent(props.type)}>
        Add
      </button>
    </div>
  );
};

export default BuildControl;
