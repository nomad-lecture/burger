import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./page/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserStore } from "./context/UserContext";

// const logger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("My Logger Middleware : Dispatching ==> ", action);
//       console.log("My Logger Middleware : State before: ", store.getState());
//       const result = next(action);
//       console.log("My Logger Middleware : State after: ", result);
//       return result;
//     };
//   };
// };

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const reducers = combineReducers({
//   burgerReducer,
//   orderReducer,
//   signupLoginReducer,
// });

// const middlewares = [logger, thunk];

// const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(...middlewares))
// );

ReactDOM.render(
  <BrowserRouter>
    <UserStore>
      <App />
    </UserStore>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
