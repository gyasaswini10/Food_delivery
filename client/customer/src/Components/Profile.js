import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import image2 from './Icon1.png'; 

function Profile() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f4f4f9"
    >
      <Paper
        elevation={0} 
        sx={{
          width: '350px',
          borderRadius: '10px',
          overflow: 'hidden',
          textAlign: 'center',
          boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
        }}
      >
        {/* Top Images */}
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
          <img src={image2} alt="Image 2" style={{ width: '40%', borderRadius: '5px' }} />
        </Box>

        <Typography variant="h5" component="h1" sx={{ mt: 2 }}>
          Account Details
        </Typography>

        {/* User Information */}
        <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
          Name: John Doe
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
          Email: johndoe@example.com
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
          Phone: +1234567890
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
          City: India
        </Typography>
      </Paper>
    </Box>
  );
}

export default Profile;
