import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {
  const socials = [
    {
      img: "/book.png",
      link: "https://web.facebook.com/ribyhq/",
    },
    {
      img: "/hole.png",
      link: "https://instagram.com/ribyhq/",
    },
    {
      img: "/inked.png",
      link: "https://www.linkedin.com/company/riby-finance/",
    },
    {
      img: "/tweet.png",
      link: "https://twitter.com/riby_hq?t=7CylrG781oG-LCKYhG0s0Q&s=09",
    },
    {
      img: "/tube.png",
      link: "https://www.youtube.com/channel/UC4R1hiwCXMQT-_VFS6Q0LcA",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Column>
          <ColumnHead>Say Hello</ColumnHead>
          <p>Block G, House 4, Moore Road, Yaba, Lagos.</p>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <img src="/phone.png" alt="" style={{ width: "15px" }} />

            <div>
              {/* <a href="tel: 01-2914247">
                <Span>01-2914247</Span>
              </a> */}
              <a href="tel: 08092222109">
                <Span>08092222109</Span>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="/mail.png" alt="" style={{ width: "15px", marginRight: "10px" }} />
            <a href="mailto:info@riby.ng" style={{ color: "#fff" }}>
              info@riby.ng
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "white", fontSize: "15px", fontWeight: "700" }}>Follow us:</span>
            {socials.map((social, i) => (
              <a key={i} href={social.link} style={{ margin: "4px" }}>
                <img src={social.img} alt={social.link} style={{ width: "20px" }} />
              </a>
            ))}
          </div>
        </Column>
        <Column>
          <ColumnHead>Quick Links</ColumnHead>
          <Ul>
            <UlP to="/about">About Us</UlP>
            <UlPhref
              href="https://medium.com/riby"
              // style={{ color: "#0f0738" }}
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </UlPhref>
            <UlP to="/contact">Contact Us</UlP>
            {/* <UlP to="/partners">Partners ad Program</UlP>` */}
            <UlP to="/career">Career </UlP>
            <UlP to="/Terms">Terms of use </UlP>
            <UlP to="/Privacy">Privacy Notice </UlP>
          </Ul>
        </Column>
        <Column>
          <ColumnHead>Newsletter</ColumnHead>
          <p>Be the First to know about our news.</p>
          <FormFlex style={{ display: "flex", alignItems: "left" }}>
            <Input type="text" placeholder="Enter your Email" />
            <Button>Subscribe</Button>
          </FormFlex>
        </Column>
      </Wrapper>
    </Container>
  );
};
export default Footer;

const FormFlex = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`;
const Button = styled.div`
  outline: none;
  width: 90px;
  height: 58px;
  background: #d80c1b;
  border-radius: 0px 10px 10px 0px;
  font-weight: 400;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;

  @media (max-width: 768px) {
    border-radius: 10px;
    width: 250px;
    margin-top: 10px;
  }
`;
const Input = styled.input`
  outline: none;
  border: 0;
  border-radius: 10px 0px 0px 10px;
  width: 250px;
  height: 58px;
  font-size: 16px;
  padding-left: 10px;
  @media (max-width: 768px) {
    border-radius: 10px;
  }
`;

const Span = styled.p`
  margin: 0;
  padding-left: 10px;
`;
const UlP = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  margin: 0;
  padding: 0;
  &:hover {
    color: red;
  }
`;
const UlPhref = styled.a`
  font-size: 1.2rem;
  color: #fff;
  margin: 0;
  padding: 0;
  &:hover {
    color: red;
  }
`;
const Ul = styled.div`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;
const ColumnHead = styled.div`
  font-family: "Outfit";
  font-weight: 600;
  font-size: 28px;
  color: white;
`;

const Column = styled.div`
  width: 400px;
  height: 250px;
  // background: red;

  p {
    font-family: "Outfit";
    font-weight: 500;
    font-size: 15px;
    color: white;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  background: #0d233d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;

  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: left;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
`;
