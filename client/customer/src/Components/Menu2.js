import React, { useState } from 'react';
import {
  Box,Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Rating,
  Chip,
  TextField,
} from '@mui/material';

// Mock data for restaurants and their menus
const restaurantsData = [
  {
    id: 1,
    name: "House Of Bakers",
    image: "/path/to/cake-image.jpg",
    rating: 3.9,
    cuisine: "Bakery, Shake",
    price: "₹200 for one",
    time: "20 min",
    promotion: "Free Strawberry Pastry",
    menu: [
      { name: "Birthday Cake", price: 800, description: "Customized birthday cake" },
      { name: "Strawberry Shake", price: 150, description: "Fresh strawberry milkshake" },
    ]
  },
  {
    id: 2,
    name: "Ak Special Hyderabadi Biryani",
    image: "/path/to/biryani-image.jpg",
    rating: 4.5,
    cuisine: "Biryani",
    price: "₹150 for one",
    time: "14 min",
    promotion: "30% OFF",
    menu: [
      { name: "Chicken Biryani", price: 250, description: "Aromatic rice with tender chicken pieces" },
      { name: "Veg Biryani", price: 200, description: "Fragrant rice with mixed vegetables" },
    ]
  },
  // Add more restaurant data as needed
];

const RestaurantCard = ({ restaurant, onClick }) => (
  <Card onClick={() => onClick(restaurant)} sx={{ cursor: 'pointer' }}>
    <CardMedia
      component="img"
      height="140"
      image={restaurant.image}
      alt={restaurant.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {restaurant.name}
      </Typography>
      <Rating value={restaurant.rating} readOnly size="small" />
      <Typography variant="body2" color="text.secondary">
        {restaurant.cuisine}
      </Typography>
      <Typography variant="body2">
        {restaurant.price} • {restaurant.time}
      </Typography>
      <Chip label={restaurant.promotion} color="primary" size="small" />
    </CardContent>
  </Card>
);

const RestaurantMenu = ({ restaurant }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>{restaurant.name}</Typography>
      <Rating value={restaurant.rating} readOnly />
      <Typography variant="body1">{restaurant.cuisine}</Typography>
      <Typography variant="body2">{restaurant.price} • {restaurant.time}</Typography>

      <Tabs value={activeTab} onChange={handleTabChange} sx={{ mt: 2 }}>
        <Tab label="Overview" />
        <Tab label="Order Online" />
        <Tab label="Reviews" />
        <Tab label="Photos" />
        <Tab label="Menu" />
      </Tabs>

      {activeTab === 1 && (
        <Box sx={{ mt: 2 }}>
          <TextField 
            fullWidth 
            variant="outlined" 
            placeholder="Search within menu" 
            sx={{ mb: 2 }}
          />
          <List>
            {restaurant.menu.map((item, index) => (
              <ListItem key={index}>
                <ListItemText 
                  primary={item.name} 
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        ₹{item.price}
                      </Typography>
                      {" — " + item.description}
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {/* Add content for other tabs as needed */}
    </Box>
  );
};

const RestaurantMenuSystem = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {!selectedRestaurant ? (
        <Grid container spacing={3}>
          {restaurantsData.map((restaurant) => (
            <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} onClick={handleRestaurantClick} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <Button onClick={() => setSelectedRestaurant(null)} sx={{ mb: 2 }}>
            Back to Restaurants
          </Button>
          <RestaurantMenu restaurant={selectedRestaurant} />
        </>
      )}
    </Box>
  );
};

export default RestaurantMenuSystem;