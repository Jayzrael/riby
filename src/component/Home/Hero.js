import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <h1>Building Affordable and Accessible Digital Platform to Promote Collective Growth</h1>
          <p>
            RIBY is a digital and financial services company and is one of Nigeria’s foremost
            digital platform providers for Cooperatives, Savings Groups, Associations, Micro &
            Small-Scale Enterprises, and Trade Groups
          </p>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};
export default Hero;

const TextContainer = styled.div`
  width: 75%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    text-align: left;
  }

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    // line-height: 88px;
    color: #0f0738;
    @media (max-width: 768px) {
      width: 100%;
      text-align: left;
      font-size: 2.5rem;
    }
  }

  p {
    width: 50%;
    margin: 0;
    font-size: 1.2rem;
    @media (max-width: 768px) {
      width: 100%;
      text-align: left;
    }
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // flex-wrap: wrap;
  color: #0f0738;

  // @media (max-width: 768px) {
  //   padding: 30px;
  //   flex-wrap: wrap-reverse;
  // }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  // background-color: #ccc;
`;
