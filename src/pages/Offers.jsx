import React from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button,
  Badge,
  ListGroup
} from 'react-bootstrap';
import { 
  CalendarEvent,
  TagFill,
  StarFill
} from 'react-bootstrap-icons';

const Offers = () => {
  const offers = [
    { 
      id: 1,
      title: 'Happy Hours', 
      description: '20% off on all orders from 4 PM to 6 PM', 
      image: 'happy_hours.jpg',
      validUntil: 'Ongoing',
      terms: 'Applicable on all ice creams and drinks',
      popular: true,
      discount: '20% OFF'
    },
    { 
      id: 2,
      title: 'Seasonal Special', 
      description: 'Mango Ice Cream at just ₹99!', 
      image: 'seasonal_specials.jpg',
      validUntil: 'Until Aug 31',
      terms: 'Only for Alphonso mango variant',
      discount: '₹99 ONLY'
    },
    { 
      id: 3,
      title: 'Weekend Bonanza', 
      description: 'Buy 1 Get 1 Free on all sundaes', 
      image: 'weekend_bonanza.jpg',
      validUntil: 'Every Saturday & Sunday',
      terms: 'Valid after 7 PM only',
      discount: 'BOGO'
    }
  ];

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Special Offers</h1>
      <p className="text-center text-muted mb-5">Don't miss these amazing deals on your favorite treats!</p>
      
      <Row xs={1} md={2} lg={3} className="g-4">
        {offers.map((offer) => (
          <Col key={offer.id}>
            <Card className="h-100 shadow-sm border-0">
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <Card.Img 
                  variant="top" 
                  src={offer.image} 
                  className="w-100 h-100 object-fit-cover"
                />
                {offer.popular && (
                  <Badge pill bg="danger" className="position-absolute top-0 end-0 m-2">
                    <StarFill className="me-1" /> Popular
                  </Badge>
                )}
                <Badge pill bg="warning" text="dark" className="position-absolute top-0 start-0 m-2">
                  {offer.discount}
                </Badge>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3">{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
                
                <ListGroup variant="flush" className="mb-3">
                  <ListGroup.Item className="d-flex align-items-center">
                    <CalendarEvent className="text-primary me-2" />
                    <small>Valid: {offer.validUntil}</small>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <TagFill className="text-primary me-2" />
                    <small>{offer.terms}</small>
                  </ListGroup.Item>
                </ListGroup>
                
                <Button variant="primary" className="mt-auto">
                  Claim Offer
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mt-5 text-center border-primary">
        <Card.Body>
          <h4 className="mb-3">Subscribe for More Offers!</h4>
          <p className="mb-3">Get exclusive deals delivered to your inbox</p>
          <div className="d-flex justify-content-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="form-control w-50 me-2"
            />
            <Button variant="outline-primary">Subscribe</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Offers;