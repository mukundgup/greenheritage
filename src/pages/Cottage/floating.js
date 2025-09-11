import React from 'react';
import './floating.css'

import img1 from './images/mudmushroom.webp';


import Footer from '../../components/Footer';
import Navigation from '../../components/Nav';


const FloatingCottage = () => {
    return (
        <>
            <Navigation />

            <div className="Floating-container">
                 <div className="Floating-image-grid">
                    <img src={img1} alt="Floating Cottage 1" />

                </div><br></br>
                <h1 className="Floating-title">Floating Mushroom Cottage</h1>
                <h3 className="Floating-subtitle">River Nest – Floating Mushroom Cottage | GHR Bandhavgarh</h3>


                <p className="Floating-description">
                  River Nest is a unique 650 sq. ft. floating Mushroom Cottage set on the tranquil waters of GHR Bandhavgarh. With a private deck and water-view lawn area, it offers a peaceful escape surrounded by nature—perfect for relaxing, unwinding, and soaking in the serene beauty of the river.
                </p>

                <p className="Floating-description">
             River Nest is a charming 650 sq. ft. floating Mushroom Cottage situated on the peaceful waters of GHR Bandhavgarh. This unique waterfront accommodation features innovative mushroom-inspired architecture that creates an enchanting and intimate living experience. The cottage’s thoughtful design maximizes comfort while maintaining a direct connection with the tranquil aquatic surroundings, offering guests an extraordinary stay unlike any traditional accommodation.
                </p>
                <p>
                  The retreat includes a private deck for personal relaxation and a spacious water-view lawn area perfect for connecting with nature. River Nest provides the ideal sanctuary for unwinding and escaping daily stresses, surrounded by serene river beauty. Whether seeking solitude, quality time with loved ones, or simply a peaceful getaway, this floating cottage delivers an unforgettable experience that perfectly blends comfort, tranquility, and the unique charm of waterfront living.
                </p>

                <p className="price">✅Price Range: 21 to 35 lac Indian Rupees.</p>
                 <a href="/cottages/membershipBenefits"><button className="safari-btn">Get More Details</button></a>

               
            </div>
            <Footer />
        </>
    );
};

export default FloatingCottage;
