import styled from "styled-components";

export const HeroImg = styled.img `
  width: 350px;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
export const ButtonContainer = styled.div `
  display: flex;
  align-items: center;
  a {
    margin-right: 1em;
  }
`;

export const HeroText = styled.div `
  width: 500px;
  // padding: 10px 30px;
  color: #0f0738;
  margin-right: 50px;
  @media (max-width: 768px) {
    margin-right: 0;
    padding: 10px 30px;
  }

  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 52px;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
  }
`;

export const Hero = styled.div `
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;
export const Container = styled.div `
  width: 100%;
  height: 100%;
  min-height: 80vh;
`;

export const ProductInfo = styled.div `
  width: 100%;
  height: 100%;
  min-height: 70vh;
`;

export const ProductAction = styled.div `
  width: 100%;
  height: 100%;
  min-height: 70vh;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div `
  width: 80%;
  height: 100%;
  min-height: 50vh;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  border-radius: 5px;
  padding: 20px;
  h2 {
    width: 50%;
    text-align: center;
    color: #ffffff;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  p {
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    width: 60%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;