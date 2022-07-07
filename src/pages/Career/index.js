import React from "react";
import "./Career.css";
import Footer from "../../component/Footer";
import RoleCard from "../../component/RoleCard/RoleCard";
import Section2 from "./Career-Section2/Career-Section2";
import Section3 from "./Career-Section3/Career-Section3";
import LastSection from "./LastSection/LastSection";
import Section4 from "./Career-Section4/Career-Section4";
import Section1 from "./Career-Section1/Career-Section1";

const Career = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <LastSection />
      <Footer />
    </>
  );
};

export default Career;
