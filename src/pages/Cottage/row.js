import React from 'react';
import './row.css'
import img1 from './images/rowcottage.webp';


import Footer from '../../components/Footer';
import Navigation from '../../components/Nav';
import ScrollToTop from '../../components/ScrollToTop';


const rowCottage = () => {
    return (
        <>
        <ScrollToTop/>
            <Navigation />

            <div className="row-container">
                 <div className="row-image-grid">
                    <img src={img1} alt="row Cottage 1" />

                </div><br></br>
                <h1 className="row-title">Row Cottage</h1>
                <h3 className="row-subtitle">Elegant Row Cottages – A Blend of Luxury & Smart Investment</h3>


                <p className="row-description">
                 Indulge in a lavish retreat with our exquisitely designed Row Cottages, offering two levels of spacious living. Perfect for families and groups, these cottages provide well-defined living and sleeping areas, ensuring privacy and ultimate comfort.
                </p>

                <p className="row-description">
               Experience the perfect blend of elegance and comfort with our Row Cottages, thoughtfully designed across two levels. Featuring separate living and sleeping areas, these cottages provide privacy and ample space, making them ideal for families and groups.
                </p>
                <p>
                    As a Row Cottage owner at Green Heritage Resort, you not only enjoy a luxurious retreat but also unlock exciting investment opportunities. Benefit from 15 days of complimentary stay every year, while earning passive income from resort bookings for the remaining days. With expansive lawns (1,000 – 2,000 sq. ft.) and a private balcony, this is an investment that offers both leisure and financial rewards.
                </p>

                <p className="price">✅Price Range: 14.5 lac Indian Rupees.</p>
                 <a href="/cottages/membershipBenefits"><button className="safari-btn">Get More Details</button></a>

               
            </div>
            <Footer />
        </>
    );
};

export default rowCottage;
