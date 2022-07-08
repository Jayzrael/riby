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
            <Biz>
              <div  className="Text" style={{
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
              </Biz>
          ))}
        </BusinessContainer>
      </Wrapper>
    </Container>
  );
};
export default Business;

const Biz = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
@media (max-width: 768px) {
  flex-direction: column-reverse;
  align-items: flex-start;
}
`
// const Text = styled.div`
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// justify-content: space-between;
// align-items: center;

// @media (max-width: 768px) {
//   flex-direction: column-reverse;
//   align-items: flex-start;
// }
// `

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
  flex-direction: row;
  height: 400px;
overflow-x: hidden;
overflow-y: auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  .BusinessContainer::-webkit-scrollbar {
    display: none;
  }
`;
