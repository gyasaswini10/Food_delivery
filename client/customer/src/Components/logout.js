import React from 'react';
import { Container, Box, Typography, Button, Link } from '@mui/material';

function Logout() {
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom>
          You are now logged out
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Thank you for using our platform. We hope to see you again soon!
        </Typography>
        <Link href="/Login" underline="none"> {/* Link to Login */}
          <Button
            variant="contained"
            color="warning"
            onClick={handleLogout}
            sx={{ mt: 4 }}
          >
            Log in again
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Logout;