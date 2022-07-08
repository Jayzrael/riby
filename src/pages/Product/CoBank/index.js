import React from "react";
// import styled from "styled-components";
import SupportWidget from "../../../component/SupportWidget";
import googleStoreImg from "../../../image/google.png";
import playStoreImg from "../../../image/playstore.png";
import { HeroImg, ButtonContainer, HeroText, Hero, Container } from "../CobankingApp/styles";

const Cobank = () => {
  return (
    <>
      <Container>
        <Hero>
          <HeroText>
            <h2>
              A Cooperative Collection And Managment App For Thrift And Cooperative Collection{" "}
            </h2>

            <p>
              Riby cooperative agent app allows for Cooperatives, Thrift Collectors, Trade Unions,
              Associations and Groups automate and manage their entire process of member
              registration, savings collections and loan booking/repayment from their members and
              customers.
            </p>
            <ButtonContainer>
              <a href="#">
                <img src={googleStoreImg} alt="" />
              </a>
              <a href="#">
                <img src={playStoreImg} alt="" />
              </a>
            </ButtonContainer>
          </HeroText>
          <HeroImg src="/mockup1.png" />
        </Hero>
      </Container>
      <SupportWidget />
    </>
  );
};

export default Cobank;
