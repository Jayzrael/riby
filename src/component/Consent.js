import React from 'react'
import CookieConsent, { Cookies } from "react-cookie-consent";
import './Consent.css'
import { Link } from 'react-router-dom';

const Consent = () => {
  return (
   <CookieConsent
   location="bottom"
        buttonText="I accept!!"
        enableDeclineButton
        onDecline={() => {
          alert("nay!");
        }}
   cookieName="myAwesomeCookieName2"
   style={{ background: "#2B373B" }}
   buttonStyle={{ color: "#4e503b", fontSize: "15px" }}
   expires={150}
   flipButtons={true}
 >
We use cookies and similar technologies to recognize your repeat visits and preferences, to measure the effectiveness of campaigns, and improve our websites. For settings and more information about cookies, view our Cookie Policy. By clicking “I accept” on this banner or using our site, you consent to the use of cookies.{" "}
   <span style={{ fontSize: "15px" }}><Link to='/ConsentPage'>View Cookie Policy</Link></span>
 </CookieConsent>
  )
}

export default Consent