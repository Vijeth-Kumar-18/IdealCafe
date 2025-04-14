import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const FlavorRecommendation = () => {
  const [preferences, setPreferences] = useState({
    sweetness: '',
    texture: '',
    base: '',
  });
  const [recommendation, setRecommendation] = useState('');

  const recommendFlavor = () => {
    if (preferences.sweetness === 'High' && preferences.texture === 'Creamy') {
      setRecommendation('Butterscotch Delight - A rich and creamy favorite!');
    } else if (preferences.texture === 'Crunchy' && preferences.base === 'Chocolate') {
      setRecommendation('Rocky Road - Perfect for crunch lovers!');
    } else if (preferences.base === 'Vanilla' && preferences.sweetness === 'Low') {
      setRecommendation('Vanilla Classic - Simple yet delightful.');
    } else {
      setRecommendation('Strawberry Swirl - Sweet, tangy, and refreshing!');
    }
  };

  return (
    <Container>
      <h2 className="mt-3">Flavor Recommendation</h2>
      <Form>
        {/* Sweetness Level */}
        <Form.Group className="mb-3">
          <Form.Label>Sweetness Level</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) =>
              setPreferences({ ...preferences, sweetness: e.target.value })
            }
          >
            <option value="">Select</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
          </Form.Control>
        </Form.Group>

        {/* Texture Preference */}
        <Form.Group className="mb-3">
          <Form.Label>Preferred Texture</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) =>
              setPreferences({ ...preferences, texture: e.target.value })
            }
          >
            <option value="">Select</option>
            <option value="Creamy">Creamy</option>
            <option value="Crunchy">Crunchy</option>
          </Form.Control>
        </Form.Group>

        {/* Base Flavor */}
        <Form.Group className="mb-3">
          <Form.Label>Preferred Base</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) =>
              setPreferences({ ...preferences, base: e.target.value })
            }
          >
            <option value="">Select</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Vanilla">Vanilla</option>
          </Form.Control>
        </Form.Group>

        <Button className="mt-3" onClick={recommendFlavor}>
          Get Recommendation
        </Button>
      </Form>

      {recommendation && (
        <Card className="mt-4">
          <Card.Body>
            <h4>Your Recommended Flavor</h4>
            <p>{recommendation}</p>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default FlavorRecommendation;