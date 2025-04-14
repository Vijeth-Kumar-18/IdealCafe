import React, { useState } from 'react';
import { 
  Container, 
  Form, 
  Button, 
  Card, 
  Row, 
  Col, 
  Alert,
  InputGroup,
  ProgressBar
} from 'react-bootstrap';
import { 
  Person, 
  Envelope, 
  Lock, 
  Eye, 
  EyeSlash,
  Google,
  Facebook 
} from 'react-bootstrap-icons';

const Signup = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, password: value });
    // Calculate password strength (simple example)
    let strength = 0;
    if (value.length > 0) strength += 20;
    if (value.length >= 8) strength += 20;
    if (/[A-Z]/.test(value)) strength += 20;
    if (/[0-9]/.test(value)) strength += 20;
    if (/[^A-Za-z0-9]/.test(value)) strength += 20;
    setPasswordStrength(strength);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Simulate signup API call
    try {
      console.log('Signup data:', formData);
      setError('');
      alert(`Welcome, ${formData.name}! Your account has been created.`);
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 40) return 'danger';
    if (passwordStrength < 80) return 'warning';
    return 'success';
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h2 className="fw-bold">Create Your Account</h2>
                <p className="text-muted">Join our community today</p>
              </div>

              {error && (
                <Alert variant="danger" className="text-center">
                  {error}
                </Alert>
              )}

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text>
                      <Person />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      minLength={3}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid name (min 3 characters).
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text>
                      <Envelope />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text>
                      <Lock />
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handlePasswordChange}
                      required
                      minLength={8}
                    />
                    <InputGroup.Text 
                      style={{ cursor: 'pointer' }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeSlash /> : <Eye />}
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      Password must be at least 8 characters.
                    </Form.Control.Feedback>
                  </InputGroup>
                  {formData.password && (
                    <div className="mt-2">
                      <ProgressBar 
                        now={passwordStrength} 
                        variant={getPasswordStrengthColor()} 
                        className="mb-1"
                      />
                      <small className="text-muted">
                        Password strength: {passwordStrength < 40 ? 'Weak' : 
                                         passwordStrength < 80 ? 'Moderate' : 'Strong'}
                      </small>
                    </div>
                  )}
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Confirm Password</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text>
                      <Lock />
                    </InputGroup.Text>
                    <Form.Control
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required
                    />
                    <InputGroup.Text 
                      style={{ cursor: 'pointer' }}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeSlash /> : <Eye />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 mb-3 py-2"
                >
                  Create Account
                </Button>

                <div className="text-center mb-3">
                  <span className="text-muted">or sign up with</span>
                </div>

                <div className="d-grid gap-2 mb-3">
                  <Button variant="outline-danger" className="d-flex align-items-center justify-content-center">
                    <Google className="me-2" />
                    Continue with Google
                  </Button>
                  <Button variant="outline-primary" className="d-flex align-items-center justify-content-center">
                    <Facebook className="me-2" />
                    Continue with Facebook
                  </Button>
                </div>

                <div className="text-center mt-3">
                  Already have an account?{' '}
                  <a href="/login" className="text-decoration-none">
                    Sign in
                  </a>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;