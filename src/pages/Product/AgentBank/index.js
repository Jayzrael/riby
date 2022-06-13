import React from "react";
import styled from "styled-components";

const AgentBankApp = () => {
  return (
    <>
      <Container>
        <Hero>
          <HeroText>
            <h3>RIBY AGENT NETWORK APP</h3>
            <p>AN AGENCY BANKING MOBILE APP FOR ALL FINANCIAL SERVICES TRANSACTIONS.</p>
            <p>
              Riby CoBanking is a complete financial management tool for cooperatives, trade groups,
              associations and savings group. Save your funds, make contributions, invest at great
              interest rates, and get access to various loan packages.
            </p>
            <ButtonContainer>
              <Button>Download Android</Button>
              <Button>Download Ios</Button>
            </ButtonContainer>
          </HeroText>
          <HeroImg src="/mockup1.png" />
        </Hero>
      </Container>
    </>
  );
};

export default AgentBankApp;

const HeroImg = styled.img`
  width: 350px;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  width: 222px;
  height: 50px;
  background: #ee095b;
  border-radius: 33px;
  margin-right: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  color: #ffffff;
`;
const HeroText = styled.div`
  width: 500px;
  padding: 10px 30px;
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 52px;
    /* identical to box height */

    color: #000000;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
`;

const Hero = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
`;
