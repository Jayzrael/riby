import React, { useEffect } from "react";
// import styled from "styled-components";
import SupportWidget from "../../../component/SupportWidget";
import googleStoreImg from "../../../image/google.png";
import playStoreImg from "../../../image/playstore.png";
import { HeroImg, ButtonContainer, HeroText, Hero, Container } from "../CobankingApp/styles";
import Fade from "react-reveal/Fade";

const AgentBankApp = () => {
  useEffect(() => {
    document.title = "Agency Banking - Download Now";
  }, []);
  return (
    <>
      <Container>
        <Hero>
          <Fade left>
            <HeroText>
              <h3>Our Agency Banking Mobile App For All Financial Services Transactions</h3>

              <p>
                A specially designed agent banking mobile app that has the unique feature to
                integrate with different payment channels.
              </p>
              <ButtonContainer>
                <a href="https://play.google.com/store/apps/details?id=ng.riby.agent">
                  <img src={googleStoreImg} alt="" />
                </a>
                {/* <a href="#">
                  <img src={playStoreImg} alt="" />
                </a> */}
              </ButtonContainer>
            </HeroText>
          </Fade>
          <Fade right>
            <HeroImg src="/mockup1.png" />
          </Fade>
        </Hero>
      </Container>
      <SupportWidget />
    </>
  );
};

export default AgentBankApp;
