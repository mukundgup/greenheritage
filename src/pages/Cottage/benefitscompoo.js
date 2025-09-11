import React from 'react';
import './benefitscompoo.css';
import Footer from '../../components/Footer';
import Navigation from '../../components/Nav';
import ScrollToTop from '../../components/ScrollToTop';

const MembershipBenefits = () => {
    return (
        <>
        <ScrollToTop/>
            <Navigation />

            <div className="membership-container">
                <h1 className="membership-title">Membership Benefits</h1>
                <p className="membership-subtitle">
                    Green Heritage Resort (GHR) – Cottage Membership Benefits
                </p>

                <h2 className="dream-title">
                    Own Your Dream Cottage, Reap the Rewards for a Lifetime
                </h2>

                <h3 className="section-title">Ownership Benefits</h3>

                <div className="benefit-item">
                    <h4>1. 15 Days of Complimentary Stay</h4>
                    <p>
                        Enjoy 15 days of free stay every year in your personal luxury cottage,
                        providing a perfect retreat amidst nature’s tranquility.
                    </p>

                    <h4>2. Earn Passive Income Effortlessly</h4>
                    <p>
                        Generate rental income with a lucrative revenue-sharing model.
                        Benefit from a steady and hassle-free earning opportunity.
                    </p>

                    <h4>3. Personal Lawn with Sandalwood Trees</h4>
                    <p>
                        Own a lush green sanctuary featuring sandalwood plantations with
                        an upgraded 75:25 model, making it a rewarding investment.
                    </p>

                    <h4>4. Increasing Resale Value</h4>
                    <p>
                        Your investment appreciates over time, ensuring steady growth in resale
                        value — making your cottage a high-value long-term asset.
                    </p>

                    <h4>5. AI-Powered Property Management</h4>
                    <p>
                        Experience seamless, AI-based management that provides full transparency
                        in tracking bookings, income, and property maintenance.
                    </p>

                    <h4>6. Exclusive Discounts on World-Class Amenities</h4>
                    <p>
                        Avail special discounts on premium GHR amenities, including the water
                        park, adventure zone, and wellness facilities.
                    </p>

                    <h4>7. Premium Wellness & Lifestyle Benefits</h4>
                    <p>
                        Immerse yourself in yoga, meditation, and nature therapy — designed to
                        enhance your physical and mental well-being.
                    </p>

                    <h4>8. Elite Club Membership & Exclusive Perks</h4>
                    <p>
                        Join an exclusive community of cottage owners and enjoy VIP access to
                        elite events and privileged experiences.
                    </p>

                    <h4>9. Growth in Booking Rates & Occupancy</h4>
                    <p>
                        Maximize your earnings with increasing occupancy rates and annual
                        growth in booking prices.
                    </p>

                    <h4>10. Special Discounts at Wellness Village</h4>
                    <p>
                        Enjoy discounted Panchkarma and Ayurvedic treatments at our state-of-the-art
                        Wellness Village.
                    </p>
                </div>

                <p className="why-choose-us">Why Choose Us</p>
                <br></br>
                <p>
                    Green Heritage Resort, a visionary venture by RBrothers Real Estate & Construction Pvt Ltd
                    and HousingDuniya, merges ownership and adventure tourism.
                </p>

                <div className="benefit-item">
                    <h4>1. Experienced Leadership</h4>
                    <p>
                        Managed by industry experts with a strong legacy in real estate and hospitality.
                    </p>

                    <h4>2. Sustainable & Luxurious Living</h4>
                    <p>
                        A perfect blend of eco-friendly sustainability and modern luxury.
                    </p>

                    <h4>3. Transparent & Automated Management</h4>
                    <p>
                        Our fully automated system ensures complete transparency for cottage owners.
                    </p>

                    <h4>4. Prime Location in Bandhavgarh</h4>
                    <p>
                        Nestled in lush greenery, GHR offers a serene and picturesque environment.
                    </p>

                    <h4>Own Your Luxury Cottage Today & Secure a Lifetime of Benefits!</h4>
                </div>

                <div className="contact-info-section">
                    <div className="info-block">
                        <h2 className="info-title">Location</h2>
                        <p>Green Heritage Resort</p>
                        <p>Narwar, Bandhavgarh, Dist. Umaria, M.P. 484664</p>
                    </div>

                    <div className="info-block">
                        <h2 className="info-title">Phone No</h2>
                        <p className="highlight">+91 97703 58048</p>
                        <p className="highlight">+91 85160 85813</p>
                    </div>

                    <div className="info-block">
                        <h2 className="info-title">Email</h2>
                        <p className="highlight">greenheritageindia@gmail.com</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default MembershipBenefits;
