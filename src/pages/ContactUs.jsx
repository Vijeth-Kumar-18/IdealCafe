import React, { useState } from 'react';
import { 
  Container, 
  Form, 
  Button, 
  Card, 
  Row, 
  Col, 
  Alert,
  InputGroup,
  ListGroup
} from 'react-bootstrap';
import { 
  Person, 
  Envelope, 
  ChatLeftText,
  Telephone,
  GeoAlt,
  Clock,
  Send
} from 'react-bootstrap-icons';

const ContactUs = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    subject: '',
    message: '' 
  });
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // In a real app, you would send this data to your backend
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  if (submitted) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="success" className="py-5">
          <h2>Thank You!</h2>
          <p className="lead">Your message has been sent successfully.</p>
          <p>We will get back to you within 24 hours,Thank You.</p>
          <Button 
            variant="outline-success" 
            className="mt-3"
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Contact Us</h1>
      
      <Row>
        <Col lg={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h3 className="mb-4">Get in Touch</h3>
              
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center py-3">
                  <Telephone size={20} className="text-primary me-3" />
                  <div>
                    <h6 className="mb-1">Phone</h6>
                    <p className="mb-0 text-muted">+91 9876543210</p>
                  </div>
                </ListGroup.Item>
                
                <ListGroup.Item className="d-flex align-items-center py-3">
                  <Envelope size={20} className="text-primary me-3" />
                  <div>
                    <h6 className="mb-1">Email</h6>
                    <p className="mb-0 text-muted">contact@idealcafe.com</p>
                  </div>
                </ListGroup.Item>
                
                <ListGroup.Item className="d-flex align-items-center py-3">
                  <GeoAlt size={20} className="text-primary me-3" />
                  <div>
                    <h6 className="mb-1">Address</h6>
                    <p className="mb-0 text-muted">Main Road, Mangalore, Karnataka 575001</p>
                  </div>
                </ListGroup.Item>
                
                <ListGroup.Item className="d-flex align-items-center py-3">
                  <Clock size={20} className="text-primary me-3" />
                  <div>
                    <h6 className="mb-1">Opening Hours</h6>
                    <p className="mb-0 text-muted">Monday-Sunday: 8:00 AM - 10:30 PM</p>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="mb-4">Send Us a Message</h3>
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Person />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your name
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <Envelope />
                        </InputGroup.Text>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Your email"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid email
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <Telephone />
                        </InputGroup.Text>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject of your message"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a subject
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <ChatLeftText />
                    </InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your message
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 py-2"
                >
                  <Send className="me-2" />
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;