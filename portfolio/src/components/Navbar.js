import React from "react";
import { NavLink, Link, Redirect } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink
            exact
            to="/"
            activeStyle={{ color: "red", fontWeight: "bold" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
