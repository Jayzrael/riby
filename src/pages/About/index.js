import React from "react";
import Footer from "../../component/Footer";
import "./About.css";
// import Footer from "../../component/Footer/Footer";

const About = () => {
  return (
    <>
      <div className="abt-container">
        <div className="abtHero">
          <h1>About Riby</h1>
          <p>
            We assist individuals in economy clusters, SMEs, Coopertives and Trade Groups access
            financial services through our digital platrforms.
          </p>
        </div>
        <div className="aboutContent">
          <div className="aboutContentText">
            <h3>The BetterTogether Story</h3>
            <p>
              Riby is a group-based digital platform focused on enabling access to collective growth
              for 63 million banked, unbanked and undeserved Nigerians.
            </p>
            <p>
              Collectively, Riby have supported over 4 million Nigerians(both formal and informal)
              across 20 states in accessing financial services.
            </p>
          </div>
          <img src="/Betatogether.png" alt="" className="aboutContentImg" />
        </div>
        <div className="mission">
          <h1>Our Mission</h1>
          <p>
            Our mission is to keep helping millions of Africans achieve better financial access and
            stability.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
