import React from "react";

import "./button.styles.scss";

const Button = ({ children, large, ...otherProps }) => (
  <button className={`button ${large ? "button--large" : ""}`} {...otherProps}>
    {children}
  </button>
);

export default Button;
