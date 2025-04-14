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
      image: 'data:image/jpeg;base64,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',
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