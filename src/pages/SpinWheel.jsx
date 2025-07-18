import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Inline SVG for Redo icon (FaRedo equivalent)
const RedoIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M463.5 224H416c-17.67 0-32 14.33-32 32s14.33 32 32 32h47.5c.386 0 .769-.044 1.15-.084C470.7 337.8 409.8 400 336 400c-70.67 0-128-57.33-128-128s57.33-128 128-128c31.02 0 60.1 11.02 83.33 30.67c12.25 10.33 30.12 10.92 42.92 1.583l42.92-32.17c10.83-8.167 12.42-23.75 3.5-35.17C438.7 87.53 389.2 64 336 64C200.7 64 90.72 172.2 80 304H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h48c-8.91 106.6 71.19 192 176 192c106.3 0 192-85.73 192-192c0-26.47-5.33-51.78-14.92-75.17c-1.16-2.83-2.16-5.67-3.16-8.5zm-127.5 32c-17.67 0-32 14.33-32 32s14.33 32 32 32h47.5c.386 0 .769-.044 1.15-.084C370.7 337.8 309.8 400 236 400c-70.67 0-128-57.33-128-128s57.33-128 128-128c31.02 0 60.1 11.02 83.33 30.67c12.25 10.33 30.12 10.92 42.92 1.583l42.92-32.17c10.83-8.167 12.42-23.75 3.5-35.17C338.7 87.53 289.2 64 236 64C100.7 64 90.72 172.2 80 304H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h48c-8.91 106.6 71.19 192 176 192c106.3 0 192-85.73 192-192c0-26.47-5.33-51.78-14.92-75.17c-1.16-2.83-2.16-5.67-3.16-8.5z" />
  </svg>
);

// Inline SVG for Ticket Alt icon (FaTicketAlt equivalent)
const TicketAltIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="currentColor"
    {...props}
  >
    <path d="M537.6 128H384V96c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v32H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm-48 96c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32s32-14.33 32-32v-64c0-17.67-14.33-32-32-32z" />
  </svg>
);

// Inline SVG for Ice Cream Cone icon
const IceCreamConeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 64c70.7 0 128 57.3 128 128s-57.3 128-128 128s-128-57.3-128-128S185.3 64 256 64zM256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128S326.7 384 256 384zM256 448c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64S291.3 448 256 448z" />
  </svg>
);


