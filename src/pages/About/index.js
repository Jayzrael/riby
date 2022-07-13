import React from "react";
import styled from "styled-components";
import Footer from "../../component/Footer";
import SupportWidget from "../../component/SupportWidget";
import "./About.css";
import AboutpageHero from "./Aboutpage-hero/Aboutpage-hero";
import AboutpageSection1 from "./Aboutpage-section1/Aboutpage-section1";
import AboutpageSection2 from "./Aboutpage-section2/Aboutpage-section2";
import OurMission from "./OurMission/OurMission";
import OurPrep2 from "./OurPrep2/OurPrep2";
import OurPreposition from "./OurPreposition/OurPreposition";
import OurVision from "./OurVision/OurVision";
import SingleImage from "./SingleImage-section/SingleImage-section";

const About = () => {

  const Members = [
    {
      image: "",
      memberName: "Member Name",
      position: "Position"
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position"
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position"
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position"
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position"
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position"
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position"
    },
    {
      image: "",
      memberName: "Member Name",
      position: "Position"
    }
  ]

  return (
    <>
      <div className="abt-container">
        <AboutpageHero />
        <AboutpageSection1 />
        <AboutpageSection2 />
        <SingleImage />
        <OurVision />
        <OurMission />
        <OurPreposition />
        <OurPrep2 />
        <OurTeam>
          <h1>Our Team</h1>
        </OurTeam>
        <FlexContainer>
          {Members.map((Members, index) => (
            <MemberCard key={index}>
              <img src={Members.image} />
              <MemberContent>
                <p>{Members.memberName}</p>
                <span>{Members.position}</span>
              </MemberContent>
            </MemberCard>
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
  background: #D9D9D9;
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
  padding: 3px 6px;
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
