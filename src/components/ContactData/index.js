import React, { useState, useEffect, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../General/Button";
import css from "./style.module.css";
import Spinner from "../General/Spinner";
import BurgerContext from "../../context/BurgerContext";
import UserContext from "../../context/UserContext";

const ContactData = (props) => {
  const history = useHistory();
  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);
  const [street, setStreet] = useState(null);

  const ctx = useContext(BurgerContext);
  const userCtx = useContext(UserContext);

  const priceRef = useRef();

  useEffect(() => {
    if (ctx.burger.finished && !ctx.burger.error) {
      history.replace("/orders");
    }
    return () => {
      ctx.clearBurger();
    };
  }, [ctx.burger.finished]);

  const changeName = (e) => {
    if (priceRef.current.style.color === "red")
      priceRef.current.style.color = "green";
    else priceRef.current.style.color = "red";
    setName(e.target.value);
  };

  const changeCity = (e) => {
    setCity(e.target.value);
  };

  const changeStreet = (e) => {
    setStreet(e.target.value);
  };

  const saveOrder = () => {
    const order = {
      userId: userCtx.state.userId,
      ingredients: ctx.burger.ingredients,
      totalPrice: ctx.burger.totalPrice,
      address: {
        name,
        city,
        street,
      },
    };

    ctx.saveBurger(order, userCtx.state.token);
  };

  console.log("ContactData rendered .....");

  return (
    <div className={css.ContactData}>
      <div ref={priceRef}>
        <strong style={{ fontSize: "16px" }}>
          Total Price : {ctx.burger.totalPrice}
        </strong>
      </div>
      <div>
        {ctx.burger.error && `Order save process failed : ${ctx.burger.error}`}
      </div>
      {ctx.burger.saving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={changeName}
            type="text"
            name="name"
            placeholder="your name"
          />
          <input
            onChange={changeCity}
            type="text"
            name="city"
            placeholder="your city"
          />
          <input
            onChange={changeStreet}
            type="text"
            name="street"
            placeholder="your street address"
          />
          <Button text="Sent" btnType="Success" clicked={saveOrder} />
        </div>
      )}

      <Button text="Toggle" btnType="Success" clicked={ctx.toggleSaving} />
    </div>
  );
};

export default ContactData;
