import React, { useEffect, useContext } from "react";
// import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import OrdersContext from "../../context/OrdersContext";
import UserContext from "../../context/UserContext";

const OrderPage = (props) => {
  const ctx = useContext(OrdersContext);
  const userCtx = useContext(UserContext);

  useEffect(() => {
    ctx.loadOrders(userCtx.state.userId, userCtx.state.token);
  }, []);

  return (
    <div>
      {ctx.state.loading ? (
        <Spinner />
      ) : (
        ctx.state.orders.map((el) => <Order key={el[0]} order={el[1]} />)
      )}
    </div>
  );
};

export default OrderPage;
