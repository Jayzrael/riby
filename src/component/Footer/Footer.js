import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFacebook, faPhone, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faPhone, faKey);


const Footer = () => {

  const coffee = <FontAwesomeIcon icon="envelope" style={{ paddingRight: '15px' }} />
  const phone = <FontAwesomeIcon icon="phone" style={{ paddingRight: '15px' }} />


  return (
    <>
      <footer>
        <div className="footer-section">
          <div className="footer-column1">
            <h1>Say Hello</h1>
            <p>Block G, House 4, Moore Road, Yaba, Lagos.</p>
            <a href="tel: 01-2914247"><span>{phone}01-2914247</span> <br /></a>
            <a href="tel:  08092222109"> <span className="first-number">08092222109</span> <br /></a>
            <a href="mailto:info@riby.me"><h3 className="mailto">{coffee}info@riby.me</h3></a>
            <div className="follow-path">
              <h3>Follow Us: </h3>

            </div>
          </div>
          <div className="footer-column2">
            <div className="quicklinks">
              <h1>Quick Links</h1>
              <a href=""><span>About Us</span></a>
              <a href=""><span>Blogs</span></a>
              <a href=""><span>Contact Us</span></a>
              <a href=""><span>Partners & Programs</span></a>
              <a href=""><span>Career</span></a>
              <a href=""><span>Terms of use</span></a>
              <a href=""><span>Privacy Notice</span></a>
            </div>
          </div>
          <div className="footer-column3">
            <h1>Newsletter</h1>
            <p>Be the first to know about our news.</p>
            <div className="newsletter">
              <input type="email" name="" className="emailbox" placeholder="Enter Your Mail:" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <hr style={{ backgroundColor: 'white', width: '1512.06px', marginTop: '-10px' }} />
        <span className="copy">©2016-2022 Riby. RC: 1214343</span>
      </footer>
    </>
  );
};

export default Footer;
