import react from "react";
import styled from "styled-components";
const Purpose = () => {
  const data = [
    {
      img: "/Frame.png",
      textHeader: "Save Consistently",
      description:
        " Our digital banking platform makes it easy and convenient for individuals and group members to make their saving and contribution at their desired frequency.",
    },
    {
      img: "/Frames.png",
      textHeader: "Borrow Easily",
      description:
        "Easily borrow and manage loans for members of your Groups or Cooperatives. Get connected to Riby financial service partners for more funding opportunities for your cooperative and business.",
    },
    {
      img: "/Framess.png",
      textHeader: "Invest Together",
      description:
        "Manage your internal pool of funds easily and conveniently using our digital platform and get access to several investment opportunities offered by Riby partners all managed securely.",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <HeaderTxt>Save Consistently, Borrow Easily and Invest Together</HeaderTxt>
        <HeaderP>
          In partnership with banks, relevant corporates, payment & card processing companies, the
          Riby platforms helps micro/small businesses and middle to low Income salary earners within
          these groups/clusters to create and manage bank or mobile money accounts and gain access
          to financial services
        </HeaderP>
        <FlexContainer>
          {data.map((data, index) => (
            <Card key={index}>
              <Img src={data.img} />
              <Content>
                <h6>{data.textHeader}</h6>
                <p>{data.description}</p>
              </Content>
            </Card>
          ))}
        </FlexContainer>
      </Wrapper>
    </Container>
  );
};

const Img = styled.img``;
const Content = styled.div`
  padding: 3px 6px;
  h6 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    color: #0f0738;
    font-size: 1.2rem;
  }
  p {
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 16px;
    color: #0f0738;
  }
`;
const Card = styled.div`
  width: 300px;
  height: 100%;
  min-height: 150px;
  padding: 7px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const HeaderP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 846px;
  font-family: "Outfit";
  text-align: center;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2em;
  }
`;
const HeaderTxt = styled.h4`
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  color: #0f0738;

  text-align: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #0f0738;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
`;

export default Purpose;
