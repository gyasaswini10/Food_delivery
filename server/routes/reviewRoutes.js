const express = require('express');
const router = express.Router();
const Review = require('../models/reviewModel');

// POST: Add a review
router.post('/submit', async (req, res) => {
  try {
    const { name, dishName, rating, review } = req.body;

    // Create a new review
    const newReview = new Review({
      name,
      dishName,
      rating,
      review,
    });

    await newReview.save();
    res.status(201).json({ message: 'Review submitted successfully', review: newReview });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting review', error: error.message });
  }
});

// GET: Fetch all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error: error.message });
  }
});

module.exports = router;
