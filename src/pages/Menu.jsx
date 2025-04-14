import React, { useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Tab, 
  Tabs,
  Badge,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import { 
  Search,
  StarFill,
  CartPlus,
  CupStraw, // Using CupStraw instead of Icecream
  Cake,
  Snow // Using Snow as an alternative ice cream icon
} from 'react-bootstrap-icons';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('ice-creams');
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    { 
      id: 1,
      name: 'Classic Vanilla', 
      price: 120, 
      category: 'ice-creams', 
      image: 'vanilla.jpg',
      description: 'Pure Madagascar vanilla bean with delicate flavor',
      rating: 4.8,
      featured: true
    },
    { 
      id: 2,
      name: 'Rich Chocolate', 
      price: 150, 
      category: 'ice-creams', 
      image: 'chocolate.jpg',
      description: 'Premium Belgian chocolate with cocoa nibs',
      rating: 4.9,
      bestseller: true
    },
    { 
      id: 3,
      name: 'Strawberry Swirl', 
      price: 140, 
      category: 'ice-creams', 
      image: 'strawberry.jpg',
      description: 'Fresh strawberries with raspberry ribbons',
      rating: 4.7
    },
    { 
      id: 4,
      name: 'Mango Tango', 
      price: 160, 
      category: 'sundaes', 
      image: 'mango.jpg',
      description: 'Alphonso mango with coconut flakes',
      rating: 4.9,
      seasonal: true
    },
    { 
      id: 5,
      name: 'Chocolate Brownie', 
      price: 180, 
      category: 'sundaes', 
      image: 'brownie.jpg',
      description: 'Warm brownie with chocolate fudge',
      rating: 5.0,
      bestseller: true
    },
    { 
      id: 6,
      name: 'Fruit Punch', 
      price: 110, 
      category: 'drinks', 
      image: 'fruit-punch.jpg',
      description: 'Refreshing mix of seasonal fruits',
      rating: 4.5
    }
  ];

  const filteredItems = menuItems.filter(item => 
    item.category.includes(activeTab) && 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarFill 
          key={i} 
          className={i <= rating ? "text-warning" : "text-secondary"} 
          size={14}
        />
      );
    }
    return stars;
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Our Menu</h1>
      
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-3"
        >
          <Tab eventKey="ice-creams" title={
            <>
              <Snow className="me-2" /> {/* Changed from Icecream to Snow */}
              Ice Creams
            </>
          } />
          <Tab eventKey="sundaes" title={
            <>
              <Cake className="me-2" />
              Sundaes
            </>
          } />
          <Tab eventKey="drinks" title={
            <>
              <CupStraw className="me-2" />
              Drinks
            </>
          } />
        </Tabs>
        
        <InputGroup style={{ width: '300px' }}>
          <InputGroup.Text>
            <Search />
          </InputGroup.Text>
          <FormControl
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Col key={item.id}>
              <Card className="h-100 shadow-sm">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img 
                    variant="top" 
                    src={item.image} 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="mb-0">{item.name}</Card.Title>
                    <Badge bg="light" text="dark" className="fs-6">
                      ₹{item.price}
                    </Badge>
                  </div>
                  
                  <div className="d-flex align-items-center mb-2">
                    {renderStars(Math.floor(item.rating))}
                    <small className="text-muted ms-2">{item.rating}</small>
                  </div>
                  
                  <Card.Text className="text-muted mb-3">{item.description}</Card.Text>
                  
                  <div className="mt-auto">
                    {item.featured && (
                      <Badge bg="danger" className="me-2">
                        Featured
                      </Badge>
                    )}
                    {item.bestseller && (
                      <Badge bg="success" className="me-2">
                        Bestseller
                      </Badge>
                    )}
                    {item.seasonal && (
                      <Badge bg="info">
                        Seasonal
                      </Badge>
                    )}
                  </div>
                  
                  <Button 
                    variant="outline-primary" 
                    className="mt-3"
                  >
                    <CartPlus className="me-2" />
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center py-5">
            <h4>No items found</h4>
            <p className="text-muted">Try a different search or category</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Menu;