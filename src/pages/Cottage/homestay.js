import React from 'react';
import './homestay.css'
import img1 from './images/Homestay.jpg';
import Footer from '../../components/Footer';
import Navigation from '../../components/Nav';
import ScrollToTop from '../../components/ScrollToTop';

const HomestayCottage = () => {
    return (
        <>
        <ScrollToTop/>
            <Navigation />
            <div className="Homestay-container">
                <div className="Homestay-image-grid">
                    <img src={img1} alt="Homestay Cottage 1" />
                </div>
                <br></br>
                <h1 className="Homestay-title">Home Stay Cottage</h1>
                <h3 className="Homestay-subtitle">Traditional Comfort with a Homely Touch</h3>
                
                <p className="Homestay-description">
                    Our Home Stay Cottage offers a cozy villa experience with rich traditional touches, creating a homely atmosphere. Blending classic design with modern comforts, it features spacious living areas and authentic decor, making it an ideal retreat for families or guests seeking a unique, culturally inspired getaway.
                </p>

                <p className="Homestay-description">
                    Our Home Stay Cottage offers a warm and welcoming villa experience, blending rich traditional design with modern comforts to create a true home away from home. Thoughtfully crafted with classic architecture and tasteful decor, this cottage radiates an inviting ambiance that’s perfect for families or guests seeking an authentic, culturally inspired retreat. Spacious living areas, cozy bedrooms, and a charming outdoor space make it ideal for relaxation and quality time with loved ones. Each detail, from the intricate woodwork to the locally inspired furnishings, is designed to make guests feel connected to the heritage and beauty of the region. Embrace a unique homely stay at Green Heritage Resort, where comfort and tradition meet in harmony.
                </p>

                <p className="price">✅ Price Range: 60 lac Indian Rupees.</p>
                <a href="/cottages/membershipBenefits"><button className="safari-btn">Get More Details</button></a>


            </div>
            <Footer />
        </>
    );
};

export default HomestayCottage;
