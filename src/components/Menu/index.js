import React, { Fragment } from "react";
import { connect } from "react-redux";
import MenuItem from "../MenuItem";
import css from "./style.module.css";

const Menu = (props) => {
  return (
    <div>
      <ul className={css.Menu}>
        <MenuItem exact link="/">
          New Order
        </MenuItem>
        {props.userId ? (
          <MenuItem link="/logout">Logout</MenuItem>
        ) : (
          <Fragment>
            <MenuItem link="/login">Login</MenuItem>
            <MenuItem link="/signup">SignUp</MenuItem>
          </Fragment>
        )}
        <MenuItem link="/orders">Orders</MenuItem>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

export default connect(mapStateToProps)(Menu);
