import React, { useContext } from "react";
import css from "./style.module.css";
import BurgerContext from "../../context/BurgerContext";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  const burgerContext = useContext(BurgerContext);
  const disabledIngredients = { ...burgerContext.burger.ingredients };

  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }

  return (
    <div className={css.BuildControls}>
      <p>
        Total Price: <strong>{burgerContext.burger.totalPrice}</strong>
      </p>

      {Object.keys(burgerContext.burger.ingredientNames).map((el) => {
        return (
          <BuildControl
            disabledIngredient={disabledIngredients[el]}
            type={el}
            ingredient={burgerContext.burger.ingredientNames[el]}
            key={el}
          />
        );
      })}

      <button
        onClick={props.showConfirmModal}
        className={css.OrderButton}
        disabled={!burgerContext.burger.purchasing}
      >
        Check Out
      </button>
    </div>
  );
};

export default BuildControls;
