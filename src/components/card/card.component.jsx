import React from "react";

import "./card.styles.scss";

const Card = ({ image, title, subtitle, children }) => (
  <div className="card">
    <img className="card__icon" src={image} alt="Magaya Product Icon" />
    <h2 className="card__title">{title}</h2>
    <h4 className="card__subtitle">{subtitle}</h4>
    <ul className="card__list">{children}</ul>
  </div>
);

export default Card;
