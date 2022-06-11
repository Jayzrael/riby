import React from 'react'
import './Career.css'
import Footer from '../../component/Footer/Footer'
import RoleCard from '../../component/RoleCard/RoleCard'

const Career = () => {

   return (
      <>
         <div className="career-section">
            <h1>Come Work With Us</h1>
            <p>We're looking for great minds to join our BETTER TOGETHER growing team.</p>
         </div>
         <section className="career-section2">
            <img src="/staffs.png" alt="" />
            <p>At Riby, we are always looking for talented individuals who aligns with our mission to enabling access to collective growth for 63 million banked and unbanked Nigerians.</p>
         </section>
         <section className="career-section3">
            {/* <video width="360" height="240" src="radian.webm"
               controls preload="none" >
               Video cannot be displayed
            </video> */}
            <div className="video"><h1>video</h1></div>
            <div className="careerSection3-text">
               <h2>My Riby Experience</h2>
               <p>The Riby experience is no doubt a rewarding and fulfilling journey. Don’t just take our word for it. Hear what our people have to say about their journey with us.</p>
            </div>
         </section>
         <div className="joinGeng-text">
            <h1>Join the Riby Geng!</h1>
         </div>
         <section className="career-section4">
            <RoleCard career='Product Designer' />
            <RoleCard career='Frontend Developer Intern' />
            <RoleCard career='Data Analyst' />
            <RoleCard career='Senior Frontend Developer' />
         </section>

         <section className="career-section5">
            <div className="preparing-for-success">
               <h2>Preparing for Success</h2>
               <img src="/preparing.png" width='434px' height='158px' alt="" />
               <p className='paragraph-1'>Before you begin, take some time to learn more about Riby. Get to know about what we do, who we are and our goals.</p>
               <p className="paragraph-2">
                  <span style={{ fontWeight: '700', color: 'black' }}>Virtual interviews</span> <br />
                  With COVID, virtual engagements have become the new normal. Here are few tips to help you prepare for your virtual interview with us:
               </p>
            </div>
            <div className="preparing-for-success2">
               <ul>
                  <li> <span>Ensure that you are in a quiet and comfortable environment with no distraction.</span> </li>
                  <li><span>Check for proper lighting and ensure that all your devices are working fine.</span></li>
                  <li><span>Practice! Practice your talking points.</span></li>
                  <li><span>Come prepared with questions you would love to ask the team. Remember an interview is a conversation. It is a good opportunity to get to learn about Sterling and the role you applied for.</span></li>
                  <li><span>Make sure you ask for clarity or ask follow-up questions. Feel free to reach out to your contact person throughout the process if you have more questions or need further clarifications.</span></li>
                  <li><span>At Sterling we strive to give feedback to all our candidates. If you don’t hear from us, feel free to give us a nudge.</span></li>
                  <h5>Goodluck! We look forward to meeting You!</h5>
               </ul>

            </div>
         </section>
         <Footer />
      </>
   )
}

export default Career