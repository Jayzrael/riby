import react from "react";
import { Dropdowns } from "../Dropdown";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log("clicked");
  };

  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  );
};
export default MobileNav;

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
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  background: #f8feff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3px 20px;
  text-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  background: #f8feff;
  position: relative;
  z-index: 1;
`;
