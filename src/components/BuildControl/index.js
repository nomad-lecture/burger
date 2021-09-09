import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";

import * as actions from "../../redux/actions/burgerActions";

const BuildControl = (props) => {
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.ingredient}</div>
      <button
        className={css.Less}
        onClick={() => props.removeIngredient(props.type)}
        disabled={props.disabledIngredient}
      >
        Delete
      </button>
      <button
        className={css.More}
        onClick={() => props.addIngredient(props.type)}
      >
        Add
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ingredient) => dispatch(actions.addIngredient(ingredient)),
    removeIngredient: (ingredient) =>
      dispatch(actions.removeIngredient(ingredient)),
  };
};

export default connect(null, mapDispatchToProps)(BuildControl);
