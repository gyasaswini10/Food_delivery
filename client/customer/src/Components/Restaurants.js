import React, { useState } from 'react';
import { Box, Typography, IconButton, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Testimonial data
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

// FAQ data with updated questions
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

const Restaurants = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Wrap around to the first
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={4} bgcolor="#f5f5f5">
      {/* Testimonials Section */}
      <Typography variant="h4" gutterBottom sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
        Our Happy Partners
      </Typography>

      <Box display="flex" alignItems="center" width="100%" maxWidth="600px" position="relative" mb={4}>
        <IconButton onClick={handlePrev} sx={{ zIndex: 1 }}>
          <ArrowBackIosIcon />
        </IconButton>

        {/* Display the current testimonial card */}
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
          <Accordion key={index} sx={{ mb: 2, boxShadow: 2, borderRadius: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: '#eeeeee' }}>
              <Typography sx={{ fontWeight: 'bold', fontFamily: '"Times New Roman", Times, serif' }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: '#f9f9f9' }}>
              <Typography sx={{ fontFamily: '"Times New Roman", Times, serif' }}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Restaurants;
