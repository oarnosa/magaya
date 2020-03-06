import React from "react";

import Button from "../button/button.component";

import "./form.styles.scss";

const Form = () => (
  <div className="form">
    <div className="form__container">
      <div className="form__heading">
        <h1 className="heading__title">Request Demo</h1>
        <p className="heading__subtitle">
          A representative will be in contact with you shortly
        </p>
      </div>
      <form className="form__fields">
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" />
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" />
        <label htmlFor="company">Company</label>
        <input type="text" id="company" />
        <label htmlFor="address">Company Address</label>
        <input type="text" id="address" />
        <label htmlFor="industry">Industry</label>
        <input type="text" id="industry" />
      </form>
      <div className="form__button">
        <Button large>Submit</Button>
      </div>
    </div>
  </div>
);

export default Form;
