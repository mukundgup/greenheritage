import React from "react";
import "./contact.css";
import Navigation from "../components/Nav";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
    <Navigation/>
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <h3 className="contact-subtitle">Get In Touch With Us</h3>

      {/* Contact Form */}
      <form className="contact-form">
        <div className="row">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="tel" placeholder="Phone Number" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>

        <button type="submit" className="send-btn">Send</button>
      </form>

      {/* Contact Details Section */}
      <div className="contact-info-section">
        <div className="info-block">
          <h2 className="info-title">Location</h2>
          <p><strong>Resort Address: Green Heritage Resort,</strong></p>
          <p>Narwar, Bandhavgarh</p>
          <p>Dist – Umaria, M.P. 484664</p>
          <p><strong>Green Heritage Town & Resort Pvt. Ltd. (Corporate Office)</strong></p>
          <p>Green Heritage Town</p>
          <p>Near Hanuman Mandir,</p>
          <p>St. Aloysius School Road, Gortara, Shahdol, M.P.</p>
        </div>

        <div className="info-block">
          <h2 className="info-title">Phone No</h2>
          <p className="highlight">+91 9770358048</p>
        </div>

        <div className="info-block">
          <h2 className="info-title">Email</h2>
          <p className="highlight">greenheritageindia@gmail.com</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
