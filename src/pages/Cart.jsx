import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Cart = () => {
  const [cart, setCart] = useState([
    { name: 'Gadbad Ice Cream', price: 150, quantity: 1 },
    { name: 'Chocolate Shake', price: 100, quantity: 2 },
  ]);

  const handleQuantityChange = (index, delta) => {
    const newCart = [...cart];
    newCart[index].quantity += delta;
    if (newCart[index].quantity === 0) newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <Row key={index} className="align-items-center">
          <Col>{item.name}</Col>
          <Col>₹{item.price}</Col>
          <Col>
            <Button onClick={() => handleQuantityChange(index, -1)}>-</Button>
            <span className="mx-2">{item.quantity}</span>
            <Button onClick={() => handleQuantityChange(index, 1)}>+</Button>
          </Col>
        </Row>
      ))}
      <h3>Total: ₹{totalCost}</h3>
      <Form className="mt-3">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Checkout
        </Button>
      </Form>
    </Container>
  );
};

export default Cart;