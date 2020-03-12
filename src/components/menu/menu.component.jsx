import React from "react";
import Reveal from "react-reveal";
import { Link } from "react-router-dom";

import "./menu.styles.scss";

const Menu = () => (
  <Reveal effect="fadeIn">
    <div className="menu">
      <Link
        to="/solutions"
        className="menu__option"
        aria-label="Solutions Page"
      >
        Solutions
      </Link>
      <Link to="/about" className="menu__option" aria-label="About Page">
        About Us
      </Link>
      <Link to="/contact" className="menu__option" aria-label="Contact Page">
        Contact
      </Link>
    </div>
  </Reveal>
);

export default Menu;
