import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); 
  };

  return (
    <Box sx={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Terms and Conditions
      </Typography>

      {/* Introduction */}
      <Typography variant="h6" component="h2" gutterBottom>
        Introduction
      </Typography>
      <Typography paragraph>
        Welcome to PS15 - Food Delivery Platform. By accessing or using our services, you agree to be bound by these terms and conditions. Please read them carefully before using our services.
      </Typography>

      {/* Service Overview */}
      <Typography variant="h6" component="h2" gutterBottom>
        Service Overview
      </Typography>
      <Typography paragraph>
        Our platform allows users to browse various restaurants, place orders, and track deliveries in real-time. We facilitate seamless payments through multiple payment options for your convenience. Restaurants manage their menus and process your orders, and delivery personnel ensure timely delivery.
      </Typography>

      {/* User Responsibilities */}
      <Typography variant="h6" component="h2" gutterBottom>
        User Responsibilities
      </Typography>
      <Typography paragraph>
        Users must provide accurate and up-to-date information when registering or placing an order. Any misuse of the platform, such as providing false information, placing fraudulent orders, or using the platform for illegal activities, will lead to account suspension or termination.
      </Typography>

      {/* Order Process */}
      <Typography variant="h6" component="h2" gutterBottom>
        Order Process
      </Typography>
      <Typography paragraph>
        Once an order is placed, it is confirmed and sent to the restaurant. Users can modify or cancel orders within a limited time after placement. Please note that once the food preparation starts, modifications or cancellations may not be possible, and cancellation fees may apply.
      </Typography>

      {/* Payment Terms */}
      <Typography variant="h6" component="h2" gutterBottom>
        Payment Terms
      </Typography>
      <Typography paragraph>
        We accept various payment methods including credit/debit cards, mobile wallets, and cash on delivery. Payments must be made in full at the time of order placement. In case of payment failure or fraudulent transactions, we reserve the right to cancel the order.
      </Typography>

      {/* Delivery and Timelines */}
      <Typography variant="h6" component="h2" gutterBottom>
        Delivery and Timelines
      </Typography>
      <Typography paragraph>
        Estimated delivery times are provided based on the restaurant’s preparation time and the delivery location. While we strive to ensure timely delivery, there may be delays due to factors like traffic, weather, or unforeseen circumstances. Users can track their orders in real-time using the platform.
      </Typography>

      {/* Refunds and Cancellations */}
      <Typography variant="h6" component="h2" gutterBottom>
        Refunds and Cancellations
      </Typography>
      <Typography paragraph>
        Refunds will be processed in cases where orders are canceled before the restaurant starts preparing the food, or in cases of payment errors. Refunds may take a few business days to reflect in your account. Once an order has been prepared or delivered, no refund requests will be entertained.
      </Typography>

      {/* Changes to Terms */}
      <Typography variant="h6" component="h2" gutterBottom>
        Changes to Terms
      </Typography>
      <Typography paragraph>
        We reserve the right to modify these terms at any time. Changes will be posted on our website or app, and it is the user’s responsibility to review them regularly.
      </Typography>

      {/* Contact Information */}
      <Typography variant="h6" component="h2" gutterBottom>
        Contact Information
      </Typography>
      <Typography paragraph>
        For any queries or concerns regarding these terms, please contact us.
      </Typography>
      
      <Button variant="contained" color="warning" onClick={handleContactClick}>
        Contact Us
      </Button>
    </Box>
  );
};

export default Terms;
