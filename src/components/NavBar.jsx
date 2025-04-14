import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FaSearch, FaUser } from 'react-icons/fa';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg sticky-top py-2">
      <Container fluid="lg">
       
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <span className="fw-bold text-white fs-4">Ideal {' '}</span>
          <span className="fw-bold text-warning fs-4">Café</span>
        </Navbar.Brand>
        
       
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        
        <Navbar.Collapse id="navbar-nav">
     
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-light mx-2 px-2 py-2 nav-link-hover" >
              Home
            </Nav.Link>
            <Nav.Link href="/menu" className="text-light mx-2 px-2 py-2 nav-link-hover">
              Menu
            </Nav.Link>
            <Nav.Link href="/offers" className="text-light mx-2 px-2 py-2 nav-link-hover">
              Offers
            </Nav.Link>
            <Nav.Link href="/checkout" className="text-light mx-2 px-2 py-2 nav-link-hover">
              Checkout
            </Nav.Link>
            <Nav.Link href="/cart" className="text-light mx-2 px-2 py-2 nav-link-hover">
            Cart
            </Nav.Link>
            <Nav.Link href="/locations" className="text-light mx-2 px-2 py-2 nav-link-hover">
            Location </Nav.Link>
          </Nav>
              
         
          <Form className="d-flex my-2 my-lg-0 mx-lg-4">
            <div className="input-group">
              <FormControl
                type="search"
                placeholder="Search menu..."
                aria-label="Search"
                className="rounded-start-pill border-end-0 bg-dark text-light"
              />
              <Button 
                variant="warning" 
                className="rounded-end-pill border-start-0 px-3"
                type="submit"
              >
                <FaSearch />
              </Button>
            </div>
          </Form>

          
          <Nav className="ms-auto">
            <Nav.Link href="/contact-us" className="text-light mx-2 px-2 py-2 nav-link-hover">
              Contact Us
            </Nav.Link>
            <Nav.Link href="/about-us" className="text-light mx-2 px-2 py-2 nav-link-hover">
              About Us
            </Nav.Link>
            <Nav.Link href="/sign-up" className="text-light mx-2 px-2 py-2 nav-link-hover">
              <FaUser size={16} className="me-1" /> Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      
      <style jsx>{`
        .nav-link-hover:hover {
          color: var(--bs-warning) !important;
        }
        .navbar-nav .nav-link.active {
          color: var(--bs-warning) !important;
          font-weight: 600;
        }
        .input-group .form-control:focus {
          box-shadow: none;
          border-color: var(--bs-warning);
        }
        .input-group .btn:hover {
          background-color: var(--bs-warning);
          border-color: var(--bs-warning);
        }
      `}</style>
    </Navbar>
  );
};

export default NavBar;