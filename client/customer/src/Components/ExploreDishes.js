import React from 'react';
import './ExploreDishes.css'; 
import naan from './naan.jpeg';
import biryani from './biryani.jpg';
import dosa from './dosa.jpg';
import fries from './fries.jpeg';
import cake from './cake.jpg';
import burger from './burger.jpeg';
import idli from './idli.jpg';
import milkshake from './milkshake.jpg';
import momos from './momos.jpeg';
import friedrice from './friedrice.jpg';
import munchuria from './munchuria.jpeg';
import thali from './thali.jpg';
import panipuri from './panipuri.jpg';
import vada from './vada.jpg';
import mushroom from './mushroom.jpg';
import paneer from './paneer.JPG';
import icecream from './icecream.jpg';
import noodles from './noodles.jpg';
import pizza from './pizza.jpg';
import rolls from './rolls.jpg';
import sandwich from './sandwich.jpeg';
const items = [
  { name: 'Biryani', imageUrl:  biryani},  
  { name: 'Butter Naan', imageUrl: naan },
  { name: 'Dosa', imageUrl: dosa },
  { name: 'French Fries', imageUrl:  fries},
  { name: 'Cake', imageUrl:  cake},
  { name: 'Burger', imageUrl:  burger},
  { name: 'Idly', imageUrl: idli },
  { name: 'Milk Shake', imageUrl: milkshake },
  { name: 'Momos', imageUrl: momos },
  { name: 'Fried Rice', imageUrl: friedrice },
  { name: 'Munchuria', imageUrl: munchuria },
  { name: 'Thali', imageUrl: thali },
  { name: 'vada', imageUrl: vada },  
  { name: 'Mushroom', imageUrl: mushroom },
  { name: 'Pani Puri', imageUrl: panipuri },
  { name: 'Paneer', imageUrl: paneer },
  { name: 'Ice cream', imageUrl: icecream },
  { name: 'Noodles', imageUrl: noodles },
  { name: 'Pizza', imageUrl: pizza },
  { name: 'Rolls', imageUrl: rolls },
  { name: 'Sandwich', imageUrl: sandwich },

];

const ExploreDishes = () => {
    return (
      <div className="scroll-container">
        {items.map((item, index) => (
          <div key={index} className="scroll-item">
            <img src={item.imageUrl} alt={item.name} className="item-image" />
            <h3 className="item-title">{item.name}</h3>
          </div>
        ))}
      </div>
    );
  };
  

export default ExploreDishes;
