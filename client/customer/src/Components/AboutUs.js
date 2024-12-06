import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" style={{ padding: '40px 20px', backgroundColor: '#f4f6f8' }}>
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" align="center" paragraph style={{ marginBottom: '40px', fontSize: '1.1rem' }}>
        Welcome to our food delivery project! Our team is dedicated to creating a seamless platform that enhances your food ordering experience. With real-time tracking and user-friendly design, we aim to connect you with your favorite restaurants effortlessly.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        
        {/* Gurivi Reddy Yasaswini */}
        <Grid item xs={12} sm={4}>
          <Card variant="outlined" style={{ height: '100%', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
              <h6>Gurivi Reddy Yasaswini</h6>
              <Link href="https://www.linkedin.com/in/yasaswini2005/" target="_blank" style={{ marginRight: '10px' }}>
                <LinkedInIcon sx={{ color: 'warning.main' }} />
              </Link>
              <Link href="https://github.com/gyasaswini10" target="_blank">
                <GitHubIcon sx={{ color: 'warning.main' }} />
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Hima Honey Javvaji */}
        <Grid item xs={12} sm={4}>
          <Card variant="outlined" style={{ height: '100%', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
              <h6>Hima Honey Javvaji</h6>
              <Link href="https://www.linkedin.com/in/hima-honey-javvaji-024227329/" target="_blank" style={{ marginRight: '10px' }}>
                <LinkedInIcon sx={{ color: 'warning.main' }} />
              </Link>
              <Link href="https://github.com/HimahoneyJavvaji" target="_blank">
                <GitHubIcon sx={{ color: 'warning.main' }} />
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* J. Jyothi Keerthana */}
        <Grid item xs={12} sm={4}>
          <Card variant="outlined" style={{ height: '100%', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
              <h6>J. Jyothi Keerthana</h6>
              <Link href="https://www.linkedin.com/in/jyothi-keerthana-javvaji-71258527a" target="_blank" style={{ marginRight: '10px' }}>
                <LinkedInIcon sx={{ color: 'warning.main' }} />
              </Link>
              <Link href="https://github.com/Keerthana-Javvaji" target="_blank">
                <GitHubIcon sx={{ color: 'warning.main' }} />
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;