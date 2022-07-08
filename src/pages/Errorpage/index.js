import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Container>
      <h4>Sorry the page you requested for does not exist</h4>
      <Link to="/">
        <button>Explore our Riby Products</button>
      </Link>
    </Container>
  );
};
export default ErrorPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  h4 {
    text-align: center;
  }

  button {
    background-color: #d80c1b;
    font-weight: 600;
    font-size: 16px;
    color: white;
    border-radius: 10px;
    padding: 16px 40px;
  }
`;
