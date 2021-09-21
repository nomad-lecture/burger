import React, { useEffect, useContext } from "react";
// import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import OrdersContext from "../../context/OrdersContext";

const OrderPage = (props) => {
  useEffect(() => {
    ctx.loadOrders(props.userId);
  }, []);

  const ctx = useContext(OrdersContext);

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
