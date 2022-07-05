import react from "react";
import { Container, Wrapper, TopFlex, TitleHead } from "./styles";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Business = () => {
  const data = [
    {
      productTitle: "Cooperative Banking  ",
      productDesc:
        "We have years of experience providing technology and management solutions for Cooperatives, Savings Groups and Associations",
      link: "/business/Cooperative",
    },
    {
      productTitle: "Agent Network Business ",
      productDesc:
        "Our Agents are trained and equipped to provide micro banking services within their location or community. This is aimed at providing value to boost revenue generation.",
      link: "/business/AgentBusiness",
    },
    {
      productTitle: "Financial Inclusions ",
      productDesc:
        "We have years of experience providing technology and management solutions for Cooperatives, Savings Groups and Associations ",
      link: "/business/FinancialInclusion",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <TopFlex>
          <TitleHead>Our Business Offering</TitleHead>
        </TopFlex>
        <BusinessContainer>
          {data.map((data) => (
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "50%",
              }}>
              <h5>{data.productTitle}</h5>
              <p>{data.productDesc}</p>
              <LinkButton to={data.link}>
                <button>Learn More </button>
                <BsArrowRight />
              </LinkButton>
              </div>
              
              <BusinessCard>
                
              </BusinessCard>
              </div>
          ))}
        </BusinessContainer>
      </Wrapper>
    </Container>
  );
};
export default Business;

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d80c1b;
  button {
    padding: 10px;
    border: 0;
    outline: none;
    background: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
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
  margin: 10px;

  h5 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 24px;
    color: #0f0738;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
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
