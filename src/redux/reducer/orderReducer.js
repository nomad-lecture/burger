const initialState = {
  //Load Order
  orders: [],
  loading: false,
  error: null,

  //Save order
  newOrderStatus: {
    saving: false,
    finished: false,
    error: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ORDERS_START":
      return {
        ...state,
        loading: true,
      };

    case "LOAD_ORDERS_SUCCESS":
      return {
        ...state,
        loading: false,
        orders: action.orders,
      };

    case "LOAD_ORDERS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case "SAVE_ORDER_START":
      return {
        ...state,
        newOrderStatus: {
          ...state.newOrderStatus,
          saving: true,
        },
      };

    case "SAVE_ORDER_SUCCESS":
      return {
        ...state,
        newOrderStatus: {
          ...state.newOrderStatus,
          saving: false,
          finished: true,
          error: null,
        },
      };

    case "SAVE_ORDER_ERROR":
      return {
        ...state,
        newOrderStatus: {
          ...state.newOrderStatus,
          saving: false,
          finished: true,
          error: action.errorMessage,
        },
      };

    case "CLEAR_ORDER":
      return {
        ...state,
        newOrderStatus: {
          saving: false,
          finished: false,
          error: null,
        },
      };

    default:
      return state;
  }
};

export default reducer;
