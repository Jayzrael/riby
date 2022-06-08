import styled from "styled-components";
import { FaAngleDown, FaTimes, FaBars } from "react-icons/fa";
import { Dropdowns } from "../Dropdown/Dropdown";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src="/Logo.png" />
        <Navigation>
          <Nav>
            Product
            <FaAngleDown />
            <Dropdowns />
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
  font-size: 18px;
  margin: 0 20px;
  position: relative;
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
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
