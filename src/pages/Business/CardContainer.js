import styled from "styled-components";
import Fade from "react-reveal/Fade";

export const ProductCard = ({ fd, ta, fs, img, textHead, textDesc, btn }) => {
  return (
    <Container>
      <Wrapper fd={fd}>
        <Fade left>
          <TextContent ta={ta}>
            <h3>{textHead}</h3>
            <p fs={fs}>{textDesc} </p>
            {btn}
          </TextContent>
        </Fade>
        <Fade right>
          <Image src={img} alt="" />
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
  text-align: ${({ ta }) => (ta ? "left" : "right")};

  h3 {
    color: #0d223d !important;
  }

  p {
    font-size: ${({ fs }) => fs};
  }
`;
export const Image = styled.img`
  width: 400px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: ${({ fd }) => (fd ? "row" : "row-reverse")};
  margin: 20px 5px;
  flex-wrap: wrap-reverse;
  padding: 10px;

  @media (max-width: 768px) {
    margin: 0;
    justify-content: center;
  }
`;
export const Container = styled.div``;
