import React from "react";

import { NavLink } from "react-router-dom";
import "./index.css";
const Navbar = () => {
  return (
    <>
      <NavLink exact activeClassName="active_class" to="/">
        AboutUs
      </NavLink>
      <br />
      <NavLink exact activeClassName="active_class" to="/contact">
        ContactUs
      </NavLink>
    </>
  );
};

export default Navbar;
