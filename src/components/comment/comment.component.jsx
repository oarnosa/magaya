import React from "react";

const Comment = ({ name, company, children }) => (
  <div className="comment">
    <p>{children}</p>
    <h4>{name}</h4>
    <p>{company}</p>
  </div>
);

export default Comment;
