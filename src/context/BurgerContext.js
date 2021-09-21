import React, { useState } from "react";
import axios from "../axios-orders";
const BurgerContext = React.createContext();

const initialState = {
  ingredients: {
    salad: 0,
    meat: 0,
    cheese: 0,
    bacon: 0,
  },
  totalPrice: 0,
  purchasing: false,
  ingredientNames: {
    bacon: "Bacon",
    cheese: "Cheese",
    meat: "Meat",
    salad: "Salad",
  },

  saving: false,
  finished: false,
  error: null,
};

const INGERIENT_PRICES = {
  salad: 150,
  cheese: 250,
  bacon: 800,
  meat: 1500,
};

export const BurgerStore = (props) => {
  const [burger, setBurger] = useState(initialState);

  const saveBurger = (newOrder) => {
    setBurger({ ...burger, saving: true });

    // const token = getState().signupLoginReducer.token;
    // orders.json?auth=${token}
    axios
      .post(`orders.json`, newOrder)
      .then((response) => {
        setBurger({ ...burger, saving: false, finished: true, error: null });
      })
      .catch((error) => {
        setBurger({ ...burger, saving: false, finished: true, error });
      });
  };

  const clearBurger = () => {
    setBurger(initialState);
  };

  const addIngredient = (ingredient) => {
    setBurger({
      ...burger,
      ingredients: {
        ...burger.ingredients,
        [ingredient]: burger.ingredients[ingredient] + 1,
      },
      totalPrice: burger.totalPrice + INGERIENT_PRICES[ingredient],
      purchasing: true,
    });
  };

  const removeIngredient = (ingredient) => {
    const newPrice = burger.totalPrice - INGERIENT_PRICES[ingredient];
    setBurger({
      ...burger,
      ingredients: {
        ...burger.ingredients,
        [ingredient]: burger.ingredients[ingredient] - 1,
      },
      totalPrice: newPrice,
      purchasing: newPrice > 0,
    });
  };

  return (
    <BurgerContext.Provider
      value={{
        burger,
        addIngredient,
        removeIngredient,
        saveBurger,
        clearBurger,
      }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};

export default BurgerContext;
