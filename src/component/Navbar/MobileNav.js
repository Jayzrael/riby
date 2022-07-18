import { useState } from "react";
// import { Dropdowns } from "../Dropdown";
import styled, { keyframes } from "styled-components";
import { FaAngleDown, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MobileNav = ({ toggleNav }) => {
  const navigate = useNavigate();
  const [prodToggle, setProdToggle] = useState(false);
  const [bizToggle, setBizToggle] = useState(false);

  const handleToggle = () => {
    setProdToggle(!prodToggle);
  };

  const handleBizToggle = () => {
    setBizToggle(!bizToggle);
  };

  const navigatePage = (page) => {
    navigate(page);
    toggleNav();
  };

  return (
    <Container>
      <Wrapper>
        <Hamburger onClick={toggleNav}>
          <FaTimes style={{ fontSize: "30px", cursor: "pointer" }} />
        </Hamburger>

        <Nav onClick={handleToggle}>
          Product
          <FaAngleDown />
          {prodToggle && (
            <ProductItem>
              <Nav onClick={() => navigatePage("/product/CobankingApp")}>Riby CoBanking</Nav>
              <Nav onClick={() => navigatePage("/product/agentbank")}>AgentBanking</Nav>
              <Nav onClick={() => navigatePage("/product/coagent")}>CoAgent</Nav>
            </ProductItem>
          )}
        </Nav>

        <Nav onClick={handleBizToggle}>
          Business
          <FaAngleDown />
          {bizToggle && (
            <ProductItem>
              <Nav onClick={() => navigatePage("/business/Cooperative")}>Cooperative Business</Nav>
              <Nav onClick={() => navigatePage("/business/AgentBusiness")}>
                Agent Network Business
              </Nav>
              <Nav onClick={() => navigatePage("/business/FinancialInclusion")}>
                Financial Inclusion Programs
              </Nav>
            </ProductItem>
          )}
        </Nav>
        <Nav onClick={() => navigatePage("/about")}>About Us</Nav>
        <Nav>
          {" "}
          <a
            href="https://medium.com/riby"
            style={{ color: "#0f0738" }}
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
        </Nav>
        <Nav onClick={() => navigatePage("/contact")}>Contact</Nav>
      </Wrapper>
    </Container>
  );
};
export default MobileNav;

const ProductItem = styled.div`
  color: #0f0738;
`;

const Hamburger = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  height: 10vh;
  transition: all 350ms;
`;

const Nav = styled.div`
  cursor: pointer;
  font-size: 18px;
  margin: 10px 20px;
  position: relative;
  transition: all 350ms;
  color: #0f0738;
  &:hover {
    color: #ee095b;
  }
`;

const navAnimate = keyframes`
0%{opacity:0}
40%{transform:translateX(250px); }
// 100%{opacity:1}
`;
const Wrapper = styled.div`
  min-width: 0;
  // width: 100%;
  height: 100vh;
  transition: all 200ms ease;
  float: right;
  text-align: right;
  background-color: whitesmoke;
  padding: 20px;

  color: black;
  right: 0;
  animation: ${navAnimate} 0.5s ease;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.6);
  z-index: 1;
  transition: all 0.5s ease;
`;
