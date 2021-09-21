import React, { useState, useEffect, Suspense, useContext } from "react";
import css from "./style.module.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Toolbar from "../../components/Toolbar";
import SideBar from "../../components/SideBar";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import Logout from "../../components/Logout";
import { BurgerStore } from "../../context/BurgerContext";
import { OrdersStore } from "../../context/OrdersContext";
import UserContext from "../../context/UserContext";
const BurgerPage = React.lazy(() => {
  return import("../BurgerPage");
});

const OrderPage = React.lazy(() => {
  return import("../OrderPage");
});

const SignupPage = React.lazy(() => {
  return import("../SignupPage");
});

const App = (props) => {
  const userCtx = useContext(UserContext);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSideBar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");

    if (token && userId) {
      if (expireDate > new Date()) {
        userCtx.loginUserSuccess(token, userId, expireDate, refreshToken);
        // props.autoLogoutAfterMillisec(
        //   expireDate.getTime() - new Date().getTime()
        // );
      } else {
        userCtx.logoutUser();
      }
    }
  }, []);

  return (
    <div>
      <Toolbar toggleSideBar={toggleSideBar} />
      <SideBar showSidebar={showSidebar} toggleSideBar={toggleSideBar} />
      <main className={css.Content}>
        <BurgerStore>
          <Suspense fallback={<div> Wait please </div>}>
            {userCtx.state.userId ? (
              <Switch>
                <Route path="/logout" component={Logout} />
                <Route path="/orders">
                  <OrdersStore>
                    <OrderPage />
                  </OrdersStore>
                </Route>

                <Route path="/shipping" component={ShippingPage} />
                <Route path="/" component={BurgerPage} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Redirect to="/login" />
              </Switch>
            )}
          </Suspense>
        </BurgerStore>
      </main>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     autoLogin: (token, userId) =>
//       dispatch(loginActions.loginUserSuccess(token, userId)),
//     logout: () => {
//       dispatch(loginActions.logout());
//     },
//     autoLogoutAfterMillisec: (ms) => {
//       dispatch(loginActions.autoLogoutAfterMillisec(ms));
//     },
//   };
// };

export default App;
