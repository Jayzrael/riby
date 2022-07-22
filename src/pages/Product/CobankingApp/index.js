import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
  HeroImg,
  ProductAction,
  ButtonContainer,
  HeroText,
  Hero,
  Container,
  Content,
  TextContent,
} from "./styles";
import SupportWidget from "../../../component/SupportWidget";
import { Button } from "../../../component/Button";
import mockimg from "../../../image/cobankheroimg.png";
import googlelight from "../../../image/googlelight.png";
import cophone from "../../../image/cophone.png";

import Footer from "../../../component/Footer";
import Fade from "react-reveal/Fade";
import { coData } from "../../../helper/cobankData";

const CobankingApp = () => {
  useEffect(() => {
    document.title = "Download Co-banking App";
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Hero>
          <Fade left>
            <HeroText>
              <h3>A Digital Cooperative Managment Platform That Suits Your Needs</h3>
              <p>
                Riby CoBanking is a complete financial management tool for Cooperatives, Trade
                Groups, Associations and Savings Groups.
              </p>
              <Button title="Get Started" onClick={() => navigate("/registercooperative")} />
            </HeroText>
          </Fade>
          <Fade right>
            <HeroImg src={mockimg} />
          </Fade>
        </Hero>
        <ProductContainer>
          <ProductInfo>
            {coData.map((data, index) => (
              <Fade bottom>
                <ProductCard key={index}>
                  <img src={data.img} alt="" />
                  <h5>{data.title}</h5>
                  <p>{data.descrip}</p>
                </ProductCard>
              </Fade>
            ))}
          </ProductInfo>
        </ProductContainer>
        <ProductAction>
          <Content>
            <TextContent style={{ width: "400px" }}>
              <h2>Members Contributing With Ease And On The Go</h2>
              <p>
                Our app allows members of your group savings or cooperative to promptly save and
                make contributions as at when due, easily and on the go
              </p>
              <ButtonContainer>
                <a
                  href="https://play.google.com/store/apps/details?id=ng.riby.rcb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={googlelight} alt="" />
                </a>
              </ButtonContainer>
            </TextContent>
            <div>
              <img src={cophone} alt="" width={250} />
            </div>
          </Content>
        </ProductAction>
      </Container>
      <SupportWidget />
      <Footer />
    </>
  );
};

export default CobankingApp;

const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductInfo = styled.div`
  width: 80%;
  height: 100%;
  min-height: 70vh;
  // background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  width: 300px;
  min-height: 250px;
  height: 100%;
  padding: 12px;
  background: #edf2f3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #0d223d;
  margin: 10px;
  transition: all 350ms;
  border: 1px solid #edf2f3;
  transform: scale(1);
  border-radius: 7px;
  img {
    width: 40px;
  }

  h5 {
    margin: 0;
    padding: 7px;
    font-size: 20px;
    text-align: center;
  }
  p {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
    border: 0.5px solid #0d223d;
  }
`;
