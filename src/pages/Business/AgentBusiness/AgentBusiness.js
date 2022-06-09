import React from 'react'
import AgentBusinessCards from '../../../component/AgentBusinessCards/AgentBusinessCards'
import './AgentBusiness.css'

const AgentBusiness = () => {
   return (
      <>
         <div className="agentBusiness-section">
            <h1>AGENT NETWORK BUSINESS</h1>
            <p>Our agents are trained and equipped to provide micro banking services within their location or
               community. This is aimed at providing more value and service offering to boost revenue generation for
               the agents in addition to cooperative services being offered to the cooperatives and the general public.</p>
         </div>
         <div className="agenBusiness-container">
            <section className="agentBusinessCards">
               <AgentBusinessCards boldText='Cooperative Agents:' middleText="These are agents carrying out Cooperatives services, these includes:"
                  list1='-Savings collection' list2='-Loan booking' list3='-Loan repayment' />
               <AgentBusinessCards boldText='Banking Agent:' middleText="These are agents that carry out banking services which includes:"
                  list1='-Cash out (Withdrawal)' list2='-Cash in (Deposit)' list3='-Bills payment' />
               <AgentBusinessCards boldText='Thrift Agents: ' middleText="These are agents that mop up cash from the cooperative members or individuals, either in the market place, offices, shops, homes or anywhere they needed. They basically mop cash from the public"
                  list1='-Cash Collection' />
            </section>
            <section className="singleImage">
               <img src="" alt="" />
            </section>
            <div className="doubleImages">
               <img src="" alt="" />
               <img src="" alt="" />
            </div>
         </div>
      </>
   )
}

export default AgentBusiness