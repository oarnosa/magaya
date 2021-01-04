import React from "react";
import { Link } from "react-router-dom";

import "./footer.styles.scss";

const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <p>&copy; 2020 Magaya Corporation. All Rights Reserved</p>
      <div className="footer__legal">
        <Link className="legal__link" to="/terms" aria-label="Terms of Use">
          <p>Terms of Use</p>
        </Link>
        <Link className="legal__link" to="/privacy" aria-label="Privacy Policy">
          <p>Privacy Policy</p>
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
