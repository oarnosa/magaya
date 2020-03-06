import React from "react";
import { Link } from "react-router-dom";

import "./card.styles.scss";

const Card = ({ image, title, subtitle, link, small, children }) => (
  <div className={`card ${small ? "card--small" : ""}`}>
    <img className="card__icon" src={image} alt="Magaya Product Icon" />
    <h2 className="card__title">{title}</h2>
    <h4 className="card__subtitle">{subtitle}</h4>
    <ul className="card__list">{children}</ul>
    {link && (
      <Link to={link}>
        <p className="card__more">Learn More</p>
      </Link>
    )}
  </div>
);

export default Card;
