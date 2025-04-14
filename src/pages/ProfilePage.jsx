import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    favorites: ['Vanilla Ice Cream', 'Chocolate Shake'],
    orderHistory: [
      { orderId: '123', items: ['Gadbad Ice Cream', 'Mango Ice Cream'], total: 250 },
      { orderId: '124', items: ['Chocolate Shake', 'Brownie'], total: 300 },
    ],
  };

  return (
    <Container>
      <h2>User Profile</h2>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4>Name: {user.name}</h4>
              <p>Email: {user.email}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h3>Favorites</h3>
      <ul>
        {user.favorites.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Order History</h3>
      <ul>
        {user.orderHistory.map((order, index) => (
          <li key={index}>
            Order ID: {order.orderId} | Items: {order.items.join(', ')} | Total: ₹{order.total}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ProfilePage;