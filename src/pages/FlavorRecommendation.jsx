import React, { useState } from 'react';
import { 
  Container, 
  Form, 
  Button, 
  Card, 
  Row, 
  Col, 
  Alert,
  Badge
} from 'react-bootstrap';
import { 
  CupHot,
  Snow,
  EggFried,
  EmojiHeartEyes,
  EmojiSmile,
  EmojiWink,
  Magic
} from 'react-bootstrap-icons';

const FlavorRecommendation = () => {
  const [preferences, setPreferences] = useState({
    sweetness: '',
    texture: '',
    base: '',
    temperature: '',
    mood: ''
  });
  const [recommendation, setRecommendation] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const flavorDatabase = [
    {
      name: "Butterscotch Delight",
      description: "Rich butterscotch with caramel swirls and toasted pecans",
      match: ["High", "Creamy", "Vanilla", "Cold", "Happy"],
      image: "butterscotch.jpg",
      tags: ["Bestseller", "Creamy"]
    },
    {
      name: "Rocky Road",
      description: "Chocolate ice cream with marshmallows and almonds",
      match: ["Medium", "Crunchy", "Chocolate", "Cold", "Adventurous"],
      image: "rocky-road.jpg",
      tags: ["Crunchy", "Classic"]
    },
    {
      name: "Vanilla Classic",
      description: "Pure Madagascar vanilla bean with delicate flavor",
      match: ["Low", "Smooth", "Vanilla", "Any", "Relaxed"],
      image: "vanilla.jpg",
      tags: ["Simple", "Elegant"]
    },
    {
      name: "Strawberry Swirl",
      description: "Fresh strawberry ice cream with raspberry ribbons",
      match: ["Medium", "Smooth", "Fruit", "Cold", "Happy"],
      image: "strawberry.jpg",
      tags: ["Fruity", "Refreshing"]
    },
    {
      name: "Mint Chocolate Chip",
      description: "Cool mint ice cream with dark chocolate chunks",
      match: ["High", "Crunchy", "Chocolate", "Cold", "Energetic"],
      image: "mint-chip.jpg",
      tags: ["Refreshing", "Popular"]
    }
  ];

  const recommendFlavor = (e) => {
    e.preventDefault();
    
    // Find best matching flavor
    const bestMatch = flavorDatabase.reduce((best, current) => {
      const currentScore = current.match.filter((val, i) => 
        Object.values(preferences)[i] === val || Object.values(preferences)[i] === ""
      ).length;
      
      const bestScore = best.match.filter((val, i) => 
        Object.values(preferences)[i] === val || Object.values(preferences)[i] === ""
      ).length;
      
      return currentScore > bestScore ? current : best;
    }, flavorDatabase[0]);

    setRecommendation(bestMatch);
    setShowResult(true);
  };

  const handlePreferenceChange = (e) => {
    const { name, value } = e.target;
    setPreferences(prev => ({ ...prev, [name]: value }));
    setShowResult(false);
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">
        <Magic className="me-2" />
        Flavor Finder
      </h1>
      
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="mb-4">Tell Us Your Preferences</h3>
              
              <Form onSubmit={recommendFlavor}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <EmojiHeartEyes className="me-2" />
                        Sweetness Level
                      </Form.Label>
                      <Form.Control
                        as="select"
                        name="sweetness"
                        value={preferences.sweetness}
                        onChange={handlePreferenceChange}
                        required
                      >
                        <option value="">Select preference</option>
                        <option value="Low">Low (Not too sweet)</option>
                        <option value="Medium">Medium (Balanced)</option>
                        <option value="High">High (Very sweet)</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <EggFried className="me-2" />
                        Preferred Texture
                      </Form.Label>
                      <Form.Control
                        as="select"
                        name="texture"
                        value={preferences.texture}
                        onChange={handlePreferenceChange}
                        required
                      >
                        <option value="">Select preference</option>
                        <option value="Smooth">Smooth</option>
                        <option value="Creamy">Creamy</option>
                        <option value="Crunchy">Crunchy</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <CupHot className="me-2" />
                        Base Flavor
                      </Form.Label>
                      <Form.Control
                        as="select"
                        name="base"
                        value={preferences.base}
                        onChange={handlePreferenceChange}
                        required
                      >
                        <option value="">Select preference</option>
                        <option value="Vanilla">Vanilla</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Fruit">Fruit</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <Snow className="me-2" />
                        Serving Temperature
                      </Form.Label>
                      <Form.Control
                        as="select"
                        name="temperature"
                        value={preferences.temperature}
                        onChange={handlePreferenceChange}
                      >
                        <option value="">No preference</option>
                        <option value="Cold">Cold</option>
                        <option value="Any">Any temperature</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>
                    <EmojiSmile className="me-2" />
                    Current Mood
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="mood"
                    value={preferences.mood}
                    onChange={handlePreferenceChange}
                  >
                    <option value="">Select mood</option>
                    <option value="Happy">Happy</option>
                    <option value="Relaxed">Relaxed</option>
                    <option value="Adventurous">Adventurous</option>
                    <option value="Energetic">Energetic</option>
                  </Form.Control>
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    variant="primary" 
                    type="submit"
                    size="lg"
                  >
                    <EmojiWink className="me-2" />
                    Find My Perfect Flavor
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          {showResult && recommendation && (
            <Card className="mt-4 shadow-sm border-primary">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={4} className="text-center">
                    <img 
                      src={recommendation.image} 
                      alt={recommendation.name}
                      className="img-fluid rounded mb-3 mb-md-0"
                      style={{ maxHeight: '200px', objectFit: 'cover' }}
                    />
                  </Col>
                  <Col md={8}>
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h3 className="text-primary">{recommendation.name}</h3>
                        <p className="lead">{recommendation.description}</p>
                      </div>
                      <Button variant="outline-primary" size="sm">
                        Add to Order
                      </Button>
                    </div>
                    
                    <div className="mt-2">
                      {recommendation.tags.map((tag, index) => (
                        <Badge key={index} pill bg="light" text="dark" className="me-2">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Alert variant="success" className="mt-3">
                      <strong>Why we recommend this:</strong> Based on your preferences for {Object.entries(preferences)
                        .filter(([_, val]) => val !== "")
                        .map(([key, val]) => `${key}: ${val}`)
                        .join(", ")}
                    </Alert>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FlavorRecommendation;