import React from 'react'

const Footer = () => {
  return (
   <div className='foot'>
      <footer>
        <h1 className='hello'>Say Hello </h1>
        <h3 className='loc'>Block G, House 4, Moore Road, Yaba, Lagos.</h3>
        <img src="/phone.png" alt="" className="fone" />
        <h3 className='num'> 01-2914247 </h3>
        <h3 className='num1'> 08092222109 </h3>
        <img src="/mail.png" alt="" className='mole' />
        <h3 className='mail'>info@riby.me</h3>
        <h3 className="follow">Follow Us: </h3>
        <img src="/book.png" alt="" className="book" />
        <img src="/hole.png" alt="" className="hole" />
        <img src="/inked.png" alt="" className="inked" />
        <img src="/tweet.png" alt="" className="tweet" />
        <img src="/emm.png" alt="" className="emm" />
        <img src="/call.png" alt="" className="call" />
        <img src="/tube.png" alt="" className="tube" />
        <h1 className="quick">Quick Links</h1>
        <h3 className="q1">About Us</h3>
        <h3 className="q2">Blogs</h3>
        <h3 className="q3">Contact Us</h3>
        <h3 className="q4">Partners & Programs</h3>
        <h3 className="q5">Career</h3>
        <h3 className="q6">Terms of use</h3>
        <h3 className="q7">Privacy Notice</h3>
        <h1 className="news">Newsletter</h1>
        <h4 className="sb">Be the first to know about our news.</h4>
        <label for="email_input">Enter your email address:</label>
        <input type="email" name="email" id="email_input" placeholder="Enter your mail"></input>
        <input type="submit" className="xbtn" value='Subscribe' />

        <hr className="dij" />
        <h3 className="cop">©2016-2022 Riby. RC: 1214343</h3>


      </footer>
   </div>
  )
}

export default Footer