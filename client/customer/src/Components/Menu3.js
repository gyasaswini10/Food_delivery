import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Paper, Tabs, Tab, Rating, Chip,TextField,InputAdornment,Card,CardMedia,CardContent,Button,List,ListItem,ListItemText,Divider,IconButton,Drawer,AppBar,Toolbar,Badge // Import Badge from Material UI
} from '@mui/material';
import { AccessTime, Search, Add, Remove, ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; 
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
import c4 from './c4.jpg'
import c5 from './c5.jpg'
import c6 from './c6.jpg'
import c7 from './c7.jpg'
import c8 from './c8.jpg'
import c9 from './c9.jpg'
import c10 from './c10.jpg'
import c11 from './c11.jpg'
import c12 from './c12.jpg'
import c13 from './c13.jpg'
import c14 from './c14.jpg'
import c15 from './c15.jpg'

const restaurantData = {
  name: "Ibaco",
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
    name: 'Ice Cream Cakes',
    items: [
      { id: 1, name: 'Hot Fudge Sundae cake', image: c1 , price: 150, votes: 707, description: 'Indulgent chocolate cake with warm fudge. ', isBestseller: true, isVeg: true },
      { id: 2, name: 'Raspberry Vanilla Cake', image: c2 , price: 130, votes: 532, description: 'A layered vanilla ice cream cake swirled with raspberry puree', isBestseller: true, isVeg: true },
      { id: 3, name: 'Mint Chip ice-Cream cake', image: c3 , price: 120, votes: 532, description: 'A delicious cake with layers of mint chocolate chip ice cream and cake', isBestseller: true, isVeg: true },
      { id: 4, name: 'Cassata', image: c4 , price: 60, votes: 532, description: 'filled with sweet ricotta cheese, candied fruits, and chocolate.', isBestseller: true, isVeg: true },
    ]
  },
  { name: 'Eggless Cakes', 
    items: [
      { id: 1, name: 'CDeath by Chocolate', image: c5 , price: 100, votes: 707, description: 'A rich, decadent chocolate cake layered with chocolate mousse', isBestseller: true, isVeg: true },
      { id: 2, name: 'White Forest', image: c6 , price: 120, votes: 707, description: 'Vanilla cake with cherries and cream.', isBestseller: true, isVeg: true },
      { id: 3, name: 'Choco vanilla', image: c7 , price: 200, votes: 707, description: 'Chocolate and vanilla layered cake.', isBestseller: true, isVeg: true },
      { id: 4, name: 'Caramel Butterscotch Cake', image: c8 , price: 170, votes: 707, description: 'Caramel and butterscotch layered cake.', isBestseller: true, isVeg: true },
    ] },
  { name: 'Cheese Cakes', 
    items: [
      { id: 1, name: 'Red velvet cheese cake', image: c9 , price: 120, votes: 707, description: 'Red velvet cake with creamy cheesecake.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Blue Berry Cheese Cake', image: c10 , price: 90, votes: 707, description: 'Blueberry cheesecake with a graham cracker crust', isBestseller: true, isVeg: true },
      { id: 3, name: 'Mango Cheese Cake', image: c11 , price: 120, votes: 707, description: 'Mango cheesecake with a buttery crust. ', isBestseller: true, isVeg: true },
      { id: 4, name: 'Kitkat Cheese Cake', image: c12 , price: 120, votes: 707, description: 'KitKat cheesecake topped with chocolate bars', isBestseller: true, isVeg: true },
    ] },
  { name: 'Special Cakes', 
    items: [
      { id: 1, name: 'FerreroRocher Cake', image: c13 , price: 130, votes: 707, description: 'Ferrero Rocher chocolate cake with hazelnut layers. ', isBestseller: true, isVeg: true },
      { id: 2, name: 'Honey Almond', image: c14 , price: 180, votes: 707, description: 'Honey almond cake with nutty flavors.', isBestseller: true, isVeg: true },
      { id: 3, name: 'Hazel Nut', image: c15 , price: 140, votes: 707, description: 'Hazelnut cake with rich chocolate frosting.', isBestseller: true, isVeg: true },
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
            <Button variant="contained" color="warning" onClick={handlePaymentClick}>Proceed to Payment</Button>
          </Box>
        </Box>
      </Drawer>
    </Container>
  );
};

export default RestaurantDetails;