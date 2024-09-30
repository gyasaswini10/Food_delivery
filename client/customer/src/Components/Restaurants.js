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
import './Restaurant.css'; // Ensure your CSS file is linked
import OneImage from './One.png';
// Testimonial data
const testimonials = [
  {
    name: 'Tushar',
    role: 'Owner - Concept Shawarma, Delhi NCR',
    feedback:
      'Delight Zone delivery fleet saves considerable effort on our part, resulting in more fulfilled orders for us. Also, it has now become much easier for customers to discover our brand.',
  },
  {
    name: 'Pawan Kumar',
    role: 'Owner - Chicago BR, Dehradun',
    feedback:
      'We are immensely satisfied with the marketing push Delight Zone has provided us. We are now exclusive with them and look forward to more growth in our delivery business.',
  },
  {
    name: 'Amit Sharma',
    role: 'Owner - Bistro Delight, Mumbai',
    feedback:
      'Partnering with Delight Zone has made it easier for our customers to discover us online and get their orders fulfilled seamlessly.',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Owner - Curry House, Hyderabad',
    feedback:
      'Working with Delight Zone has increased our order volume significantly, and our customers love the convenience of their platform.',
  },
  {
    name: 'Meera Joshi',
    role: 'Owner - Spice Villa, Bangalore',
    feedback:
      'Delight Zone’s support team has been fantastic, and their platform has helped us reach a new audience.',
  },
];

// FAQ data
const faqs = [
  {
    question: 'How do I get listed on Delight Zone as a restaurant partner?',
    answer:
      'You can easily list your restaurant on Delight Zone by signing up through our partner portal and submitting the required documents for verification.',
  },
  {
    question: 'What are the benefits of using Delight Zone’s delivery service?',
    answer:
      'Delight Zone offers a reliable delivery service that ensures timely order fulfillment, boosting customer satisfaction and repeat business for your restaurant.',
  },
  {
    question: 'How does Delight Zone help increase visibility for my restaurant?',
    answer:
      'Our platform uses data-driven insights to highlight your restaurant in relevant searches, helping potential customers discover your business easily.',
  },
  {
    question: 'What happens if I need support with my Delight Zone partnership?',
    answer:
      'Our dedicated support team is always available to assist you with any issues or inquiries, ensuring that your experience on Delight Zone is seamless.',
  },
];

const Restaurant = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeForm, setActiveForm] = useState(null); // Manage which form is active
  const [open, setOpen] = useState(false); // Manage modal open/close state

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Wrap around to the first
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
          src={OneImage} // Use the imported image here
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
              <TextField label="Restaurant Name" fullWidth margin="normal" />
              <TextField label="Owner Name" fullWidth margin="normal" />
              <TextField label="Email" fullWidth margin="normal" />
              <TextField label="Phone Number" fullWidth margin="normal" />
              <TextField label="Address" fullWidth margin="normal" />
            </>
          )}
          {activeForm === 'login' && (
            <>
              <TextField label="Email" fullWidth margin="normal" />
              <TextField label="Password" type="password" fullWidth margin="normal" />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="warning">
            {activeForm === 'register' ? 'Submit' : 'Login'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Why Partner Section */}
      <div className="restaurant-card">
        <h2>Why should you partner with Delight Zone?</h2>
        <p>
          Delight Zone enables you to get 50% more revenue, 10x new customers, and boost your brand visibility by providing insights to improve your business.
        </p>

        <div className="business-cards-container">
          <div className="card">
            <h1>1000+</h1>
            <p>cities in India</p>
          </div>
          <div className="card">
            <h1>3 lakh+</h1>
            <p>restaurant listings</p>
          </div>
          <div className="card">
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
              <p>Create your page on Delight Zone</p>
              <p>Help users discover your place by creating a listing on Delight Zone</p>
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
              <p>Register for online ordering</p>
              <p>And deliver orders to millions of customers with ease</p>
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
              <p>Start receiving orders online</p>
              <p>Manage orders on our partner app, web dashboard, or API partners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Box display="flex" flexDirection="column" alignItems="center" padding={4} bgcolor="#f5f5f5">
        <Typography variant="h4" gutterBottom sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
          Our Happy Partners
        </Typography>

        <Box display="flex" alignItems="center" width="100%" maxWidth="600px" position="relative" mb={4}>
          <IconButton onClick={handlePrev} sx={{ zIndex: 1 }}>
            <ArrowBackIosIcon />
          </IconButton>

          <Box width="100%" display="flex" justifyContent="center" alignItems="center" marginX={2}>
            <Card sx={{ width: '100%', boxShadow: 3, borderRadius: 2, padding: 2 }}>
              <CardContent>
                <Typography variant="body1" gutterBottom sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
                  {testimonials[currentIndex].feedback}
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
                  {testimonials[currentIndex].name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
                  {testimonials[currentIndex].role}
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <IconButton onClick={handleNext} sx={{ zIndex: 1 }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* FAQ Section */}
        <Box width="100%" maxWidth="600px">
          <Typography variant="h4" gutterBottom sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Restaurant;
