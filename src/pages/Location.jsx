import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const Locations = () => {
  const locations = [
    { name: 'Ideal Café - Mulki', address: 'Main Road, Mangalore', contact: '0824-123456' },
    { name: 'Ideal Café - Lalbagh', address: 'Lalbagh Circle, Mangalore', contact: '0824-654321' },
  ];

  return (
    <Container>
      <h2>Our Locations</h2>
      <ListGroup>
        {locations.map((location, index) => (
          <ListGroup.Item key={index}>
            <h5>{location.name}</h5>
            <p>{location.address}</p>
            <p>Contact: {location.contact}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Locations;