const SpinWheel = () => {
  const [prize, setPrize] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [spinsLeft, setSpinsLeft] = useState(3);
  const wheelRef = useRef(null);

  // Define the prizes with their properties, using an ice cream parlor theme palette
  const prizes = [
    { id: 1, text: 'Free Scoop', color: '#FFD1DC', icon: <IceCreamConeIcon className="text-pink-700" /> }, // Cotton Candy Pink
    { id: 2, text: 'Double Topping', color: '#B0E0E6', icon: <IceCreamConeIcon className="text-blue-700" /> }, // Powder Blue
    { id: 3, text: '15% Off', color: '#FFFACD', icon: <TicketAltIcon className="text-yellow-700" /> }, // Lemon Chiffon
    { id: 4, text: 'Extra Cherry', color: '#C8A2C8', icon: <IceCreamConeIcon className="text-purple-700" /> }, // Thistle
    { id: 5, text: 'Buy One Get One', color: '#98FB98', icon: <TicketAltIcon className="text-green-700" /> }, // Pale Green
    { id: 6, text: 'Try Again', color: '#FFDAB9', icon: <RedoIcon className="text-orange-700" /> }, // Peach Puff
  ];

  // State to track the current rotation for smooth resets
  const [ setCurrentRotation] = useState(0);

  // Function to handle the spin action
  const spin = () => {
    // Prevent spinning if already spinning or no spins left
    if (spinning || spinsLeft <= 0) return;

    setSpinning(true); // Set spinning state to true
    setPrize(null); // Clear previous prize

    const segmentAngle = 360 / prizes.length; // Angle for each segment
    const randomSegmentIndex = Math.floor(Math.random() * prizes.length); // Randomly select a segment

    // Calculate the target angle for the wheel to land on the center of the chosen segment
    // We add 90 degrees because the pointer is at the top (0 degrees), and segments start from the right.
    // The wheel rotates clockwise, so we need to adjust for the pointer's position.
    const targetAngle = 360 - (randomSegmentIndex * segmentAngle + segmentAngle / 2);

    // Add multiple full rotations for a more dramatic spin effect (5-7 full spins)
    const fullSpins = Math.floor(Math.random() * 3) + 5;
    const finalRotation = fullSpins * 360 + targetAngle;

    // Apply the rotation to the wheel element
    if (wheelRef.current) {
      wheelRef.current.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.21, 0.99)'; // Smooth transition
      wheelRef.current.style.transform = `rotate(${finalRotation}deg)`; // Apply rotation
    }

    // Update current rotation state for potential future resets
    setCurrentRotation(finalRotation);

    // After the spin animation completes, set the prize and show the modal
    setTimeout(() => {
      setSpinning(false); // Stop spinning
      setPrize(prizes[randomSegmentIndex]); // Set the winning prize
      setShowModal(true); // Show the prize modal
      setSpinsLeft(prev => prev - 1); // Decrement spin count
    }, 4000); // Match this timeout with the CSS transition duration
  };

  // Function to reset the wheel's visual position instantly
  const resetWheel = () => {
    if (wheelRef.current) {
      wheelRef.current.style.transition = 'none'; // Disable transition for instant reset
      wheelRef.current.style.transform = 'rotate(0deg)'; // Reset to 0 degrees
    }
    setCurrentRotation(0); // Reset rotation state
  };

  // Custom Modal component
  const CustomModal = ({ show, onClose, children, title }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 font-inter">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-md p-6 bg-white rounded-xl shadow-2xl"
        >
          <div className="flex justify-between items-center pb-2 mb-4 border-b border-gray-200">
            <h3 className="text-2xl font-extrabold text-center flex-grow text-gray-800">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          {children}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-blue-200 to-yellow-100 flex items-center justify-center p-4 font-inter">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-4 border-dashed border-pink-300">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-2">
            Ice Cream Spin & Win!
          </h2>
          <p className="text-gray-600 text-lg mb-4">Spin for a sweet treat!</p>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800 shadow-md">
            Spins left: {spinsLeft}
          </span>
        </motion.div>

        {/* Spin Wheel Section */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative mx-auto mb-8 w-full"
          style={{ maxWidth: '400px', aspectRatio: '1/1' }}
        >
          {/* Pointer (Ice Cream Cone inspired, pointing downwards) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex justify-center">
            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[40px] border-l-transparent border-r-transparent border-t-yellow-700"></div>
          </div>

          {/* Wheel Container */}
          <div
            ref={wheelRef}
            className="relative w-full h-full rounded-full border-4 border-pink-300 shadow-xl overflow-hidden"
            style={{
              background: `conic-gradient(
                ${prizes.map((p, i) => `${p.color} ${i * (360 / prizes.length)}deg ${(i + 1) * (360 / prizes.length)}deg`).join(', ')}
              )`,
            }}
          >
            {prizes.map((p, i) => {
              const segmentAngle = 360 / prizes.length;
              const rotateAngle = i * segmentAngle;

              return (
                <div
                  key={p.id}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: `rotate(${rotateAngle}deg)`,
                    transformOrigin: 'center',
                  }}
                >
                  {/* This div represents the "slice" where content will be placed */}
                  <div
                    className="absolute top-0 left-1/2 w-1/2 h-full origin-left flex items-center justify-start"
                    style={{
                      transform: `rotate(${segmentAngle / 2}deg)`, // Rotate to center of segment
                    }}
                  >
                    <div
                      className="flex flex-col items-center justify-center text-lg font-bold drop-shadow-md text-center"
                      style={{
                        color: 'rgb(55, 65, 81)', // Darker text for readability on pastel backgrounds
                        transform: `rotate(-${segmentAngle / 2}deg) translateX(25%)`, // Counter-rotate text to be upright and push out
                        transformOrigin: 'left center', // Rotate around the left edge of this container
                        width: '70%', // Give more width for text
                        fontSize: 'clamp(0.8rem, 2.5vw, 1.1rem)', // Responsive font size
                        lineHeight: '1.2', // Adjust line height for better spacing
                      }}
                    >
                      <div className="mb-1 text-3xl">{p.icon}</div>
                      <div>{p.text}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Wheel center overlay (Ice Cream Scoop) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-pink-400"
            style={{ zIndex: 10 }}
          >
            <span className="text-pink-500 text-2xl font-bold">SCOOP!</span>
          </div>
        </motion.div>

        {/* Spin Button */}
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="text-center"
        >
          <button
            onClick={spin}
            disabled={spinning || spinsLeft <= 0}
            className="px-8 py-4 text-xl font-bold rounded-full shadow-lg transition-all duration-300
                       bg-gradient-to-r from-pink-500 to-red-400 text-white hover:from-pink-600 hover:to-red-500
                       disabled:opacity-50 disabled:cursor-not-allowed border-2 border-white"
          >
            {spinning ? (
              <>
                <span className="animate-spin inline-block mr-2">
                  <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004 16v1a8 8 0 0015.356 2A8.001 8.001 0 0020 8V7l-1.447-1.447m-2.894 2.894L12 12l4.347 4.347" />
                  </svg>
                </span>
                Spinning...
              </>
            ) : (
              <>
                <RedoIcon className="inline-block mr-2 w-6 h-6" />
                {spinsLeft > 0 ? 'Spin for a Treat!' : 'No Spins Left'}
              </>
            )}
          </button>
        </motion.div>

        {/* Prize Modal */}
        <AnimatePresence>
          <CustomModal
            show={showModal}
            onClose={() => {
              setShowModal(false);
              resetWheel(); // Reset wheel position when modal closes
            }}
            title={prize?.text === 'Try Again' ? 'Oh no, almost!' : 'Sweet Victory!'}
          >
            <div className="text-center py-4">
              {prize && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h4 className="text-2xl font-semibold text-gray-700 mb-4">
                    {prize.text === 'Try Again' ? 'Better luck next time!' : 'You won:'}
                  </h4>
                  <div
                    className="mx-auto my-6 p-4 rounded-full flex items-center justify-center gap-3 shadow-xl border-2 border-white"
                    style={{
                      background: prize.color,
                      color: 'rgb(55, 65, 81)', // Darker text for readability
                      fontSize: '1.8rem',
                      minWidth: '250px',
                      boxShadow: `0 12px 24px ${prize.color}60`
                    }}
                  >
                    <div className="text-4xl">{prize.icon}</div>
                    <div className="font-bold">{prize.text}</div>
                  </div>
                  <p className="mt-6 text-gray-600 text-md">
                    {prize.text === 'Try Again'
                      ? 'Come back tomorrow for another spin!'
                      : 'Show this at checkout to claim your delicious prize!'}
                  </p>
                </motion.div>
              )}
            </div>
            <div className="flex justify-center gap-4 pt-4 border-t border-gray-200 mt-6">
              <button
                onClick={() => {
                  setShowModal(false);
                  resetWheel();
                }}
                className="px-6 py-3 text-lg rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                Close
              </button>
              {spinsLeft > 0 && (
                <button
                  onClick={() => {
                    setShowModal(false);
                    resetWheel();
                    // No need to call spin() here, the user will click the main button again.
                    // This button just closes the modal and resets the wheel.
                  }}
                  className="px-6 py-3 text-lg rounded-full font-semibold
                             bg-gradient-to-r from-pink-500 to-red-400 text-white hover:from-pink-600 hover:to-red-500
                             transition-colors duration-200 border-2 border-white"
                >
                  Spin Again!
                </button>
              )}
            </div>
          </CustomModal>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SpinWheel;

