import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import './JobPosting.css'

const JobPosting = () => {
   return (
      <>
         <div className="job-posting">
            <div className="job-role">
               <h1>Frontend Developer (React)</h1>
               <span style={{ fontSize: '20px' }}>Full Time</span>
            </div>
            <div className="role-overview">
               <h2>The Role</h2>
               <p>We are seeking an ambitious, bright, forward-thinking, entrepreneurial and high-spirited intern to support our EU policy work. The intern will join a fast-paced environment as a full member of the team and work alongside other functional experts who support our goals through content, host community engagement, partnerships and media relations.

                  You will report to Airbnb’s EU Policy Manager.

                  Airbnb has a remote work-from-home policy in place until 1 September 2022, which means this role can initially involve working from home; however, while we are flexible, we would prefer that the intern be based in the greater Brussels area, as in-person engagements are expected to resume in due course.
               </p>
            </div>
            <div className="responsibilities">
               <h2>Responsibilities</h2>
               <ul>
                  <li>Support the EU Policy team in executing overall policy engagement strategies, with a special focus on upcoming EU short-term rental legislation; participate as a full member of the team and never hesitate to offer ideas and get involved.</li>
                  <li>Conduct regulatory research, stakeholder mapping, as well as monitoring; draft policy briefings, papers and messages.
                  </li>
                  <li>Attend events and support other external engagements (including with EU policy makers, but also with Airbnb Hosts); provide debriefings containing analysis and recommendations.</li>
                  <li>Participate in cross functional, regional work streams alongside other internal teams (e.g. press, digital, partnerships, community, policy, legal).</li>
                  <li>Be fully immersed in Airbnb company and culture. Our Core Values are strong and we get excited about working together on EU projects! </li>
               </ul>
            </div>
            <div className="Qualifications">
               <h2>Qualifications</h2>
               <ul>
                  <li>Currently studying within third level education in a relevant subject (e.g. EU Affairs, Politics, International Relations) and/or have graduated within the last 12 months.</li>
                  <li>Understanding of the EU political landscape and relevant legislative processes is mandatory.</li>
                  <li>Strong people skills and desire to work with a variety of teams and external stakeholders.</li>
                  <li>Excellent analytical and organizational skills, knowledge of project management and ability to establish appropriate processes.</li>
                  <li>Proven ability to produce high quality work in a fast paced and highly dynamic environment, with small teams and all hands on deck.</li>
               </ul>
               <p>RIby is committed to working with the best and brightest people from the broadest talent pool possible. We believe a diversity of ideas fosters innovation and engagement, and allows us to attract the best people, and to develop the best products, services and solutions. Qualified individuals from all walks of life are encouraged to apply.</p>
            </div>
            <button className="apply-now"><Link to="/ApplicationForm" style={{ color: 'white' }}>Apply Now</Link>
            </button>
         </div>
         <Footer />
      </>
   )
}

export default JobPosting