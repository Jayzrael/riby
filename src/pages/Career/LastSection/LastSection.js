import "./LastSection.css";
import { Link } from "react-router-dom";
import img from "../../../image/applycareerimg.png";

const LastSection = () => {
  return (
    <>
      <section className="last-section">
        <div className="last-section-image">
          <img src={img} alt="" />
        </div>
        <div className="last-section-text">
          <h1>Interview Tips</h1>
          <span>
            Before you begin, take some time to learn more
            <Link style={{ color: "red" }} to="/about">
              {" "}
              about us
            </Link>
            . Get to know about what we do, who we are and our goals.
          </span>
          <ul>
            <li>
              <span>
                Ensure that you are in a quiet and comfortable environment with no distraction.
              </span>
            </li>
            <li>
              <span>
                Check for proper lighting and ensure that all your devices are working fine.
              </span>
            </li>
            <li>
              <span>Have a copy of your CV close by and a paper and pen to jot.</span>
            </li>
            <li>
              <span>Practice! Practice your talking points.</span>
            </li>
            <li>
              <span>
                Come prepared with questions you would love to ask the team. Remember an interview
                is a conversation. It is a good opportunity to get to learn about Sterling and the
                role you applied for.
              </span>
            </li>
            <li>
              <span>
                Make sure you ask for clarity or ask follow-up questions. Feel free to reach out to
                your contact person throughout the process if you have more questions or need
                further clarifications.
              </span>
            </li>
            <li>
              <span>
                At Riby we strive to give feedback to all our candidates. If you don’t hear from us,
                feel free to give us a nudge.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default LastSection;
