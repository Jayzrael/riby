import React from 'react'
import '../JobPosting.css'

const Applied = ({ role, applicant }) => {
   return (
      <div className="applied">
         <h2 className='applied-role'>{role}</h2>
         <p className="individual">{applicant}</p>
         <button className="view-details">View Details</button>
      </div>
   )
}

export default Applied