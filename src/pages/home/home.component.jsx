import React from "react";
import { ReactComponent as Ecosystem } from "../../assets/magaya-ecosystem.svg";

import Button from "../../components/button/button.component";
import Card from "../../components/card/card.component";
import Comment from "../../components/comment/comment.component";
import Form from "../../components/form/form.component";

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
          <Button large>Request Demo</Button>
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
        <img src="/images/home/logo-wtdc.jpg" alt="WTDC Logo" />
        <img src="/images/home/logo-interport.jpg" alt="Interport Logo" />
        <img src="/images/home/logo-promptus.jpg" alt="Promptus Logo" />
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
        <div className="stats__cards">
          <Card
            image="/images/home/icon-product-warehouse.png"
            title="Supply Chain Solution"
            subtitle="Freight forwarding combined with WMS and eCommerce, designed for 3PLs with Freight and Warehousing"
          >
            <li>
              One single system for operations, accounting, visibility and
              tracking, connectivity and compliance
            </li>
            <li>
              Robust freight forwarding workflows meeting industry-specific
              needs for domestic and cross-border logistics
            </li>
            <li>
              Advanced WMS with out of the box eCommerce connections to major
              online sales channels and couriers
            </li>
          </Card>
          <Card
            image="/images/home/icon-product-box.png"
            title="Cargo System"
            subtitle="Freight forwarding combined with essential warehousing capabilities, designed for Freight Forwarders, NVOCCs, Couriers"
          >
            <li>
              Freight quotes and rate management, with access to export,
              imports, consolidations, straights, LCL or FCL
            </li>
            <li>Automated dimensioning, weighing and photographing cargo</li>
            <li>
              Customs compliance, documentation, and direct integration with
              international customs
            </li>
          </Card>
        </div>
      </div>
    </section>
    <section className="home__reviews">
      <h1 className="reviews__heading">Why our customers love us...</h1>
      <hr className="reviews__line" />
      <div className="reviews__list">
        <Comment name="Sean Gazitúa" company="Vice President | WTDC">
          “WTDC handles over 500,000 items. The Magaya system can handle this
          quantity and multiple SKUs. We create a warehouse receipt, verify
          quantities, and share crucial data with our customers, and they now
          use the data in their stores to improve their operations.”
        </Comment>
        <Comment name="Scott Beal" company="COO | M2 Transport">
          “It’s very adaptable and intuitive. A major selling point for us was
          the high level of customization that is available. It’s not a
          one-size-fits-all. We can expand it to meet needs as our business
          changes.”
        </Comment>
        <Comment
          name="Andres Chapa"
          company="Operations Manager | Point Global"
        >
          “When we invoice our customers from the Magaya system, we include the
          load number on the invoice. We also include the other relevant charges
          such as drayage, distribution, cross-docking, and final transport.”
        </Comment>
      </div>
    </section>
    <section className="form">
      <Form />
    </section>
  </div>
);

export default Home;
