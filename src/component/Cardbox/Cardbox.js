import React from 'react'
import './Cardbox.css'

const Cardbox = (prop) => {
   return (
      <div className="cardbox">
         <span>{prop.number}</span>
         <p>{prop.text}</p>
      </div>
   )
}

export default Cardbox