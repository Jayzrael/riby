import React from 'react'

const Section3 = () => {
   return (
      <div className="container">
         <div className='third'>
            <h1 className='kri'>Our Products</h1>
            

            <div className='agbox'>
              <img src="/RibyAg.png" alt="" className="agimg" />
               <button className="btnag">Visit Product</button>
            </div>
            <div className="cpbox">
              <img src="/Ribycp.png" alt="" className="cpimg" />
               <button className="btncp">Visit Product</button>

               <div className='ribox'>
               <img src="/rimage.png" alt="" className="riimg" /> 
               <button className="btnag">Visit Product</button>
            </div>
            <div className="gobox">
               <img src="/gomage.png" alt="" className="goimg" />
               <button className="btncp">Visit Product</button>
            </div>
            </div>
         </div>
      </div>
  )
}

export default Section3