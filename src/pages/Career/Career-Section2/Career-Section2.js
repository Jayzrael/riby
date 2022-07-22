import { useState } from "react";
import "./Career-Section2.css";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { jobs } from "./JobData";
import Modal from "../../../component/Modal";

const Section2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [showJob, setShowJob] = useState(false);

  const handleShowJobs = () => {
    setShowJob(!showJob);
  };

  const displayModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <section className="career-section2">
        <div className="section2-images"></div>
        <div className="text-content">
          <h1>Come Work With Us</h1>
          <p>We're looking for great minds to join our #BETTERTOGETHER growing team.</p>
          <p>
            At Riby, we are always looking for talented individuals who aligns with our mission to
            enabling access to collective growth for 63 million banked and unbanked Nigerians.
          </p>
          <button><Link to="/JobPosting">HR PAGE</Link></button>
          <button className="see-all-openings" onClick={handleShowJobs}>
            {" "}
            See All Openings
          </button>
        </div>
        {showJob && (
          <Container>
            <h3>See available position</h3>
            <Wrapper>
              {/* implement job.lentgth here */}
              {jobs.map((data) => (
                <JobCard key={data.id} onClick={displayModal}>
                  {data.role}
                </JobCard>
              ))}
            </Wrapper>
          </Container>
        )}
        {showModal && (
          <Modal hideShowModal={() => setShowModal(false)}>
            <div className="job-modal">
              <h3>Fontend Developer</h3>
              <p>Level: Entry-Level</p>
              <small>Years: 2-3years</small>

              <div>
                <p>
                  Responsible for developing and designing user interfaces using the AngularJS
                  framework. Responsibilities is to work closely with web developers and backend
                  engineers to create high-performing, responsive and interactive web applications.
                </p>
                <p>Candidate must possess</p>
                <ul>
                  <Li>Javascript</Li>
                  <Li>HTML</Li>
                  <Li>React</Li>
                  <Li>Redux</Li>
                  <Li>Express</Li>
                </ul>
              </div>
              <div>
                <h5>Contact Info</h5>
                <section>
                  <label htmlFor="email address">Email Address *</label>
                  <Input type="email" value="Obodobright@gmail.com" />
                </section>
                <section>
                  <label htmlFor="Mobile">Mobile Phone number *</label>
                  <Input type="number" />
                </section>
                <section>
                  <label htmlFor="resume">Please submit a resume</label>
                  <Input type="file" />
                </section>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
                <Button bd color onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button bg>Submit</Button>
              </div>
              <Times onClick={() => setShowModal(false)}>X</Times>
            </div>
          </Modal>
        )}
      </section>
    </>
  );
};

export default Section2;

const Button = styled.button`
  width: 150px;
  height: 40px;
  background: ${({ bg }) => (bg ? "#0f0738" : "transparent")};
  border: ${({ bd }) => (bd ? " 1px solid #0f0738" : "")};
  color: ${({ color }) => (color ? "#0f0738" : "white")};
  margin-right: 0.5rem;
  border-radius: 7px;
`;
const Times = styled.button`
  position: absolute;
  top: 35px;
  right: 10px;
  font-size: 20px;
  background: transparent;
  outline: none;
`;
const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
  outline: none;
`;
const Li = styled.li`
  margin: 0;
  padding: 0;
`;

const JobCard = styled.div`
  width: 200px;
  height: 50px;
  padding: 10px;
  background: whitesmoke;
  color: #0f0738;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: left;button
  align-items: center;
  margin: 10px;
`;

const Wrapper = styled.div`
  width: 70%;
  min-height: 20vh;

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition: all 350ms;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const scroll = keyframes`

 0% {
    opacity:0;
  }
  70%{
    transform:translatY(0)
  }
  100%{
    opacity:1;
    transform:translateY(4px);
    display:flex;
  }
`;
const Container = styled.section`
  width: 100%;
  min-height: 20vh;
  height: 100%;
  color: #0f0738;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  transition: all 350ms;
  margintop: -40px;
  // display: none;
  animation: ${scroll} 0.5s ease forwards;
`;
