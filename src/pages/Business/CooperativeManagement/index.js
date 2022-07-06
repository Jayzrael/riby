import React from "react";
import "./Cooperative.css";
import Footer from "../../../component/Footer";
import Cardbox from "../../../component/Cardbox/Cardbox";
import SupportWidget from "../../../component/SupportWidget";

const Cooperative = () => {
  const cardItems = [
    {
      number: "1",
      text: "We offer this services specifically to cooperatives that are not tech inclined to use the platform, needs us to serve as an external management consultants or in some cases carry out the activities of a cooperative admin.",
    },
    {
      number: "2",
      text: "Effective profiling for various financial opportunities like savings, investment and loans.",
    },
    {
      number: "3",
      text: "Provision of financial literacy through our enrich programs.",
    },
  ];

  return (
    <>
      <div className="main-section">
        <h1>COOPERATIVE MANAGEMENT</h1>
        <p>
          We have Years of Experience Providing Technology and Management <br /> Solutions for
          Cooperatives
        </p>
      </div>
      <section className="second-section">
        <div className="second-section-text">
          <h1>
            Technology for cooperatives: <br />
            RCB (RIBY COBANKING PLATFORM):
          </h1>
          <p>
            A COOPERATIVE DIGITAL MANAGEMENT PLATFORM THAT SUITS YOUR NEEDS Riby CoBanking is a
            complete financial management tool for cooperatives, trade groups, associations and
            savings group. Save your funds, make contributions, invest at great interest rates, and
            get access to various loan packages.
          </p>
        </div>
        <img src="/Computer.png" alt="" />
      </section>
      <section className="third-section">
        <div className="third-section-text">
          <h1>Services to cooperatives: RCS (RIBY COOPERATIVE SERVICES):</h1>
          <p>
            It is designed to offer consulting and management services to both formal and informal
            cooperatives, trade groups and associations. We sign up cooperatives to be manage by RCS
            on the RCB platform.
          </p>
        </div>
        <img src="/services.png" alt="" />
      </section>
      <section className="fouth-section">
        {cardItems.map((item) => (
          <Cardbox key={item.id} number={item.number} text={item.text} />
        ))}
      </section>

      <div className="last-section">
        <h1>Activities</h1>
        <div className="list-section">
          <ul>
            <li>Customer Identification</li>
            <li>Customer Education</li>
            <li>Customer On-boarding</li>
            <li>Activation and Engagement</li>
            <li>Management</li>
          </ul>
        </div>
      </div>
      <SupportWidget />
      <Footer />
    </>
  );
};

export default Cooperative;
