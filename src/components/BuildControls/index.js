import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerActions";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  const disabledIngredients = { ...props.ingredients };

  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }

  return (
    <div className={css.BuildControls}>
      <p>
        Total Price: <strong>{props.totalPrice}</strong>
      </p>

      {Object.keys(props.ingredientNames).map((el) => {
        return (
          <BuildControl
            disabledIngredient={disabledIngredients[el]}
            type={el}
            ingredient={props.ingredientNames[el]}
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

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
    disabledOrder: !state.burgerReducer.purchasing,
    ingredientNames: state.burgerReducer.ingredientNames,
  };
};

export default connect(mapStateToProps)(BuildControls);
