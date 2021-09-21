import React, { useContext } from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { Route } from "react-router-dom";
import ContactData from "../../components/ContactData";
import BurgerContext from "../../context/BurgerContext";

const ShippingPage = (props) => {
  const ctx = useContext(BurgerContext);

  const goBack = () => {
    props.history.goBack();
  };

  const showContactData = () => {
    props.history.push("/shipping/contact");
  };

  return (
    <div className={css.ShippingPage}>
      <p style={{ fontSize: "24px" }}>
        <strong> Your Order </strong>
      </p>
      <p style={{ fontSize: "24px" }}>
        <strong>Total Price: {ctx.burger.totalPrice}</strong>
      </p>
      <Burger />
      <Button clicked={goBack} btnType="Danger" text="Decline shipping" />
      <Button
        clicked={showContactData}
        btnType="Success"
        text="Enter shipping information"
      />

      <Route path="/shipping/contact">
        <ContactData />
      </Route>
    </div>
  );
};

export default ShippingPage;
