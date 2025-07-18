import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaUser, FaSignOutAlt } from 'react-icons/fa';

// CartCount component for showing cart item count
function CartCount() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCount(cart.reduce((acc, item) => acc + item.quantity, 0));
    };
    updateCount();
    window.addEventListener('storage', updateCount);
    return () => window.removeEventListener('storage', updateCount);
  }, []);
  if (count === 0) return null;
  return (
    <span style={{background:'#ffc107',color:'#222',borderRadius:'50%',padding:'2px 7px',fontSize:'0.8rem',marginLeft:4}}>{count}</span>
  );
}

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Check if a user is logged in (simulate session)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // Optionally, you can store a 'currentUser' in localStorage on login for more robust session
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (currentUser) {
      setLoggedInUser(currentUser);
    } else if (users.length > 0) {
      setLoggedInUser(null);
    }
  }, []);

  // Listen for login/logout events (optional, for SPA feel)
  useEffect(() => {
    const onStorage = () => {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
      setLoggedInUser(currentUser);
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setLoggedInUser(null);
    window.location.reload();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg sticky-top py-2">
      <Container fluid="lg">
       
        <Navbar.Brand href="/" className="d-flex align-items-center">
        <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxyy9JmsmVFJpn8RTshVss315Npg15ZrrAXtrPkcwtRf0iB8lR__h3oVpAEDzQsQwyJ8qKb5OjNrvPYxDZOQ0USJDo4rheChs0CZUtbeEaio3HISXbKDlRT9DUjEOjJUA5QMfNOXu28dTjpLjxfmgDPOqasgS5FPYmRP0wqF0LYoi2bi21wYAFIJtuYac/s500/ideal2.png" // Path to your logo in the public folder
            alt="Ideal Cafe Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
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
            <Nav.Link href="/cart" className="text-light mx-2 px-2 py-2 nav-link-hover position-relative">
              Cart
              <span id="cart-count-badge" style={{position:'absolute',top:2,right:0}}>
                <CartCount />
              </span>
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
            {loggedInUser ? (
              <NavDropdown
                title={<span><FaUser className="me-1" /> {loggedInUser.name || 'Profile'}</span>}
                id="user-nav-dropdown"
                align="end"
                className="mx-2"
              >
                <NavDropdown.Item href="/profile" className="d-flex align-items-center">
                  <FaUser size={16} className="me-2" /> Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item disabled>
                  <span className="fw-bold">{loggedInUser.email}</span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout} style={{ color: '#dc3545' }}>
                  <FaSignOutAlt className="me-2" /> Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/sign-up" className="text-light mx-2 px-2 py-2 nav-link-hover">
                <FaUser size={16} className="me-1" /> Sign Up
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>

      
      <style>{`
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