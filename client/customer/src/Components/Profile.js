import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';

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
        elevation={3}
        sx={{
          padding: '40px',
          width: '300px',
          textAlign: 'center',
          borderRadius: '10px',
        }}
      >
        <Avatar
          alt="Profile"
          src="https://via.placeholder.com/100"
          sx={{ width: 100, height: 100, margin: 'auto', mb: 2 }}
        />
        <Typography variant="h5" component="h1" sx={{ mb: 1 }}>
          Ram
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          User
        </Typography>
        <Typography variant="body2" sx={{ color: '#777', mb: 1 }}>
          ram@example.com
        </Typography>
        <Typography variant="body2" sx={{ color: '#777', mb: 1 }}>
          +1234567890
        </Typography>
        <Typography variant="body2" sx={{ color: '#777', mb: 1 }}>
          India
        </Typography>
        <Typography variant="body2" sx={{ color: '#777', mb: 1 }}>
          Mumbai
        </Typography>
      </Paper>
    </Box>
  );
}

export default Profile;
