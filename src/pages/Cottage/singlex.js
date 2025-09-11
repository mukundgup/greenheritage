import React from 'react';
import './singlex.css'
import img1 from './images/mushroomcottage.webp';
import Footer from '../../components/Footer';
import Navigation from '../../components/Nav';
import ScrollToTop from '../../components/ScrollToTop';


const singlexCottage = () => {
    return (
        <>
        <ScrollToTop/>
            <Navigation />

            <div className="singlex-container">
                <div className="singlex-image-grid">
                    <img src={img1} alt="singlex Cottage 1" />
                </div>
                <br></br>
                <h1 className="singlex-title">Singlex Cottage</h1>
                <h3 className="singlex-subtitle">Luxury Living with Investment Returns</h3>
                <p className="singlex-intro">
                    Discover elevated living with our Singlex Cottages, crafted for those who appreciate luxury and style. Featuring modern decor, spacious interiors, and refined furnishings, these cottages offer the ultimate comfort.
                </p>

                <p className="singlex-description">
                    Experience luxury redefined in our Singlex Cottages, designed to offer unparalleled comfort and style. Each cottage boasts modern furnishings, elegant decor, and expansive living spaces, making it the perfect choice for discerning travelers.
                </p>

                <p className="singlex-description">
                    As a cottage owner at Green Heritage Resort, you not only gain access to your own private haven but also unlock lucrative investment opportunities. Enjoy 15 days of complimentary stay annually and earn passive income from resort bookings for the remaining days, ensuring a truly rewarding ownership experience.
                </p>

                <p className="price">✅ Price Range: 26 to 40 lac Indian Rupees.</p>
                <a href="/cottages/membershipBenefits"><button className="safari-btn">Get More Details</button></a>


            </div>
            <Footer />
        </>
    );
};

export default singlexCottage;
