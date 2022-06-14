// import react, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import coBank from "../../image/RibyLogomark.svg";
import agentLogo from "../../image/agentlogomark.svg";
import ribygo from "../../image/ribygo.png";
import ribycoop from "../../image/ribycoop.png";
import { Container, Wrapper, TopFlex, TitleHead } from "./styles";
import { Link } from "react-router-dom";

const Products = () => {
  const data = [
    {
      img: coBank,
      productTitle: "Riby CoBanking ",
      productDesc:
        "Riby CoBanking is a complete financial management tool for Cooperatives, Trade Groups, Associations and Savings Groups. Members can save and make contributions seamlessly, create and manage different loans efficiently, make investments together and enjoy access to financial services provided by Riby’s financial partners.",
      productLink: "/product/CobankingApp",
    },
    {
      img: agentLogo,
      productTitle: "Riby Agent Network ",
      productDesc:
        "A specially designed agent banking mobile app that has the unique feature to integrate with different payment channels on a POS to perform financial operations such as, cash withdrawals (Cash Out), cash deposits (Cash In), bill payments and other related financial services.",
      productLink: "/product/agentbank",
    },
    {
      img: ribygo,
      productTitle: "RibyGo ",
      productDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe praesentium quisquam voluptate corrupti totam repudiandae facere laudantium officiis impedit vel, labore sapiente vitae voluptates beatae nemo quod veritatis hic quis?",
      productLink: "",
    },
    {
      img: ribycoop,
      productTitle: "Cooper ",
      productDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe praesentium quisquam voluptate corrupti totam repudiandae facere laudantium officiis impedit vel, labore sapiente vitae voluptates beatae nemo quod veritatis hic quis?",

      productLink: "",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <TopFlex>
          <TitleHead>Our Products</TitleHead>
          <ButtonDiv style={{ display: "none" }}>
            <button>
              <IoIosArrowBack />
            </button>
            <button>
              <IoIosArrowForward />
            </button>
          </ButtonDiv>
        </TopFlex>
        <ProductContainer>
          {data.map((data) => (
            <ProductCard>
              <ProductContent>
                <Logo src={data.img} />
                <TextHead>{data.productTitle}</TextHead>
                <Desc>{data.productDesc}</Desc>
                <LinkButton to={data.productLink}>Learn More</LinkButton>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductContainer>
      </Wrapper>
    </Container>
  );
};
export default Products;

const ProductContent = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: end;
  align-items: baseline;
  flex-direction: column;
  padding: 20px;
  white-space: break-spaces;
`;
const Desc = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
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
`;
const Logo = styled.img`
  width: 40px;
`;
const ProductCard = styled.div`
  width: 600px;
  display: inline-block;
  height: 400px;
  margin: 20px;
  position: relative;
  color: #fff;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(15, 7, 56, 0.2) 0%, #0f0738 100%);
  opacity: 0.8;

  @media (max-width: 768px) {
    width: 300px;
  }
`;
const ProductContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  color: whitesmoke;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  button {
    outline: 0;
    border: 1px solid #0f0738;
    width: 25px;
    height: 25px;
    background: transparent;
    // padding: 7px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
  }
`;
