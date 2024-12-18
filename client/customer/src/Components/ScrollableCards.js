import React, { useEffect, useRef } from 'react';
import './ScrollableCards.css'; 
import discount1 from './discount1.jpg'
import discount2 from './discount2.jpg'
import discount3 from './discount3.jpg'
import discount4 from './discount4.jpg'
import discount5 from './discount5.jpg'
import discount6 from './discount6.jpg'
import discount7 from './discount7.jpg'
import discount8 from './discount8.jpg'
import discount9 from './discount9.jpg'
import discount10 from './discount10.jpg'
const ScrollableCards = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

        if (scrollRef.current.scrollLeft >= maxScrollLeft) {
          
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          
          scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
      }
    }, 2000); 

    return () => clearInterval(scrollInterval); 
  }, []);

  const offersData = [
    {
      id: 1,
      title: 'Free dessert on ₹500+ orders.',
      imageUrl: discount1, 
    },
    {
      id: 2,
      title: '50% off drinks with meals.',
      imageUrl: discount2, 
    },
    {
      id: 3,
      title: '30% Off on All Thalis',
      imageUrl: discount3, 
    },
    {
      id: 4,
      title: 'Flat 20% Off on Biryani Orders',
      imageUrl: discount4, 
    },
    {
      id: 5,
      title: '50% Off on Pizza',
      imageUrl: discount5, 
    },
    {
        id: 6,
        title: '30% Off Paneer Dishes',
        imageUrl: discount6, 
      },
      {
        id: 7,
        title: '20% Off on Cakes',
        imageUrl : discount7, 
      },
      {
        id: 8,
        title: ' Buy 3 samosas, get 1 free ',
        imageUrl: discount8, 
      },
      {
        id: 9,
        title: 'Buy 2, get 1 free',
        imageUrl: discount9, 
      },
      {
        id: 10,
        title: '30% Off Pani Puri Platter',
        imageUrl: discount10, 
      },
  ];

  return (
    <div className="scrollable-container" ref={scrollRef}>
      {offersData.map(offer => (
        <div className="card" key={offer.id}>
          <img src={offer.imageUrl} alt={offer.title} className="card-image" />
          <h3 className="offer-text">{offer.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ScrollableCards;
