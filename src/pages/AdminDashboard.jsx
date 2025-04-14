import React, { useState } from 'react';
import { Container, Form, Button, Table, Card, Modal, Badge, Row, Col } from 'react-bootstrap';
import { PlusCircle, Pencil, Trash, Gear } from 'react-bootstrap-icons';

const AdminDashboard = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Vanilla Ice Cream', price: 100, category: 'Ice Cream', available: true },
    { id: 2, name: 'Chocolate Shake', price: 150, category: 'Beverage', available: true },
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
  const [activeTab, setActiveTab] = useState('menu');

  const categories = ['Ice Cream', 'Beverage', 'Dessert', 'Special'];

  const handleAddItem = () => {
    const item = {
      ...newItem,
      id: Date.now(),
      price: parseFloat(newItem.price)
    };
    setMenuItems([...menuItems, item]);
    setNewItem({ name: '', price: '', category: 'Ice Cream', available: true });
  };

  const handleEditItem = () => {
    setMenuItems(menuItems.map(item => 
      item.id === editingItem.id ? editingItem : item
    ));
    setEditingItem(null);
  };

  const handleDeleteItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
    setShowDeleteModal(false);
  };

  const toggleAvailability = (id) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? { ...item, available: !item.available } : item
    ));
  };

  return (
    <Container className="py-4">
      <Card className="shadow-sm mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h2 className="mb-0">
            <Gear className="me-2" />
            Admin Dashboard
          </h2>
          <div>
            <Button 
              variant={activeTab === 'menu' ? 'primary' : 'outline-primary'} 
              onClick={() => setActiveTab('menu')}
              className="me-2"
            >
              Menu Management
            </Button>
            <Button 
              variant={activeTab === 'orders' ? 'primary' : 'outline-primary'} 
              onClick={() => setActiveTab('orders')}
            >
              Orders
            </Button>
          </div>
        </Card.Header>

        <Card.Body>
          {activeTab === 'menu' ? (
            <>
              <Card className="mb-4">
                <Card.Header>
                  <h4 className="mb-0">
                    {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
                  </h4>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col md={6}>
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
                          <Button variant="primary" onClick={handleEditItem}>
                            <Pencil className="me-1" />
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

              <h4 className="mb-3">Current Menu Items</h4>
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
                  {menuItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
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
                          {item.available ? "Disable" : "Enable"}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          ) : (
            <div className="text-center py-5">
              <h4>Order Management</h4>
              <p className="text-muted">Order management features coming soon</p>
            </div>
          )}
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
          <Button variant="danger" onClick={() => handleDeleteItem(itemToDelete)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;