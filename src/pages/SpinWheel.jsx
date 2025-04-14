import React, { useState, useRef } from 'react';
import { Container, Button, Modal, Row, Col, Badge } from 'react-bootstrap';
import { FaRedo, FaTicketAlt, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SpinWheel = () => {
  const [prize, setPrize] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [spinsLeft, setSpinsLeft] = useState(3); // Added spin counter
  const wheelRef = useRef(null);

  const prizes = [
    { id: 1, text: '10% Off', color: '#FF6384', icon: <FaTicketAlt /> },
    { id: 2, text: 'Free Ice Cream', color: '#36A2EB', icon: <FaTicketAlt /> },
    { id: 3, text: 'BOGO', color: '#FFCE56', icon: <FaTicketAlt /> },
    { id: 4, text: '20% Off', color: '#4BC0C0', icon: <FaTicketAlt /> },
    { id: 5, text: 'Free Topping', color: '#9966FF', icon: <FaTicketAlt /> },
    { id: 6, text: 'Try Again', color: '#FF9F40', icon: <FaRedo /> },
  ];

  const spin = () => {
    if (spinning || spinsLeft <= 0) return;
    
    setSpinning(true);
    setPrize(null);
    
    const segmentAngle = 360 / prizes.length;
    const randomSegment = Math.floor(Math.random() * prizes.length);
    const degrees = 1800 + (360 * 5) - (randomSegment * segmentAngle);
    
    wheelRef.current.style.transform = `rotate(${degrees}deg)`;
    wheelRef.current.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.21, 0.99)';
    
    setTimeout(() => {
      setSpinning(false);
      setPrize(prizes[randomSegment]);
      setShowModal(true);
      setSpinsLeft(prev => prev - 1);
    }, 4000);
  };

  const resetWheel = () => {
    wheelRef.current.style.transform = 'rotate(0deg)';
    wheelRef.current.style.transition = 'none';
  };

  return (
    <Container className="my-5 py-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4"
          >
            <h2 className="fw-bold text-gradient">Daily Spin Wheel</h2>
            <p className="text-muted">Spin to win exciting rewards!</p>
            
            <Badge pill bg="warning" text="dark" className="mb-3">
              Spins left: {spinsLeft}
            </Badge>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="position-relative mx-auto mb-4"
            style={{
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '1/1'
            }}
          >
            <div 
              ref={wheelRef}
              className="rounded-circle position-relative overflow-hidden w-100 h-100 border border-4 border-white shadow-lg"
              style={{ 
                background: `conic-gradient(${prizes.map((p, i) => 
                  `${p.color} 0 ${(360/prizes.length) * (i+1)}deg`
                ).join(', ')})`,
              }}
            >
              {prizes.map((p, i) => (
  <div 
    key={p.id}
    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
    style={{
      transform: `rotate(${(360 / prizes.length) * i}deg)`,
      transformOrigin: 'center',
    }}
  >
    <div 
      style={{ 
        transform: `rotate(${(360 / prizes.length) / 2}deg)`, 
        textAlign: 'center',
        fontSize: 'clamp(14px, 2vw, 18px)', // Adjust font size for better readability
        lineHeight: '1.2', // Improve spacing between lines
        color: 'white',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
        width: '60%', // Ensure text stays within bounds
      }}
    >
      <div className="mb-1">{p.icon}</div>
      <div>{p.text}</div>
    </div>
  </div>
))}
            </div>
            
            {/* Wheel center */}
            <div 
              className="position-absolute top-50 start-50 translate-middle rounded-circle bg-white shadow"
              style={{
                width: '40px',
                height: '40px',
                zIndex: 10
              }}
            ></div>
            
            {/* Pointer */}
            <div 
              className="position-absolute top-0 start-50 translate-middle d-flex justify-content-center"
              style={{
                width: '50px',
                height: '50px',
                zIndex: 5,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <FaChevronUp className="text-danger" style={{ fontSize: '2.5rem' }} />
            </div>
          </motion.div>

          <motion.div 
            whileTap={{ scale: 0.95 }}
            className="text-center"
          >
            <Button 
              variant="primary" 
              size="lg" 
              onClick={spin}
              disabled={spinning || spinsLeft <= 0}
              className="px-5 py-3 fw-bold rounded-pill shadow-sm"
              style={{
                background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                border: 'none',
                fontSize: '1.1rem'
              }}
            >
              {spinning ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Spinning...
                </>
              ) : (
                <>
                  <FaRedo className="me-2" />
                  {spinsLeft > 0 ? 'Spin the Wheel' : 'No Spins Left'}
                </>
              )}
            </Button>
          </motion.div>
        </Col>
      </Row>

      <Modal 
        show={showModal} 
        onHide={() => {
          setShowModal(false);
          resetWheel();
        }} 
        centered
        backdrop="static"
      >
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold w-100 text-center">
            {prize?.text === 'Try Again' ? 'Oh no!' : 'Congratulations!'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          {prize && (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h4 className="mb-3">{prize.text === 'Try Again' ? 'Better luck next time!' : 'You won:'}</h4>
              <div 
                className="mx-auto my-3 p-4 rounded-pill d-inline-block"
                style={{ 
                  background: prize.color,
                  color: 'white',
                  fontSize: '1.5rem',
                  minWidth: '200px',
                  boxShadow: `0 10px 20px ${prize.color}40`
                }}
              >
                <div className="d-flex align-items-center justify-content-center gap-2">
                  {prize.icon}
                  {prize.text}
                </div>
              </div>
              <p className="mt-3 text-muted">
                {prize.text === 'Try Again' 
                  ? 'Come back tomorrow for another spin!' 
                  : 'Show this at checkout to claim your prize!'}
              </p>
            </motion.div>
          )}
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
          <Button 
            variant="outline-secondary" 
            onClick={() => {
              setShowModal(false);
              resetWheel();
            }}
            className="px-4 rounded-pill"
          >
            Close
          </Button>
          {spinsLeft > 0 && (
            <Button 
              variant="primary" 
              onClick={() => {
                setShowModal(false);
                resetWheel();
              }}
              className="px-4 rounded-pill"
              style={{
                background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                border: 'none'
              }}
            >
              Spin Again
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SpinWheel;