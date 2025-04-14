import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Alert, Modal } from 'react-bootstrap';
import { StarFill, Star, Envelope, Person } from 'react-bootstrap-icons';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    feedback: '',
    contactPermission: false
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    setShowModal(true);
    // Here you would typically send the data to your backend
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      rating: 0,
      feedback: '',
      contactPermission: false
    });
    setSubmitted(false);
    setShowModal(false);
  };

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span 
        key={star}
        onMouseEnter={() => setHoverRating(star)}
        onMouseLeave={() => setHoverRating(0)}
        onClick={() => handleRatingClick(star)}
        style={{ cursor: 'pointer', fontSize: '2rem', color: '#ffc107' }}
      >
        {star <= (hoverRating || formData.rating) ? <StarFill /> : <Star />}
      </span>
    ));
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4">
                <h2>Share Your Feedback</h2>
                <p className="text-muted">We value your experience with us</p>
              </Card.Title>

              {submitted && (
                <Alert variant="success" className="text-center">
                  Thank you for your feedback!
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4 text-center">
                  <Form.Label className="d-block mb-3 fs-5">
                    How would you rate your experience?
                  </Form.Label>
                  <div className="d-flex justify-content-center gap-2">
                    {renderStars()}
                  </div>
                  <Form.Control
                    type="hidden"
                    name="rating"
                    value={formData.rating}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Your Feedback</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your experience..."
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label><Person className="me-2" />Name </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label><Envelope className="me-2" />Email </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    label="I agree to be contacted for follow-up on my feedback"
                    name="contactPermission"
                    checked={formData.contactPermission}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg"
                    disabled={formData.rating === 0 || !formData.feedback}
                  >
                    Submit Feedback
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Thank You Modal */}
      <Modal show={showModal} onHide={resetForm} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="mb-4">
            <div className="fs-1 text-warning mb-3">
              {[...Array(formData.rating)].map((_, i) => (
                <StarFill key={i} />
              ))}
            </div>
            <h4>We appreciate your feedback!</h4>
            <p className="text-muted">
              {formData.rating >= 4 
                ? "We're thrilled you enjoyed your experience!"
                : formData.rating >= 3 
                ? "We appreciate your honest feedback."
                : "We're sorry to hear that. We'll use your feedback to improve."}
            </p>
          </div>
          {formData.contactPermission && formData.email && (
            <Alert variant="info">
              We may contact you at {formData.email} regarding your feedback.
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={resetForm}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default FeedbackForm;