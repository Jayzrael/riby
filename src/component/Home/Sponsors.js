// import react from "react";
import { Container, Wrapper } from "./styles";
import styled, { keyframes } from "styled-components";
import echo from "../../image/sponsor/echo.png";
import efina from "../../image/sponsor/efina.png";
import flutterwave from "../../image/sponsor/flutterwave.png";
import greencapital from "../../image/sponsor/greencapital.png";
import ilo from "../../image/sponsor/ilo.png";
import interswitch from "../../image/sponsor/interswitch.png";
import loftyheight from "../../image/sponsor/loftyheight.png";
import lux from "../../image/sponsor/lux.png";
import mercycorps from "../../image/sponsor/mercycorps.png";
import microtraction from "../../image/sponsor/microtraction.png";
import nepc from "../../image/sponsor/nepc.png";
import norishing from "../../image/sponsor/norishing.png";
import passionincubator from "../../image/sponsor/passionincubator.png";
import providus from "../../image/sponsor/providus.png";
import sterling from "../../image/sponsor/sterling.png";
import verve from "../../image/sponsor/verve.png";
import vfd from "../../image/sponsor/vfd.png";
import growthcapital from "../../image/sponsor/growthcapital.png";
import boa from "../../image/sponsor/boa.png";

const Sponsors = () => {
  const img1 = [
    norishing,
    echo,
    efina,
    boa,
    loftyheight,
    growthcapital,
    ilo,
    flutterwave,
    greencapital,
    mercycorps,
    passionincubator,
    nepc,
    interswitch,
    lux,
    providus,
    vfd,
    sterling,
    microtraction,
    verve,
  ];
  const img2 = [
    mercycorps,
    passionincubator,
    nepc,
    interswitch,
    lux,
    providus,
    vfd,
    sterling,
    microtraction,
    verve,
    norishing,
    echo,
    efina,
    boa,
    loftyheight,
    growthcapital,
    ilo,
    flutterwave,
    greencapital,
  ];

  return (
    <Container>
      <Wrapper>
        <>
          <SponsorCOntainer>
            {img1.map((data, index) => (
              <Img src={data} key={index} />
            ))}
          </SponsorCOntainer>
          <SponsorCOntainer1>
            {img2.map((data, index) => (
              <Img src={data} key={index} />
            ))}
          </SponsorCOntainer1>
        </>
        <>
          <Mobile>
            {img1.map((data, index) => (
              <img src={data} key={index} alt={data} width={50} style={{ margin: "5px" }} />
            ))}
          </Mobile>
        </>
      </Wrapper>
    </Container>
  );
};
export default Sponsors;

const Img = styled.img`
  margin: 20px;
`;

const Mobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const linear = keyframes`

 100% { 
    transform: translateX(-66.6666%);  
  }
`;

const scroll = keyframes`


100% { 
    transform: translateX(66.6666%);  
  }
`;

const linear2 = keyframes`
from{
  transform: translateX(-20%)
}
to{
  transform: translateX(-100%)
}
`;

const SponsorCOntainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${scroll} infinite 20s linear;
  @media (max-width: 768px) {
    overflow: hidden;
    display: none;
  }
`;

const SponsorCOntainer1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${linear} infinite 20s linear;

  @media (max-width: 768px) {
    overflow: hidden;
    display: none;
  }
`;
