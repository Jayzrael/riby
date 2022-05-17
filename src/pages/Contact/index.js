import React from "react";
import Footer from "../../component/Footer/Footer";
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
          <div className="cnt2">
            <h1>Get in Touch</h1>
            <p className="cnpa">Block G, House 4, Moore Road, Yaba, Lagos.</p>
            <hr />
            <p className="cntpa">
              {" "}
              <span className="redfo">info@riby.me </span> <br /> +234 809 222 2109 <br /> 01 291
              4247
            </p>
          </div>
          <form className="formm">
            <h4>
              Please let us know if you need any information. Fill the form and we'll get back to
              you.
            </h4>
            <p className="formp2" type="Name:">
              <input placeholder="Full name"></input>
            </p>
            <p className="formp3" type="Email:">
              <input placeholder="Email Address"></input>
            </p>
            <p className="formp4" type="Message:">
              <input placeholder="Message"></input>
            </p>
            <button>Send</button>
          </form>
        </div>
      </div>

      <Map location={location} zoomLevel={17} />

      <Footer />
    </>
  );
};

export default Contact;
