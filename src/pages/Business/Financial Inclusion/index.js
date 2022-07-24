import { useEffect } from "react";
import styled from "styled-components";
import { ProductCard } from "../CardContainer";
import SupportWidget from "../../../component/SupportWidget";
import Footer from "../../../component/Footer";
import { Container, Hero, Phead } from "../CooperativeManagement/style";
import Fade from "react-reveal/Fade";
import finimg1 from "../../../image/finimg1.png";
import finimg2 from "../../../image/finimg2.png";
import finimg3 from "../../../image/finimg3.png";
import finimg4 from "../../../image/finimg4.png";
// import finicon1 from "../../../image/finicon1.png";
import { finIncData } from "../../../helper/careerdata";
// import finimg1 from "../../../image/finimg1.png";

const Cooperative = () => {
  useEffect(() => {
    document.title = "Be Financially Involved with Riby Finance";
  }, []);
  return (
    <Container>
      <Fade top>
        <Hero>
          <h3>Financial Inclusion Programs</h3>
          <p>
            We have participated in a range of economic sustainable projects and programs in
            different locations in Nigeria with some globally recognized partners
          </p>
        </Hero>
      </Fade>

      <ProductCard
        ta
        img={finimg1}
        fd
        textHead={<TextHead>What We Do</TextHead>}
        textDesc={
          <>
            <TextDesc>
              We partner with various organizations to drive and deepen financial inclusion through
              a sustainable and replicable approach across different groups of people and
              communities across the country. We understand that linking people to formal financial
              institution alone doesn’t guarantee a successful financial inclusion for such an
              individual or group.
            </TextDesc>
            <TextDesc>
              {" "}
              We have developed a model which incorporates financial, economic, and information
              inclusion. This we believe is a sustainable and long-lasting approach to deepen
              economic and financial development for the underbanked and unbanked sector of the
              economy.
            </TextDesc>
          </>
        }
      />
      <Phead>Projects And Programs</Phead>
      <ProductCard
        img={finimg2}
        ta
        fd
        textHead={<TextHead>Riby Cooperative Services</TextHead>}
        textDesc={
          <>
            <TextDesc>
              Business owners, traders, and artisans are tied together either by the location of
              their business or trade and business types. These are a group of people who trade
              daily within their business location. At Riby, our goal is to bring such group of
              people together and form them into a fully functional and effective Economic Clusters
              or Cooperative (if they haven’t done that themselves). This Cooperative becomes the
              bridge, bringing all the members together and providing the foundation for financial
              and economic support to its members to grow and expand their respective businesses
              either through their internal pool of savings or through Riby and her lending
              partners.
            </TextDesc>
            <TextDesc>
              {" "}
              These small business owners are not generating enough revenue hence they are unable to
              expand their business or make any savings from their business venture, this we have
              discovered to be a major challenge. This led to development of Riby Loan to Saving
              Programme (LTSP)
            </TextDesc>
          </>
        }
      />
      <ProductCard
        ta
        textDesc={
          <>
            <TextDesc>
              The Riby Loan to saving program is aimed at providing affordable micro loans to
              Cooperative members who saves simultaneously as loan repayment is in progress. It is
              expected the member would have saved approximately 20% of the loan amount by the end
              of loan repayment. The loan amount increases with good loan performance per cycle.
            </TextDesc>
            <TextDesc>
              Our Loan to Savings Program for communities, started at Makoko Community situated
              along the popular Third Mainland Bridge in Lagos Nigeria, the community is inhabited
              by fishermen, lumber factories, traders, and wood housing built on top of the Lagos
              Lagoon Coastline with 85,000 people composed mostly of women.
            </TextDesc>
            <TextDesc>
              {" "}
              The programme expanded to other areas within the state such as Ajegunle, Ikotun,
              Okokomaiko and to some parts of Ogun State. The programme reached over 2,000 small
              business owners and traders across the various location
            </TextDesc>
          </>
        }
      />
      <ProductCard
        ta
        fd
        img={finimg3}
        textDesc={
          <>
            <TextDesc>
              In March 2019, Riby partnered with Enhancing Financial Innovation and Access (EFInA)
              to further promote financial inclusion in some selected states with the highest number
              of financially excluded people across the country.
            </TextDesc>
            <TextDesc>
              10 States were selected across the country which includes: Adamawa, Akwa-Ibom, Bauchi,
              Ebonyi, Imo, Jigawa, Kano, Nasarawa, Ondo and Oyo. As the programme progressed,
              additional 5 states which includes: Kaduna, Benue, Ekiti, Kwara and Kogi were added to
              the programme.
            </TextDesc>
            <TextDesc>
              {" "}
              Our goal was to enhance the ability of these Cooperatives & Trade Groups to manage and
              improve their financial transactions (internal savings and loans) to become an engine
              for even greater financial inclusion, integration of the un(der)banked into the formal
              financial system, capacity building to bridge knowledge and skill gap of groups and
              cooperatives, provision of digital financial services and linkage to affordable access
              to finance through provision of credit facilities from Riby’s partners.
            </TextDesc>
          </>
        }
      />

      <ResultContainer>
        <Phead>Key Accomplishment Of The Project</Phead>
        <CardFlex>
          {finIncData.map((data) => (
            <ResultCard>
              <img src={data.img} alt="" />
              <h6>{data.title}</h6>
              <p>{data.desc}</p>
            </ResultCard>
          ))}
        </CardFlex>
      </ResultContainer>

      <Phead>Rebuilding The Financial Building Blocks For The People In The North-East</Phead>

      <ProductCard
        img={finimg4}
        ta
        fd
        textDesc={
          <>
            <TextDesc>
              In 2021, Riby entered a partnership with Mercycorps Nigeria for the implementation of
              Feed the Future Nigeria Rural Resilience Activity (RRA) project across the states of
              North-Eastern states of Adamawa, Borno, Gombe and Yobe.
            </TextDesc>
            <TextDesc>
              The Project is meant to facilitate economic recovery and growth in vulnerable,
              conflict-affected areas by promoting systemic change in market systems. This will
              ensure long-term improvements to markets that will sustainably move over 90,000
              households out of chronic poverty.
            </TextDesc>
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
  font-size: 0.8rem;
`;

const CardFlex = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  flex-wrap: wrap;
`;

const ResultContainer = styled.section`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ResultCard = styled.div`
  width: 200px;
  height: 200px;
  background: transparent;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 7px;
  margin: 10px;
`;
