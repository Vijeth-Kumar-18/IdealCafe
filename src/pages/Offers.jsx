import { useState, useRef } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  ListGroup,
  Modal
} from 'react-bootstrap';
import {
  CalendarEvent,
  TagFill,
  StarFill,
  Gift,
  X
} from 'react-bootstrap-icons';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: 'Happy Hours',
      description: '20% off on all orders from 4 PM to 6 PM',
      image: 'https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg?auto=compress&cs=tinysrgb&w=600',
      validUntil: 'Ongoing',
      terms: 'Applicable on all ice creams and drinks',
      popular: true,
      discount: '20% OFF'
    },
    {
      id: 2,
      title: 'Seasonal Special',
      description: 'Mango Ice Cream at just ₹99!',
      image: 'https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=600',
      validUntil: 'Until Aug 31',
      terms: 'Only for Alphonso mango variant',
      discount: '₹99 ONLY'
    },
    {
      id: 3,
      title: 'Weekend Bonanza',
      description: 'Buy 1 Get 1 Free on all sundaes',
      image: 'https://images.pexels.com/photos/1352271/pexels-photo-1352271.jpeg?auto=compress&cs=tinysrgb&w=600',
      validUntil: 'Every Saturday & Sunday',
      terms: 'Valid after 7 PM only',
      discount: 'BOGO'
    }
  ];

  const [showSpinWheel, setShowSpinWheel] = useState(false);
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef(null);

  const segments = [
    '10% OFF',
    'Free Sundae',
    '₹50 OFF',
    '20% OFF',
    'Free Drink',
    'BOGO',
    '15% OFF',
    'Free Cone'
  ];

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const segmentCount = segments.length;
    const randomIndex = Math.floor(Math.random() * segmentCount);
    const degreesPerSegment = 360 / segmentCount;
    const rotation =
      360 * 5 + (360 - randomIndex * degreesPerSegment - degreesPerSegment / 2);

    wheelRef.current.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
    wheelRef.current.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
      setWinner(segments[randomIndex]);
      setShowWinnerModal(true);
      setIsSpinning(false);
    }, 4000);
  };

  return (
    <Container className="py-4">
      {/* Spin Wheel CSS */}
      <style>
        {`
          .wheel-container {
            position: relative;
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
          }
          
          .spin-wheel {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0 0 0 8px #FF9E9E, 0 0 0 12px #FF6B6B, 0 0 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
            background: linear-gradient(135deg, #FFD3B6, #FFAAA5);
          }
          
          .wheel-inner {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            background: url('https://i.imgur.com/5ZQZQ9u.png') center/cover;
          }
          
          .segment {
            position: absolute;
            width: 50%;
            height: 50%;
            transform-origin: 100% 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-weight: bold;
            color: white;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
            clip-path: polygon(0 0, 100% 0, 100% 100%);
          }
          
          .segment-text {
            position: absolute;
            width: 100px;
            text-align: center;
            transform: rotate(22.5deg) translate(40px) rotate(-22.5deg);
            font-weight: 800;
            font-size: 16px;
          }
          
          .wheel-center {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60px;
            height: 60px;
            background: white;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
            box-shadow: 0 0 15px rgba(0,0,0,0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            color: #FF6B6B;
            border: 4px solid #FF9E9E;
          }
          
          .wheel-pointer {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 40px;
            background: #FF6B6B;
            border-radius: 50% 50% 0 0;
            z-index: 5;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .wheel-pointer:before {
            content: '';
            position: absolute;
            top: 10px;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 20px solid white;
          }
          
          .wheel-shadow {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 90%;
            height: 90%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            box-shadow: inset 0 0 30px rgba(0,0,0,0.2);
            pointer-events: none;
          }
          
          .spin-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: linear-gradient(135deg, #FF6B6B, #FF8E8E);
            color: white;
            border: none;
            font-weight: bold;
            cursor: pointer;
            z-index: 20;
            box-shadow: 0 4px 20px rgba(255,107,107,0.6);
            transition: all 0.3s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size: 18px;
            text-transform: uppercase;
            border: 4px solid white;
          }
          
          .spin-button:hover:not(:disabled) {
            transform: translate(-50%, -50%) scale(1.05);
            box-shadow: 0 6px 25px rgba(255,107,107,0.8);
          }
          
          .spin-button:disabled {
            background: #ccc;
            box-shadow: none;
            cursor: not-allowed;
          }
          
          .spin-button span {
            font-size: 12px;
            margin-top: 4px;
          }
          
          @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.05); }
            100% { transform: translate(-50%, -50%) scale(1); }
          }
          
          .is-spinning {
            animation: pulse 0.5s infinite;
          }
          
          .ice-cream-icon {
            position: absolute;
            top: -25px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 50px;
            background: #FFD3B6;
            border-radius: 50% 50% 0 0;
            z-index: 30;
          }
          
          .ice-cream-icon:before {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 30px;
            background: #FF9E9E;
            border-radius: 50% 50% 0 0;
          }
          
          .wheel-decoration {
            position: absolute;
            width: 110%;
            height: 110%;
            top: -5%;
            left: -5%;
            border-radius: 50%;
            background: radial-gradient(circle, transparent 60%, #FFD3B6 60.5%);
            z-index: -1;
          }
        `}
      </style>

      <div className="text-center mb-4">
        <h1>Special Offers</h1>
        <p className="text-muted mb-4">Don't miss these amazing deals on your favorite treats!</p>
        <Button
          variant="success"
          className="mb-4"
          onClick={() => setShowSpinWheel(true)}
          style={{ padding: '12px 24px', fontSize: '1.1rem' }}
        >
          <Gift className="me-2" /> Spin the Wheel & Win Prizes!
        </Button>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {offers.map((offer) => (
          <Col key={offer.id}>
            <Card className="h-100 shadow-sm border-0">
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <Card.Img
                  variant="top"
                  src={offer.image}
                  className="w-100 h-100 object-fit-cover"
                />
                {offer.popular && (
                  <Badge pill bg="danger" className="position-absolute top-0 end-0 m-2">
                    <StarFill className="me-1" /> Popular
                  </Badge>
                )}
                <Badge pill bg="warning" text="dark" className="position-absolute top-0 start-0 m-2">
                  {offer.discount}
                </Badge>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3">{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>

                <ListGroup variant="flush" className="mb-3">
                  <ListGroup.Item className="d-flex align-items-center">
                    <CalendarEvent className="text-primary me-2" />
                    <small>Valid: {offer.validUntil}</small>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <TagFill className="text-primary me-2" />
                    <small>{offer.terms}</small>
                  </ListGroup.Item>
                </ListGroup>

                <Button variant="primary" className="mt-auto">
                  Claim Offer
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mt-5 text-center border-primary">
        <Card.Body>
          <h4 className="mb-3">Subscribe for More Offers!</h4>
          <p className="mb-3">Get exclusive deals delivered to your inbox</p>
          <div className="d-flex justify-content-center">
            <input
              type="email"
              placeholder="Your email address"
              className="form-control w-50 me-2"
            />
            <Button variant="outline-primary">Subscribe</Button>
          </div>
        </Card.Body>
      </Card>

      {/* Spin Wheel Modal */}
      <Modal
        show={showSpinWheel}
        onHide={() => setShowSpinWheel(false)}
        centered
        size="lg"
        className="spin-wheel-modal"
      >
        <Modal.Header className="border-0 pb-0" style={{ background: 'linear-gradient(135deg, #FFD3B6, #FFAAA5)' }}>
          <Modal.Title className="fw-bold text-center w-100 text-white">Ice Cream Spin & Win!</Modal.Title>
          <Button
            variant="link"
            onClick={() => setShowSpinWheel(false)}
            className="p-0 position-absolute end-0 me-3 text-white"
          >
            <X size={24} />
          </Button>
        </Modal.Header>
        <Modal.Body className="py-4" style={{ background: '#FFF5F5' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {/* Pointer */}
            <div style={{ position: 'relative', width: 320, height: 24, marginBottom: -12, zIndex: 2 }}>
              <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '18px solid transparent',
                borderRight: '18px solid transparent',
                borderBottom: '32px solid #FF6B6B',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.12))'
              }} />
            </div>
            {/* Wheel */}
            <div style={{ position: 'relative', width: 320, height: 320, margin: '0 auto' }}>
              <div
                ref={wheelRef}
                style={{
                  width: 320,
                  height: 320,
                  borderRadius: '50%',
                  border: '8px solid #FF9E9E',
                  boxShadow: '0 4px 32px 0 rgba(255,107,107,0.10)',
                  background: `conic-gradient(${segments.map((label, i) => {
                    const colors = [
                      '#FF6B6B', '#FF8E8E', '#FFB3B3', '#FFD166',
                      '#FFDD80', '#FFE9A0', '#06D6A0', '#48BFE3'
                    ];
                    return `${colors[i % colors.length]} ${(i * 360 / segments.length)}deg ${(i + 1) * 360 / segments.length}deg`;
                  }).join(', ')})`,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transition: 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)'
                }}
              >
                {segments.map((label, i) => {
                  const segmentAngle = 360 / segments.length;
                  // Center of the slice: add half a segment to the base angle
                  const angle = (segmentAngle * i) + segmentAngle / 2;
                  const radius = 110; // visually balanced
                  const rad = (angle - 90) * (Math.PI / 180);
                  const x = 160 + radius * Math.cos(rad);
                  const y = 160 + radius * Math.sin(rad);
                  return (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        left: x,
                        top: y,
                        width: 90,
                        height: 38,
                        marginLeft: -45,
                        marginTop: -19,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0,0,0,0.18)',
                        borderRadius: 16,
                        textAlign: 'center',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: 17,
                        letterSpacing: 0.5,
                        textShadow: '1px 1px 8px rgba(0,0,0,0.22)',
                        // Slightly slant the label for readability
                        transform: `rotate(${-angle + 18}deg)`
                      }}
                    >
                      <span style={{ width: '100%', padding: '0 4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-block' }}>{label}</span>
                    </div>
                  );
                })}
                {/* Center circle */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  background: '#fff',
                  boxShadow: '0 2px 8px 0 rgba(255,107,107,0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 22,
                  color: '#FF6B6B',
                  border: '4px solid #FF6B6B',
                  zIndex: 2
                }}>
                  <Gift size={32} />
                </div>
              </div>
            </div>
            {/* Spin Button */}
            <button
              style={{
                marginTop: 32,
                padding: '14px 48px',
                fontSize: 20,
                fontWeight: 700,
                borderRadius: 32,
                background: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
                color: '#fff',
                border: 'none',
                boxShadow: '0 2px 12px 0 rgba(255,107,107,0.18)',
                transition: 'all 0.2s',
                opacity: isSpinning ? 0.7 : 1,
                cursor: isSpinning ? 'not-allowed' : 'pointer',
              }}
              onClick={spin}
              disabled={isSpinning}
            >
              {isSpinning ? 'Spinning...' : 'SPIN'}
            </button>
            <div style={{ marginTop: 16, color: '#FF6B6B', fontWeight: 600, fontSize: 16 }}>
              Spins left: {isSpinning ? '...' : '∞'}
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Winner Modal */}
      <Modal
        show={showWinnerModal}
        onHide={() => setShowWinnerModal(false)}
        centered
        className="winner-modal"
      >
        <Modal.Header className="border-0" style={{ background: 'linear-gradient(135deg, #FFD3B6, #FFAAA5)' }}>
          <Modal.Title className="text-white">Congratulations! 🎉</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <div className="mb-4">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#FF6B6B"/>
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#FF6B6B"/>
            </svg>
          </div>
          <h4 className="mb-3">
            You won: <span className="fw-bold" style={{ color: '#FF6B6B' }}>{winner}</span>
          </h4>
          <p className="text-muted">Your discount code has been sent to your email</p>
          <Button
            variant="primary"
            onClick={() => {
              setShowWinnerModal(false);
              setShowSpinWheel(false);
            }}
            className="px-4 py-2 mt-3"
            style={{ 
              minWidth: '150px',
              background: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
              border: 'none'
            }}
          >
            Claim Prize
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Offers;