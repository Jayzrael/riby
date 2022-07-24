import styled from "styled-components";
import { WhatsAppOutlined } from "@ant-design/icons";

const Link = "https://wa.link/pva8dc";

export default function SupportWidget() {
  return (
    <Widget href={Link} target="_blank" rel="no_referrer">
      <WhatsAppOutlined />
      Chat With Riby
    </Widget>
  );
}

const Widget = styled.a`
  position: fixed;
  display: flex;
  align-items: center;
  place-items: center;
  justify-content: center;
  gap: 0.5rem;
  bottom: 0;
  margin-bottom: 1rem;
  margin-right: 1rem;
  right: 0;
  padding: 10px;
  width: 150px;
  height: fit-content;
  white-space: nowrap;
  background-color: white;
  border-radius: 1rem 1rem 0 1rem;
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.2);
  color: green;

  @media (max-width: 458px) {
    margin-right: 0;
    right: -20px;
  }
`;
