import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { Dropdowns } from "../Dropdown";
import { BusinessDropdown } from "../Dropdown/BusinessDropdown";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navIcon, setNavIcon] = useState(false);
  const [businessNav, setBusinessNav] = useState(false);
  const outSideNav = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (outSideNav.current && !outSideNav.current.contains(event.target)) {
        // alert("you clicked outside");
        setToggle(false);
        setBusinessNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [outSideNav]);

  const handleToggleNav = () => {
    setNavIcon(!navIcon);
  };

  const handleBusinesNav = () => {
    setBusinessNav(!businessNav);
    setToggle(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
    setBusinessNav(false);
  };

  return (
    <Container ref={outSideNav}>
      <Wrapper>
        <Link to="/">
          <Logo src="/Logo.png" />
        </Link>

        <Hamburger onClick={handleToggleNav}>
          <GiHamburgerMenu style={{ fontSize: "30px", cursor: "pointer" }} />
        </Hamburger>
        {navIcon && <MobileNav toggleNav={handleToggleNav} />}
        <Navigation>
          <Nav onClick={handleToggle}>
            Product
            <FaAngleDown />
            {toggle && <Dropdowns />}
          </Nav>

          <Nav onClick={handleBusinesNav}>
            Business
            <FaAngleDown />
            {businessNav && <BusinessDropdown />}
          </Nav>
          <Link to="/about">
            <Nav>About Us</Nav>
          </Link>
          <Nav>
            {" "}
            <a href="https://medium.com/riby" target="_blank" rel="noreferrer">
              Blog
            </a>
          </Nav>
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
  a {
    color: #0f0738;

    &:hover {
      color: #ee095b;
    }
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
