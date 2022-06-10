import React from 'react'
import './RoleCard.css'
import { AiOutlineArrowRight } from 'react-icons/ai'

const RoleCard = ({ career }) => {
   return (
      <div className='Role'>
         <h4>{career}</h4>
         <span>view role <AiOutlineArrowRight style={{ marginRight: '20px' }} /></span>

      </div>
   )
}

export default RoleCard