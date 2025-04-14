import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';

const AdminMenuManagement = () => {
  const [menu, setMenu] = useState([
    { id: 1, name: 'Vanilla Ice Cream', price: 100 },
    { id: 2, name: 'Chocolate Shake', price: 150 },
  ]);

  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const handleAddItem = () => {
    setMenu([...menu, { id: menu.length + 1, ...newItem }]);
    setNewItem({ name: '', price: '' });
  };

  const handleRemoveItem = (id) => {
    setMenu(menu.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <h2>Admin Menu Management</h2>
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
        <Button onClick={handleAddItem} className="mt-3">
          Add Item
        </Button>
      </Form>
      <Table className="mt-5" striped bordered hover>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>
                <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminMenuManagement;