import React from 'react';
import food2 from './food2.png';

const Home = () => {
  return (
    <div style={{ position: 'relative', height: '60vh', width: '100%' }}>
      
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        fontSize: '2rem',
       
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Optional: for better visibility
      }}>
        <p>Welcome to Our Food Delivery Service</p>
        <p>Your favorite meals delivered fast!</p>
      </div>
    </div>
  );
};

export default Home;
