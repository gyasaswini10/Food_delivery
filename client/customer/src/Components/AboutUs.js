import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" style={{ padding: '40px 20px', backgroundColor: '#f4f6f8' }}>
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        Welcome to K L World! We are dedicated to providing exceptional services and experiences tailored to our customers' needs.
      </Typography>
      
      <Typography variant="h5" align="center" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Our mission is to deliver top-quality services that exceed our customers' expectations and create lasting memories.
      </Typography>

      <Typography variant="h5" align="center" gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Card variant="outlined" style={{ height: '100%', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="body2">CEO & Founder</Typography>
              <Typography variant="body1" style={{ marginTop: '10px' }}>
                John is a visionary leader with a passion for excellence and over 10 years of experience in the industry.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card variant="outlined" style={{ height: '100%', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h6">Jane Smith</Typography>
              <Typography variant="body2">Chief Operations Officer</Typography>
              <Typography variant="body1" style={{ marginTop: '10px' }}>
                Jane ensures smooth operations and strives for the best customer experiences every day.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card variant="outlined" style={{ height: '100%', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h6">Mike Johnson</Typography>
              <Typography variant="body2">Marketing Manager</Typography>
              <Typography variant="body1" style={{ marginTop: '10px' }}>
                Mike connects our services with the community, making sure everyone knows about our offerings.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
