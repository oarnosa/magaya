import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { ReactComponent as Logo } from "../../assets/magaya-logo.svg";

import Button from "../button/button.component";

import "./navbar.styles.scss";

const Navbar = () => (
  <div className="navbar">
    <div className="navbar__container">
      <Link to="/home">
        <Logo />
      </Link>
      <div className="navbar__options">
        <NavLink
          to="/home"
          className="navbar__option"
          activeStyle={{ color: "rgba(10, 95, 200, 1)" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/solutions"
          className="navbar__option"
          activeStyle={{ color: "rgba(10, 95, 200, 1)" }}
        >
          Solutions
        </NavLink>
        <NavLink
          to="/about"
          className="navbar__option"
          activeStyle={{ color: "rgba(10, 95, 200, 1)" }}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className="navbar__option"
          activeStyle={{ color: "rgba(10, 95, 200, 1)" }}
        >
          Contact
        </NavLink>
        <div className="navbar__button">
          <ScrollLink to="form" spy={true} smooth={true} duration={500}>
            <Button>Request Demo</Button>
          </ScrollLink>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
