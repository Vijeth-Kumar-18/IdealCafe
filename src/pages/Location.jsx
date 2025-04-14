import React, { useState } from 'react';
import {
  Container,
  Card,
  Row,
  Col,
  ListGroup,
  Badge,
  Button,
  Modal,
  Form,
} from 'react-bootstrap';
import {
  GeoAlt,
  Telephone,
  Clock,
  Scooter,
  ArrowRight,
} from 'react-bootstrap-icons';

const Locations = () => {
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [email, setEmail] = useState('');

  const locations = [
    {
      name: 'Ideal Café - Mulki',
      address: 'Main Road, Near Mulki Bridge, Mangalore',
      contact: '0824-123456',
      hours: '8:00 AM - 10:30 PM',
      delivery: true,
      featured: true,
      coordinates: { lat: 13.1969, lng: 74.7951 },
    },
    {
      name: 'Ideal Café - Lalbagh',
      address: 'Lalbagh Circle, Opposite City Mall, Mangalore',
      contact: '0824-654321',
      hours: '9:00 AM - 11:00 PM',
      delivery: true,
      coordinates: { lat: 12.9667, lng: 77.5667 },
    },
    {
      name: 'Ideal Café - Udupi',
      address: 'Car Street, Near Krishna Temple, Udupi',
      contact: '0820-789456',
      hours: '7:30 AM - 10:00 PM',
      delivery: false,
      new: true,
      coordinates: { lat: 13.3409, lng: 74.7421 },
    },
  ];

  const getGoogleMapsUrl = ({ lat, lng }) =>
    `https://www.google.com/maps?q=${lat},${lng}`;

  const getDirectionsUrl = ({ lat, lng }) =>
    `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  const handleNotifyMe = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll notify you at ${email} when we open near you.`);
    setEmail('');
    setShowNotificationModal(false);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Our Locations</h1>

      <Row xs={1} md={2} lg={3} className="g-4">
        {locations.map((location, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <Card.Title className="mb-0">
                    {location.name}
                    {location.featured }
                    {location.new
                    }
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

                <div className="mb-3">
                  <iframe
                    src={getGoogleMapsUrl(location.coordinates) + '&output=embed'}
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '10px' }}
                    allowFullScreen=""
                    loading="lazy"
                    title={`map-${index}`}
                  ></iframe>
                </div>

                <div className="d-grid">
                  <Button
                    variant="primary"
                    href={getDirectionsUrl(location.coordinates)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center"
                  >
                    Get Directions <ArrowRight className="ms-2" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mt-5 border-primary shadow-sm">
        <Card.Body className="text-center">
          <h4 className="mb-2">Coming Soon to Your Neighborhood!</h4>
          <p className="mb-3">We're expanding across the region. Stay in the loop!</p>
          <Button onClick={() => setShowNotificationModal(true)}>
            Notify Me About New Openings
          </Button>
        </Card.Body>
      </Card>

      {/* Notify Me Modal */}
      <Modal
        show={showNotificationModal}
        onHide={() => setShowNotificationModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Get Notified</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleNotifyMe}>
            <Form.Group className="mb-3" controlId="notifyEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll notify you when we open nearby.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Notify Me
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Locations;
