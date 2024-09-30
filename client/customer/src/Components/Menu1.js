import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Paper, Tabs, Tab, Rating, Chip,TextField,InputAdornment,Card,CardMedia,CardContent,Button,List,ListItem,ListItemText,Divider,IconButton,Drawer,AppBar,Toolbar,Badge // Import Badge from Material UI
} from '@mui/material';
import { AccessTime, Search, Add, Remove, ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import m11 from './m11.jpeg';
import m12 from './m12.jpeg';
import m13 from './m13.jpg';
import m14 from './m14.jpeg';
import m15 from './m15.jpg';
import m16 from './m16.jpg';
import m17 from './m17.jpeg';
import m18 from './m18.webp';
import m19 from './m19.jpeg';
import m20 from './m20.jpeg';
import m21 from './m21.jpg';
import m22 from './m22.jpg';
import m23 from './m23.jpg';
import m24 from './m24.jpg';
import m25 from './m25.jpg';
import m31 from './m31.jpg';
import m32 from './m32.jpg';
import m33 from './m33.jpg';
import m41 from './m41.jpg';
import m42 from './m42.jpg';
import m43 from './m43.jpg';
import m51 from './m51.jpg';
import m52 from './m52.jpg';
import m53 from './m53.jpg';
import m54 from './m54.jpg';
import m55 from './m55.jpg';
import m56 from './m56.jpg';
import m61 from './m61.jpg';
import m62 from './m62.jpg';
import m63 from './m63.jpg';
import m64 from './m64.jpg';
import m65 from './m65.jpg';
import m66 from './m66.jpg';
import m71 from './m71.jpg';
import m72 from './m72.jpg';
import m73 from './m73.jpg';
import m74 from './m74.jpg';
import m75 from './m75.jpg';
import m76 from './m76.jpg';
import m81 from './m81.jpeg';
import m82 from './m82.jpeg';
import m83 from './m83.jpeg';
import m84 from './m84.jpg';
import m85 from './m85.jpg';
import m86 from './m86.jpg';
import m87 from './m87.jpg';
import m88 from './m88.jpg';
// Mock data for the restaurant
const restaurantData = {
  name: "Sitara Grand",
  cuisine: "South Indian, Andhra, Beverages, Desserts",
  location: "Rajahmundry",
  openingHours: "7am - 10pm (Today)",
  diningRating: 4.5,
  diningRatingsCount: 707,
  deliveryRating: 4.2,
  deliveryRatingsCount: "52.2K"
};

// Mock data for menu items
const categories = [
  {
    name: 'Tiffin',
    items: [
      { id: 1, name: 'Idly', image: m11 , price: 40, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Sambhar Idly', image: m12 , price: 60, votes: 532, description: 'Three soft Idlis served with chutney.', isBestseller: true, isVeg: true },
      { id: 3, name: 'Dosa', image: m13 , price: 70, votes: 532, description: 'Three soft Idlis served with chutney.', isBestseller: true, isVeg: true },
      { id: 4, name: 'Vada', image: m14 , price: 50, votes: 532, description: 'Three soft Idlis served with chutney.', isBestseller: true, isVeg: true },
      { id: 5, name: 'Masala Dosa', image: m15 , price: 80, votes: 532, description: 'Three soft Idlis served with chutney.', isBestseller: true, isVeg: true },
      { id: 6, name: 'Poori', image: m16 , price: 90, votes: 532, description: 'Three soft Idlis served with chutney.', isBestseller: true, isVeg: true },
      { id: 7, name: 'Bajji', image: m17 , price: 50, votes: 532, description: 'Three soft Idlis served with chutney.', isBestseller: true, isVeg: true },
      { id: 8, name: 'Uttapam', image: m18 , price: 50, votes: 532, description: 'Three soft Idlis served with chutney.', isBestseller: true, isVeg: true },
      { id: 9, name: 'Upma', image: m19 , price: 50, votes: 532, description: 'Three soft Idlis served with chutney.', isBestseller: true, isVeg: true },
      { id: 10, name: 'Pesarattu', image: m20 , price: 90, votes: 532, description: 'Three soft Idlis served with chutney.', isBestseller: true, isVeg: true }
    ]
  },
  { name: 'Starters', 
    items: [
      { id: 1, name: 'Paneer 65', image: m21 , price: 100, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Chicken Lollipop', image: m22 , price: 100, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 3, name: 'Chilli Baby Corn', image: m23 , price: 120, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 4, name: 'Spring Rolls', image: m24 , price: 120, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 5, name: 'Chicken 65', image: m25 , price: 110, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    ] },
  { name: 'Soups', 
    items: [
      { id: 1, name: 'Tomato Soup', image: m31 , price: 90, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 2, name: 'SweetCorn Soup', image: m32 , price: 90, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 3, name: 'Vegetable Soup', image: m33 , price: 100, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    ] },
  { name: 'Rotis', 
    items: [
      { id: 1, name: 'Pulka', image: m41 , price: 30, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Butter Naan', image: m42 , price: 60, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 3, name: 'rumali Roti', image: m43 , price: 60, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    ] },
  { name: 'Rice and Noodles', items: [
    { id: 1, name: 'Paneer Biryani', image: m51 , price: 160, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    { id: 2, name: 'Chicken Biryani', image: m52 , price: 160, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    { id: 3, name: 'Veg Noodles', image: m53 , price: 120, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    { id: 4, name: 'Prawn Biryani', image: m54 , price: 180, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    { id: 5, name: 'Fried-Rice', image: m55 , price: 110, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    { id: 6, name: 'Mushroom Fried-Rice', image: m56 , price: 120, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
  ] },
  { name: 'Curries', 
    items: [
      { id: 1, name: 'Mushroom Masala', image: m61 , price: 180, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Kaju Tomato', image: m62 , price: 200, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 3, name: 'Paneer Kadai', image: m63 , price: 190, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 4, name: 'Butter Chicken', image: m64 , price: 200, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 5, name: 'Mutton Kheema', image: m65 , price: 220, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 6, name: 'Malai Kofta', image: m66 , price: 190, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    ] },
  { name: 'Desserts', items: [
    { id: 1, name: 'Cheese Cake', image: m71 , price: 100, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    { id: 2, name: 'Moose Tracks', image: m72 , price: 100, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    { id: 3, name: 'Pistachio', image: m73 , price: 100, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    { id: 4, name: 'Chocolate ', image: m74 , price: 100, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    { id: 5, name: 'Red Velvet', image: m75 , price: 90, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    { id: 6, name: 'Black Currant', image: m76 , price: 90, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
  ] },
  { name: 'Beverages', 
    items: [
      { id: 1, name: 'Water', image: m81 , price: 20, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Tea', image: m82 , price: 30, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 3, name: 'Coffee', image: m83 , price: 30, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 4, name: 'Lassi', image: m84 , price: 25, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 5, name: 'Pink Lady', image: m85 , price: 100, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 6, name: 'Cindrella', image: m86 , price: 100, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 7, name: 'Lemon Tea', image: m87 , price: 40, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
      { id: 8, name: 'Caramel Macchaito', image: m88 , price: 100, votes: 707, description: 'Idli slowly cooked on steam.', isBestseller: true, isVeg: true },
    ] }
];

const RestaurantDetails = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (item) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      );
    } else {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handlePaymentClick = () => {
    // Navigate to the Payment component or perform payment logic here
    navigate('/Payment'); // Adjust the path as needed
  };

  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {restaurantData.name}
          </Typography>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <Badge badgeContent={cart.length} color="secondary"> {/* Added Badge to show cart count */}
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box my={4}>
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
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Typography variant="h6">Categories</Typography>
                <Divider />
                <List>
                  {categories.map((category, index) => (
                    <ListItem button key={index} onClick={() => handleCategoryClick(category)}>
                      <ListItemText primary={category.name} />
                    </ListItem>
                  ))}
                </List>
              </Grid>

              <Grid item xs={12} md={9}>
                <Typography variant="h5" gutterBottom>
                  {selectedCategory.name}
                </Typography>

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

                <Grid container spacing={3} mt={2}>
                  {selectedCategory.items.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="140"
                          image={item.image}
                          alt={item.name}
                        />
                        <CardContent>
                          <Typography variant="h6">{item.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.description}
                          </Typography>
                          <Typography variant="h5">{item.price}₹</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.votes} Votes
                          </Typography>
                          <Button onClick={() => handleAddToCart(item)} startIcon={<Add />}>Add to Cart</Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>

      {/* Cart Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 300 }}>
          <Typography variant="h6" sx={{ p: 2 }}>Shopping Cart</Typography>
          <Divider />
          <List>
            {cart.map((item) => (
              <ListItem key={item.id}>
                <ListItemText primary={`${item.name} x ${item.quantity}`} secondary={`Price: ${item.price}₹`} />
                <IconButton onClick={() => handleIncreaseQuantity(item)}><Add /></IconButton>
                <IconButton onClick={() => handleDecreaseQuantity(item)}><Remove /></IconButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Total: {calculateTotal()}₹</Typography>
            <Button variant="contained" color="primary" onClick={handlePaymentClick}>Proceed to Payment</Button>
          </Box>
        </Box>
      </Drawer>
    </Container>
  );
};

export default RestaurantDetails;

