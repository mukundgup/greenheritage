import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaBed, FaWifi, FaTv, FaSnowflake, FaUtensils, FaParking } from 'react-icons/fa';

const Cottages = () => {
  const cottages = [
    {
      id: 1,
      name: 'Luxury Cottage',
      description: 'Our Luxury Cottages offer a perfect blend of comfort and elegance. Each cottage is spacious and beautifully designed with modern amenities to ensure a memorable stay.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '₹8,000',
      features: ['King-sized bed', 'Air conditioning', 'Private balcony', 'En-suite bathroom', 'Free Wi-Fi', 'Flat-screen TV']
    },
    {
      id: 2,
      name: 'Premium Cottage',
      description: 'Experience luxury at its finest in our Premium Cottages. These cottages feature elegant interiors, premium furnishings, and breathtaking views of the surrounding landscape.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '₹12,000',
      features: ['King-sized bed', 'Air conditioning', 'Private terrace', 'Luxury bathroom', 'Free Wi-Fi', 'Smart TV', 'Mini bar']
    },
    {
      id: 3,
      name: 'Family Cottage',
      description: 'Our Family Cottages are perfect for families or groups. These spacious cottages offer separate living areas and bedrooms, providing comfort and privacy for all guests.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '₹15,000',
      features: ['Multiple bedrooms', 'Air conditioning', 'Living room', 'Dining area', 'Free Wi-Fi', 'Flat-screen TV', 'Kitchen']
    },
    {
      id: 4,
      name: 'Deluxe Cottage',
      description: 'Our Deluxe Cottages offer a luxurious retreat with stunning views. These cottages feature elegant décor, premium amenities, and a private garden area.',
      image: 'https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '₹10,000',
      features: ['Queen-sized bed', 'Air conditioning', 'Private garden', 'En-suite bathroom', 'Free Wi-Fi', 'Flat-screen TV']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
          height: '50vh'
        }}
      >
        <div className="hero-content">
          <h1>Our Cottages</h1>
          <p>Experience luxury and comfort in our beautifully designed cottages</p>
        </div>
      </section>

      {/* Cottages Section */}
      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col lg={12}>
              <p className="lead text-center">At Green Heritage Resort, we offer a range of luxurious cottages designed to provide you with the ultimate comfort and relaxation during your stay. Each cottage is thoughtfully designed and equipped with modern amenities to ensure a memorable experience.</p>
            </Col>
          </Row>

          {cottages.map(cottage => (
            <Row key={cottage.id} className="mb-5 cottage-detail">
              <Col lg={6}>
                <img src={cottage.image} alt={cottage.name} className="img-fluid rounded" />
              </Col>
              <Col lg={6}>
                <h2>{cottage.name}</h2>
                <p className="lead">{cottage.description}</p>
                <h4>Amenities</h4>
                <Row className="mb-3">
                  {cottage.features.map((feature, index) => (
                    <Col md={6} key={index} className="mb-2">
                      <div className="d-flex align-items-center">
                        {index === 0 && <FaBed className="me-2" style={{ color: 'var(--primary-color)' }} />}
                        {index === 1 && <FaSnowflake className="me-2" style={{ color: 'var(--primary-color)' }} />}
                        {index === 2 && <FaWifi className="me-2" style={{ color: 'var(--primary-color)' }} />}
                        {index === 3 && <FaTv className="me-2" style={{ color: 'var(--primary-color)' }} />}
                        {index === 4 && <FaUtensils className="me-2" style={{ color: 'var(--primary-color)' }} />}
                        {index === 5 && <FaParking className="me-2" style={{ color: 'var(--primary-color)' }} />}
                        {feature}
                      </div>
                    </Col>
                  ))}
                </Row>
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <h3>Starting at {cottage.price} per night</h3>
                  <Button variant="success" href="tel:+919876543210">Book Now</Button>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      {/* Booking Information */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-4">
              <h2>Booking Information</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <h3>Check-in & Check-out</h3>
                  <p>Check-in: 2:00 PM</p>
                  <p>Check-out: 11:00 AM</p>
                  <p>Early check-in and late check-out available upon request and subject to availability.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <h3>Reservation Policy</h3>
                  <p>Advance booking is recommended, especially during peak seasons.</p>
                  <p>A 50% deposit is required to confirm your reservation.</p>
                  <p>Full payment is due upon check-in.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <h3>Cancellation Policy</h3>
                  <p>Free cancellation up to 7 days before check-in.</p>
                  <p>50% refund for cancellations made within 3-7 days of check-in.</p>
                  <p>No refund for cancellations made less than 3 days before check-in.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cottages;