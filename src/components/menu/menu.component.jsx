import React from "react";
import { Link } from "react-router-dom";

import "./menu.styles.scss";

const Menu = ({ setOpen }) => (
  <div className="menu">
    <Link
      to="/solutions"
      className="menu__option"
      aria-label="Solutions Page"
      onClick={() => setOpen(false)}
    >
      Solutions
    </Link>
    <Link
      to="/about"
      className="menu__option"
      aria-label="About Page"
      onClick={() => setOpen(false)}
    >
      About Us
    </Link>
    <Link
      to="/contact"
      className="menu__option"
      aria-label="Contact Page"
      onClick={() => setOpen(false)}
    >
      Contact
    </Link>
  </div>
);

export default Menu;
