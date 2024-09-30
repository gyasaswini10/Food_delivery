import React from 'react';
import './CardGrid.css';  // Optional if you have specific CSS for CardGrid

const CardGrid = () => {
  return (
    <div className="card-grid">
      <div className="card">
        <h1>100+ Meals</h1>
        <p>Served and we are not stopping!</p>
      </div>
      <div className="card">
        <h1>30+ Stores</h1>
        <p>Our branches at Vijayawada, Bangalore, Hyderabad.</p>
      </div>
      <div className="card">
        <h1>15 Minutes</h1>
        <p>Super Fast Delivery</p>
      </div>
      <div className="card">
        <h1 className="stars">4★</h1>
        <p>Rated & 50+ 5-star reviews that keep us smiling.</p>
      </div>
    </div>
  );
};

export default CardGrid;
