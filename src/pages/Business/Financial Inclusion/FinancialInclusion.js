import React from 'react'
import './FinancialInclusion.css'
import Footer from '../../../component/Footer/Footer'

const FinancialInclusion = () => {
   return (
      <>
         <div className="top-section">
            <h1>FINANCIAL INCLUSION PROGRAMS</h1>
            <p>We help groups and local communities gain access to financial services through group-based capacity
               building program and provision of group management platform.</p>
         </div>
         <div className="container">
            <section className="section1">
               <div className="text">
                  <h1 style={{ paddingLeft: '10px' }}>What We  Do</h1>
                  <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                     <li>We partner with various organizations and seek grants for a sustainable delivery of economic opportunity programs tailor-made to foster a healthy economic living of the people at the bottom of the
                        economic pyramid across the country.</li>
                     <li>We help groups and local communities gain access to financial services through group-based capacity building program and provision of group management platform.

                     </li>
                     <li>

                        Cooperatives, associations and savings groups are exposed to different ideas on how to achieve scalability in their groups and properly understand the structure of the cooperative society in order to fully harness its full benefits and also equip them with knowledge on financial literacy.</li>
                  </ul>
               </div>
               <img src="" alt="" />
            </section>
            <section className="section2">
               <h1>Programs and Projects</h1>
               <p>We have participated in a range of economic sustainable projects and programs in different locations in
                  Nigeria with some globally recognized partners</p>
            </section>
            <section className="section3">
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
            </section>
         </div>
         <Footer />
      </>
   )
}

export default FinancialInclusion