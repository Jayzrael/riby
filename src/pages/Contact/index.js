import React from "react";
import Footer from "../../component/Footer";
import Map from "../../component/map/Map";
import "./Contact.css";

const location = {
  address: "Block G House 4, Moore Road, Yaba, Lagos.",
  lat: 6.51381,
  lng: 3.3785,
};
const Contact = () => {
  return (
    <>
      <div className="cnt-container">
        <div className="cnt1">
          <h1>Contact Us</h1>
          <p>We are always available for you.</p>
        </div>

        <div className="contact-form">
          <div className="contactInfo">
            <h3>Get in Touch</h3>
            <p>Block G, House 4, Moore Road, Yaba, Lagos.</p>
            <hr />
            <p style={{ color: "#A12029" }}>info@riby.me </p>
            <p>+234 809 222 2109</p>
            <p>01 291 4247</p>
          </div>
          <form className="formm">
            <h4>
              Please let us know if you need any information. Fill the form and we'll get back to
              you.
            </h4>
            <input placeholder="Full name" />

            <input placeholder="Email Address" />
            <input placeholder="Message" />
            <div className="btn-submit">Send</div>
          </form>
        </div>
      </div>

      <Map location={location} zoomLevel={17} />

      <Footer />
    </>
  );
};

export default Contact;
