import React, { useState } from "react";
import axios from "../axios-orders";

const context = React.createContext();

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export const OrdersStore = (props) => {
  const [state, setState] = useState(initialState);

  const loadOrders = (userId) => {
    setState({ ...state, loading: true });

    // const token = getState().signupLoginReducer.token;
    // orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}
    axios
      .get(`orders.json`)
      .then((response) => {
        const orders = Object.entries(response.data).reverse();
        setState({ ...state, orders, loading: false, error: null });
      })
      .catch((error) => setState({ ...state, loading: false, error }));
  };

  return (
    <context.Provider value={{ state, loadOrders }}>
      {props.children}
    </context.Provider>
  );
};

export default context;
