/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-success">{props.total}</span>
      </a>
    </nav>
  );
};

export default NavBar;
