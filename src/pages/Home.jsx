import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { StarFill, GiftFill, ClockFill } from 'react-bootstrap-icons';
import IceCreamCarousel from '../components/Carousel';

const Home = () => {
  const navigate = useNavigate();
  const [todaysSpecial] = useState({
    name: "Butterscotch Bliss",
    description: "A creamy delight with caramel and crunchy nuts",
    price: "₹129",
    discountPrice: "₹99",
    image: "https://images.pexels.com/photos/7091585/pexels-photo-7091585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8
  });

  const [popularDishes] = useState([
    {
      id: 1,
      name: "Gadbad Ice Cream",
      description: "The timeless Mangalore classic with layers of flavors!",
      price: "₹149",
      image: "https://b.zmtcdn.com/data/pictures/chains/0/19238530/f8b03ea29b26f1385f2aafccaa1eabb5.jpg",
      rating: 4.9,
      featured: true,
      tags: ["Bestseller", "Local Favorite"]
    },
    {
      id: 2,
      name: "Chocolate Delight",
      description: "Rich, creamy chocolate indulgence with fudge swirls",
      price: "₹139",
      image: "https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.7,
      tags: ["Chocolate Lover"]
    },
    {
      id: 3,
      name: "Mango Magic",
      description: "Finest Alphonso mangoes, seasonal special",
      price: "₹159",
      image: "https://images.unsplash.com/photo-1591677445540-08028eeb3021?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.8,
      tags: ["Seasonal", "Fruity"]
    }
  ]);

  const [testimonials] = useState([
    {
      id: 1,
      text: "The Gadbad Ice Cream is a game-changer! The flavors are heavenly!",
      rating: 5,
      author: "Aditi",
      location: "Bangalore",
      date: "2 days ago"
    },
    {
      id: 2,
      text: "I love the seasonal specials, especially the Mango Magic. Always fresh!",
      rating: 5,
      author: "Ramesh",
      location: "Mangalore",
      date: "1 week ago"
    },
    {
      id: 3,
      text: "Ideal Café never disappoints. Their Chocolate Delight is my favorite!",
      rating: 5,
      author: "Priya",
      location: "Udupi",
      date: "3 days ago"
    }
  ]);

  const [offers] = useState([
    {
      id: 1,
      title: "Happy Hours",
      description: "20% off on all orders from 4 PM to 6 PM!",
      icon: <ClockFill className="text-warning" size={24} />,
      validUntil: "Ongoing"
    },
    {
      id: 2,
      title: "Seasonal Treat",
      description: "Get Mango Magic at just ₹99 this summer!",
      icon: <GiftFill className="text-warning" size={24} />,
      validUntil: "Until Aug 31"
    }
  ]);

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarFill 
          key={i} 
          className={i <= Math.floor(rating) ? "text-warning" : "text-secondary"} 
          style={{ marginRight: 2 }}
        />
      );
    }
    return stars;
  };

  // Add to Cart handler
  const handleAddToCart = (dish) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.id === dish.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: dish.id,
        name: dish.name,
        price: parseInt(dish.price.replace(/[^0-9]/g, '')),
        image: dish.image,
        description: dish.description,
        quantity: 1
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <Container fluid className="px-0">
      {/* Ice Cream Carousel Component */}
      <IceCreamCarousel />

      {/* Popular Dishes with hover effects */}
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0">Our Signature Creations</h2>
          <Button variant="outline-warning" onClick={() => navigate('/menu')}>View All</Button>
        </div>
        
        <Row className="g-4 mb-5">
          {popularDishes.map((dish) => (
            <Col key={dish.id} md={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden" style={{ transition: "transform 0.3s" }}>
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Card.Img 
                    variant="top" 
                    src={dish.image} 
                    className="w-100 h-100 object-fit-cover"
                    style={{ transition: "transform 0.5s" }}
                  />
                </div>
                <Card.Body className="position-relative">
                  {dish.featured && (
                    <Badge pill bg="danger" className="position-absolute top-0 start-0 translate-middle">
                      Hot
                    </Badge>
                  )}
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="mb-0">{dish.name}</Card.Title>
                    <Badge bg="light" text="dark" className="fs-6">
                      {dish.price}
                    </Badge>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    {renderRatingStars(dish.rating)}
                    <small className="text-muted ms-2">{dish.rating}</small>
                  </div>
                  <Card.Text className="text-muted mb-3">{dish.description}</Card.Text>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {dish.tags?.map((tag, i) => (
                      <Badge key={i} pill bg="light" text="dark">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="warning" className="w-100 py-2" onClick={() => handleAddToCart(dish)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Customer Testimonials with cards */}
        <h2 className="fw-bold mb-4">What Our Customers Say</h2>
        <Row className="g-4 mb-5">
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <blockquote className="blockquote mb-4 flex-grow-1">
                    <p className="font-italic">"{testimonial.text}"</p>
                  </blockquote>
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <footer className="blockquote-footer mb-1">
                        {testimonial.author}, <cite>{testimonial.location}</cite>
                      </footer>
                      <small className="text-muted">{testimonial.date}</small>
                    </div>
                    <div className="d-flex">
                      {renderRatingStars(testimonial.rating)}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Exclusive Offers with icons */}
        <h2 className="fw-bold mb-4">Exclusive Offers</h2>
        <Row className="g-4 mb-5">
          {offers.map((offer) => (
            <Col key={offer.id} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="d-flex align-items-center">
                  <div className="me-4">
                    {offer.icon}
                  </div>
                  <div>
                    <Card.Title className="mb-1">{offer.title}</Card.Title>
                    <Card.Text className="mb-1">{offer.description}</Card.Text>
                    <small className="text-muted">Valid: {offer.validUntil}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Ice Cream of the Day with ribbon */}
        <h2 className="fw-bold mb-4">Today's Special</h2>
        <Card className="border-0 shadow-sm overflow-hidden mb-5">
          <Row className="g-0">
            <Col md={6}>
              <div style={{ height: "300px", overflow: "hidden" }}>
                <Card.Img 
                  src={todaysSpecial.image} 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </Col>
            <Col md={6}>
              <Card.Body className="h-100 d-flex flex-column justify-content-center p-4">
                <div className="position-relative">
                  <Badge pill bg="danger" className="position-absolute top-0 start-0 translate-middle">
                    Today Only
                  </Badge>
                  <Card.Title className="display-6 mb-3">{todaysSpecial.name}</Card.Title>
                  <div className="d-flex align-items-center mb-3">
                    {renderRatingStars(todaysSpecial.rating)}
                    <small className="text-muted ms-2">{todaysSpecial.rating} (128 reviews)</small>
                  </div>
                  <Card.Text className="lead mb-4">{todaysSpecial.description}</Card.Text>
                  <div className="d-flex align-items-center mb-4">
                    <span className="fs-3 fw-bold text-warning me-2">{todaysSpecial.discountPrice}</span>
                    <span className="text-decoration-line-through text-muted">{todaysSpecial.price}</span>
                    <Badge bg="success" className="ms-2">Save 23%</Badge>
                  </div>
                  <div className="d-grid gap-3">
                    <Button variant="warning" size="lg" className="py-2">
                      Order Now
                    </Button>
                    <Button variant="outline-secondary" size="lg" className="py-2">
                      Add to Wishlist
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* Newsletter Section */}
      <div className="bg-light py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h2 className="fw-bold mb-3">Join Our Sweet Community</h2>
              <p className="lead mb-4">Subscribe to get exclusive offers, new flavor alerts, and sweet surprises!</p>
              <div className="d-flex">
                <input 
                  type="email" 
                  className="form-control form-control-lg rounded-0 rounded-start" 
                  placeholder="Your email address" 
                />
                <Button variant="warning" className="rounded-0 rounded-end px-4">
                  Subscribe
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default Home;