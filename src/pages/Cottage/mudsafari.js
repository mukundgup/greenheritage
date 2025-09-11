import React from 'react';
import './mudsafari.css'

import img1 from './images/bestmudsafari.webp';


import Footer from '../../components/Footer';
import Navigation from '../../components/Nav';
import ScrollToTop from '../../components/ScrollToTop';


const MuddafariCottage = () => {
    return (
        <>
        <ScrollToTop/>
            <Navigation />

            <div className="Muddafari-container">
                <div className="Muddafari-image-grid">
                    <img src={img1} alt="Muddafari Cottage 1" />

                </div><br></br>
                <h1 className="Muddafari-title">Mud Safari Cottage</h1>
                <h3 className="Muddafari-subtitle">Mud Safari Cottages – Rustic Charm with Smart Investment</h3>


                <p className="Muddafari-description">
                Immerse yourself in nature with our Mud Safari Cottages, where traditional elegance meets modern comfort. Thoughtfully designed for those who seek tranquility, these cottages offer a spacious 580 sq. ft. retreat with stylish interiors and a seamless blend of luxury and nature.   
                </p>

                <p className="Muddafari-description">
              Designed for those who appreciate rustic charm with modern comforts, our Mud Safari Cottages offer a tranquil escape amidst nature. Perfect for couples or solo travelers, these cottages provide a spacious 580 sq. ft. retreat, blending cozy elegance with serene surroundings.
                </p>
                <p>
                    As a Mud Safari Cottage owner at Green Heritage Resort, you not only enjoy a private sanctuary but also exclusive investment benefits. Stay 15 days annually for free, while earning passive income from resort bookings for the remaining days. With a vast 4,000 – 5,000 sq. ft. lawn, a personal hut, a private balcony, and a warm fire pit, this is more than just a getaway—it’s a rewarding lifestyle and investment opportunity.
                </p>

                <p className="price">✅Price Range: 21 lac Indian Rupees.</p>
                 <a href="/cottages/membershipBenefits"><button className="safari-btn">Get More Details</button></a>

                
            </div>
            <Footer />
        </>
    );
};

export default MuddafariCottage;
