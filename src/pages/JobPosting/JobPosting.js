import React from 'react'
import Footer from '../../component/Footer'
import AddJob from './AddJob/AddJob';
import JobContent from './JobContent/JobContent';
import './JobPosting.css'
import Applied from './JobRole/Applied';

const JobPosting = () => {
   return (
      <>
         <div className="job-posting">
            <div className="job-role">
               <h1 className="view-applicants">View all applications</h1>
               <Applied role="Frontend Developer" applicant="Israel applied for frontend developer role" />
               <div className="recent-job-posted">
                  <h1 className="recent-jobs">Recent Jobs Posted</h1>
                  <JobContent />
                  <AddJob />
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default JobPosting


