import React from "react";

import { ReactComponent as Ecosystem } from "../../assets/magaya-ecosystem.svg";
import Button from "../../components/button/button.component";

import "./home.styles.scss";

const Home = () => (
  <div className="home">
    <section className="home__hero">
      <div className="hero__content">
        <h1>End-to-End Software for Logistics and Supply Chain Management</h1>
        <p>
          Easily manage operations, accounting, visibility, tracking,
          connectivity, and compliance with a single system
        </p>
        <div className="home__button">
          <Button>Request Demo</Button>
        </div>
      </div>
      <div className="hero__image">
        <Ecosystem />
      </div>
    </section>
    <hr className="home__line" />
    <section className="home__banner">
      <h2>Helping 1700+ companies succeed in business, including:</h2>
      <div className="banner__images">
        <img
          src={process.env.PUBLIC_URL + "/images/home/logo-wtdc.jpg"}
          alt="WTDC Logo"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/home/logo-interport.jpg"}
          alt="Interport Logo"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/home/logo-promptus.jpg"}
          alt="Promptus Logo"
        />
      </div>
    </section>
    <section className="home__stats">
      <div className="stats__container">
        <h2>Magaya by the Numbers</h2>
        <div className="stats__tiles">
          <div className="stats__tile">
            <h1 className="stats__tile__value">1</h1>
            <h4 className="stats__tile__text">
              We pride ourselves on providing top-level customer support. You
              won’t chat with a bot or get transferred to a call-center. With
              Magaya, you get customer support by real (and very nice) humans
              who will go above and beyond to make sure your needs are met.
            </h4>
          </div>
          <div className="stats__tile">
            <h1 className="stats__tile__value">126+</h1>
            <h4 className="stats__tile__text">
              Integrations, extensions, and native apps connecting you to
              airlines, couriers, international customs, and compliance systems.
              With Magaya, you get one single system that is intuitive and easy
              to use to meet your operational needs.
            </h4>
          </div>
          <div className="stats__tile">
            <h1 className="stats__tile__value">3,750,000</h1>
            <h4 className="stats__tile__text">
              Transactions tracked every year via our automated customer service
              and visibility solutions. With Magaya, you get streamlined
              operations which means your team can focus on getting down to
              business without wasting any time on 3.75M phone calls and emails.
            </h4>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
