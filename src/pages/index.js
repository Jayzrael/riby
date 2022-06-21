import styled from "styled-components";
import "../index.css";
import Hero from "../component/Home/Hero";
import Purpose from "../component/Home/Purpose";
import Products from "../component/Home/Products";
import Business from "../component/Home/Business";
import Sponsors from "../component/Home/Sponsors";
import Testimonies from "../component/Home/Testimonies";
import Footer from "../component/Footer";
import Consent from "../component/Consent/Consent";

const Home = () => {
  return (
    <>
      <Container>
        <Hero />
        <Purpose />
        <Products />
        <Business />
        <Sponsors />
        <Testimonies />
      </Container>
      <Consent />
      <Footer />
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
