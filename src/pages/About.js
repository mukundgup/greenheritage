import React from 'react';
import Navigation from '../components/Nav';

import Footer from '../components/Footer';
import './About.css';
import twin from "./imges/twin.jpg"
import ScrollToTop from '../components/ScrollToTop';
const About = () => {
  return (
    <>
    <ScrollToTop/>
    <Navigation/>
    <div className="about-wrapper">
      <h1 className="about-heading">About Us</h1>

      <div className="about-paragraphs">
        <p>
          We are passionate about sustainability and environmental responsibility. Our goal is to
          inspire change and promote a greener lifestyle.
        </p>
        <p>
          Through community involvement and educational initiatives, we strive to make a lasting
          impact on our planet.
        </p>
        <p>
          Join us in our mission to protect nature and build a healthier, more sustainable future.
        </p>
      </div>

      <div className="about-image-container">
        <img
          src={twin}
          alt="About us"
          className="about-image"
        />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
