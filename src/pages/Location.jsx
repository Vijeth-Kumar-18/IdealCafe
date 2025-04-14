import React from 'react';
import { Container, Card, Row, Col, ListGroup, Badge , Button} from 'react-bootstrap';
import { GeoAlt, Telephone, Clock, Scooter } from 'react-bootstrap-icons';

const Locations = () => {
  const locations = [
    { 
      name: 'Ideal Café - Mulki', 
      address: 'Main Road, Near Mulki Bridge, Mangalore', 
      contact: '0824-123456',
      hours: '8:00 AM - 10:30 PM',
      delivery: true,
      featured: true
    },
    { 
      name: 'Ideal Café - Lalbagh', 
      address: 'Lalbagh Circle, Opposite City Mall, Mangalore', 
      contact: '0824-654321',
      hours: '9:00 AM - 11:00 PM',
      delivery: true
    },
    { 
      name: 'Ideal Café - Udupi', 
      address: 'Car Street, Near Krishna Temple, Udupi', 
      contact: '0820-789456',
      hours: '7:30 AM - 10:00 PM',
      delivery: false,
      new: true
    }
  ];

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Our Locations</h1>
      
      <Row xs={1} md={2} lg={3} className="g-4">
        {locations.map((location, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <Card.Title className="mb-0">
                    {location.name}
                    {location.featured && (
                      <Badge pill bg="danger" className="ms-2">
                        Flagship
                      </Badge>
                    )}
                    {location.new && (
                      <Badge pill bg="success" className="ms-2">
                        New
                      </Badge>
                    )}
                  </Card.Title>
                  {location.delivery && (
                    <Badge bg="light" text="dark">
                      <Scooter className="me-1" />
                      Delivery
                    </Badge>
                  )}
                </div>
                
                <ListGroup variant="flush" className="mb-3">
                  <ListGroup.Item className="d-flex align-items-center">
                    <GeoAlt className="text-primary me-2" />
                    <span>{location.address}</span>
                  </ListGroup.Item>
                  
                  <ListGroup.Item className="d-flex align-items-center">
                    <Telephone className="text-primary me-2" />
                    <span>{location.contact}</span>
                  </ListGroup.Item>
                  
                  <ListGroup.Item className="d-flex align-items-center">
                    <Clock className="text-primary me-2" />
                    <span>{location.hours}</span>
                  </ListGroup.Item>
                </ListGroup>
                
                <div className="d-grid">
                  <Button variant="outline-primary">
                    Get Directions
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mt-5 border-primary">
        <Card.Body className="text-center">
          <h4 className="mb-3">Coming Soon to Your Neighborhood!</h4>
          <p className="mb-3">We're expanding! Stay tuned for new locations.</p>
          <Button variant="primary">Notify Me About New Openings</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Locations;