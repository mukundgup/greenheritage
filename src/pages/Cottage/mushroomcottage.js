import React from 'react';
import './mushroomcottage.css';
import img1 from './images/mushroomcottage.webp';
import Footer from '../../components/Footer';
import Navigation from '../../components/Nav';
import ScrollToTop from '../../components/ScrollToTop';


const MushroomCottage = () => {
  return (
    <>
    <ScrollToTop/>
    <Navigation/>

    <div className="mushroom-container">
        <div className="mushroom-image-grid">
         <img src={img1} alt="Mushroom Cottage 1" />
    
      </div><br></br>
      <h1 className="mushroom-title">Mushroom Cottage</h1>
      <h3 className="mushroom-subtitle">Unique Design with Investment Perks</h3>
      <p className="mushroom-intro">
        Embrace a distinctive stay with our Mushroom Cottages, inspired by the organic beauty of mushrooms.
        These charming cottages feature spacious interiors and private verandas, ideal for families and friends.
      </p>

      <p className="mushroom-description">
        Inspired by the organic shapes of mushrooms, these cottages exude charm and uniqueness. With spacious interiors
        and private verandas, Mushroom Cottages provide a picturesque setting for families or friends seeking a memorable getaway.
      </p>

      <p className="mushroom-description">
        As a cottage owner at Green Heritage Resort, you not only gain access to your own private haven but also unlock lucrative investment opportunities.
        Enjoy 15 days of complimentary stay annually and earn passive income from resort bookings for the remaining days, ensuring a truly rewarding ownership experience.
      </p>

      <p className="price">✅ Price Range: 21 to 35 lac Indian Rupees.</p>
       <a href="/cottages/membershipBenefits"><button className="safari-btn">Get More Details</button></a>

      
    </div>
    <Footer/>
    </>
  );
};

export default MushroomCottage;
