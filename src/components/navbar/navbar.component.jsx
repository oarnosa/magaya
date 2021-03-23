import React, { useState } from "react";
import Reveal from "react-reveal";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as Logo } from "../../assets/magaya-logo.svg";
import Button from "../button/button.component";
import Menu from "../menu/menu.component";

import "./navbar.styles.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Reveal effect="slideInDown">
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">
            <Link to="/" aria-label="Brand Logo">
              <Logo />
            </Link>
          </div>
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
          <div className="navbar__collapse">
            <FontAwesomeIcon
              icon={["fas", "bars"]}
              size="2x"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
        {open && <Menu setOpen={setOpen} />}
      </div>
    </Reveal>
  );
};

export default Navbar;
