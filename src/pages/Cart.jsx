import React, { useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Form, 
  Card, 
  ListGroup, 
  Badge,
  Alert,
  InputGroup
} from 'react-bootstrap';
import { 
  Trash, 
  Plus, 
  Dash,
  GeoAlt,
  Phone,
  Person,
  CreditCard,
  Truck
} from 'react-bootstrap-icons';

const Cart = () => {
  const [cart, setCart] = useState([
    { 
      id: 1,
      name: 'Gadbad Ice Cream', 
      price: 150, 
      quantity: 1,
      image: 'https://images.pexels.com/photos/1146758/pexels-photo-1146758.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Classic Mangalorean special with layers of flavors'
    },
    { 
      id: 2,
      name: 'Chocolate Shake', 
      price: 100, 
      quantity: 2,
      image: 'https://images.pexels.com/photos/1582628/pexels-photo-1582628.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Rich chocolatey goodness with ice cream'
    },
  ]);

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cash'
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleQuantityChange = (id, delta) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Order submitted:', { cart, customerInfo });
    setOrderPlaced(true);
  };

  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = totalCost > 500 ? 0 : 50;
  const grandTotal = totalCost + deliveryFee;

  if (orderPlaced) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="success" className="py-4">
          <h2>Order Confirmed!</h2>
          <p className="lead">Thank you for your order</p>
          <p>Your delicious treats will be delivered soon</p>
          <Button variant="outline-success" className="mt-3" onClick={() => setOrderPlaced(false)}>
            Back to Menu
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Your Cart</h1>
      
      <Row>
        <Col lg={8}>
          {cart.length === 0 ? (
            <Card className="mb-4">
              <Card.Body className="text-center py-5">
                <h4>Your cart is empty</h4>
                <p className="text-muted">Add some delicious items from our menu</p>
                <Button variant="outline-primary" href="/menu">
                  Browse Menu
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <ListGroup className="mb-4">
              {cart.map((item) => (
                <ListGroup.Item key={item.id} className="py-3">
                  <Row className="align-items-center">
                    <Col md={2}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                    </Col>
                    <Col md={4}>
                      <h5 className="mb-1">{item.name}</h5>
                      <p className="text-muted small mb-1">{item.description}</p>
                      <p className="text-primary fw-bold mb-0">₹{item.price}</p>
                    </Col>
                    <Col md={4}>
                      <div className="d-flex align-items-center">
                        <Button 
                          variant="outline-secondary" 
                          size="sm" 
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <Dash />
                        </Button>
                        <span className="mx-3">{item.quantity}</span>
                        <Button 
                          variant="outline-secondary" 
                          size="sm" 
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          <Plus />
                        </Button>
                        <Button 
                          variant="outline-danger" 
                          size="sm" 
                          className="ms-3"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash size={14} />
                        </Button>
                      </div>
                    </Col>
                    <Col md={2} className="text-end">
                      <h6 className="mb-0">₹{(item.price * item.quantity).toFixed(2)}</h6>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="mb-3">Order Summary</h5>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between py-2">
                  <span>Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                  <span>₹{totalCost.toFixed(2)}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between py-2">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? (
                    <Badge bg="success">Free</Badge>
                  ) : (
                    `₹${deliveryFee.toFixed(2)}`
                  )}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between py-2 fw-bold">
                  <span>Total</span>
                  <span>₹{grandTotal.toFixed(2)}</span>
                </ListGroup.Item>
              </ListGroup>

              <Form onSubmit={handleSubmit} className="mt-4">
                <h5 className="mb-3">Delivery Information</h5>
                
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Person />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                    />
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
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Your phone number"
                    />
                  </InputGroup>
                </Form.Group>

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
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      required
                      placeholder="Your delivery address"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Payment Method</Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      id="cash-on-delivery"
                      label={
                        <>
                          <CreditCard className="me-2" />
                          Cash on Delivery
                        </>
                      }
                      name="paymentMethod"
                      value="cash"
                      checked={customerInfo.paymentMethod === 'cash'}
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      type="radio"
                      id="online-payment"
                      label={
                        <>
                          <Truck className="me-2" />
                          Online Payment (Coming Soon)
                        </>
                      }
                      name="paymentMethod"
                      value="online"
                      disabled
                    />
                  </div>
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 py-2"
                  disabled={cart.length === 0}
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

export default Cart;