import styled from "styled-components";
import Fade from "react-reveal/Fade";

export const ProductCard = ({ fd, ta, textHead, textDesc, btn }) => {
  return (
    <Container>
      <Wrapper fd={fd}>
        <Fade left>
          <TextContent ta={ta}>
            <h3>{textHead}</h3>
            <p>{textDesc} </p>
            {btn}
          </TextContent>
        </Fade>
        <Fade right>
          <ImageWrapper></ImageWrapper>
        </Fade>
      </Wrapper>
    </Container>
  );
};

// export const Container = styled.div``;
// export const Container = styled.div``;
export const TextContent = styled.div`
  width: 400px;
  color: #0d223d;
  h1 {
    color: #0d223d;
  }

  text-align: ${({ ta }) => (ta ? "left" : "right")};
  p {
    font-size: ${({ fs }) => fs};
  }
`;
export const ImageWrapper = styled.div`
  width: 400px;
  height: 300px;
  background: grey;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: ${({ fd }) => (fd ? "row" : "row-reverse")};
  margin: 20px 5px;
  flex-wrap: wrap-reverse;
`;
export const Container = styled.div``;
