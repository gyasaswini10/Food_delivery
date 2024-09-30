import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Typography, 
  Box, 
  Container, 
  Grid, 
  Paper, 
  Tabs, 
  Tab, 
  Rating, 
  Chip,
  TextField,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Card,
  CardMedia,
  CardContent,
  Button
} from '@mui/material';
import { AccessTime, Search } from '@mui/icons-material';

// Mock data for the restaurant
const restaurantData = {
  name: "Sitara Grand",
  cuisine: "South Indian, Andhra, Beverages, Desserts",
  location: "Brodipet, Guntur",
  openingHours: "7am - 10pm (Today)",
  diningRating: 4.1,
  diningRatingsCount: 707,
  deliveryRating: 4.2,
  deliveryRatingsCount: "52.2K"
};

// Mock data for menu items
const menuItems = [
  {
    id: 1,
    name: "Idli",
    image: "https://example.com/idli.jpg",
    price: 40,
    rating: 4.5,
    votes: 707,
    description: "Idli slowly cooked on steam.",
    isBestseller: true,
    isVeg: true
  },
  {
    id: 2,
    name: "Three Idli",
    image: "https://example.com/three-idli.jpg",
    price: 90,
    rating: 4.4,
    votes: 532,
    description: "Three pieces of soft, fluffy idlis.",
    isBestseller: true,
    isVeg: true
  },
  // Add more menu items as needed
];

const RestaurantDetails = () => {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const [activeTab, setActiveTab] = useState(0);
  const [vegOnly, setVegOnly] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleVegOnlyChange = (event) => {
    setVegOnly(event.target.checked);
  };

  const filteredMenuItems = vegOnly 
    ? menuItems.filter(item => item.isVeg) 
    : menuItems;

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {restaurantData.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {restaurantData.cuisine}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {restaurantData.location}
        </Typography>
        <Typography variant="body2" color="success.main" gutterBottom>
          Open now - {restaurantData.openingHours} <AccessTime fontSize="small" />
        </Typography>

        <Grid container spacing={2} mt={2}>
          <Grid item>
            <Paper elevation={0} sx={{ p: 1, bgcolor: 'success.light', color: 'white' }}>
              <Typography variant="h6">{restaurantData.diningRating}★</Typography>
              <Typography variant="caption">{restaurantData.diningRatingsCount} Dining Ratings</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={0} sx={{ p: 1, bgcolor: 'success.light', color: 'white' }}>
              <Typography variant="h6">{restaurantData.deliveryRating}★</Typography>
              <Typography variant="caption">{restaurantData.deliveryRatingsCount} Delivery Ratings</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 4 }}>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="restaurant tabs">
            <Tab label="Overview" />
            <Tab label="Order Online" />
            <Tab label="Reviews" />
            <Tab label="Photos" />
            <Tab label="Menu" />
          </Tabs>
        </Box>

        {activeTab === 1 && (
          <Box mt={4}>
            <Typography variant="h5" gutterBottom>
              Order Online
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              <AccessTime fontSize="small" /> 20 min
            </Typography>

            <Box mt={2} mb={4}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search within menu"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <FormControlLabel
              control={<Checkbox checked={vegOnly} onChange={handleVegOnlyChange} />}
              label="Veg Only"
            />

            <Typography variant="h6" mt={4} mb={2}>
              Tiffin
            </Typography>

            <Grid container spacing={3}>
              {filteredMenuItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image}
                      alt={item.name}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {item.name}
                        {item.isVeg && (
                          <Box component="span" ml={1}>
                            <img src="https://example.com/veg-icon.png" alt="Veg" width="20" height="20" />
                          </Box>
                        )}
                      </Typography>
                      {item.isBestseller && (
                        <Chip label="Bestseller" color="primary" size="small" sx={{ mb: 1 }} />
                      )}
                      <Box display="flex" alignItems="center" mb={1}>
                        <Rating value={item.rating} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary" ml={1}>
                          {item.votes} votes
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {item.description}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        ₹{item.price}
                      </Typography>
                      <Button variant="outlined" color="primary" fullWidth sx={{ mt: 2 }}>
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default RestaurantDetails;
