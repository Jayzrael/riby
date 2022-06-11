import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <TextH1>
            Building Affordable and Accessible Digital Platform to Promote Collective Growth
          </TextH1>
          <TextP>
            Riby is a digital ad financial company and is one of Nigeria's foreemost digital
            platform providers for Cooperatives, Savings Groups, Associations, Micro & Small-Scale
            Enterprises and Trade Groups
          </TextP>
        </TextContainer>
        <Image></Image>
      </Wrapper>
    </Container>
  );
};
export default Hero;

const Image = styled.div`
  width: 400px;
  height: 400px;
  background: gray;
`;
const TextP = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
`;

const TextH1 = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: #0f0738;
`;
const TextContainer = styled.div`
  width: 600px;
  padding-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #0f0738;

  @media (max-width: 768px) {
    padding: 30px;
    flex-wrap: wrap-reverse;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
`;
