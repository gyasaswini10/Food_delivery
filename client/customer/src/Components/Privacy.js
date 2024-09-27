import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Privacy() {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          At PS15 Food Delivery Platform, we prioritize your privacy and are committed to protecting your personal information.
        </Typography>
        <Typography variant="body1" paragraph>
          This Privacy Policy outlines the types of data we collect, how we use it, and the measures we take to ensure its security.
        </Typography>
        <Typography variant="body1" paragraph>
          By using our platform, you agree to the collection and use of information in accordance with this policy.
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions regarding this Privacy Policy, feel free to contact us at privacy@ps15fooddelivery.com.
        </Typography>
      </Box>
    </Container>
  );
}

export default Privacy;
