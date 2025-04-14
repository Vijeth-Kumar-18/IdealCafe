import React, { useState } from 'react';
import { Container, Form, Button, Table, Modal, Badge, Card, Row, Col } from 'react-bootstrap';
import { Pencil, Trash, PlusCircle, Check, X } from 'react-bootstrap-icons';

const AdminMenuManagement = () => {
  const [menu, setMenu] = useState([
    { id: 1, name: 'Vanilla Ice Cream', price: 100, category: 'Ice Cream', available: true },
    { id: 2, name: 'Chocolate Shake', price: 150, category: 'Beverage', available: true },
    { id: 3, name: 'Mango Delight', price: 120, category: 'Seasonal', available: false }
  ]);

  const [newItem, setNewItem] = useState({ 
    name: '', 
    price: '', 
    category: 'Ice Cream',
    available: true
  });

  const [editingItem, setEditingItem] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const categories = ['Ice Cream', 'Beverage', 'Seasonal', 'Dessert', 'Special'];

  const handleAddItem = () => {
    const item = {
      ...newItem,
      id: Date.now(),
      price: parseFloat(newItem.price)
    };
    setMenu([...menu, item]);
    setNewItem({ name: '', price: '', category: 'Ice Cream', available: true });
  };

  const handleUpdateItem = () => {
    setMenu(menu.map(item => 
      item.id === editingItem.id ? editingItem : item
    ));
    setEditingItem(null);
  };

  const handleRemoveItem = (id) => {
    setMenu(menu.filter(item => item.id !== id));
    setShowDeleteModal(false);
  };

  const toggleAvailability = (id) => {
    setMenu(menu.map(item => 
      item.id === id ? { ...item, available: !item.available } : item
    ));
  };

  return (
    <Container className="py-4">
      <Card className="shadow-sm">
        <Card.Header className="bg-light">
          <h2 className="mb-0">Menu Management</h2>
        </Card.Header>
        
        <Card.Body>
          <Card className="mb-4">
            <Card.Header>
              <h4 className="mb-0">
                {editingItem ? 'Edit Menu Item' : 'Add New Item'}
              </h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={5}>
                    <Form.Group className="mb-3">
                      <Form.Label>Item Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={editingItem ? editingItem.name : newItem.name}
                        onChange={(e) => 
                          editingItem 
                            ? setEditingItem({...editingItem, name: e.target.value})
                            : setNewItem({...newItem, name: e.target.value})
                        }
                        placeholder="Enter item name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Price (₹)</Form.Label>
                      <Form.Control
                        type="number"
                        value={editingItem ? editingItem.price : newItem.price}
                        onChange={(e) => 
                          editingItem 
                            ? setEditingItem({...editingItem, price: e.target.value})
                            : setNewItem({...newItem, price: e.target.value})
                        }
                        placeholder="Enter price"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Category</Form.Label>
                      <Form.Select
                        value={editingItem ? editingItem.category : newItem.category}
                        onChange={(e) => 
                          editingItem 
                            ? setEditingItem({...editingItem, category: e.target.value})
                            : setNewItem({...newItem, category: e.target.value})
                        }
                      >
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={1} className="d-flex align-items-end">
                    <Form.Group className="mb-3">
                      <Form.Check 
                        type="switch"
                        id="available-switch"
                        label="Available"
                        checked={editingItem ? editingItem.available : newItem.available}
                        onChange={(e) => 
                          editingItem 
                            ? setEditingItem({...editingItem, available: e.target.checked})
                            : setNewItem({...newItem, available: e.target.checked})
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end">
                  {editingItem ? (
                    <>
                      <Button 
                        variant="outline-secondary" 
                        onClick={() => setEditingItem(null)}
                        className="me-2"
                      >
                        Cancel
                      </Button>
                      <Button variant="primary" onClick={handleUpdateItem}>
                        <Check className="me-1" />
                        Update Item
                      </Button>
                    </>
                  ) : (
                    <Button variant="primary" onClick={handleAddItem}>
                      <PlusCircle className="me-1" />
                      Add Item
                    </Button>
                  )}
                </div>
              </Form>
            </Card.Body>
          </Card>

          <h4 className="mb-3">Current Menu</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <Badge bg="info" className="text-capitalize">
                      {item.category}
                    </Badge>
                  </td>
                  <td>₹{item.price.toFixed(2)}</td>
                  <td>
                    <Badge pill bg={item.available ? "success" : "danger"}>
                      {item.available ? "Available" : "Unavailable"}
                    </Badge>
                  </td>
                  <td>
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      onClick={() => setEditingItem(item)}
                      className="me-2"
                    >
                      <Pencil />
                    </Button>
                    <Button 
                      variant="outline-danger" 
                      size="sm" 
                      onClick={() => {
                        setItemToDelete(item.id);
                        setShowDeleteModal(true);
                      }}
                      className="me-2"
                    >
                      <Trash />
                    </Button>
                    <Button 
                      variant={item.available ? "outline-warning" : "outline-success"} 
                      size="sm"
                      onClick={() => toggleAvailability(item.id)}
                    >
                      {item.available ? <X /> : <Check />}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this menu item? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleRemoveItem(itemToDelete)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminMenuManagement;