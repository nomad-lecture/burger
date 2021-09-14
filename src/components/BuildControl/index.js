import React, { useContext } from "react";
import css from "./style.module.css";
import BurgerContext from "../../context/BurgerContext";

const BuildControl = (props) => {
  const burgerContext = useContext(BurgerContext);
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.ingredient}</div>
      <button
        className={css.Less}
        onClick={() => burgerContext.removeIngredient(props.type)}
        disabled={props.disabledIngredient}
      >
        Delete
      </button>
      <button
        className={css.More}
        onClick={() => burgerContext.addIngredient(props.type)}
      >
        Add
      </button>
    </div>
  );
};

export default BuildControl;
