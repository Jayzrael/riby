import { Container, Wrapper, TopFlex, TitleHead } from "./styles";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import finImg from "../../image/agent2.png";
import agentImg from "../../image/Agent1.png";
import coImg from "../../image/finimg1.png";

const Business = () => {
  const data = [
    {
      img: coImg,
      productTitle: "Cooperative Banking  ",
      productDesc:
        "We have years of experience providing technology and management solutions for Cooperatives, Savings Groups and Associations",
      link: "/business/Cooperative",
    },
    {
      img: agentImg,
      productTitle: "Agent Network Business ",
      productDesc:
        "Our Agents are trained and equipped to provide micro banking services within their location or community. This is aimed at providing value to boost revenue generation.",
      link: "/business/AgentBusiness",
    },
    {
      img: finImg,
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
                <CardImg src={data.img} />
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
  p {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Biz = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
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
  &:hover {
    color: #0f0738;
  }
`;
const CardImg = styled.img`
  width: 360px;
`;
const BusinessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 400px;
  overflow-x: hidden;
  overflow-y: scroll;
  justify-content: center;
  background: transparent;
  align-items: center;
  flex-wrap: wrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
