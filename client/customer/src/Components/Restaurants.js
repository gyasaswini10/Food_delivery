import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Restaurant.css'; 
import OneImage from './One.jpg';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: 'Tushar',
    role: 'Owner - Concept Shawarma, Delhi NCR',
    feedback: 'Delight Zone delivery fleet saves considerable effort on our part, resulting in more fulfilled orders for us. Also, it has now become much easier for customers to discover our brand.',
  },
  {
    name: 'Pawan Kumar',
    role: 'Owner - Chicago BR, Dehradun',
    feedback: 'We are immensely satisfied with the marketing push Delight Zone has provided us. We are now exclusive with them and look forward to more growth in our delivery business.',
  },
  {
    name: 'Amit Sharma',
    role: 'Owner - Bistro Delight, Mumbai',
    feedback: 'Partnering with Delight Zone has made it easier for our customers to discover us online and get their orders fulfilled seamlessly.',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Owner - Curry House, Hyderabad',
    feedback: 'Working with Delight Zone has increased our order volume significantly, and our customers love the convenience of their platform.',
  },
  {
    name: 'Meera Joshi',
    role: 'Owner - Spice Villa, Bangalore',
    feedback: 'Delight Zone’s support team has been fantastic, and their platform has helped us reach a new audience.',
  },
];

// FAQ data
const faqs = [
  {
    question: 'How do I get listed on Delight Zone as a restaurant partner?',
    answer: 'You can easily list your restaurant on Delight Zone by signing up through our partner portal and submitting the required documents for verification.',
  },
  {
    question: 'What are the benefits of using Delight Zone’s delivery service?',
    answer: 'Delight Zone offers a reliable delivery service that ensures timely order fulfillment, boosting customer satisfaction and repeat business for your restaurant.',
  },
  {
    question: 'How does Delight Zone help increase visibility for my restaurant?',
    answer: 'Our platform uses data-driven insights to highlight your restaurant in relevant searches, helping potential customers discover your business easily.',
  },
  {
    question: 'What happens if I need support with my Delight Zone partnership?',
    answer: 'Our dedicated support team is always available to assist you with any issues or inquiries, ensuring that your experience on Delight Zone is seamless.',
  },
];

const Restaurant = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeForm, setActiveForm] = useState(null); 
  const [open, setOpen] = useState(false); 
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); 
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleRegisterClick = () => {
    setActiveForm('register');
    setOpen(true);
  };

  const handleLoginClick = () => {
    setActiveForm('login');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = () => {
    // Navigate to Restaurant Management page after successful login/registration
    navigate('/RestaurantManagement');
    setOpen(false);  // Close the dialog
  };

  return (
    <Box>
      {/* New Partner Section with Image */}
      <Box display="flex" justifyContent="space-between" alignItems="center" padding={4} bgcolor="#f5f5f5">
        <Box flex="1" display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="h4" gutterBottom>
            Register with Delight Zone
          </Typography>
          <Typography variant="body1" gutterBottom>
            Partner with us and boost your business with 50% more revenue, 10x new customers, and greater visibility.
          </Typography>
          <Box display="flex" gap={2}>
            <Button variant="contained" color="warning" onClick={handleRegisterClick}>
              Register your restaurant
            </Button>
            <Button variant="outlined" color="warning" onClick={handleLoginClick}>
              Login as restaurant manager
            </Button>
          </Box>
        </Box>

        <Box flex="1" display="flex" justifyContent="flex-end">
          <img
            src={OneImage}
            alt="Restaurant Image"
            style={{ width: '300px', height: 'auto' }}
          />
        </Box>
      </Box>

      {/* Modal for Register and Login Forms */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          {activeForm === 'register' ? 'Register your Restaurant' : 'Login as Restaurant Manager'}
        </DialogTitle>
        <DialogContent>
          {activeForm === 'register' && (
            <>
              <TextField label="Restaurant Name" fullWidth margin="normal" color='warning'/>
              <TextField label="Owner Name" fullWidth margin="normal" color='warning'/>
              <TextField label="Email" fullWidth margin="normal" color='warning'/>
              <TextField label="Phone Number" fullWidth margin="normal" color='warning'/>
              <TextField label="Address" fullWidth margin="normal" color='warning'/>
            </>
          )}
          {activeForm === 'login' && (
            <>
              <TextField label="Email" fullWidth margin="normal" color='warning'/>
              <TextField label="Password" type="password" fullWidth margin="normal" color='warning'/>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="warning">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} variant="contained" color="warning">
            {activeForm === 'register' ? 'Submit' : 'Login'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Why Partner Section */}
      <div className="restaurant-card">
        <h2>Why should you partner with Delight Zone?</h2>
        <p>
      Partnering with Delight Zone ensures increased visibility, seamless operations, and steady business growth through their innovative platform.
      </p>


        <div className="business-cards-container">
          <div className="card2">
            <h1>1000+</h1>
            <p>cities in India</p>
          </div>
          <div className="card2">
            <h1>3 lakh+</h1>
            <p>restaurant listings</p>
          </div>
          <div className="card2">
            <h1>5.0 crore+</h1>
            <p>monthly orders</p>
          </div>
        </div>
      {/* How it works section */}
      <div className="how-it-works">
        <h2>How it works?</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">
              <img 
                src="https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png" 
                height="40" 
                width="40" 
                alt="Step 1 Icon" 
              />
            </div>
            <h3>Step 1</h3>
            <p>Set up your page on Delight Zone.</p>
            <p>Create a listing on Delight Zone to help users easily find your business.</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <img 
                src="https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png" 
                height="40" 
                width="40" 
                alt="Step 2 Icon" 
              />
            </div>
            <h3>Step 2</h3>
            <p>Sign up for online ordering.</p>
            <p>And quickly deliver orders to Thousands of customers.</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <img 
                src="https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png" 
                height="40" 
                width="40" 
                alt="Step 3 Icon" 
              />
            </div>
            <h3>Step 3</h3>
            <p>Begin accepting online orders.</p>
            <p>Handle orders through our partner app, web dashboard, or API integrations.</p>
          </div>
        </div>
    
    </div>{/* Testimonials Section */}
<div className="testimonial-container">
  <IconButton className="testimonial-arrow arrow-left" onClick={handlePrev}>
    <ArrowBackIosIcon />
  </IconButton>

  <Card className="testimonial-card" variant="outlined">
    <CardContent>
      <Typography variant="h6" component="div">
        {testimonials[currentIndex].feedback}
      </Typography>
      <Typography color="text.secondary">
        - {testimonials[currentIndex].name}, {testimonials[currentIndex].role}
      </Typography>
    </CardContent>
  </Card>

  <IconButton className="testimonial-arrow arrow-right" onClick={handleNext}>
    <ArrowForwardIosIcon />
  </IconButton>
</div>



        {/* FAQs Section */}
        <div className="faq-container">
          <h2>FAQs</h2>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 2 }}>
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon />} 
                aria-controls={`panel${index}-content`} 
                id={`panel${index}-header`}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Restaurant;
