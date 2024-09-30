import React from 'react';
import './CardRow.css';  // Optional if you have specific CSS for CardRow

const CardRow = () => {
  return (
    <div className="card-row">
      <div className="card">
        N. Ramesh
        <p>I Switch to Delight Zone Whenever I crave for desi food. Love their meal boxes!</p>
        <p className="stars">★★★★★</p>
      </div>
      <div className="card">
        Karthik G
        <p>There is something about Delight Zone meals. I had so many meal boxes earlier but this was the best.</p>
        <p className="stars">★★★★★</p>
      </div>
      <div className="card">
        Aswin L
        <p>I am a pure Desi food lover. I tried it for the first time and was really impressed with their meals.</p>
        <p className="stars">★★★★★</p>
      </div>
    </div>
  );
};

export default CardRow;
