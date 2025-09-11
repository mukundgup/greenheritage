import React from 'react';
import './mudmushroom.css'
import img1 from './images/mudmushroom.webp';


import Footer from '../../components/Footer';
import Navigation from '../../components/Nav';
import ScrollToTop from '../../components/ScrollToTop';


const MudmushrromCottage = () => {
    return (
        <>
        <ScrollToTop/>
            <Navigation />

            <div className="Mudmushrrom-container">
                  <div className="Mudmushrrom-image-grid">
                    <img src={img1} alt="Mudmushrrom Cottage 1" />

                </div><br></br>
                <h1 className="Mudmushrrom-title">Mud Mushroom Cottage</h1>
                <h3 className="Mudmushrrom-subtitle">Mud Mushroom Cottages – Nature-Inspired Luxury with Investment Benefits</h3>


                <p className="Mudmushrrom-description">
                    Experience the charm of Mud Mushroom Cottages, uniquely designed to blend organic beauty with modern comfort. Inspired by the elegance of nature, these spacious 615 sq. ft. cottages offer a one-of-a-kind retreat with private verandas, making them perfect for families and friends seeking tranquility.
                </p>

                <p className="Mudmushrrom-description">
              Designed to reflect the organic beauty of mushrooms, our Mud Mushroom Cottages offer a unique and charming escape. With spacious 615 sq. ft. interiors and private verandas, these cottages provide a picturesque setting for families and friends looking for a serene and unforgettable getaway.
                </p>
                <p>
                   As a Mud Mushroom Cottage owner at Green Heritage Resort, you not only enjoy a luxurious personal retreat but also gain exclusive investment perks. Stay 15 days annually for free, while earning passive income from resort bookings for the remaining days. With a vast 4,500 – 5,200 sq. ft. lawn, a private hut, a scenic balcony, and a cozy fire pit, this is more than just a stay—it’s a lifestyle investment in comfort and financial growth.
                </p>

                <p className="price">✅Price Range: 23 lac Indian Rupees.</p>
                 <a href="/cottages/membershipBenefits"><button className="safari-btn">Get More Details</button></a>

              
            </div>
            <Footer />
        </>
    );
};

export default MudmushrromCottage;
