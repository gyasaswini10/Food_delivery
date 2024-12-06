import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Paper, Tabs, Tab, Rating, Chip,TextField,InputAdornment,Card,CardMedia,CardContent,Button,List,ListItem,ListItemText,Divider,IconButton,Drawer,AppBar,Toolbar,Badge // Import Badge from Material UI
} from '@mui/material';
import { AccessTime, Search, Add, Remove, ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; 
import s1 from './s1.jpg'
import s2 from './s2.jpeg'
import s3 from './s3.jpeg'
import s4 from './s4.jpeg'
import s5 from './s5.jpeg'
import s6 from './s6.jpg'
import s7 from './s7.jpeg'
import s8 from './s8.jpeg'
import s9 from './s9.jpeg'
import s10 from './s10.jpeg'
import s11 from './s11.jpeg'
import s12 from './s12.jpeg'
import s13 from './s13.jpeg'
import s14 from './s14.jpg'
import s15 from './s15.jpg'
import s16 from './s16.jpeg'
import s17 from './s17.jpeg'

const restaurantData = {
  name: "Milkshakes & More",
  cuisine: "South Indian, Andhra, Beverages, Desserts",
  location: "Rajahmundry",
  openingHours: "7am - 10pm (Today)",
  diningRating: 4.5,
  diningRatingsCount: 707,
  deliveryRating: 4.2,
  deliveryRatingsCount: "52.2K"
};

const categories = [
  {
    name: 'Milkshakes',
    items: [
      { id: 1, name: 'Strawberry Milkshake', image: s1 , price: 60, votes: 707, description: 'Creamy strawberry milkshake with fresh berries.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Nutella Milkshake', image: s2 , price: 60, votes: 532, description: 'Rich Nutella milkshake with creamy chocolate.', isBestseller: true, isVeg: true },
      { id: 3, name: 'Almond Pista Milkshake', image: s3 , price: 90, votes: 532, description: 'Almond pista milkshake with rich flavors.', isBestseller: true, isVeg: true },
      { id: 4, name: 'Mixed Berry Milkshake', image: s4 , price: 60, votes: 532, description: 'Mixed berry milkshake with fruity flavors.', isBestseller: true, isVeg: true },
    ]
  },
  { name: 'Thickshakes', 
    items: [
      { id: 1, name: 'Belgium Dark Chocolate ThickShake', image: s5 , price: 100, votes: 707, description: 'Belgium dark chocolate thickshake with rich cocoa.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Snicker Thickshake', image: s6 , price: 100, votes: 707, description: 'Snickers thickshake with caramel and chocolate flavors.', isBestseller: true, isVeg: true },
      { id: 3, name: 'Vanilla Thickshake', image: s7 , price: 120, votes: 707, description: 'Vanilla thickshake with smooth, creamy flavor.', isBestseller: true, isVeg: true },
      { id: 4, name: 'Mango Thickshake', image: s8 , price: 120, votes: 707, description: 'Mango thickshake with rich, tropical flavor.', isBestseller: true, isVeg: true },
    ] },
  { name: 'Juices', 
    items: [
      { id: 1, name: 'Apple Juice', image: s9 , price: 40, votes: 707, description: 'Fresh apple juice with a crisp flavor.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Cranberry Juice', image: s10 , price: 40, votes: 707, description: 'Cranberry juice with a tart, refreshing taste.', isBestseller: true, isVeg: true },
      { id: 3, name: 'Grape Juice', image: s11 , price: 40, votes: 707, description: 'Grape juice with a sweet and refreshing taste.', isBestseller: true, isVeg: true },
      { id: 4, name: 'Orange Juice', image: s12 , price: 30, votes: 707, description: 'Fresh orange juice with a tangy flavor.', isBestseller: true, isVeg: true },
    ] },
  { name: 'Mocktails', 
    items: [
      { id: 1, name: 'Frozen Tropical Colada', image: s13 , price: 130, votes: 707, description: 'Frozen tropical colada with creamy coconut and pineapple.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Frozen Margarita', image: s14 , price: 160, votes: 707, description: 'Frozen margarita with a refreshing lime twist.', isBestseller: true, isVeg: true },
      { id: 3, name: 'Pineapple Punch', image: s15 , price: 100, votes: 707, description: 'Pineapple punch with a sweet and tangy flavor.', isBestseller: true, isVeg: true },
      { id: 4, name: ' Pineapple Grapefruit Yuzu Mocktail', image: s16 , price: 160, votes: 707, description: 'Pineapple grapefruit yuzu mocktail with citrusy.', isBestseller: true, isVeg: true },
      { id: 4, name: ' Strawberry Coconut Cooler', image: s17 , price: 100, votes: 707, description: 'Strawberry coconut cooler with refreshing fruity flavors.', isBestseller: true, isVeg: true },
    ] },
];

const RestaurantDetails = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate(); 

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
    navigate('/Payment'); 
  };

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color='warning'>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {restaurantData.name}
          </Typography>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <Badge badgeContent={cart.length} color="warning"> {/* Added Badge to show cart count */}
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box my={4}>
        <Typography variant="subtitle1" color="text.warning" gutterBottom>
          {restaurantData.cuisine}
        </Typography>
        <Typography variant="subtitle2" color="text.warning" gutterBottom>
          {restaurantData.location}
        </Typography>
        <Typography variant="body2" color="warning.main" gutterBottom>
          Open now - {restaurantData.openingHours} <AccessTime fontSize="small" />
        </Typography>

        <Grid container spacing={2} mt={2}>
          <Grid item>
            <Paper elevation={0} sx={{ p: 1, bgcolor: 'warning.light', color: 'white' }}>
              <Typography variant="h6">{restaurantData.diningRating}★</Typography>
              <Typography variant="caption">{restaurantData.diningRatingsCount} Dining Ratings</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={0} sx={{ p: 1, bgcolor: 'warning.light', color: 'white' }}>
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
                  color="warning"
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
                          <Typography variant="body2" color="text.warning">
                            {item.description}
                          </Typography>
                          <Typography variant="h5">{item.price}₹</Typography>
                          <Typography variant="body2" color="text.warning">
                            {item.votes} Votes
                          </Typography>
                          <Button onClick={() => handleAddToCart(item)} startIcon={<Add />} color='warning'>Add to Cart</Button>
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