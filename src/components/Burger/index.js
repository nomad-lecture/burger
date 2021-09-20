import React, { useContext } from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
import BurgerContext from "../../context/BurgerContext";

const Burger = () => {
  const burgerContext = useContext(BurgerContext);

  let content = [];

  const items = Object.entries(burgerContext.burger.ingredients);

  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${el[0]}${i}`} type={el[0]} />);

    return null;
  });

  if (content.length === 0)
    content = <p> Please choose burger ingredients ... </p>;

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
