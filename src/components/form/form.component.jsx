import React from "react";
import Reveal from "react-reveal";

import Button from "../button/button.component";

import "./form.styles.scss";

const Form = () => (
  <div className="form" id="form">
    <Reveal effect="fadeIn">
      <div className="form__container">
        <div className="form__heading">
          <h2 className="heading__title">Request Demo</h2>
          <p className="heading__subtitle">
            A representative will be in contact with you shortly
          </p>
        </div>
        <form className="form__fields">
          <div className="form__input">
            <label htmlFor="first">First Name</label>
            <input type="text" id="first" />
          </div>
          <div className="form__input">
            <label htmlFor="last">Last Name</label>
            <input type="text" id="last" />
          </div>
          <div className="form__input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form__input">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" />
          </div>
          <div className="form__input">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" />
          </div>
          <div className="form__input">
            <label htmlFor="address">Company Address</label>
            <input type="text" id="address" />
          </div>
          <div className="form__input">
            <label htmlFor="industry">Industry</label>
            <input type="text" id="industry" />
          </div>
        </form>
        <div className="form__button">
          <Button large>Submit</Button>
        </div>
      </div>
    </Reveal>
  </div>
);

export default Form;
