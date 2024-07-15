import React from "react";
import Nav from "../../Components/Navbar/Nav";
import Footer from "../../Components/Footer/Footer";
import "./Contactus.css";
import image from '/assets/Images/12.png';

const ContactUs = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="Contactus">
        <h3>Contact Us</h3>
      </div>
      <div className="form">
        <form action="mailto:hema.talari08@gmail.com">
          <lable>Name</lable>
          <br></br>
          <input
            type="text"
            className="name"
            placeholder="Full Name"
            required
          />
          <br></br>
          <lable>Email ID</lable>
          <br></br>
          <input
            type="mail"
            className="mailid"
            placeholder="Email ID"
            required
          />
          <br></br>
          <lable>Contact Number</lable>
          <br></br>
          <input
            type="number"
            className="number"
            placeholder="Contact Number"
            required
          />
          <br></br>
          <lable>Message</lable>
          <br></br>
          <input
            type="text"
            className="message"
            placeholder="Message"
            required
          />
          <br></br>
          <button type="submit" className="btn msg">
            Send Message
          </button>
        </form>
        <img style={{height:'400px', width:'550px'}} src={image} alt=""/>
              </div>
      <div className="App">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.5390436498355!2d0.047576411780494564!3d51.540013971703225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a64b9f6ffe7d%3A0xdbc3d743370a4411!2s292-294%20Plashet%20Grove%2C%20London%20E6%201DQ%2C%20UK!5e0!3m2!1sen!2sin!4v1714913696534!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{border:"0"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
