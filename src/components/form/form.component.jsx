import React from "react";

import Button from "../button/button.component";

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
      <form className="form__fields">
        <input
          type="text"
          placeholder="First Name"
          className="fields__first"
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          className="fields__last"
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="fields__email"
        ></input>
        <input type="tel" placeholder="Phone" className="fields__phone"></input>
        <input
          type="text"
          placeholder="Company"
          className="fields__company"
        ></input>
        <input
          type="text"
          placeholder="Company Address"
          className="fields__address"
        ></input>
        <input
          type="text"
          placeholder="Industry"
          className="fields__industry"
        ></input>
      </form>
      <div className="form__button">
        <Button large>Submit</Button>
      </div>
    </div>
  </div>
);

export default Form;
