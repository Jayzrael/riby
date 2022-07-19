import "./Aboutpage-section1.css";
import Fade from "react-reveal/Fade";

const AboutpageSection1 = ({ heading, text1, text2 }) => {
  return (
    <>
      <div className="aboutContent">
        <Fade right>
          <div className="aboutpage-section1-image">
            {/* <img src="/Betatogether.png" alt="" className="aboutContentImg" /> */}
          </div>
        </Fade>
        <Fade left>
          <div className="aboutContentText">
            <h3>{heading}</h3>
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default AboutpageSection1;
