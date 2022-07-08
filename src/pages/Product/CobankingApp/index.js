import React from "react";
import {
  HeroImg,
  ProductAction,
  ButtonContainer,
  HeroText,
  Hero,
  Container,
  ProductInfo,
} from "./styles";
import { ProductCard } from "./ProductCard";
import SupportWidget from "../../../component/SupportWidget";
import googleStoreImg from "../../../image/google.png";
import playStoreImg from "../../../image/playstore.png";

const CobankingApp = () => {
  return (
    <>
      <Container>
        <Hero>
          <HeroText>
            <h3>A Digital Cooperative Managment Platform That Suits Your Needs</h3>
            <p>
              Riby CoBanking is a complete financial management tool for Cooperatives, Trade Groups,
              Associations and Savings Groups.
            </p>
            <ButtonContainer>
              <a href="#">
                <img src={googleStoreImg} alt="" />
              </a>
              <a href="#">
                <img src={playStoreImg} alt="" />
              </a>
            </ButtonContainer>
          </HeroText>
          <HeroImg src="/mockup1.png" />
        </Hero>
        <ProductInfo>
          <ProductCard
            fd
            ta
            textHead=" Save Consistently"
            textDesc="Automate your savings and contribution process and make payments through a wide variety of efficient payment channels anywhere, anytime and on the go. "
          />
          <ProductCard
            textHead="Loans and Credit Management"
            textDesc="You can create the different loan types that are available in your Cooperatives and Savings Groups, profiling all your members based on their contributions, helping you identified members best suited for loans and easy loan repayment terms all on our platform."
          />
          <ProductCard
            fd
            ta
            textHead="Member and Records Management"
            textDesc="Manage/monitor all member activities and financial records. Review member contributions, loan repayments and all other data through any channel whenever you need it."
          />
          <ProductCard
            textHead="Mobile Wallet Feature"
            textDesc="Explore our seamless mobile wallet feature where you can add debit card detail, make contributions, carry out loan repayments, check contribution balance and withdraw from your wallet."
          />
          <ProductCard
            fd
            ta
            textHead="Invest Together"
            textDesc="Investment management and business advisory for economic groups. Pool group funds and get access to recommended high-interest-investments to provide more returns for your members. ."
          />
          <ProductCard
            textHead="Security"
            textDesc="Your financial safety is our highest priority. Riby CoBanking is PCI-DSS certified. Our systems are operating at the maximum levels of security. Your money is always safe with us and we protect your data from unauthorized access and alterations"
          />
        </ProductInfo>
        <ProductInfo>hellow</ProductInfo>
        {/* <ProductAction></ProductAction> */}
      </Container>
      <SupportWidget />
    </>
  );
};

export default CobankingApp;
