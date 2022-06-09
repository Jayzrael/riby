import React from 'react'
import './AgentBusinessCards.css'

const AgentBusinessCards = (prop) => {
   return (
      <div className='agentCards'>
         <h5>{prop.boldText}</h5>
         <p>{prop.middleText}</p>
         <ul style={{ listStyle: 'none' }}>
            <li>
               {prop.list1}
            </li>
            <li>
               {prop.list2}
            </li>
            <li>
               {prop.list3}
            </li>
         </ul>
      </div>
   )
}

export default AgentBusinessCards