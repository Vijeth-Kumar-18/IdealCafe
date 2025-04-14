import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FaCoffee, FaHeart, FaAward, FaUsers } from 'react-icons/fa';
import { Navbar, Nav} from 'react-bootstrap';
const AboutUs = () => {
  return (
    <Container className="py-5">
    
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 fw-bold text-warning mb-3">About Ideal Café</h1>
          <p className="lead text-muted">
            Your perfect place to relax, sip coffee, and enjoy delightful treats
          </p>
          <div className="w-25 mx-auto border-top border-warning my-4"></div>
        </Col>
      </Row>

   
      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <Image 
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Cafe interior" 
            fluid 
            rounded 
            className="shadow"
          />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold mb-4">Our Story</h2>
          <p className="text-muted mb-4">
            Founded in 2010, Ideal Café began as a small neighborhood coffee shop with a simple mission: 
            to create a welcoming space where people could enjoy quality coffee and meaningful connections.
          </p>
          <p className="text-muted">
            Today, we've grown into a beloved local institution while maintaining our commitment to 
            community, quality, and that perfect cup of coffee.
          </p>
        </Col>
      </Row>

      
      <Row className="text-center mb-5">
        <Col>
          <h2 className="fw-bold mb-5">Our Values</h2>
          <Row>
            <Col md={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <FaCoffee className="text-warning mb-3" size={32} />
                  <h5>Quality</h5>
                  <p className="text-muted small">
                    Premium beans, locally sourced ingredients
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <FaHeart className="text-warning mb-3" size={32} />
                  <h5>Passion</h5>
                  <p className="text-muted small">
                    Crafted with love in every cup
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <FaUsers className="text-warning mb-3" size={32} />
                  <h5>Community</h5>
                  <p className="text-muted small">
                    A gathering place for all
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <FaAward className="text-warning mb-3" size={32} />
                  <h5>Excellence</h5>
                  <p className="text-muted small">
                    Award-winning baristas
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

    
      <Row className="mb-5">
        <Col>
          <h2 className="fw-bold text-center mb-5">Meet Our Team</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="border-0 text-center">
                <Image 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  roundedCircle 
                  className="mx-auto mb-3" 
                  width={150}
                  height={150}
                />
                <Card.Body>
                  <h5>Sarah Johnson</h5>
                  <p className="text-muted">Head Barista</p>
                  <p className="small">
                    "Coffee is my passion and sharing it with you is my joy."
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="border-0 text-center">
                <Image 
                  src="https://randomuser.me/api/portraits/men/75.jpg" 
                  roundedCircle 
                  className="mx-auto mb-3" 
                  width={150}
                  height={150}
                />
                <Card.Body>
                  <h5>Michael Chen</h5>
                  <p className="text-muted">Pastry Chef</p>
                  <p className="small">
                    "Every pastry tells a story of tradition and innovation."
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="border-0 text-center">
                <Image 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  roundedCircle 
                  className="mx-auto mb-3" 
                  width={150}
                  height={150}
                />
                <Card.Body>
                  <h5>Emma Rodriguez</h5>
                  <p className="text-muted">Manager</p>
                  <p className="small">
                    "Making Ideal Café feel like home for everyone."
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

   
      <Row className="bg-light py-5 rounded-3 text-center">
        <Col>
          <h2 className="fw-bold mb-4">Come Visit Us</h2>
          <p className="lead mb-4">
            We'd love to welcome you to our café and share our passion for great coffee.
          </p>
          <button className="btn btn-warning btn-lg px-4">
          <Nav className="me-auto">
            <Nav.Link href="/locations" className="text-light mx-2 px-2 py-2 nav-link-hover" active>
              View Location
            </Nav.Link>
          </Nav>
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;