import React, { useState } from 'react';
import { 
  Container, 
  Form, 
  Button, 
  Card, 
  ListGroup, 
  Row, 
  Col, 
  Alert,
  InputGroup
} from 'react-bootstrap';
import { 
  Person, 
  Phone, 
  GeoAlt, 
  CreditCard, 
  Shop,
  CheckCircle
} from 'react-bootstrap-icons';

const Checkout = () => {
  const [orderDetails, setOrderDetails] = useState({ 
    name: '', 
    phone: '', 
    address: '', 
    paymentMethod: 'cash',
    specialInstructions: '',
    dineIn: false 
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [validated, setValidated] = useState(false);

  const orderSummary = [
    { id: 1, name: 'Gadbad Ice Cream', price: 150, quantity: 1, image: 'https://images.pexels.com/photos/1146758/pexels-photo-1146758.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Chocolate Shake', price: 100, quantity: 2, image: 'https://images.pexels.com/photos/1582628/pexels-photo-1582628.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  const totalCost = orderSummary.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = totalCost * 0.05; // 5% tax
  const grandTotal = totalCost + tax;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setOrderDetails(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
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
    console.log('Order submitted:', { orderSummary, orderDetails });
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="success" className="py-5">
          <CheckCircle size={48} className="mb-3 text-success" />
          <h2>Order Confirmed!</h2>
          <p className="lead">Thank you for your order</p>
          <p>Your order number is: #{Math.floor(Math.random() * 10000)}</p>
          {orderDetails.dineIn ? (
            <p>Your table will be ready shortly</p>
          ) : (
            <p>Your order will be delivered in 30-45 minutes</p>
          )}
          <Button variant="outline-success" className="mt-3" href="/">
            Back to Home
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Checkout</h1>
      
      <Row>
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Header as="h5">Order Summary</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {orderSummary.map((item) => (
                  <ListGroup.Item key={item.id} className="py-3">
                    <Row className="align-items-center">
                      <Col xs={3} md={2}>
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="img-fluid rounded"
                          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                        />
                      </Col>
                      <Col xs={5} md={6}>
                        <h6 className="mb-1">{item.name}</h6>
                        <small className="text-muted">₹{item.price} each</small>
                      </Col>
                      <Col xs={4} md={4} className="text-end">
                        <span className="me-3">x {item.quantity}</span>
                        <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
                
                <ListGroup.Item className="d-flex justify-content-between py-2">
                  <span>Subtotal</span>
                  <span>₹{totalCost.toFixed(2)}</span>
                </ListGroup.Item>
                
                <ListGroup.Item className="d-flex justify-content-between py-2">
                  <span>Tax (5%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </ListGroup.Item>
                
                <ListGroup.Item className="d-flex justify-content-between py-2 fw-bold fs-5">
                  <span>Total</span>
                  <span>₹{grandTotal.toFixed(2)}</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm">
            <Card.Header as="h5">Customer Information</Card.Header>
            <Card.Body>
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
                      value={orderDetails.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your name
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Phone />
                    </InputGroup.Text>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={orderDetails.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Your phone number"
                      pattern="[0-9]{10}"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid 10-digit phone number
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                {!orderDetails.dineIn && (
                  <Form.Group className="mb-3">
                    <Form.Label>Delivery Address</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <GeoAlt />
                      </InputGroup.Text>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="address"
                        value={orderDetails.address}
                        onChange={handleInputChange}
                        required={!orderDetails.dineIn}
                        placeholder="Your delivery address"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a delivery address
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                )}

                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="dineInSwitch"
                    label={
                      <>
                        <Shop className="me-2" />
                        Dine-In
                      </>
                    }
                    name="dineIn"
                    checked={orderDetails.dineIn}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Special Instructions</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="specialInstructions"
                    value={orderDetails.specialInstructions}
                    onChange={handleInputChange}
                    placeholder="Any special requests?"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Payment Method</Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      id="cashPayment"
                      label={
                        <>
                          <CreditCard className="me-2" />
                          Cash on {orderDetails.dineIn ? 'Order' : 'Delivery'}
                        </>
                      }
                      name="paymentMethod"
                      value="cash"
                      checked={orderDetails.paymentMethod === 'cash'}
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      type="radio"
                      id="cardPayment"
                      label={
                        <>
                          <CreditCard className="me-2" />
                          Credit/Debit Card (Coming Soon)
                        </>
                      }
                      name="paymentMethod"
                      value="card"
                      disabled
                    />
                  </div>
                </Form.Group>

                <Button 
                  variant="success" 
                  type="submit" 
                  className="w-100 py-2"
                >
                  Place Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;