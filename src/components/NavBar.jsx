import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Ideal Café</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/menu">Menu</Nav.Link>
          <Nav.Link href="/offers">Offers</Nav.Link>
          <Nav.Link href="/locations">Locations</Nav.Link>
          <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          <Nav.Link href="/login">Sign In</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl type="text" placeholder="Search" className="me-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;