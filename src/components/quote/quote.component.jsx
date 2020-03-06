import React from "react";

import "./quote.styles.scss";

const Quote = ({ image, author, company, flip, children }) => (
  <div className={`quote ${flip ? "quote--flip" : ""}`}>
    <div className="quote__image">
      <img src={image} alt={`${author} quote`} />
    </div>
    <div className="quote__content">
      <p className="quote__comment">{children}</p>
      <h4 className="quote__author">{author}</h4>
      <p className="quote__company">{company}</p>
    </div>
  </div>
);

export default Quote;
