import { useState } from "react";
import { Dropdowns } from "../Dropdown";
import styled from "styled-components";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MobileNav = ({ toggleNav }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log("clicked");
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
          {toggle && (
            <ProductItem>
              <Nav onClick={() => navigatePage("/product/CobankingApp")}>Riby CoBanking</Nav>
              <Nav onClick={() => navigatePage("/product/agentbank")}>AgentBanking</Nav>
              <Nav onClick={() => navigatePage("/product/agentLogo")}>RibyGO</Nav>
            </ProductItem>
          )}
        </Nav>

        <Nav>
          Business
          <FaAngleDown />
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
const Wrapper = styled.div`
  width: 250px;
  height: 100vh;
  transition: all 200ms ease;
  float: right;
  text-align: right;
  background-color: whitesmoke;
  padding: 20px;

  color: black;
  right: 0;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.6);
  z-index: 1;
  transition: all 350ms ease-in-out;
`;
