import React from "react";
import styled from "styled-components";
import Footer from "../../component/Footer";
import SupportWidget from "../../component/SupportWidget";
// import { ProductCard } from "../Product/CobankingApp/ProductCard";
import "./About.css";
import AboutpageSection1 from "./Aboutpage-section1/Aboutpage-section1";
// import OurPrep2 from "./OurPrep2/OurPrep2";
import aboutImg1 from "../../image/about1.png";
import aboutImg2 from "../../image/about2.png";
import aboutImg3 from "../../image/about3.png";
import aboutImg4 from "../../image/about4.png";

import Fade from "react-reveal/Fade";
import { Members } from "../../helper/careerdata";
const { useEffect } = React;

const About = () => {
  useEffect(() => {
    document.title = "About Us - Riby";
  }, []);

  return (
    <>
      <div className="abt-container">
        <div className="hero-section">
          <div className="abtHero">
            <Fade top>
              <h1>About Us</h1>
            </Fade>
          </div>
        </div>
        <AboutpageSection1
          fd
          img={aboutImg1}
          heading="Who We Are"
          text1="Riby is a digital and financial services company and is one of Nigeria’s foremost digital platforms providers for Cooperatives, Informal Savings Groups, Micro & Small-Scale Enterprises, and Trade Groups."
          text2="We assist individuals in economy clusters, SMEs, Cooperatives, and Trade Groups to access financial services through our digital platforms."
        />
        <Fade bottom>
          <div className="Aboutpage-section2">
            <div className="Our-promises">
              <h1>Our Premise (#BetterTogether)</h1>
              <p>
                In Nigeria there are over 40 million individuals that save and borrow money outside
                of formal financial institutions. This often takes the form of common saving
                vehicles such as Savings Groups, collectors and community/trade associations. These
                cooperatives often do not wholly participate in the banking system meaning that
                their access to finance is limited and the management of these vehicles is mostly
                manual.
              </p>
              <span>
                Digital Access: The Future of Financial Inclusion in Africa, IFC, Mastercard
                Foundation, 2018
              </span>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="single-image">
            <img src={aboutImg2} alt="" />
          </div>
        </Fade>

        <Fade bottom>
          <div className="our-vision">
            <h1>OurVision</h1>
            <p>Is to enable access to collective growth</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="mission">
            <h1>Our Mission</h1>
            <p>
              Is to Build affordable and accessible digital platforms to promote collective growth.
            </p>
          </div>
        </Fade>
        <AboutpageSection1
          fd
          img={aboutImg3}
          heading="Our Proposition"
          text1="Riby responded to this need and market gap by building a group-based digital platform focused on enabling access to collective growth for this economic groups and subsequently for individuals."
          text2="In addition to the platform services the company provides for the efficient self- running of the groups for savings/ contributions, loans, and investments, Riby provides access to financial services for individuals in Cooperatives, Informal Savings Groups, Micro & Small- Scale Enterprises, Trade Groups as well as economic clusters"
        />

        <AboutpageSection1
          img={aboutImg4}
          text2="Collectively, Riby have supported over 4 million Nigerians (both formal and informal) across the country in accessing financial services. Over the course of our journey, we’ve partnered with several organizations, including: Bank of Industry, MTN, Providus Bank, Sterling Bank, Union Bank and many more."
        />
        <StaffContainer>
          <Fade top>
            <h1>Our Team</h1>
          </Fade>

          <FlexContainer>
            {Members.map((Members, index) => (
              <>
                <Fade bottom>
                  <WholeCard>
                    <MemberCard key={index}>
                      <img src={Members.image} alt="" />
                    </MemberCard>
                    <MemberContent>
                      <p>{Members.memberName}</p>
                      <span>{Members.position}</span>
                    </MemberContent>
                  </WholeCard>
                </Fade>
              </>
            ))}
          </FlexContainer>
        </StaffContainer>
      </div>
      <SupportWidget />
      <Footer />
    </>
  );
};

const StaffContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WholeCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
  img {
    width: 250px;
    border-radius: 10px;
  }
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
