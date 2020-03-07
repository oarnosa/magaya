import React from "react";

import Card from "../../components/card/card.component";
import Quote from "../../components/quote/quote.component";
import Form from "../../components/form/form.component";

import "./solutions.styles.scss";

const Solutions = () => (
  <div className="solutions">
    <section className="solutions__hero">
      <h2 className="hero__title">
        Your Global Leader In Logistics And Supply Chain Automation
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
      <table className="compare__table" cellSpacing="0">
        <thead>
          <tr>
            <th></th>
            <th>Magaya Cargo System</th>
            <th>Magaya Supply Chain Solution</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </section>
    <section className="solutions__features">
      <div className="features__container">
        <h3 className="features__heading">
          Our ecosystem of modern desktop, web, and mobile apps provides you
          with more features and functionality than any other product on the
          market. Magaya is here for you every step of the way, supporting your
          growth as your company scales.
        </h3>
        <div className="features__cards">
          <Card
            image="/images/solutions/product-icn-livetrack.png"
            title="Visibility & Tracking"
            subtitle="LiveTrack web and mobile app for customer service, visibility and tracking"
            small
          >
            <li>
              Eliminate phone calls and emails in your customer service process
            </li>
            <li>
              Automatic notifications for events like item status changes,
              photos, shipping updates
            </li>
            <li>
              Customers can submit documentation, orders, booking requests etc
            </li>
          </Card>
          <Card
            image="/images/solutions/product-icn-binder.png"
            title="Photos of Everything"
            subtitle="Binder is a simple way to send pictures to your Magaya system, in seconds"
            small
          >
            <li>
              Provide great customer service with a fraction of the time
              compared to cameras, cables, memory cards
            </li>
            <li>
              Photos of items sent directly to the right transaction in Magaya
            </li>
            <li>Real-time visibility to the customer via LiveTrack</li>
          </Card>
          <Card
            image="/images/solutions/product-icn-dimensioner.png"
            title="Warehouse Automation"
            subtitle="Dimensioner automates a slow, manual, error-prone warehouse process"
            small
          >
            <li>
              Prevent lost revenue by recording maximum dims accurately.
              Increase efficiency by several minutes per item.
            </li>
            <li>
              Dims, weight, and photos of cargo captured and saved to Magaya
            </li>
            <li>No high upfront cost of traditional dimensioning tools</li>
          </Card>
          <Card
            image="/images/solutions/product-icn-carrier-connections.png"
            title="Carrier Connections"
            subtitle="Carrier Connections for Air, Ocean, and Couriers"
            small
          >
            <li>Eliminate double data entry for shipments</li>
            <li>Air: eAWB connections to 100+ airlines</li>
            <li>Ocean: Major steamship lines through INTTRA</li>
            <li>
              Courier: FedEx, UPS, USPS labels printed directly out of Magaya
            </li>
          </Card>
          <Card
            image="/images/solutions/product-icn-vin-lookup.png"
            title="eCommerce Fulfillment"
            subtitle="Logistico upgrades Magaya to an end-to-end eCommerce management platform"
            small
          >
            <li>
              Transform your warehouse into an automated eCommerce fulfillment
              center
            </li>
            <li>
              Orders from online marketplaces sent seamlessly to the warehouse
              Inventory and tracking numbers sync from Magaya to the online
              stores
            </li>
          </Card>
          <Card
            image="/images/solutions/product-icn-cargo-insurance.png"
            title="Cargo Insurance"
            subtitle="Magaya Insurance Services are integrated with our shipping features"
            small
          >
            <li>
              Minimize risk by insuring your cargo directly on the shipment in
              Magaya
            </li>
            <li>Declarations are generated and saved in your system</li>
            <li>
              No need to search multiple locations for paperwork, thus ensuring
              faster and more accurate claims resolution.
            </li>
          </Card>
          <Card
            image="/images/solutions/product-icn-logistico.png"
            title="Customs and Compliance"
            subtitle="Customs connections directly out of Magaya"
            small
          >
            <li>
              Eliminate double data entry and stay in compliance with U.S. and
              international customs integrations
            </li>
            <li>Import: AMS, ISF, ABI</li>
            <li>Export: EEI</li>
            <li>International: Canada, Mexico, Panama etc</li>
          </Card>
          <Card
            image="/images/solutions/product-icn-final-mile.png"
            title="Delivery App"
            subtitle="Final Mile gives drivers an efficient way to pick up and deliver packages and collect signatures"
            small
          >
            <li>
              Drivers can scan packages and get signatures right on the phone
              screen
            </li>
            <li>
              Customers updated with pickup and delivery details in real time
            </li>
          </Card>
          <Card
            image="/images/solutions/product-icn-vin-lookup.png"
            title="Vehicle Lookup"
            subtitle="A VIN Database for vehicle shippers to avoid mistakes and increase efficiency"
            small
          >
            <li>
              Scan and save minutes per vehicle compared to manually searching
            </li>
            <li>
              Entering or scanning the VIN will populate data such as year,
              make, and model
            </li>
            <li>
              VIN decoder can be used by your customer when sending an online
              Pickup Request
            </li>
          </Card>
        </div>
      </div>
    </section>
    <section className="solutions__quotes">
      <Quote
        image="/images/solutions/img-quotes.png"
        author="Patrick Oliva"
        company="Owner, Simple Freight Solutions"
      >
        We can give our customers visibility and inventory control and show them
        the documents they need to see for their business. With the online
        tracking, we can offer our customers one-stop shopping. They can see
        what’s been received, what’s in transit, what’s delivered.
      </Quote>
      <hr className="quotes__line" />
      <Quote
        image="/images/solutions/img-quotes.png"
        author="Scott Beal"
        company="Chief Operating Officer, M2 Transport"
        flip
      >
        “It’s very adaptable and intuitive. A major selling point for us was the
        high level of customization that is available. It’s not a
        one-size-fits-all. We can expand it to meet needs as our business
        changes.”
      </Quote>
    </section>
    <Form />
  </div>
);

export default Solutions;
