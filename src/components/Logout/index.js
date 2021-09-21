import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Logout = (props) => {
  const ctx = useContext(UserContext);

  useEffect(() => {
    ctx.logoutUser();
  }, []);

  return <Redirect to="/login" />;
};

export default Logout;
