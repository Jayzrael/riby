import React from 'react'

const JobContent = () => {
   return (
      <div className="job-content">
         <div className="jobs-posted">
            <div className="flexWith-buttons">
               <h2 className="role-added">Frontend Developer</h2>
               <div class="editDelete-btn">
                  <button className='edit'>Edit</button>
                  <button className='delete'>Del</button>
               </div>
            </div>
            <h2 className="description-heading">Job Description</h2>
            <p className='job-description'>
               Responsible for developing and designing user interfaces using the AngularJS framework. Responsibilities is to work closely with web developers and backend engineers to create high-performing, responsive and interactive web applications.
            </p>
            <h4 className="recruiting">Years of experience: 2-3years</h4>
            <h4 className="the-position">Skills</h4>
            <ul>
               <li>HTML</li>
               <li>Javascript</li>
               <li>React</li>
               <li>Redux</li>
               <li>Express</li>
            </ul>
         </div>
      </div>
   )
}

export default JobContent