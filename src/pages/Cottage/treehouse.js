import React from 'react';
import './treehouse.css'
import img1 from './images/Treehouse.jpg';
import Footer from '../../components/Footer';
import Navigation from '../../components/Nav';
import ScrollToTop from '../../components/ScrollToTop';


const TreehouseCottage = () => {
  return (
    <>
    <ScrollToTop/>
      <Navigation />

      <div className="Treehouse-container">
        
        <div className="Treehouse-image-grid">
          <img src={img1} alt="Treehouse Cottage 1" />

        </div><br></br>
        <h1 className="Treehouse-title">Tree House Cottage</h1>
        <h3 className="Treehouse-subtitle">Elevated Living Amidst Nature</h3>
        <p className="Treehouse-intro">
          Experience the height of luxury with our Duplex Cottages, offering two levels of beautifully designed living space. Ideal for families or groups, these cottages provide separate living and sleeping areas for privacy and comfort.
        </p>

        <p className="Treehouse-description">
          Discover a truly enchanting getaway with our Tree House Cottages, designed for those who long to be immersed in nature while enjoying modern amenities. Perched high among the trees, these cottages offer a serene and secluded retreat, allowing guests to experience the beauty of nature from a breathtaking vantage point. Each Tree House Cottage is thoughtfully crafted to blend rustic charm with contemporary comfort, featuring cozy interiors, private balconies, and expansive views of the surrounding canopy. Ideal for couples, solo travelers, or small families, this elevated escape brings you closer to nature while providing the perfect space to relax, unwind, and recharge.
        </p>

        <p className="price">✅ Price Range: 26 to 40 lac Indian Rupees.</p>
         <a href="/cottages/membershipBenefits"><button className="safari-btn">Get More Details</button></a>

      </div>
      <Footer />
    </>
  );
};

export default TreehouseCottage;
