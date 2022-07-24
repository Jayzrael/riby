import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../component/Button";
import { Link } from "react-router-dom";
import { ProductAction, ButtonContainer, TextContent } from "../Product/CobankingApp/styles";
import googlelight from "../../image/googlelight.png";
import cophone from "../../image/cophone.png";
import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";
import Zoom from "react-reveal/Zoom";

const JoinCooperative = () => {
  useEffect(() => {
    document.title = "Join Riby Cooperative platform";
  }, []);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [values, setValues] = useState({
    institutionName: "",
    contactPerson: "",
    contactPhone: "",
    email: "",
    state: "",
    contactPosition: "",
  });

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    setLoading(true);
    try {
      const response = await emailjs.send(
        "service_tbuqi1b",
        "template_e1y1bup",
        values,
        "u11kiUitp6eXmPPM1"
      );
      const result = await response.text;
      setStatus(result);
      setLoading(false);
      setValues({
        institutionName: "",
        contactPerson: "",
        contactPhone: "",
        email: "",
        state: "",
        contactPosition: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      //  setStatus(result);
    }
  };
  return (
    <>
      <Section>
        <Fade top>
          <h5>Get Started on Riby Cooperative Platform</h5>
        </Fade>
        <Zoom bottom>
          <form>
            <SectionContainer>
              <SectionInput>
                <label htmlFor="">Institution name</label>
                <br />
                <Input
                  type="text"
                  required
                  name="institutionName"
                  value={values.institutionName}
                  onChange={handleChange}
                />
              </SectionInput>
              <SectionInput>
                <label htmlFor="">Contact Person name</label>
                <br />
                <Input
                  type="text"
                  required
                  name="contactPerson"
                  value={values.contactPerson}
                  onChange={handleChange}
                />
              </SectionInput>
            </SectionContainer>
            <SectionContainer>
              <SectionInput>
                <label htmlFor="">Contact Person phone</label>
                <br />
                <Input
                  type="text"
                  required
                  name="contactPhone"
                  value={values.contactPhone}
                  onChange={handleChange}
                />
              </SectionInput>
              <SectionInput>
                <label htmlFor="">Email</label>
                <br />
                <Input
                  type="email"
                  required
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </SectionInput>
            </SectionContainer>
            <SectionContainer>
              <SectionInput>
                <label htmlFor="">State</label>
                <br />
                <Input
                  type="text"
                  required
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                />
              </SectionInput>
              <SectionInput>
                <label htmlFor="">Contact Person Position</label>
                <br />
                <Input
                  type="text"
                  name="contactPosition"
                  value={values.contactPosition}
                  onChange={handleChange}
                />
              </SectionInput>
            </SectionContainer>
            <FormFooter>
              <p>
                Please check our <Span to="/Terms"> Terms of service </Span>
              </p>
              <Button title={loading ? "Loading" : "Get Started"} onClick={handleSubmit} />
              {status === "OK" && <p>Request sent successfully!</p>}
            </FormFooter>
          </form>
        </Zoom>
      </Section>
      <Fade bottom>
        <ProductAction>
          <Content>
            <TextContent style={{ width: "400px" }}>
              <h2>Members Contributing With Ease And On The Go</h2>
              <p>
                Our app allows members of your group savings or cooperative to promptly save and
                make contributions as at when due, easily and on the go
              </p>
              <ButtonContainer>
                <a
                  href="https://play.google.com/store/apps/details?id=ng.riby.rcb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={googlelight} alt="" />
                </a>
              </ButtonContainer>
            </TextContent>
            <div>
              <img src={cophone} alt="" width={250} />
            </div>
          </Content>
        </ProductAction>
      </Fade>
    </>
  );
};

export default JoinCooperative;

const FormFooter = styled.section`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Content = styled.aside`
  width: 80%;
  height: 100%;
  min-height: 50vh;
  background: #0f0738;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap-reverse;
`;
const Span = styled(Link)`
  color: #d80c1b;
  &:hover {
    color: #0f0738;
  }
`;
const SectionInput = styled.section`
  margin: 10px;

  label {
    color: #0f0738;
  }
`;

const SectionContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Input = styled.input`
  width: 250px;
  height: 35px;
  outline: 0;
  border: 1px solid lightgray;
  border-radius: 7px;
  color: #0f0738;
  padding-left: 5px;
`;

const Section = styled.section`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  //   background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h5 {
    color: #0f0738;
  }
`;
