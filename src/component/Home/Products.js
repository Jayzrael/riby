// import react, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import coBank from "../../image/RibyLogomark.svg";
import agentLogo from "../../image/agentlogomark.svg";
import ribygo from "../../image/ribygo.png";
import rico from "../../image/rico.png";
import { Container, Wrapper, TopFlex, TitleHead } from "./styles";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Products = () => {
  const data = [
    {
      img: coBank,
      productTitle: "Riby CoBanking ",
      productDesc: "A digital cooperative managment platform that suits your needs",
      productLink: "/product/CobankingApp",
      available: true,
    },
    {
      img: agentLogo,
      productTitle: "Riby Agent Network ",
      productDesc: "Our agency banking mobile app for all financial services and transactions.",
      productLink: "/product/agentbank",
      available: true,
    },
    {
      img: ribygo,
      productTitle: "RibyGo ",
      productDesc:
        "A cooperative collecction and managment app for thrift and cooperative collection",
      productLink: "",
      available: false,
    },
    {
      img: rico,
      productTitle: "Riby CoAgent ",
      productDesc:
        "A cooperative collection and managment app for thrift and cooperative collection",

      productLink: "/product/coagent",
      available: true,
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Fade bottom>
          <TopFlex>
            <TitleHead>Our Products</TitleHead>
          </TopFlex>
        </Fade>

        <ProductContainer>
          {data.map((data) => (
            <Fade right>
              <ProductCard>
                <ProductContent>
                  <Logo src={data.img} />
                  <TextHead>{data.productTitle}</TextHead>
                  <Desc>{data.productDesc}</Desc>
                  {data.available ? (
                    <LinkButton to={data.productLink}>Learn More</LinkButton>
                  ) : (
                    <ButtonDiv disabled>Coming soon</ButtonDiv>
                  )}
                </ProductContent>
              </ProductCard>
            </Fade>
          ))}
        </ProductContainer>
      </Wrapper>
    </Container>
  );
};
export default Products;

const ProductContent = styled.div`
  padding: 20px;
`;
const Desc = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
const TextHead = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;
const LinkButton = styled(Link)`
  width: 144px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d80c1b;
  border-radius: 10px;
  font-size: 14px;
  color: #fff;
  border: 0;
  outline: none;
  margin-top: 20px;

  &:hover {
    color: #0f0738;
  }
`;
const Logo = styled.img`
  width: 40px;
`;
const ProductCard = styled.div`
  width: 500px;
  display: inline-block;

  min-height: 40vh;
  height: 100%;
  margin: 20px;
  position: relative;
  color: #fff;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(15, 7, 56, 0.2) 0%, #0f0738 100%);
  opacity: 0.8;
  box-shadow: 0;

  @media (max-width: 768px) {
    width: 300px;
  }
  &:hover {
    box-shadow: 0px 0px 6px 2px rgba(15, 7, 56, 0.1);
    cursor: pointer;
    transition: all 350ms;
  }
`;
const ProductContainer = styled.div`
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ButtonDiv = styled.button`
width: 144px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  outline:none;
  border:0;
  font-size: 14px;
  color:#d80c1b ;
  border: 0;
  outline: none;
  margin-top: 20px;
  }
`;
