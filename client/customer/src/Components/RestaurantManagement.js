import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const RestaurantManagement = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [editItem, setEditItem] = useState(null); // Holds the item being edited

  // Function to handle adding a new item
  const handleAddItem = () => {
    if (!itemName || !itemPrice) {
      alert('Item name and price are required.');
      return;
    }

    if (editItem) {
      // If editing an item, update its details
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editItem.id
            ? { ...item, name: itemName, description: itemDescription, price: parseFloat(itemPrice) }
            : item
        )
      );
      setEditItem(null); // Reset edit state
    } else {
      // Add a new item
      const newItem = {
        id: Date.now(),
        name: itemName,
        description: itemDescription,
        price: parseFloat(itemPrice),
      };
      setItems([...items, newItem]);
    }

    // Clear form inputs
    setItemName('');
    setItemDescription('');
    setItemPrice('');
  };

  // Function to handle removing an item by id
  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Function to open the edit dialog with the item data
  const handleEditItem = (item) => {
    setItemName(item.name);
    setItemDescription(item.description);
    setItemPrice(item.price.toString());
    setEditItem(item); // Set the item being edited
  };

  // Function to handle canceling the edit operation
  const handleCancelEdit = () => {
    setItemName('');
    setItemDescription('');
    setItemPrice('');
    setEditItem(null);
  };

  return (
    <Box padding={4}>
      {/* Welcome Message */}
      <Typography variant="h4" gutterBottom>
        Welcome to Restaurant Management
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Manage your menu and keep your customers happy!
      </Typography>

      {/* Add/Edit Item Form */}
      <Box marginBottom={4}>
        <Typography variant="h5">{editItem ? 'Edit Item' : 'Add New Item'}</Typography>
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
        <Box display="flex" gap={2} marginTop={2}>
          <Button
            variant="contained"
            color="warning"
            onClick={handleAddItem}
          >
            {editItem ? 'Update Item' : 'Add Item'}
          </Button>
          {editItem && (
            <Button variant="outlined" color="error" onClick={handleCancelEdit}>
              Cancel
            </Button>
          )}
        </Box>
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
                <Box display="flex" justifyContent="space-between" marginTop={2}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditItem(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RestaurantManagement;
