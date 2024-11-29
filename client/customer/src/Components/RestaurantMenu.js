import React from 'react';
import { useParams } from 'react-router-dom';
import restaurantData from './restaurantData'; 

const RestaurantMenu = () => {
    const { restaurantId } = useParams(); 
    const restaurant = restaurantData.find(item => item.id === parseInt(restaurantId));

    if (!restaurant) {
        return <h2>Restaurant not found</h2>;
    }

    return (
        <div>
            <h1>{restaurant.title}</h1>
            <img src={restaurant.imageUrl} alt={restaurant.title} />
            <p>Offer: {restaurant.offer}</p>
            <p>Rating: {restaurant.rating}</p>
            <p>Price: {restaurant.price}</p>
            <p>Delivery Time: {restaurant.deliveryTime}</p>
            {/* You can add more details, such as menu items, etc. */}
        </div>
    );
};

export default RestaurantMenu;
