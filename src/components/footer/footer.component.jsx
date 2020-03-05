import React from "react";

import "./footer.styles.scss";

const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <p>&copy; 2020 Magaya Corporation. All Rights Reserved</p>
      <div className="footer__legal">
        <p className="legal__link">Terms of Use</p>
        <p className="legal__link">Privacy Policy</p>
      </div>
    </div>
  </div>
);

export default Footer;
