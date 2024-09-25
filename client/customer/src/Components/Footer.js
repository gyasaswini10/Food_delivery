import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '20px',
        width: '100%',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
            </Typography>
            <Typography>
              <Link href="/privacy" color="inherit" underline="hover">
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <Typography>📞 91-1010101010</Typography>
            <Typography>
              <Link href="/contact" color="inherit" underline="hover">
                Contact Us
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
