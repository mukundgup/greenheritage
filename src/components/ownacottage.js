import React, { useState, useEffect } from 'react';
import './ownacottage.css';
import Navigation from './Nav';
import Footer from './Footer';

const Owncottage = () => {
    const cottages = [
        { id: "safari", title: "Safari Cottage", desc: "Cozy & elegant — jungle stay experience.", lawn: "4,500+ sq. ft." },
        { id: "mushroom", title: "Mushroom Cottage", desc: "Geodesic dome-inspired design.", lawn: "5,000+ sq. ft." },
        { id: "singlex", title: "Singlex Cottage", desc: "Modern spacious cottage for families.", lawn: "5,200+ sq. ft." },
        { id: "duplex", title: "Duplex Cottage", desc: "Two-storey villa-style luxury.", lawn: "4,500+ sq. ft." },
        { id: "treetop", title: "Tree House", desc: "Elevated canopy nest with views.", lawn: "4,500+ sq. ft." },
        { id: "homestay", title: "Home Stay Cottage", desc: "Luxury villa with private amenities.", lawn: "8,000+ sq. ft." }
    ];

    // Calculator state
    const [place, setPlace] = useState("Bandhavgarh");
    const [cottageType, setCottageType] = useState(cottages[0].id);
    const [bookingValue, setBookingValue] = useState(12000);
    const [occupancy, setOccupancy] = useState(30);
    const [potentialIncome, setPotentialIncome] = useState(0);

    useEffect(() => {
        const occFactor = Math.max(0, Math.min(100, Number(occupancy))) / 100;
        const nightsPerYear = 365 * occFactor;
        const gross = Number(bookingValue) * nightsPerYear;
        const net = gross * 0.7; // after 30% fees
        setPotentialIncome(Math.round(net));
    }, [bookingValue, occupancy, cottageType, place]);

    return (
        <>
            <Navigation />

            <div className="Owncottage-page">
                {/* Hero Section */}
                <section className="Owncottage-hero">
                    <div className="Owncottage-hero-overlay">
                        <h1 className="Owncottage-title">Own a Cottage at Green Heritage Resort</h1>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="Owncottage-content">
                    <h2>Your Gateway To Nature, Luxury, And Rental Income</h2>
                    <p>
                        To become a cottage owner at Green Heritage Resort, you can reach out to our sales team
                        for detailed information on the ownership process, pricing, and available options.
                        We’ll be happy to guide you through the investment opportunities and benefits.
                    </p>
                </section>

                {/* Benefits + Calculator Section */}
                <section className="Owncottage-benefits-section">
                    <div className="benefits-card">
                        <h3>Why Own A Cottage With Us?</h3>
                        <ul>
                            <li>✔ Proven Model & Successful Launch: Green Heritage Resort has already successfully launched in Bandhavgarh, and we are expanding to Kanha, Khajuraho, and Pench.</li>
                            <li>✅ Prime Locations: Nestled near India’s most famous national parks with unmatched luxury and eco-tourism.</li>
                            <li>✅ Eco-Friendly Design: Built using sustainable materials for minimal environmental impact.</li>
                            <li>✅ Rental Income Opportunity: Enjoy 15 days of complimentary stay annually and earn rental income through our AI-based GHR Booking System.</li>
                            <li>✅ Premium Lifestyle: Access adventure tourism, wellness retreats, organic farming, and more.</li>
                            <li>✅ Appreciating Asset: Your investment grows in value over time.</li>
                            <li>✅ Easy Management: Track bookings and maintenance through the GHR App.</li>
                        </ul>
                    </div>

                    <div className="income-calculator-card">


                        <div className="info-card" style={{ marginTop: 16 }}>
                            <h3>Calculate Potential Income</h3>
                            <div className="calc-row">
                                <div style={{ flex: 1 }}>
                                    <label>Place</label>
                                    <select className="input" value={place} onChange={e => setPlace(e.target.value)}>
                                        <option>Bandhavgarh</option>
                                        <option>Kanha National Park</option>
                                        <option>Khajuraho</option>
                                        <option>Pench</option>
                                    </select>
                                </div>
                                <div style={{ width: 200 }}>
                                    <label>Cottage Type</label>
                                    <select className="input" value={cottageType} onChange={e => setCottageType(e.target.value)}>
                                        {cottages.map(c => (
                                            <option key={c.id} value={c.id}>{c.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ width: 160 }}>
                                    <label>Booking Value (₹)</label>
                                    <input className="input" type="number" value={bookingValue} onChange={e => setBookingValue(e.target.value)} />
                                </div>
                                <div style={{ width: 140 }}>
                                    <label>Occupancy (%)</label>
                                    <input className="input" type="number" value={occupancy} onChange={e => setOccupancy(e.target.value)} />
                                </div>
                            </div>

                            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e0e0e0', padding: 12, borderRadius: 8 }}>

                                <div>

                                    <div style={{ fontSize: 20, fontWeight: 700 }}>₹ {potentialIncome.toLocaleString()}</div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="info-card">
                        <h3>Book Now</h3>
                        <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted (demo)') }}>
                            <label>Name</label>
                            <input className="input" placeholder="Your name" />
                            <label style={{ marginTop: 8 }}>Email</label>
                            <input className="input" placeholder="you@domain.com" />
                            <label style={{ marginTop: 8 }}>Mobile</label>
                            <input className="input" placeholder="+91 9XXXXXXXX" />
                            <label style={{ marginTop: 8 }}>Message</label>
                            <textarea className="input" rows={3} placeholder="Message..." />
                            <div style={{ marginTop: 10 }}>
                                <button type="submit" className="btn">Send</button>
                            </div>
                        </form>

                    </div>


                </section>
            </div>

            <Footer />
        </>
    );
};

export default Owncottage;
