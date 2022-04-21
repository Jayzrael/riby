import React from 'react'
import Marquee from "react-fast-marquee"

const Section4 = () => {
  return (
      <div className='sct4'>
        <h1 className='per'>Our Partners</h1>
        <div className="marq">  
            <Marquee className="marq1" behavior="scroll" direction="left" speed={80}>
              <img src="/Interswitch 1.png" alt="" />
              <img src="/Providus 1.png" alt="" /> 
              <img src="/UnionBank 1.png" alt="" />
              <img src="/Sterling 1.png" alt="" />
              <img src="/grill.png" alt="" />
              <img src="/bank.png" alt="" />
              <img src="/UnionBank 1.png" alt="" />
              <img src="/Sterling 1.png" alt="" />
            </Marquee>
            <Marquee className="marq2" behavior="scroll" direction="right" speed={80}>
             <img src="/Interswitch 1.png" alt="" />
             <img src="/Providus 1.png" alt="" />           
             <img src="/UnionBank 1.png" alt="" />
             <img src="/Sterling 1.png" alt="" />
             <img src="/grill.png" alt="" />
             <img src="/bank.png" alt="" />
             <img src="/UnionBank 1.png" alt="" />
             <img src="/Sterling 1.png" alt="" />
           </Marquee>
         
              <h2 className='par'>What People Are Saying About Us</h2>
         </div>            
      </div>
    
  )
}

export default Section4