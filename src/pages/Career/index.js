import React from "react";
import {gql, useQuery} from '@apollo/client'
import "./Career.css";
import Footer from "../../component/Footer";
import RoleCard from "../../component/RoleCard/RoleCard";
import SupportWidget from "../../component/SupportWidget";
import { GET_ALL_JOBS } from "../../utils/queries/allQueries";




const Career = () =>
{
  const { loading, error, data } = useQuery(GET_ALL_JOBS) 
  
  // if (loading) return <p>Loading...</p>
  // if (error) return <p>There are no open positions</p>
  return (
    <>
      <div className="career-section">
        <h1>Come Work With Us</h1>
        <p>We're looking for great minds to join our BETTER TOGETHER growing team.</p>
      </div>
      <section className="career-section2">
        <img src="/staffs.png" alt="" />
        <p>
          At Riby, we are always looking for talented individuals who aligns with our mission to
          enabling access to collective growth for 63 million banked and unbanked Nigerians.
        </p>
      </section>
      <section className="career-section3">
        <div className="video">
          <h1>video</h1>
        </div>
        <div className="careerSection3-text">
          <h2>My Riby Experience</h2>
          <p>
            The Riby experience is no doubt a rewarding and fulfilling journey. Don’t just take our
            word for it. Hear what our people have to say about their journey with us.
          </p>
        </div>
      </section>
      <div className="joinGeng-text">
        <h1>Join the Riby Geng!</h1>
        <section className="career-section4">
          {
            !loading && !error && (
              <>
             
                {
                  // console.log(data, data.getAllJobs)
                  data.getAllJobs.map(job =>   <RoleCard key={job.id} {...job} /> )
                }
               
              </>
            )
          }
           </section>
          
       
      </div>
      <div className="careerSection">
        <div className="preprationContent">
          <div className="page1">
            <p>Preparing for Success</p>
            <img src="preparing.png" alt="" />
            <p className="pageText">
              Before you begin, take some time to learn more about Riby. Get to know about what we
              do, who we are and our goals.
            </p>
            <h6>Virtual Interviews</h6>
            <p className="pageText">
              With COVID, virtual engagements have become the new normal. Here are few tips to help
              you prepare for your virtual interview with us:
            </p>
          </div>
          <div className="page2">
            <ul>
              <li>
                {" "}
                Ensure that you are in a quiet and comfortable environment with no distraction
              </li>
              <li>Check for proper lighting and ensure that all your devices are working fine.</li>
              <li>Have a copy of your CV close by and a paper and pen to jot.</li>
              <li>Practice! Practice your talking points.</li>
              <li>
                Come prepared with questions you would love to ask the team. Remember an interview
                is a conversation. It is a good opportunity to get to learn about Sterling and the
                role you applied for.
              </li>{" "}
              <li>
                Make sure you ask for clarity or ask follow-up questions. Feel free to reach out to
                your contact person throughout the process if you have more questions or need
                further clarifications.
              </li>{" "}
              <li>
                At Sterling we strive to give feedback to all our candidates. If you don’t hear from
                us, feel free to give us a nudge.
              </li>
            </ul>
            <p>Goodluck! We look forward to meeting You!</p>
          </div>
        </div>
      </div>
      <SupportWidget />
      <Footer />
    </>
  );
};

export default Career;
