import React, { useState } from "react";
import OrderPage from "../page/OrderPage";
import ShippingPage from "../page/ShippingPage";

const BurgerContext = React.createContext();

export const BurgerStore = (props) => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0,
  });

  const addIngredient = (ingredient) => {
    setIngredients({
      ...ingredients,
      [ingredient]: ingredients[ingredient] + 1,
    });
  };

  const removeIngredient = (ingredient) => {
    setIngredients({
      ...ingredients,
      [ingredient]: ingredients[ingredient] - 1,
    });
  };

  return (
    <BurgerContext.Provider
      value={{ ingredients, addIngredient, removeIngredient }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};

export default BurgerContext;
