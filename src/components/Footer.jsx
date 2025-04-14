import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container className="py-4">
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text mb-4">Ideal Café</h5>
            <p>
              Serving finest Ice Creams since 2010. 
              Our passion is creating the perfect moment for every customer.
            </p>
          </Col>
          
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/menu" className="text-white">Menu</a></li>
              <li className="mb-2"><a href="/offers" className="text-white">Offers</a></li>
              <li className="mb-2"><a href="/locations" className="text-white">Locations</a></li>
              <li className="mb-2"><a href="/contact" className="text-white">Contact Us</a></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5 className="text-uppercase mb-4">Connect With Us</h5>
            <div className="mb-4">
              <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
              <a href="#" className="text-white me-3"><FaInstagram size={24} /></a>
              <a href="#" className="text-white me-3"><FaTwitter size={24} /></a>
              <a href="mailto:info@idealcafe.com" className="text-white"><FaEnvelope size={24} /></a>
            </div>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>Main Road, Mangalore, Karnataka 575001
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>+91 9876543210
            </p>
          </Col>
        </Row>
        
        <hr className="my-4 bg-secondary" />
        
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="text-left mb-5">© 2025 Ideal Café. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;