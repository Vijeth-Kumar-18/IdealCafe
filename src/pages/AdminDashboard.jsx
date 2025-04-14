import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';

const AdminDashboard = () => {
  const [menuItems, setMenuItems] = useState([
    { name: 'Vanilla Ice Cream', price: 100 },
    { name: 'Chocolate Shake', price: 150 },
  ]);

  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const handleAddItem = () => {
    setMenuItems([...menuItems, newItem]);
    setNewItem({ name: '', price: '' });
  };

  return (
    <Container>
      <h2>Admin Dashboard</h2>
      <Form>
        <Form.Group>
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
        </Form.Group>
        <Button className="mt-3" onClick={handleAddItem}>
          Add Item
        </Button>
      </Form>
      <h3>Menu Items</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminDashboard;