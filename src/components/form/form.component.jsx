import React from "react";

// import Button from "../button/button.component";

import "./form.styles.scss";

const Form = () => (
  <div className="form">
    <div className="form__container">
      <div className="form__heading">
        <h1 className="heading__title">Request Demo</h1>
        <h4 className="heading__subtitle">
          A representative will be in contact with you shortly
        </h4>
      </div>
      <div className="form__fields"></div>
      {/* <div className="form__button">
        <Button large>Submit</Button>
      </div> */}
    </div>
  </div>
);

export default Form;
