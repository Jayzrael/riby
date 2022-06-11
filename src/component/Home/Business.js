import react from "react";
import { Container, Wrapper, TopFlex, TitleHead } from "./styles";
import styled from "styled-components";
const Business = () => {
  return (
    <Container>
      <Wrapper>
        <TopFlex>
          <TitleHead>Our Business Offering</TitleHead>
        </TopFlex>
        <BusinessContainer>
          <BusinessCard>
            <h5>Cooperative Business</h5>
            <p>
              We have years of experience providing technology and management solutions for
              Cooperatives, Savings Groups and Associations
            </p>
            <LinkButton>
              <button>Learn More </button>
              <div> arrow </div>
            </LinkButton>
          </BusinessCard>
        </BusinessContainer>
      </Wrapper>
    </Container>
  );
};
export default Business;

const LinkButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BusinessCard = styled.div`
  width: 360px;
  height: 300px;
  background: #f8feff;
  box-shadow: 0px 3px 6px rgba(15, 7, 56, 0.16);
  border-radius: 10px;
  display: flex;
  justify-content: end;
  align-items: baseline;
  flex-direction: column;
  padding: 20px;

  h5 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #0f0738;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #0f0738;
  }
`;
const BusinessContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
