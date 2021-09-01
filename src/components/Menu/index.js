import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";

const Menu = () => {
  return (
    <div>
      <ul className={css.Menu}>
        <MenuItem exact link="/">
          New Order
        </MenuItem>
        <MenuItem link="/orders">Orders</MenuItem>
      </ul>
    </div>
  );
};

export default Menu;
