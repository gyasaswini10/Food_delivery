import React, { useState } from 'react';
import { Box, TextField, Button, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const Reviews = () => {
  const [reviewData, setReviewData] = useState({
    name: '',
    dishName: '',  
    rating: '',
    review: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData({
      ...reviewData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review Submitted:', reviewData);
    alert('Thank you for your review!');
    setReviewData({
      name: '',
      dishName: '', 
      rating: '',
      review: ''
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
        Leave a Review
      </Typography>

      <TextField
        fullWidth
        label="Name"
        name="name"
        value={reviewData.name}
        onChange={handleChange}
        margin="normal"
        required
        color='warning'
      />

      <TextField
        fullWidth
        label="Dish Name"  
        name="dishName"
        value={reviewData.dishName}
        onChange={handleChange}
        margin="normal"
        required
        color='warning'
      />

      <FormControl component="fieldset" sx={{ marginTop: 2 }}>
        <FormLabel component="legend">Rating</FormLabel>
        <RadioGroup
          name="rating"
          value={reviewData.rating}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="1" control={<Radio color='warning'/>} label="1 Star" />
          <FormControlLabel value="2" control={<Radio color='warning'/>} label="2 Stars" />
          <FormControlLabel value="3" control={<Radio color='warning'/>} label="3 Stars" />
          <FormControlLabel value="4" control={<Radio color='warning'/>} label="4 Stars" />
          <FormControlLabel value="5" control={<Radio color='warning'/>} label="5 Stars" />
        </RadioGroup>
      </FormControl>

      <TextField
        fullWidth
        label="Review"
        name="review"
        value={reviewData.review}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={4}
        required
        color='warning'
      />

      <Button type="submit" variant="contained" color="warning" fullWidth sx={{ mt: 2 }}>
        Submit Review
      </Button>
    </Box>
  );
};

export default Reviews;