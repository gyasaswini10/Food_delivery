import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import ScrollableCards from './ScrollableCards';
import CardGrid from './CardGrid';
import CardRow from './CardRow';
import Footer from './Footer';


const Home = () => {
  useEffect(() => {
    // Set a cookie when the Home component loads
    Cookies.set('visitedHomePage', 'true', { expires: 7, secure: true, sameSite: 'Strict' });
    console.log('Cookie set: visitedHomePage');
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      
      {/* Background Image Container */}
      <div style={{
        height: '80vh',
        
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
      }} />
       {/* Background Image Container */}
       <div style={{
        height: '80vh',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      }} />
        <div style={{
          position: 'absolute',
          top: '-25%', 
          left: '10%', 
          color: 'white', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', 
        }}>
        <h1 style={{ fontSize: '4rem', margin: 0, color:'black'}}>Delight Zone</h1>
        <p style={{ fontSize: '2.5rem', margin: 0 ,color:'black'}}>Where Joy meets Taste</p>
      </div>
      
      {/* Centered Content Container */}
      <div style={{
        padding: '20px', 
        textAlign: 'center', 
        marginTop: '70vh', 
        color: 'black', 
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
    </div>
  );
};

export default Home;
