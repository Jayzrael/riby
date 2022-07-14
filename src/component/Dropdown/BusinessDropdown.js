import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BusinessDropdown = () => {
  return (
    <Container>
      <Wrapper>
        <NavLink to="/business/Cooperative">Cooperative Business</NavLink>
        <NavLink to="/business/AgentBusiness">Agent Network Business</NavLink>
        <NavLink to="/business/FinancialInclusion">Financial Inclusion Programs</NavLink>
      </Wrapper>
    </Container>
  );
};

const NavLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #0f0738;
  transition: all 350ms;

  &:hover {
    color: #ee095b;
    transition: all 350ms;
  }
`;
const Container = styled.div`
  width: 250px;
  position: absolute;
  top: 35px;
  left: -30px;
  padding: 10px;
  z-index: 1;
  background: #f8feff;
  box-shadow: 0px 0px 6px 2px rgba(15, 7, 56, 0.1);
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`;
