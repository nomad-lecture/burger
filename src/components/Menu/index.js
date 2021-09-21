import React, { useContext } from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";
import UserContext from "../../context/UserContext";

const Menu = (props) => {
  const ctx = useContext(UserContext);

  return (
    <div>
      <ul className={css.Menu}>
        {ctx.state.userId ? (
          <>
            <MenuItem exact link="/">
              New Order
            </MenuItem>
            <MenuItem link="/orders">Orders</MenuItem>
            <MenuItem link="/logout">Logout</MenuItem>
          </>
        ) : (
          <>
            <MenuItem link="/login">Login</MenuItem>
            <MenuItem link="/signup">SignUp</MenuItem>
          </>
        )}
      </ul>
    </div>
  );
};

export default Menu;
