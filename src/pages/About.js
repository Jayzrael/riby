import React from 'react'
import './About.css'
import Footer from '../component/Footer'

const About = () => {
  return (
    <div className='abt-container'>
      <div className='abt1'>
        <h1>About Riby</h1>
           <p>We assist individuals in economy clusters, SMEs, Coopertives and Trade Groups access financial services through our digital platrforms.</p>
      </div>
      <div>
        <h1 className="the-better">The BetterTogether Story</h1>
        <p className='print'>Riby is a group-based digital platform focused on enabling access to collective growth for 63 million banked, unbanked and undeserved Nigerians.</p>
        <p className='pp'>Collectively, Riby have supported over 4 million Nigerians(both formal and informal) across 20 states in accessing financial services.</p>
        <h1 className="our-mission">Our Mission</h1>
        <p className='ppp'>Our mission is to keep helping millions of Africans achieve better financial access and stability.</p>
      </div>


    </div>
  )
}

export default About