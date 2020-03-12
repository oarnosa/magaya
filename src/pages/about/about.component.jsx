import React from "react";
import YouTube from "react-youtube";
import Reveal from "react-reveal";

import Button from "../../components/button/button.component";
import Form from "../../components/form/form.component";

import "./about.styles.scss";

const About = () => (
  <div className="about">
    <section className="about__hero">
      <Reveal effect="fadeIn">
        <h2 className="hero__title">Who We Are</h2>
        <p className="hero__content">
          At Magaya we are proud to develop software that automates and improves
          business operations. We provide the needed efficiencies to
          small/medium sized companies to help them stay competitive with the
          big players and offer robust solutions for larger companies with high
          shipment volumes, rapid transaction traffic, and users in different
          countries, time zones and currencies.
        </p>
        <div className="hero__video__button">
          <Button
            large
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=0fTQyZBesMg&list=LLI4SQb8mFpGJm_Pv7bQs6Ng&index=5&t=0s&pbjreload=10"
              )
            }
          >
            Watch Video
          </Button>
        </div>
        <div className="hero__video__container">
          <YouTube className="hero__video" videoId="0fTQyZBesMg" />
        </div>
      </Reveal>
    </section>
    <section className="about__founders">
      <Reveal effect="fadeIn">
        <h2 className="founders__heading">Our Founders</h2>
      </Reveal>
      <Reveal effect="fadeIn">
        <div className="founders__tiles">
          <div className="founder__content">
            <img
              src="/images/about/exec-headshot-jesus.webp"
              alt="Jesus Headshot"
            />
            <h3>Jesus David Rodriguez</h3>
            <p>
              As Co-CEO of Magaya, Jesus is primarily focused on the business
              aspects of the company.
            </p>
            <p>
              In the early beginnings of Magaya in 1999, he started by coding
              the first release of the software and lead the engineering team
              for several years. As the company has grown, he has helped build
              each department and put together the solid management team that
              leads them.
            </p>
            <p>
              Prior to his work at Magaya, Jesus worked as an Analyst and
              Researcher at the Havana University of Technologies (ISPJAE) in
              Havana City. He received his Bachelor’s Degree in Mechanical
              Engineering and his Masters in Computer Science from the Havana
              University of Technologies (ISPJAE) as well.
            </p>
          </div>
          <div className="founder__content">
            <img
              src="/images/about/exec-headshot-yoni.webp"
              alt="Jesus Headshot"
            />
            <h3>Jose Yoniel “Yoni” Garcia</h3>
            <p>
              Yoni received both his bachelor’s and master’s degrees in software
              engineering from the Technological University of Havana “Jose
              Antonio Echeverria” (CUJAE).
            </p>
            <p>
              Motivated by his passion for software and education, he began his
              career as a computer science professor at CUJAE. Immediately
              following, he engaged with a French company as a software engineer
              to build software products for customers globally, gaining an
              invaluable know-how for his young career.
            </p>
            <p>
              In 2000, he moved to the United States to pursue the “Magaya”
              dream with his Co-CEOs and dedicates his time to building the
              Magaya brand and delivering software products and services that
              can solve complex problems for diverse customers in the Supply
              Chain industry.
            </p>
          </div>
          <div className="founder__content">
            <img
              src="/images/about/exec-headshot-gabriel.webp"
              alt="Jesus Headshot"
            />
            <h3>Gabriel T. Ruz Jr.</h3>
            <p>
              Gabriel studied medical science at Miami-Dade Community College
              and the University of South Florida. His parents had hoped he’d
              become a physician, but he sidestepped medical school at the last
              minute and set his eyes on developing a winning business.
            </p>
            <p>
              Prior to Magaya, he founded Advanced Computer Systems, a
              computer-consulting firm dedicated to catering to the logistics
              community. During this time, he built up a loyal client base and
              strong relationships in the logistics community. Gabriel later
              went on to become the Director of Logistics for eCaravan.com, a
              Silicon Valley based startup focused on B2B transactions between
              North and South America.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
    <Form />
  </div>
);

export default About;
