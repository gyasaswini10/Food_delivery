import React from 'react';
import FoodCardList from './FoodCardList';
import Container from '@mui/material/Container';
import id6 from './id6.webp';
import id5 from './id5.jpg';
import id4 from './id4.jpeg';
import id1 from './id1.webp';
import id2 from './id2.jpg';
import id3 from './id3.jpg';
const RestaurantDetails = () => {
    const foodItems = [
        {
            id: 1,
            title: "Sitara Grand",
            imageUrl: id1, // Update with actual image URL
            offer: "20% OFF",
            rating: "4.4 ★",
            price: "₹200 for one",
            deliveryTime: "33 min"
        },
        {
            id: 2,
            title: "Dominos Pizza",
            imageUrl: id2, // Update with actual image URL
            offer: "₹75 OFF",
            rating: "4.2 ★",
            price: "₹150 for one",
            deliveryTime: "19 min"
        },
        {
            id: 3,
            title: "Ibaco",
            imageUrl: id3, // Update with actual image URL
            offer: "₹100 OFF",
            rating: "4.3 ★",
            price: "₹300 for one",
            deliveryTime: "19 min"
        },
        {
            id: 4,
            title: "Milkshake & More",
            imageUrl: id4, // Update with actual image URL
            offer: "30% OFF",
            rating: "4.3 ★",
            price: "₹100 for one",
            deliveryTime: "15 min"
        },
        {
            id: 5,
            title: "La Panchavati",
            imageUrl: id5, // Update with actual image URL
            offer: "30% OFF",
            rating: "4.5 ★",
            price: "₹150 for one",
            deliveryTime: "17 min"
        },
        {
            id: 6,
            title: "Temptations",
            imageUrl: id6, // Update with actual image URL
            offer: "30% OFF",
            rating: "4.1 ★",
            price: "₹250 for one",
            deliveryTime: "21 min"
        }
    ];

    return (
        <Container>
            <FoodCardList items={foodItems} />
        </Container>
    );
};

export default RestaurantDetails;