import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const SpinWheel = () => {
  const [prize, setPrize] = useState('');

  const spin = () => {
    const prizes = ['10% Off', 'Free Ice Cream', 'Buy 1 Get 1 Free', 'No Prize'];
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    setPrize(randomPrize);
  };

  return (
    <Container className="text-center mt-5">
      <h2>Spin the Wheel</h2>
      <Button onClick={spin}>Spin</Button>
      {prize && <h3 className="mt-3">You won: {prize}</h3>}
    </Container>
  );
};

export default SpinWheel;