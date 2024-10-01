import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Notifications = () => {
  const notificationDate = new Date().toLocaleDateString(); // Current date
  const notificationTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Current time

  return (
    <Box sx={{ padding: 2 }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%', // Make it full width
          boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
          borderRadius: '8px',
          marginBottom: 2, // Space between cards if more than one
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div">
            Order Update
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your order #1234 has been shipped! Track your order for more details.
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ marginTop: 1 }}>
            {`${notificationDate} at ${notificationTime}`} {/* Display date and time */}
          </Typography>
          {/* Track Order Button */}
          <Button
            component={RouterLink}
            to="/RealTimeTracking" // Change this to the actual route of your RealTimeTracking component
            variant="contained"
            color="warning" // Warning color
            sx={{ marginTop: 2 }} // Space above the button
          >
            Track Order
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Notifications;
