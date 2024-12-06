import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Card, CardContent, Grid } from '@mui/material';

const RestaurantManagement = () => {
  // State to hold the list of items (name, description, price)
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  // Function to handle adding a new item
  const handleAddItem = () => {
    if (!itemName || !itemPrice) {
      alert("Item name and price are required.");
      return;
    }
    const newItem = {
      id: Date.now(),
      name: itemName,
      description: itemDescription,
      price: parseFloat(itemPrice),
    };
    setItems([...items, newItem]);
    setItemName('');
    setItemDescription('');
    setItemPrice('');
  };

  // Function to handle removing an item by id
  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <Box padding={4}>
      <Typography variant="h4" gutterBottom>
        Manage Your Menu
      </Typography>

      {/* Add New Item Form */}
      <Box marginBottom={4}>
        <TextField
          label="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          fullWidth
          margin="normal"
          color="warning"
        />
        <TextField
          label="Item Description"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          fullWidth
          margin="normal"
          color="warning"
        />
        <TextField
          label="Item Price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          fullWidth
          margin="normal"
          color="warning"
          type="number"
        />
        <Button
          variant="contained"
          color="warning"
          onClick={handleAddItem}
          style={{ marginTop: '16px' }}
        >
          Add Item
        </Button>
      </Box>

      {/* Display Items */}
      <Typography variant="h5" gutterBottom>
        Current Menu
      </Typography>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
                <Typography variant="body1" color="primary">
                  ${item.price.toFixed(2)}
                </Typography>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleRemoveItem(item.id)}
                  style={{ marginTop: '8px' }}
                >
                  Remove Item
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RestaurantManagement;
