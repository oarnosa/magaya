import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { ReactComponent as Logo } from "../../assets/magaya-logo.svg";
import Reveal from "react-reveal";

import Button from "../button/button.component";

import "./navbar.styles.scss";

const Navbar = () => (
  <Reveal effect="slideInDown">
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/" aria-label="Brand Logo">
          <Logo />
        </Link>
        <div className="navbar__options">
          <NavLink
            to="/solutions"
            className="navbar__option"
            activeStyle={{ color: "rgba(10, 95, 200, 1)" }}
            aria-label="Solutions Page"
          >
            Solutions
          </NavLink>
          <NavLink
            to="/about"
            className="navbar__option"
            activeStyle={{ color: "rgba(10, 95, 200, 1)" }}
            aria-label="About Page"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="navbar__option"
            activeStyle={{ color: "rgba(10, 95, 200, 1)" }}
            aria-label="Contact Page"
          >
            Contact
          </NavLink>
          <div className="navbar__button">
            <ScrollLink
              to="form"
              spy={true}
              smooth={true}
              duration={500}
              offset={-45}
              aria-label="Request Demo"
            >
              <Button>Request Demo</Button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  </Reveal>
);

export default Navbar;
