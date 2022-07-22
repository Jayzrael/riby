import styled from "styled-components";
import { useEffect } from "react";
import { Container, Hero, Phead, ButtonContainer } from "./style";
import { ProductCard } from "../CardContainer";
import logo from "../../../image/brandLogo.png";
import { useNavigate } from "react-router-dom";

import SupportWidget from "../../../component/SupportWidget";
import Footer from "../../../component/Footer";
import Fade from "react-reveal/Fade";
import mockimg from "../../../image/cobankheroimg.png";
import cobiz from "../../../image/cobiz1.png";

import { Button } from "../../../component/Button";

const Cooperative = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Riby Cooperative Business";
  }, []);

  return (
    <Container>
      <Fade top>
        <Hero>
          <h3>Cooperative Business</h3>
          <p>
            We have years of experience providing technology and management solutions for
            Cooperatives, Savings Groups and Associations.
          </p>
        </Hero>
      </Fade>
      <Phead>Cooperative society</Phead>
      <ProductCard
        ta
        fd
        img={mockimg}
        textHead={
          <TextHead>
            <img src={logo} alt="logo-img" /> Riby Cobanking
          </TextHead>
        }
        textDesc={
          <TextDesc>
            Riby CoBanking is a complete financial management tool for Cooperatives, Trade Groups,
            Associations and Savings Groups. Members can save and make contributions seamlessly,
            create and manage different loans efficiently, make investments together and enjoy
            access to financial services provided by Riby’s financial partners.
          </TextDesc>
        }
        btn={<Button title="Get Started" onClick={() => navigate("/registercooperative")} />}
      />
      <Phead>Cooperative Services</Phead>
      <ProductCard
        img={cobiz}
        ta
        textHead={<TextHead>Riby Cooperative Services</TextHead>}
        textDesc={
          <>
            <TextDesc>
              Our service unit is designed to offer consulting and management services to both
              Formal and Informal Cooperatives, Trade Groups and Associations. Our service includes:
            </TextDesc>
            <ul>
              <Li>Cooperative setup and registration with the regulatory body</Li>
              <Li>Cooperative branding and website development</Li>
              <Li>Administrative management of Cooperative activities</Li>
              <Li>
                Provision of financial literacy and engagement for Informal Groups and Cooperatives
              </Li>
              <Li>
                Linking Cooperatives and Groups to Riby partnered financial service providers eg
                credit and loans institution, insurance organisation, investments firms, HMOs etc
              </Li>
            </ul>
          </>
        }
      />
      <SupportWidget />
      <Footer />
    </Container>
  );
};
export default Cooperative;

const TextHead = styled.h4`
  margin: 0;
  padding: 0;
`;
const TextDesc = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

const Li = styled.li`
  margin: 0;
  padding: 0px;
  font-size: 12px;
`;
