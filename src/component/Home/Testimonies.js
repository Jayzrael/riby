import { Container, Wrapper, TopFlex, TitleHead } from "./styles";
import styled from "styled-components";
import itesiwaju from "../../image/itesiwaju.png";
import atlascop from "../../image/atlascop.png";
import subcap from "../../image/subcap.png";
import Fade from "react-reveal/Fade";

const Testimonies = () => {
  const data = [
    {
      img: itesiwaju,
      testifier: "Itesiwaju Cooperative ",
      location: "Oshodi, Lagos.",
      testimony:
        "“They have made Cooperative workings easier; it is easy to recognize active and non-active members. The payment receipt and the ability to check one’s account balance with the Cooperative is applaudable.” ",
    },
    {
      img: atlascop,
      testifier: "Atlas Copco  ",
      location: "Oshodi-Apapa, Lagos. ",
      testimony:
        "“t’s been a great experience using Riby CoBanking platform because of how easy it is to use. It eliminates paperwork and it also helps our admins keep proper records of the Cooperative’s transaction in real time.” ",
    },
    {
      img: subcap,
      testifier: "SUBA CAPITAL ",
      location: "Benin City, Edo State.",
      testimony:
        "“Aside from having a great experience using the CoBanking platform, the subscription feature which automatically debits the members at the right time for contributions is simply the best.",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Fade bottom>
          <TopFlex>
            <TitleHead>Testimonies</TitleHead>
          </TopFlex>
          <TestimonyCon>
            {data.map((data, index) => (
              <TestimonyCard key={index}>
                <h5>{data.testimony}</h5>
                <Testify>
                  <img src={data.img} alt="" />
                  <TData>
                    <h6>{data.testifier}</h6>
                    <p>{data.location}</p>
                  </TData>
                </Testify>
              </TestimonyCard>
            ))}
          </TestimonyCon>
        </Fade>
      </Wrapper>
    </Container>
  );
};
export default Testimonies;

const TData = styled.div`
  h6 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    margin: 0;
    color: #0f0738;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin: 0;
    color: #0f0738;
  }
`;
const Testify = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 300px;
  img {
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
const TestimonyCard = styled.div`
  width: 360px;
  height: 300px;
  background: #f8feff;
  box-shadow: 0px 3px 6px rgba(15, 7, 56, 0.16);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: 10px;
  transition: all 350ms;
  transform: scale(1);

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }

  h5 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0f0738;
  }
`;
const TestimonyCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
