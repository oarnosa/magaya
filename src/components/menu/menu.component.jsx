import React from "react";
import { Link } from "react-router-dom";

import "./menu.styles.scss";

const Menu = () => (
  <div className="menu">
    <Link
      to="/solutions"
      className="navbar__option"
      aria-label="Solutions Page"
    >
      Solutions
    </Link>
    <Link to="/about" className="navbar__option" aria-label="About Page">
      About Us
    </Link>
    <Link to="/contact" className="navbar__option" aria-label="Contact Page">
      Contact
    </Link>
  </div>
);

export default Menu;
