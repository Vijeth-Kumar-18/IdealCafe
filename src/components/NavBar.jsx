import React from 'react';
import { Navbar, Nav,  Form, FormControl, Button, Container } from 'react-bootstrap';
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg sticky-top">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="/" className="fw-bold text-warning">
          🍨 Ideal Café
        </Navbar.Brand>
        
        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav">
          {/* Navigation Links */}
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-light fw-semibold mx-2">Home</Nav.Link>
            <Nav.Link href="/menu" className="text-light fw-semibold mx-2">Menu</Nav.Link>
            <Nav.Link href="/offers" className="text-light fw-semibold mx-2">Offers</Nav.Link>
            {/* <NavDropdown title="Offers" className="text-light fw-semibold mx-2">
              <NavDropdown.Item href="/offers/seasonal">Seasonal Specials</NavDropdown.Item>
              <NavDropdown.Item href="/offers/happy-hours">Happy Hours</NavDropdown.Item> */}
            {/* </NavDropdown> */}
            <Nav.Link href="/locations" className="text-light fw-semibold mx-2">Locations</Nav.Link>
            <Nav.Link href="/contact-us" className="text-light fw-semibold mx-2">Contact Us</Nav.Link>
          </Nav>
          
          {/* Right-Side Features */}
          <Form className="d-flex align-items-center">
            {/* Search Bar */}
            <FormControl
              type="text"
              placeholder="Search Ice Creams..."
              className="rounded-pill me-2"
            />
            <Button variant="outline-warning" className="rounded-pill px-4">
              <FaSearch /> Search
            </Button>
          </Form>

          {/* Cart and User Icons */}
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="/cart" className="text-light mx-2">
              <FaShoppingCart size={20} /> Cart
            </Nav.Link>
            <Nav.Link href="/login" className="text-light mx-2">
              <FaUser size={20} /> Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;