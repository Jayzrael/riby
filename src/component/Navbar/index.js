import { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaTimes, FaBars } from "react-icons/fa";
import { Dropdowns } from "../Dropdown";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log("clicked");
  };

  return (
    <Container>
      <Wrapper>
        <Logo src="/Logo.png" />
        <Hamburger>
          <GiHamburgerMenu style={{ fontSize: "30px", cursor: "pointer" }} />
        </Hamburger>
        <Navigation>
          <Nav onClick={handleToggle}>
            Product
            <FaAngleDown />
            {toggle && <Dropdowns />}
          </Nav>

          <Nav>
            Business
            <FaAngleDown />
          </Nav>
          <Link to="/about">
            <Nav>About Us</Nav>
          </Link>
          <Nav>Blog</Nav>
          <Link to="/contact">
            <Nav>Contact</Nav>
          </Link>
        </Navigation>
      </Wrapper>
    </Container>
  );
};
export default Navbar;

const Hamburger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
const Nav = styled.div`
  cursor: pointer;
  font-size: 18px;
  margin: 0 20px;
  position: relative;
  transition: all 350ms;
  color: #0f0738;
  &:hover {
    color: #ee095b;
  }
`;
const Navigation = styled.div`
  display: flex;
  justify-content: center;
  alignitems: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Logo = styled.img``;
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background: #f8feff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3px 20px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #f8feff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
