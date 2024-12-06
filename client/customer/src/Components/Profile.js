import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import axios from 'axios';
import image2 from './Icon1.png'; // You can use any image for the profile picture

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

        if (!token) {
          setError('No authentication token found. Please log in.');
          setLoading(false);
          return;
        }

        const response = await axios.get('http://localhost:5000/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserDetails(response.data); // Save user data to state
        setLoading(false);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Failed to fetch profile details.');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

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
          boxShadow:
            'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
        }}
      >
        
<Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
<img src={image2} alt="Profile" style={{ width: '40%', borderRadius: '5px' }} />
</Box>
        <Typography variant="h5" component="h1" sx={{ mt: 2 }}>
          Account Details
        </Typography>

        <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
          Full Name: {userDetails.fullName || 'N/A'}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
          Email: {userDetails.email || 'N/A'}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
          Phone: {userDetails.phone || 'N/A'}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
          City: {userDetails.city || 'N/A'}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
          Country: {userDetails.country || 'N/A'}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
          Address: {userDetails.address || 'N/A'}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Profile;
