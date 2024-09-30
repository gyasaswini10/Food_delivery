import React from 'react';
import ScrollableCards from './ScrollableCards';
import CardGrid from './CardGrid';
import CardRow from './CardRow';
import Footer from './Footer';
const Home = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      
      {/* Background Image Container */}
      <div style={{
        height: '80vh',
        backgroundImage: `url(./food4.png)`, // Ensure the image path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      }} />
      
      {/* Centered Content Container */}
      <div style={{
        padding: '20px', 
        textAlign: 'center', 
        marginTop: '70vh', // Set margin to match the height of the background image
        color: 'black', // Set font color to black
      }}>
        <h1>Offers and Discounts</h1>
        <ScrollableCards />
      </div>

      {/* Additional Content */}
      <div style={{ marginTop: '20px', textAlign: 'center', color: 'black' }}>
      <h1>Our Achievements</h1>
        <CardGrid />
      <h1>Feedback</h1>
        <CardRow />
      </div>

      {/* Footer Section */}
      <Footer style={{
        position: 'relative',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#f8f8f8', // Optional: Add a background color for the footer
        color: 'black', // Set font color to black
      }}>
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </Footer>

    </div>
  );
};

export default Home;
