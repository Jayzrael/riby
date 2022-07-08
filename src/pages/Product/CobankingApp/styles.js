import styled from "styled-components";

export const HeroImg = styled.img `
  width: 350px;
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
  padding: 10px 30px;
  color: #0f0738;

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
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
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
  max-width: 600px;
  height: 100%;
  min-height: 50vh;
  background: red;
`;