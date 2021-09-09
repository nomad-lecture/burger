import React, { Fragment } from "react";
import { connect } from "react-redux";
import MenuItem from "../MenuItem";
import css from "./style.module.css";

const Menu = (props) => {
  return (
    <div>
      <ul className={css.Menu}>
        {props.userId ? (
          <Fragment>
            <MenuItem exact link="/">
              New Order
            </MenuItem>
            <MenuItem link="/orders">Orders</MenuItem>
            <MenuItem link="/logout">Logout</MenuItem>
          </Fragment>
        ) : (
          <Fragment>
            <MenuItem link="/login">Login</MenuItem>
            <MenuItem link="/signup">SignUp</MenuItem>
          </Fragment>
        )}
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
