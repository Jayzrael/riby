import { Container, Wrapper, TopFlex, TitleHead } from "./styles";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

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
        <Fade bottom>
          <TopFlex>
            <TitleHead>Our Business Offering</TitleHead>
          </TopFlex>
        </Fade>
        <BusinessContainer>
          {data.map((data) => (
            <Biz>
              <Fade left>
                <Div>
                  <h5>{data.productTitle}</h5>
                  <p>{data.productDesc}</p>
                  <LinkButton to={data.link}>
                    <span>Learn More</span>
                    <BsArrowRight />
                  </LinkButton>
                </Div>
              </Fade>
              <Fade right>
                <BusinessCard></BusinessCard>
              </Fade>
            </Biz>
          ))}
        </BusinessContainer>
      </Wrapper>
    </Container>
  );
};
export default Business;

const Div = styled.div`
  width: 500px;

  h5 {
    margin: 0;
    padding: 0;
    text-align: left;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Biz = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  color: #d80c1b;

  span {
    padding-right: 10px;
  }
`;
const BusinessCard = styled.div`
  width: 360px;
  height: 300px;
  background: gray;
  box-shadow: 0px 3px 6px rgba(15, 7, 56, 0.16);
  border-radius: 10px;
  display: flex;
  justify-content: end;
  align-items: baseline;
  flex-direction: column;
  padding: 20px;
  margin: 10px;

  // h5 {
  //   font-family: "Outfit";
  //   font-style: normal;
  //   font-weight: 500;
  //   font-size: 1.5rem;
  //   line-height: 24px;
  //   color: #0f0738;
  // }
  // p {
  //   font-family: "Outfit";
  //   font-style: normal;
  //   font-weight: 400;
  //   font-size: 1rem;
  //   line-height: 16px;
  //   color: #0f0738;
  // }
`;
const BusinessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 400px;
  overflow-x: hidden;
  overflow-y: scroll;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
