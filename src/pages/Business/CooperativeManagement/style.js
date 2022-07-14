import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

export const Hero = styled.section`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  color: #0d223d;

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 40px;
    text-align: center;

    color: #0d223d;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    width: 700px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Phead = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  color: #0d223d;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: right;
  //   float: right;
  width: 100%;
  a {
    margin-right: 1em;
  }
`;
