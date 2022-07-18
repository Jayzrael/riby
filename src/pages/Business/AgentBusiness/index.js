import styled from "styled-components";
import { Container, Hero } from "../CooperativeManagement/style";
import { ProductCard } from "../CardContainer";

import SupportWidget from "../../../component/SupportWidget";
import Footer from "../../../component/Footer";

const AgentBusiness = () => {
  return (
    <Container>
      <Hero>
        <h3>Agent Network Business</h3>
        <p>
          Our Agents are trained and equipped to provide micro banking services within their
          location or community. This is aimed at providing value and service offering to boost
          revenue generation for those interested in working with Riby.
        </p>
      </Hero>

      <ProductCard
        ta
        fd
        textHead={<TextHead>Cooperative Agents</TextHead>}
        textDesc={
          <>
            <TextDesc>
              These are Agents carrying out Cooperatives services, these includes:
            </TextDesc>
            <ul>
              <Li>Cooperative identification and profiling </Li>
              <Li>Cooperative branding and website development</Li>
              <Li>Cooperative and member registration and on-boardings</Li>
              <Li>Savings collection </Li>
              <Li>Loan booking</Li>
              <Li>Loan repayment</Li>
            </ul>
          </>
        }
      />

      <ProductCard
        ta
        textHead={<TextHead>Banking Agents</TextHead>}
        textDesc={
          <>
            <TextDesc>These are Agents that carry out banking services which includes:</TextDesc>
            <ul>
              <Li>Cash out (Withdrawal) </Li>
              <Li>Cash in (Deposit)</Li>
              <Li>Bills payment</Li>
            </ul>
          </>
        }
      />
      <ProductCard
        ta
        fd
        textHead={<TextHead>Agency Services</TextHead>}
        textDesc={
          <>
            <TextDesc>
              We have on the ground network of trained and skilled Agents, offering value and
              support to customers across Nigeria far beyond the reaches of technology. These
              services include:
            </TextDesc>
            <ul>
              <Li>Address verification </Li>
              <Li>Market penetration</Li>
              <Li>Field research</Li>
              <Li>Registrations and Enumeration </Li>
            </ul>
          </>
        }
      />
      <SupportWidget />
      <Footer />
    </Container>
  );
};
export default AgentBusiness;

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
  padding: 0;
  font-size: 12px;
`;
