import React from "react";
import "./RoleCard.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const RoleCard = ({ career }) => {
  return (
    <div className="Role">
      <div>{career}</div>
      <span>
        view role <AiOutlineArrowRight style={{ marginRight: "20px" }} />
      </span>
    </div>
  );
};

export default RoleCard;
