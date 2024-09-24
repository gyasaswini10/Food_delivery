import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#333', 
      color: 'white', 
      padding: '20px', 
      marginTop: '20px', 
      marginBottom: '20px', // Add bottom margin here
      borderTop: '4px solid white' 
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography>
              <Link href="/about" color="inherit" underline="hover">About Us</Link>
            </Typography>
            <Typography>
              <Link href="/privacy" color="inherit" underline="hover">Privacy</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <Typography>📞 1-212-4560-7890</Typography>
            <Typography variant="body2" style={{ marginTop: '8px' }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
