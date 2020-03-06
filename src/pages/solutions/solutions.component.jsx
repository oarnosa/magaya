import React from "react";

// import Header from "../../components/header/header.component";
import Form from "../../components/form/form.component";

import "./solutions.styles.scss";

const Solutions = () => (
  <div className="solutions">
    {/* <Header>Solutions</Header> */}
    <div className="solutions__container">
      <section className="solutions__hero">
        <h2 className="hero__title">
          End-to-End Supply Chain Management Platform
        </h2>
        <p className="hero__content">
          A single platform for operations, accounting, visibility and tacking,
          connectivity, and compliance, Magaya delivers robust functionality for
          freight forwarding, warehousing, 3PL operations and eCommerce
          fulfilment. Complete with powerful freight forwarding workflows that
          meet industry-specific needs for domestic and cross-border logistics,
          the solution also boasts an advanced WMS with out of the box eCommerce
          connections to major online sales channels and couriers.
        </p>
      </section>
      <section className="solutions__compare">
        <table className="compare__table" cellspacing="0">
          <tr>
            <th></th>
            <th>Magaya Cargo System</th>
            <th>Magaya Supply Chain Solution</th>
          </tr>
          <tr>
            <td>Shipping and Freight Forwarding</td>
            <td>&#10003;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Essential Warehouse Management</td>
            <td>&#10003;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Pickups. Releases, Last Mile Delivery</td>
            <td>&#10003;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Customer Service, Visibility, Tracking</td>
            <td>&#10003;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Productivity, Documentation, Extensions</td>
            <td>&#10003;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Accounting</td>
            <td>&#10003;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Advanced Warehouse Management</td>
            <td></td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Ecommerce Fulfillment</td>
            <td></td>
            <td>&#10003;</td>
          </tr>
        </table>
      </section>
      <section className="solutions__features"></section>
      <section className="solutions__quote"></section>
    </div>
    <Form />
  </div>
);

export default Solutions;
