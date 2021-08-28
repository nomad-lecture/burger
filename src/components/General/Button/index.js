import React from "react";
import css from "./style.module.css";

const Button = (props) => {
  return <button className={css.Button}>{props.text}</button>;
};

export default Button;
