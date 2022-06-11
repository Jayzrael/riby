import { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaTimes, FaBars } from "react-icons/fa";
import { Dropdowns } from "../Dropdown";

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
          <Nav>ABout Us</Nav>
          <Nav>Blog</Nav>
          <Nav>Contact</Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};
export default Navbar;

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
`;
const Logo = styled.img``;
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background: #f8feff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #f8feff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
