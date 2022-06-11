import react from "react";
import { Container, Wrapper } from "./styles";
import styled from "styled-components";
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
  const img = [
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

  return (
    <Container>
      <Wrapper>
        <SponsorCOntainer>
          {img.map((data, index) => (
            <Img src={data} key={index} />
          ))}
        </SponsorCOntainer>
      </Wrapper>
    </Container>
  );
};
export default Sponsors;

const Img = styled.img`
  margin: 20px;
`;
const SponsorCOntainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
