import React, { useState } from "react";
import "./contact.css";
import Navigation from "../components/Nav";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    // Clear form after submission
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    });
     console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <>
    <Navigation/>
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <h3 className="contact-subtitle">Get In Touch With Us</h3>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <input 
            type="text" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name" 
            required 
          />
          <input 
            type="text" 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name" 
            required 
          />
        </div>
        <input 
          type="tel" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number" 
          required 
        />
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email" 
          required 
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message" 
          rows="5" 
          required
        ></textarea>

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
