import React from "react";
import styled from "styled-components";
import Footer from "../../component/Footer";
import SupportWidget from "../../component/SupportWidget";
// import { ProductCard } from "../Product/CobankingApp/ProductCard";
import "./About.css";
import AboutpageSection1 from "./Aboutpage-section1/Aboutpage-section1";
import OurPrep2 from "./OurPrep2/OurPrep2";

const About = () => {
  const Members = [
    {
      image: "",
      memberName: "Member Name",
      position: "Position",
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position",
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position",
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position",
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position",
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position",
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position",
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position",
    },
  ];

  return (
    <>
      <div className="abt-container">
        <div className="hero-section">
          <div className="abtHero">
            <h1>About Us</h1>
          </div>
        </div>
        <AboutpageSection1
          heading="Who We Are"
          text1="Riby is a digital and financial services company and is one of Nigeria’s foremost digital platforms providers for Cooperatives, Informal Savings Groups, Micro & Small-Scale Enterprises, and Trade Groups."
          text2="We assist individuals in economy clusters, SMEs, Cooperatives, and Trade Groups to access financial services through our digital platforms."
        />
        <div className="Aboutpage-section2">
          <div className="Our-promises">
            <h1>Our Premise (#BetterTogether)</h1>
            <p>
              In Nigeria there are over 40 million individuals that save and borrow money outside of
              formal financial institutions. This often takes the form of common saving vehicles
              such as Savings Groups, collectors and community/trade associations. These
              cooperatives often do not wholly participate in the banking system meaning that their
              access to finance is limited and the management of these vehicles is mostly manual.
            </p>
            <span>
              Digital Access: The Future of Financial Inclusion in Africa, IFC, Mastercard
              Foundation, 2018
            </span>
          </div>
        </div>
        <div className="single-image">
          <div className="single-image-placeholder">{/* <img src="" alt="" /> */}</div>
        </div>
        <div className="our-vision">
          <h1>OurVision</h1>
          <p>Is to enable access to collective growth</p>
        </div>
        <div className="mission">
          <h1>Our Mission</h1>
          <p>
            Is to Build affordable and accessible digital platforms to promote collective growth.
          </p>
        </div>
        <AboutpageSection1
          heading="Our Proposition"
          text1="Riby responded to this need and market gap by building a group-based digital platform focused on enabling access to collective growth for this economic groups and subsequently for individuals."
          text2="In addition to the platform services the company provides for the efficient self- running of the groups for savings/ contributions, loans, and investments, Riby provides access to financial services for individuals in Cooperatives, Informal Savings Groups, Micro & Small- Scale Enterprises, Trade Groups as well as economic clusters"
        />

        <OurPrep2 />
        <OurTeam>
          <h1>Our Team</h1>
        </OurTeam>
        <FlexContainer>
          {Members.map((Members, index) => (
            <>
              <WholeCard>
                <MemberCard key={index}>
                  <img src={Members.image} alt="" />
                </MemberCard>
                <MemberContent>
                  <p>{Members.memberName}</p>
                  <span>{Members.position}</span>
                </MemberContent>
              </WholeCard>
            </>
          ))}
        </FlexContainer>
      </div>
      <SupportWidget />
      <Footer />
    </>
  );
};

const OurTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 70px;
`;

const WholeCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 70px;
  margin-bottom: 70px;
`;

const MemberCard = styled.div`
  width: 250px;
  height: 100%;
  min-height: 250px;
  padding: 7px;
  background: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const MemberContent = styled.div`
  // padding: 3px 6px;
  margin-bottom: 30px;
  margin-left: 20px;
  h6 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    color: #0f0738;
    font-size: 1.2rem;
  }
  p {
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 00;
    font-size: 0.9rem;
    line-height: 16px;
    color: #0f0738;
  }
`;

export default About;
