import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Offers = () => {
  const offers = [
    { title: 'Happy Hours', description: '20% off on all orders from 4 PM to 6 PM', image: 'happy_hours.jpg' },
    { title: 'Seasonal Specials', description: 'Mango Ice Cream at just ₹99!', image: 'seasonal_specials.jpg' },
  ];

  return (
    <Container>
      <Row>
        {offers.map((offer, index) => (
          <Col key={index} md={6}>
            <Card>
              <Card.Img variant="top" src={offer.image} />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;