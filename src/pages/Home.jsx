import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      {/* Hero Banner */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="banner1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Award-Winning Flavors</h3>
            <p>Explore our famous ice creams!</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more slides */}
      </Carousel>

      {/* Popular Dishes */}
      <Row className="my-5">
        <Col>
          <Card>
            <Card.Img variant="top" src="gadbad.jpg" />
            <Card.Body>
              <Card.Title>Gadbad Ice Cream</Card.Title>
              <Card.Text>A must-try classic from Mangalore.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more cards */}
      </Row>
    </Container>
  );
};

export default Home;