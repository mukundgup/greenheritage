import React from 'react';
import './duplex.css'
import img1 from './images/mushroomcottage.webp';
import Footer from '../../components/Footer';
import Navigation from '../../components/Nav';
import ScrollToTop from '../../components/ScrollToTop';


const duplexCottage = () => {
  return (
    <>
    <ScrollToTop/>
    <Navigation/>

    <div className="duplex-container">
      <div className="duplex-image-grid">
         <img src={img1} alt="duplex Cottage 1" />
    
      </div><br></br>
      <h1 className="duplex-title">Duplex Cottage</h1>
      <h3 className="duplex-subtitle">Spacious Luxury with Investment Potential</h3>
      <p className="duplex-intro">
     Experience the height of luxury with our Duplex Cottages, offering two levels of beautifully designed living space. Ideal for families or groups, these cottages provide separate living and sleeping areas for privacy and comfort.
      </p>

      <p className="duplex-description">
        Indulge in the ultimate luxury living with our Duplex Cottages, featuring two levels of exquisite design and comfort. With separate living and sleeping areas, these cottages offer privacy and space, making them ideal for families or groups.
      </p>

      <p className="duplex-description">
     As a cottage owner at Green Heritage Resort, you not only gain access to your own private haven but also unlock lucrative investment opportunities. Enjoy 15 days of complimentary stay annually and earn passive income from resort bookings for the remaining days, ensuring a truly rewarding ownership experience.
      </p>

      <p className="price">✅ Price Range: 30 to 45 lac Indian Rupees.</p>
       <a href="/cottages/membershipBenefits"><button className="safari-btn">Get More Details</button></a>

      
    </div>
    <Footer/>
    </>
  );
};

export default duplexCottage;
