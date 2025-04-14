import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Menu = () => {
  const [items, setItems] = useState([
    { name: 'Vanilla', price: 100, category: 'Ice Creams', image: 'vanilla.jpg' },
    { name: 'Chocolate', price: 150, category: 'Ice Creams', image: 'chocolate.jpg' },
  ]);

  return (
    <Container>
      <Row>
        {items.map((item, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: ₹{item.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;