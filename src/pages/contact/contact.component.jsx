import React from "react";
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../components/button/button.component";
import Form from "../../components/form/form.component";

import "./contact.styles.scss";

const Contact = () => (
  <div className="contact">
    <section className="contact__hero">
      <Fade>
        <h2 className="hero__title">Get In Touch With Us</h2>
        <p className="hero__content">
          Our philosophy is to help companies succeed by offering them a
          complete and flexible package designed to grow with them. The growth
          of our customers is our growth, so we dedicate ourselves to help them
          succeed. We are pleased to serve over 1,700 companies around the world
          in 80 different countries.
        </p>
      </Fade>
    </section>
    <section className="contact__detail">
      <Fade>
        <div className="detail__sales">
          <FontAwesomeIcon
            className="detail__icon"
            icon={["fas", "phone-alt"]}
            size="3x"
          />
          <h3>Talk To Sales</h3>
          <p>
            Interested in learning about Magaya? Just pick up the phone to chat
            with a member of our sales team
          </p>
          <h4>+1 786 845 9150</h4>
        </div>
        <div className="detail__line"></div>
        <div className="detail__support">
          <FontAwesomeIcon
            className="detail__icon"
            icon={["fas", "comments"]}
            size="3x"
          />
          <h3>Contact Customer Support</h3>
          <p>
            Sometimes you need a little help from your friends. Or a Magaya
            support rep. Don't worry... we are here for you
          </p>
          <Button
            onClick={() => (window.location.href = "mailto:support@magaya.com")}
          >
            Contact Support
          </Button>
        </div>
      </Fade>
    </section>
    <Form />
  </div>
);

export default Contact;
