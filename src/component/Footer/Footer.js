import React from "react";
import "../../index.css";

const Footer = () => {
  return (
    <div className="foot">
      <footer>
        <h1 className="hello">Say Hello </h1>
        <h3 className="loc">Block G, House 4, Moore Road, Yaba, Lagos.</h3>
        <img src="/phone.png" alt="" className="fone" />
        <a href="tel: 01-2914247">
          <h3 className="num"> 01-2914247 </h3>
        </a>
        <a href="tel: 08092222109">
          <h3 className="num1"> 08092222109 </h3>
        </a>
        <img src="/mail.png" alt="" className="mole" />
        <a href="mailto:info@riby.me">
          <h3 className="mail">info@riby.me</h3>
        </a>
        <h3 className="follow">Follow Us: </h3>
        <a href="https://web.facebook.com/ribyhq/">
          <img src="/book.png" alt="" className="book" />
        </a>
        <a href="https://instagram.com/ribyhq/">
          <img src="/hole.png" alt="" className="hole" />
        </a>
        <a href="https://www.linkedin.com/company/riby-finance/">
          <img src="/inked.png" alt="" className="inked" />
        </a>
        <a href="https://twitter.com/riby_hq?t=7CylrG781oG-LCKYhG0s0Q&s=09">
          <img src="/tweet.png" alt="" className="tweet" />
        </a>
        <a href="https://www.youtube.com/channel/UC4R1hiwCXMQT-_VFS6Q0LcA">
          <img src="/tube.png" alt="" className="tube" />
        </a>
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
        <input type="submit" className="xbtn" value="Subscribe" />

        <hr className="dij" />
        <h3 className="cop">©2016-2022 Riby. RC: 1214343</h3>
      </footer>
    </div>
  );
};

export default Footer;
