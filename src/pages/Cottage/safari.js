import React from 'react';
import './Safari.css'; // make sure this path is correct
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import img1 from './images/bestsafari.webp'

const Safari = () => {
    
    return (
        <>
            <Navigation />

            <div className="safari-page">

                {/* Hero Section */}
                <section className="safari-hero">
                    <div className="safari-hero-overlay">
                        <h1 className="safari-title">Safari Cottage</h1>
                    </div>
                </section>

                {/* Content Section */}

                <section className="safari-content">
                    <h2>Cozy Retreats with Investment 
                        <br></br>Benefits</h2>
                    <p>Discover the perfect blend of comfort and investment with our Safari Cottages. Designed for nature lovers seeking serene, stylish spaces, each cottage provides a private retreat alongside modern amenities.
                    </p>

                </section>
                <section className="safari-info-section">
                    <div className="safari-info-card">
                        <p>
                            Designed for those seeking cozy yet elegant living spaces, our Safari Cottages
                            offer a serene retreat. These cottages are ideal for couples or solo travelers
                            looking to immerse themselves in the beauty of nature while enjoying modern
                            amenities.
                        </p>
                        <p>
                            As a cottage owner at Green Heritage Resort, you not only gain access to your
                            own private haven but also unlock lucrative investment opportunities. Enjoy 15
                            days of complimentary stay annually and earn passive income from resort bookings
                            for the remaining days, ensuring a truly rewarding ownership experience.
                        </p>
                        <p className="price">
                            ✅ Price Range: 17 to 30 lac Indian Rupees.
                        </p>
                        <a href="/cottages/membershipBenefits"><button className="safari-btn">Get More Details</button></a>
                    </div>

                    <div className="safari-image-grid">
                        <img src={img1} alt="Safari Cottage top view" />

                    </div>
                </section>


            </div>
            <Footer />
        </>
    );
};

export default Safari;
