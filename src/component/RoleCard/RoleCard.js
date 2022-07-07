import React from "react";
import "./RoleCard.css";
import { AiOutlineArrowRight } from "react-icons/ai";


const RoleCard = (job ) =>
{
   
  return (
    <div className="Role">
      <div>{job.role}</div>
      <span>
        view role <AiOutlineArrowRight style={{ marginRight: "20px" }} />
      </span>
    </div>
  );
};

export default RoleCard;
