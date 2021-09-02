const initialState = {
  ingredients: {
    salad: 0,
    meat: 0,
    cheese: 0,
    bacon: 0,
  },
  totalPrice: 0,
};

const INGERIENT_PRICES = {
  salad: 150,
  cheese: 250,
  bacon: 800,
  meat: 1500,
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.ingredient]: state.ingredients[action.ingredient] + 1,
      },
      totalPrice: state.totalPrice + INGERIENT_PRICES[action.ingredient],
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.ingredient]: state.ingredients[action.ingredient] - 1,
      },
      totalPrice: state.totalPrice - INGERIENT_PRICES[action.ingredient],
    };
  }

  return state;
};

export default reducer;
