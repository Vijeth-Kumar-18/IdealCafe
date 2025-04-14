import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Checkout = () => {
  const [orderDetails, setOrderDetails] = useState({ name: '', phone: '', address: '', dineIn: false });
  const [orderSummary] = useState([
    { name: 'Gadbad Ice Cream', price: 150, quantity: 1 },
    { name: 'Chocolate Shake', price: 100, quantity: 2 },
  ]);

  const totalCost = orderSummary.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <Container>
      <h2>Checkout</h2>
      <h3>Order Summary</h3>
      <ul>
        {orderSummary.map((item, index) => (
          <li key={index}>
            {item.name} x {item.quantity}: ₹{item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ₹{totalCost}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={orderDetails.name}
            onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            value={orderDetails.phone}
            onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={orderDetails.address}
            onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Dine-In"
            checked={orderDetails.dineIn}
            onChange={(e) => setOrderDetails({ ...orderDetails, dineIn: e.target.checked })}
          />
        </Form.Group>
        <Button variant="success" type="submit" className="mt-3">
          Place Order
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;