import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Paper, Tabs, Tab, Rating, Chip,TextField,InputAdornment,Card,CardMedia,CardContent,Button,List,ListItem,ListItemText,Divider,IconButton,Drawer,AppBar,Toolbar,Badge // Import Badge from Material UI
} from '@mui/material';
import { AccessTime, Search, Add, Remove, ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; 
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
import p4 from './p4.jpg'
import p5 from './p5.jpg'
import p6 from './p6.jpg'
import p7 from './p7.jpg'
import p8 from './p8.jpg'
import p9 from './p9.jpg'
import p10 from './p10.jpg'
import p11 from './p11.jpg'
import p12 from './p12.jpg'
import p13 from './p13.jpeg'
import p14 from './p14.jpg'
import p15 from './p15.jpg'
import p16 from './p16.jpg'
import p17 from './p17.jpg'
import p18 from './p18.jpg'
import p19 from './p19.jpg'
import p20 from './p20.jpg'
import p21 from './p21.jpg'
import p22 from './p22.jpg'
import p23 from './p23.jpg'
import p24 from './p24.jpg'
import p25 from './p25.jpeg'

const restaurantData = {
  name: "Dominos Pizza",
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
    name: 'Veg Pizza',
    items: [
      { id: 1, name: 'Paneer Pizza', image: p1 , price: 140, votes: 707, description: 'Paneer pizza topped with cheese and spices.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Mushroom Pizza', image: p2 , price: 160, votes: 532, description: 'Mushroom pizza topped with savory mushrooms and cheese.', isBestseller: true, isVeg: true },
      { id: 3, name: 'Cheese Pizza', image: p3 , price: 170, votes: 532, description: 'Cheese pizza topped with gooey mozzarella and herbs.', isBestseller: true, isVeg: true },
      { id: 4, name: 'Pepperoni Pizza', image: p4 , price: 250, votes: 532, description: 'Pepperoni pizza topped with spicy pepperoni and cheese.', isBestseller: true, isVeg: true },
      { id: 5, name: 'Slyce Pizza', image: p5 , price: 280, votes: 532, description: 'Slyce pizza with a crispy crust and delicious toppings.', isBestseller: true, isVeg: true },
    ]
  },
  { name: 'Non-Veg Pizza', 
    items: [
      { id: 1, name: 'Chicken Pizza', image: p6 , price: 300, votes: 707, description: 'Chicken pizza topped with seasoned chicken and cheese.', isBestseller: true, isVeg: false },
      { id: 2, name: 'Chicken Keema Pizza', image: p7 , price: 300, votes: 707, description: 'Chicken keema pizza topped with spiced minced chicken and cheese.', isBestseller: true, isVeg: false },
      { id: 3, name: 'Chicken Sausage Pizza', image: p8 , price: 320, votes: 707, description: 'Chicken sausage pizza topped with savory sausage and cheese.', isBestseller: true, isVeg: false },
      { id: 4, name: 'Chicken Pepperoni Pizza', image: p9 , price: 320, votes: 707, description: 'Chicken pepperoni pizza topped with spicy chicken pepperoni.', isBestseller: true, isVeg: false },
      { id: 5, name: 'Dadhe Da Kheema', image: p10 , price: 110, votes: 707, description: 'Dadhde da kheema is a spiced minced meat dish.', isBestseller: true, isVeg: false },
    ] },
  { name: 'Tacos', 
    items: [
      { id: 1, name: 'Veg Mexicon Taco', image: p11 , price: 290, votes: 707, description: 'Veg Mexican taco filled with fresh vegetables.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Grilled Chicken Taco', image: p12 , price: 290, votes: 707, description: 'Grilled chicken taco with zesty toppings.', isBestseller: true, isVeg: false },
      { id: 3, name: 'Crispy Fish Taco', image: p13 , price: 250, votes: 707, description: 'Crispy fish taco topped with slaw and sauce.', isBestseller: true, isVeg: false },
    ] },
  { name: 'Garlic Breads', 
    items: [
      { id: 1, name: 'Garlic Bread', image: p14 , price: 180, votes: 707, description: 'Garlic bread toasted with buttery garlic spread.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Cheese Garlic Bread', image: p15 , price: 160, votes: 707, description: 'Cheese garlic bread topped with melted cheese and herbs.', isBestseller: true, isVeg: true },
      { id: 3, name: 'Roasted Cheese Bread', image: p16 , price: 120, votes: 707, description: 'Roasted vegetable cheese bread savory toppings.', isBestseller: true, isVeg: true },
    ] },
  { name: 'Pasta', items: [
    { id: 1, name: 'Cheese Pasta', image: p17 , price: 80, votes: 707, description: 'Cheese pasta coated in creamy cheese sauce.', isBestseller: true, isVeg: true },
    { id: 2, name: 'Vegetable Pasta', image: p18 , price: 60, votes: 707, description: 'Vegetable pasta loaded with fresh, sautéed veggies.', isBestseller: true, isVeg: true },
    { id: 3, name: 'Mushroom Pasta', image: p19 , price: 90, votes: 707, description: 'Mushroom pasta tossed in creamy sauce with herbs.', isBestseller: true, isVeg: true },
  ] },
  { name: 'Appetizers', 
    items: [
      { id: 1, name: 'Veg Momos', image: p20 , price: 180, votes: 707, description: 'Veg momos filled with seasoned vegetables and steamed.', isBestseller: true, isVeg: true },
      { id: 2, name: 'Chicken Momos', image: p21 , price: 200, votes: 707, description: 'Chicken momos filled with spiced minced chicken.', isBestseller: true, isVeg: false },
      { id: 3, name: 'Chicken Wings', image: p22 , price: 190, votes: 707, description: 'Chicken wings crispy and tossed in spicy sauce.', isBestseller: true, isVeg: false },
      { id: 4, name: 'Fries', image: p23 , price: 200, votes: 707, description: 'Fries crispy and golden, served with salt.', isBestseller: true, isVeg: true },
      { id: 5, name: 'Paneer Pocket', image: p24 , price: 220, votes: 707, description: 'Paneer pocket filled with spiced paneer and herbs.', isBestseller: true, isVeg: true },
      { id: 6, name: 'Chicken Pocket', image: p25 , price: 190, votes: 707, description: 'Chicken pocket filled with spiced minced chicken.', isBestseller: true, isVeg: false },
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
        <Typography variant="body2" color="warning" gutterBottom>
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