import React from "react";

import "../header/header.styles.scss";

const Header = ({ children }) => (
  <div className="header">
    <div className="header__container">
      <h1 className="header__title">{children}</h1>
    </div>
  </div>
);

export default Header;
