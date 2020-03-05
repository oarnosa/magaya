import React from "react";

import Header from "../../components/header/header.component";
import Form from "../../components/form/form.component";

import "./solutions.styles.scss";

const Solutions = () => (
  <div className="solutions">
    <Header>Solutions</Header>
    <section className="solutions__hero">
      <div className="hero__title"></div>
      <div className="hero__content"></div>
    </section>
    <section className="solutions__compare"></section>
    <section className="solutions__features"></section>
    <section className="solutions__quote"></section>
    <Form />
  </div>
);

export default Solutions;
