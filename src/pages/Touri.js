import React from 'react';
import Navigation from '../components/Nav';

import Footer from '../components/Footer';
import './tourism.css';
import twin from "./imges/tourism.jpg"
import ScrollToTop from '../components/ScrollToTop';
const Tourism = () => {
  return (
    <>
      <ScrollToTop/>
      <Navigation />
      <div className="about-wrapper">
        <h1 className="about-heading">Unlocking Adventure</h1>
        <div className="about-paragraphs">
          <h3>Where Real Estate Meets Tourism</h3>
          <br></br>
          <h3>Embark on an Investment Journey: Where Real Estate Meets Tourism for Thrilling Passive Income</h3>
          <p>
            Welcome aboard an exhilarating voyage into the synergy of real estate and tourism, where each step unveils captivating opportunities and exciting prospects! In today’s dynamic real estate landscape, amidst a myriad of possibilities, the vibrant tourism sector emerges as a catalyst for unparalleled growth and boundless adventure.
          </p>
          <br></br>
          <h3>Experience the Excitement of Tourism Impacting Real Estate:</h3>
          <p>
            Feel the pulse of excitement as tourism transforms the real estate landscape. From iconic landmarks to hidden gems, tourist magnets become investment hotspots, propelling property values upwards and offering investors an enchanting gateway to passive income.
          </p>
          <h3>Unleash the Potential of Adventure Tourism:</h3>
          <p>
            Gear up to ride the wave of explosive growth in adventure tourism, outpacing the overall economy with a remarkable 20% Compound Annual Growth Rate (CAGR). Driven by a surge in youth interest, the demand for unique experiences and adventure sports propels this thriving sector to new heights of excitement and opportunity.
          </p>
          <h3>India’s Dynamic Tourism Landscape:</h3>
          <p>India’s adventure and ecotourism industry, valued at $2.5 billion in 2019, is poised for an extraordinary leap to $12.6 billion by 2028. Despite facing challenges posed by the pandemic, this resilient sector is primed for resurgence, buoyed by eased travel restrictions and a renewed sense of exploration. Get ready to explore the boundless potential of India’s vibrant tourism landscape and embark on a journey of growth and prosperity.</p>
        </div>

        <div className="about-image-container">
          <img
            src={twin}
            alt="About us"
            className="about-image"
          />
        </div>
        <br></br>
        <div className="about-paragraphs">

          <p>
            We are thrilled to announce that our world-class tourism and passive income opportunity will debut first in the enchanting landscapes of Bandhavgarh & Kanha National Park. Experience the allure of these iconic destinations while unlocking lucrative investment prospects. After this initial launch, we are set to expand our offerings to other captivating locations nationwide.
          </p>
          <p>Green Heritage Resort offers two unique accommodation options: Duplex Cottages priced between 25 to 50 lac Indian Rupees and Tent House Singlex ranging from 10 to 30 lac Indian Rupees. Cottage owners enjoy 15 days of complimentary stay annually and earn passive income from resort bookings for the remaining days.</p>
          <p>Our resort features various attractions like mini zoos, ayurvedic spas, fishing ponds, flower gardens, water parks, and facilities for destination weddings. RBrothers Real Estate & Construction Pvt Ltd manages the resort efficiently with advanced technology and dedicated staff, while HousingDuniya handles promotions, sales, and bookings.</p>
          <p>At Green Heritage Resort, we don’t just offer cottages; we provide a lifestyle—a blend of modernity and nature, where responsible living is celebrated, and unique experiences await. Our focus on sustainability, innovation, and exceptional customer experiences positions us as pioneers in real estate and adventure tourism in India.</p>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Tourism;
