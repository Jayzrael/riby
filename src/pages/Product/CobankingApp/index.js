import { useEffect } from "react";
import {
  HeroImg,
  ProductAction,
  ButtonContainer,
  HeroText,
  Hero,
  Container,
  Content,
  ProductInfo,
} from "./styles";
import { ProductCard } from "./ProductCard";
import SupportWidget from "../../../component/SupportWidget";
import googleStoreImg from "../../../image/google.png";
// import playStoreImg from "../../../image/playstore.png";
import googlelight from "../../../image/googlelight.png";
// import playstorelight from "../../../image/playstorelight.png";
import Footer from "../../../component/Footer";
import Fade from "react-reveal/Fade";

const CobankingApp = () => {
  useEffect(() => {
    document.title = "Download Co-banking App";
  }, []);
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
              <ButtonContainer>
                <a
                  href="https://play.google.com/store/apps/details?id=ng.riby.rcb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={googleStoreImg} alt="" />
                </a>
                {/* <a href="#">
                <img src={playStoreImg} alt="" />
              </a> */}
              </ButtonContainer>
            </HeroText>
          </Fade>
          <Fade right>
            <HeroImg src="/mockup1.png" />
          </Fade>
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

        <Fade bottom>
          <ProductAction>
            <Content>
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
                {/* <a href="#">
                <img src={playstorelight} alt="" />
              </a> */}
              </ButtonContainer>
            </Content>
          </ProductAction>
        </Fade>
      </Container>
      <SupportWidget />
      <Footer />
    </>
  );
};

export default CobankingApp;
