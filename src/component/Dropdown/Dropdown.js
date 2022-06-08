import React, { useState } from "react";
import { MenuItems } from "../MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import styled from "styled-components";
import agentLogo from "../../image/agentlogomark.svg";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <ul
        /*onClick={handleClick}*/
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;

export const Dropdowns = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Logo src={agentLogo} />
          <NavContainer>
            <h6>Riby cobanking</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, qui, alias dolorum
            </p>
          </NavContainer>
        </Content>
        <Content>
          <Logo src={agentLogo} />
          <NavContainer>
            <h6>Riby cobanking</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, qui, alias dolorum
            </p>
          </NavContainer>
        </Content>
        <Content>
          <Logo src={agentLogo} />
          <NavContainer>
            <h6>Riby cobanking</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, qui, alias dolorum
            </p>
          </NavContainer>
        </Content>
        <Content>
          <Logo src={agentLogo} />
          <NavContainer>
            <h6>Riby cobanking</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, qui, alias dolorum
            </p>
          </NavContainer>
        </Content>
        <Content>
          <Logo src={agentLogo} />
          <NavContainer>
            <h6>Riby cobanking</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, qui, alias dolorum
            </p>
          </NavContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};

const Content = styled.div`
  width: 300px;
  display: flex;
  align-items: top;
  margin: 10px;
  position: relative;
`;
const Logo = styled.img`
  //   width: 50px;
  margin-right: 7px;
`;
const NavContainer = styled.div`
  p {
    font-size: 12px;
    margin: 0;
    line-height: 1.1;
  }
  h6 {
    font-size: 15px;
    margin: 0;
    font-weight: 500;
    color: #0f0738;
  }
`;
const Container = styled.div`
  width: 700px;
  position: absolute;
  top: 35px;
  left: -60px;
  padding: 20px;
  z-index: 1;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 30vh;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
`;
