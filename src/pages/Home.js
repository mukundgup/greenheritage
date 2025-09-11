import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Home.css';
import mission from './imges/mission.jpg';
import vision from './imges/vision.jpg';
import value from './imges/value.jpg';
// import housecard1 from './imges/houseslider.jpg'
import fasari from './imges/safaricottage.webp'
import singlexcorteg from './imges/singlexcorteg.jpeg'
import twin from './imges/twin.jpg'
import treehouse from './imges/treehouse.webp'
import homecotteg from './imges/homecotteg.webp'
import mudmushroom from './imges/mudmushroom.webp'
import safaricottage from './imges/mudsafaricottage.webp'
import rowcottage from './imges/rowcottage.webp'
import mushromms from './imges/mushromm.webp'
// syping
import MrDanishKhan from './imges/MrDanishKhan.jpeg'
import RMBondreji from './imges/R.M.Bondreji.webp'
import ashokshrivastava from "./imges/AshokShrivastava.webp"
import mohadtajul from "./imges/MohdTajul.jpeg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
  const cottageTypes = [
    // { image: housecard1, name: "Luxury Cottage", path: "/cottages/luxury" },
    { image: fasari, name: "Safari Cottage", path: "/cottages/safari" },
    { image: singlexcorteg, name: "Singlex Cottages", path: "/cottages/singlex" },
    { image: twin, name: "Twin Duplex Cottages", path: "/cottages/duplex" },
    { image: treehouse, name: "Tree House Cottages", path: "/cottages/treehouse" },
    { image: homecotteg, name: "Home stay Cottage", path: "/cottages/homestay" },
    { image: mudmushroom, name: "Mud Mushroom Cottages", path: "/cottages/mudmushroom" },
    { image: safaricottage, name: " Mud Safari Cottages", path: "/cottages/mudsafari" },
    { image: rowcottage, name: "Row Cottage", path: "/cottages/row" },
    { image: mushromms, name: "Mushroom Suite Cottages", path: "/cottages/mushroomcottage" }
  ];

  return (
    <>
      <Header />
      <div className='main-home'>
        {/* === Hero Section === */}
        <section className="hero-video">
          <div className="iframe-container">
            <iframe className="responsive-iframe" src="https://player.vimeo.com/video/1083508355?h=6983f6c717&autoplay=1&muted=1&loop=1&background=1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Tiger Promo"></iframe>
          </div>
          <div className="hero-overlay">
            <div className="scroll-indicator">
              <span className="down-arrow">⬇</span>
              <p>Scroll Down</p>
            </div>
          </div>
        </section>

        {/* === Welcome Section === */}
        <section className="welcome-section">
          <h1>Welcome To Green Heritage Resort</h1>
          <p>
            Where every moment is an adventure waiting to unfold! Founded by the visionary Shri Ram,
            our resort stands as a beacon of excellence, innovation, and sustainable luxury living.
          </p>
          <p>
            For over 15 glorious years, Green Heritage Resort has been synonymous with crafting dream homes and creating
            unforgettable experiences. Rooted in our passion for merging real estate ownership with adventure tourism,
            we've set out to redefine the boundaries of modern living.
          </p>
        </section>

        {/* === Image Cards Section === */}
        <section className="image-grid">
          <div className="image-card">
            <img src={mission} alt="Mission" />
            <div className="overlay">
              <h2>Mission</h2>
              <p>At Green Heritage Resort, our mission is to merge real estate ownership with adventure tourism, offering a lifestyle rich in experiences and environmental sustainability. Through innovative design and integrity, we create a haven where cottage owners enjoy nature while positively impacting the ecosystem..</p>
            </div>
          </div>

          <div className="image-card">
            <img src={vision} alt="Vision" />
            <div className="overlay">
              <h2>Vision</h2>
              <p>Our vision at Green Heritage Resort is to pioneer sustainable luxury living, combining eco-friendly practices with adventure. We aim for cottages that embody responsible real estate, surrounded by thriving ecosystems, fostering a legacy of environmental stewardship and enriched lives.</p>
            </div>
          </div>

          <div className="image-card">
            <img src={value} alt="Wildlife" />
            <div className="overlay">
              <h2>Wildlife</h2>
              <p>Our core values—sustainability, innovation, integrity, community engagement, exceptional experiences, responsibility, customer focus, and quality—define the ethos of Green Heritage Resort, guiding our decisions and actions as we shape the future of experiential living.</p>
            </div>
          </div>
        </section>

        {/* === Cottages Section === */}
        <section className="cottages-section">
          <div className="cottages-container">
            <div className="cottages-heading">
              <h2>Our Cottages Range</h2>
            </div>
            <div className="cottages-description">
              <p>
                Experience luxury living in the heart of nature's beauty. Your sanctuary awaits.
                Nestled amidst the breathtaking landscapes of Bandhavgarh & Kanha National Park,
                our resort offers a sanctuary where tranquility meets excitement. From the moment
                you step foot into our world, you're greeted with the promise of endless possibilities
                and boundless exploration.
              </p>
            </div>
          </div>
        </section>

        {/* === Swiper Cards === */}
        <section>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
              1440: { slidesPerView: 3 },
            }}
            style={{ padding: "60px 50px", backgroundColor: "#fff" }}
          >
            {cottageTypes.map((cottage, index) => (
              <SwiperSlide key={index}>
                <div className="image-container">
                  <img src={cottage.image} alt={cottage.name} className="responsive-img" />
                  <div className="text-overlay">
                    <div className="text-overlay-content">
                      <h3>{cottage.name}</h3>
                      <Link to={cottage.path}>More →</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* === Testimonials Section === */}
        <section className="Saying-section">
          <div className="Saying-overlay"></div>
          <div className="Saying-content-wrapper">
            <h3 className="Saying-heading">What They're Saying</h3>
            <p className="Saying-subheading">
              Discover what our valued guests and cottage owners have to say about their experiences at Green Heritage Resort.
            </p>

            <div className="Saying-swiper-container">
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={2}
                slidesPerGroup={1}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                }}
              >
                <SwiperSlide>
                  <div className="Saying-card">
                    <p className="Saying-text">
                      I recently acquired a Mud Safari Cottage at Green Heritage Resort, Bandhavgarh, and I'm truly impressed. This is not just an investment in a serene getaway but also a step towards a sustainable and nature-friendly future. With Bandhavgarh's growing popularity and the resort's eco-conscious approach, I see great potential for both personal retreat and long-term value. Looking forward to the wonderful experiences and benefits ahead!
                    </p>
                    <div className="Saying-profile">
                      <img src={ashokshrivastava} alt="Ashok Shrivastava" className="Saying-img" />
                      <h4 className="Saying-name">Ashok Shrivastava</h4>
                      <p className="Saying-location">Madhya Pradesh</p>
                      <p className="Saying-cottage">Mud Safari cottage</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="Saying-card">
                    <p className="Saying-text">
                      I saw an ad for Green Heritage Resort online and was really impressed. Their membership-cum-ownership model gave me a peaceful place to enjoy and also earn passive income when I'm not there. It's a smart and simple way to own a beautiful cottage and make the most of it.
                    </p>
                    <div className="Saying-profile">
                      <img src={MrDanishKhan} alt="Mr. Danish Khan" className="Saying-img" />
                      <h4 className="Saying-name">Mr. Danish Khan</h4>
                      <p className="Saying-location">Madhya Pradesh</p>
                      <p className="Saying-cottage">Row Cottage</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="Saying-card">
                    <p className="Saying-text">
                      I chose the Singlex Cottage at Green Heritage Resort near Bandhavgarh for its calm, natural setting and the confidence the team inspired. Everything from planning to execution was handled with atmost care by green heritage team. It's more than a getaway — it's a meaningful step toward a peaceful, self-sustaining future.
                    </p>
                    <div className="Saying-profile">
                      <img src={RMBondreji} alt="R. M. Bondre ji" className="Saying-img" />
                      <h4 className="Saying-name">R. M. Bondre ji</h4>
                      <p className="Saying-location">Mumbai</p>
                      <p className="Saying-cottage">Singlex Cottage</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="Saying-card">
                    <p className="Saying-text">
                      I am Tajul, 28 years old, and I run my own medical store. I was searching for a parallel source of passive income when I discovered the GHR Membership. I decided to visit Green Heritage Resort, Bandhavgarh — and after experiencing it personally, I finalized my membership. Today, I proudly own a cottage along with many other lifestyle benefits.Thank you, GHR, for giving me a new way to grow alongside my dreams.
                    </p>
                    <div className="Saying-profile">
                      <img src={mohadtajul} alt="Mohd. Tajul" className="Saying-img" />
                      <h4 className="Saying-name">Mohd. Tajul</h4>
                      <p className="Saying-location">Madhya Pradesh</p>
                      <p className="Saying-cottage">Row Cottage</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* === Amenities Section === */}
        <section className="Amenities-section">
          <div className="Amenities-container">
            <div className="Amenities-heading">
              <h2>Our Best Amenities</h2>
            </div>
            <div className="Amenities-description">
              <p>
                Indulge in a world of luxury and relaxation at Green Heritage Resort. Our resort is designed to provide you with an unforgettable experience, offering a range of exceptional amenities:
              </p>
            </div>
          </div>
        </section>

        {/* === Amenities Slider === */}
        <section>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
              1440: { slidesPerView: 3 },
            }}
            style={{ padding: "60px 50px", backgroundColor: "#fff" }}
          >
            {cottageTypes.map((amenity, index) => (
              <SwiperSlide key={index}>
                <div className="BestAmenities-image-container">
                  <img src={amenity.image} alt={amenity.name} className="BestAmenities-responsive-img" />
                  <div className="BestAmenities-text-overlay">
                    <div className="BestAmenities-text-overlay-content">
                      <h3>{amenity.name}</h3>
                      <Link to={`/amenities${amenity.path}`}>More →</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
