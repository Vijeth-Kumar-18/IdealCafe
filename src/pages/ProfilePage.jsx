import React from 'react';
import { Container, Row, Col, Card, ListGroup, Image, Button } from 'react-bootstrap';
import { FaCamera, FaEdit } from 'react-icons/fa';


const ProfilePage = () => {
  // Get user info from localStorage (set at signup/login)
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
  // Fallbacks for demo if not logged in
  const defaultProfilePhoto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  if (!user) {
    return (
      <Container className="py-4 text-center">
        <h2>User not found</h2>
        <p>Please log in to view your profile.</p>
      </Container>
    );
  }
  // Optionally, you can add favorites/orderHistory to user object if you persist them
  const favorites = user.favorites || ['Vanilla Ice Cream', 'Chocolate Shake'];
  const orderHistory = user.orderHistory || [
    { orderId: '123', items: ['Gadbad Ice Cream', 'Mango Ice Cream'], total: 250, date: '2023-05-15' },
    { orderId: '124', items: ['Chocolate Shake', 'Brownie'], total: 300, date: '2023-05-20' },
  ];

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col xs={12} className="text-center mb-4">
          <div className="position-relative d-inline-block">
            <Image 
              src={user.photo || defaultProfilePhoto} 
              roundedCircle 
              width={150}
              height={150}
              className="border border-4 border-primary object-fit-cover"
              alt="Profile"
            />
            <Button 
              variant="primary" 
              size="sm" 
              className="position-absolute bottom-0 end-0 rounded-circle p-2"
              title="Change photo"
            >
              <FaCamera />
            </Button>
          </div>
          <h2 className="mt-3">{user.name || user.firstName || 'User'}</h2>
          <p className="text-muted">{user.email}</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Card.Title className="mb-0">Personal Information</Card.Title>
                <Button variant="outline-primary" size="sm">
                  <FaEdit className="me-1" /> Edit
                </Button>
              </div>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Name:</strong> {user.name || user.firstName || 'User'}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email:</strong> {user.email}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Favorites</Card.Title>
              <ListGroup>
                {favorites.map((item, index) => (
                  <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                    {item}
                    <Button variant="outline-danger" size="sm">Remove</Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Order History</Card.Title>
              <ListGroup variant="flush">
                {orderHistory.map((order, index) => (
                  <ListGroup.Item key={index}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <strong>Order #{order.orderId}</strong>
                        <div className="text-muted small">{order.date}</div>
                      </div>
                      <div className="text-end">
                        <div>₹{order.total}</div>
                        <Button variant="outline-primary" size="sm">Reorder</Button>
                      </div>
                    </div>
                    <div className="mt-2">
                      {order.items.join(', ')}
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;