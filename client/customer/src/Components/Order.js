import React from 'react'
import ExploreDishes from './ExploreDishes'
import RestaurantDetails from './RestaurantDetails'
const Order = () => {
  return (
    <div>
      <h1>Explore Dishes</h1>
      <ExploreDishes/>
      <h1>Order Food from your Favourite Restaurants</h1>
      <RestaurantDetails/>
    </div>
  )
}

export default Order
