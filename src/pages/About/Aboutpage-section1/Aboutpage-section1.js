import "./Aboutpage-section1.css";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
const AboutpageSection1 = ({ heading, fd, text1, text2, img }) => {
  return (
    <>
      <AboutContent fd={fd}>
        <Fade right>
          {/* <div className="aboutpage-section1-image"> */}
          <img src={img} alt="" className="aboutContentImg" />
        </Fade>
        <Fade left>
          <div className="aboutContentText">
            <h3>{heading}</h3>
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
        </Fade>
      </AboutContent>
    </>
  );
};

export default AboutpageSection1;

const AboutContent = styled.section`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: ${({ fd }) => (fd ? "row-reverse" : "row")};
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  margin-top: 80px;
`;
