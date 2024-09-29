import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Notification = ({ message, type, onClose }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return '#4caf50'; // Green
      case 'error':
        return '#f44336'; // Red
      case 'warning':
        return '#ff9800'; // Orange
      case 'info':
        return '#2196f3'; // Blue
      default:
        return '#2196f3'; // Default to Blue (Info)
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: getBackgroundColor(),
        color: '#fff',
        padding: '16px',
        borderRadius: '8px',
        margin: '16px 0',
        position: 'relative',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="body1" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
        {message}
      </Typography>
      <Button
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          color: '#fff',
          textTransform: 'none',
          fontFamily: '"Times New Roman", Times, serif',
        }}
      >
        Close
      </Button>
    </Box>
  );
};

export default Notification;
