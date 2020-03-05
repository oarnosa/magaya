import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/magaya-logo.svg";

import Button from "../button/button.component";

import "./navbar.styles.scss";

const Navbar = () => (
  <div className="navbar">
    <div className="navbar__container">
      <Link to="/" className="navbar__brand" aria-label="Navbar Brand">
        <Logo />
      </Link>
      <div className="navbar__options">
        <Link to="/home" className="navbar__option">
          Home
        </Link>
        <Link to="/solutions" className="navbar__option">
          Solutions
        </Link>
        <Link to="/about" className="navbar__option">
          About Us
        </Link>
        <Link to="/contact" className="navbar__option">
          Contact
        </Link>
        <div className="navbar__button">
          <Button>Request Demo</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
