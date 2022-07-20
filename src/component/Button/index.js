import styled from "styled-components";

export const Button = ({ onClick, title }) => {
  return <ButtonComponent onClick={onClick}>{title}</ButtonComponent>;
};

const ButtonComponent = styled.div`
  width: 200px;
  height: 45px;
  background: #d80c1b;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
