import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Button } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordinates for KL University, Guntur
const deliveryLocation = {
  lat: 16.2995, // Latitude for KL University
  lng: 80.5032, // Longitude for KL University
};

// Set up a custom icon for the marker (bike icon)
const deliveryIcon = L.icon({
  iconUrl: 'https://img.icons8.com/ios-filled/50/000000/motorcycle.png', // URL to your custom bike marker icon
  iconSize: [30, 30], // Size of the icon
  iconAnchor: [15, 30], // Anchor point of the icon
});

// Define initial statuses
const initialStatuses = [
  { stage: 'Order Placed', duration: 2000 },
  { stage: 'Preparing', duration: 4000 },
  { stage: 'Out for Delivery', duration: 3000 },
  { stage: 'Delivered', duration: 1000 },
];

const RealTimeTracking = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [status, setStatus] = useState(initialStatuses[0].stage);
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Function to update the status
  const updateStatus = () => {
    if (statusIndex < initialStatuses.length) {
      setStatus(initialStatuses[statusIndex].stage);
      setProgress((statusIndex + 1) * (100 / initialStatuses.length));

      const nextStatusTimeout = setTimeout(() => {
        setStatusIndex((prevIndex) => prevIndex + 1);
      }, initialStatuses[statusIndex].duration);

      setIntervalId(nextStatusTimeout);
    }
  };

  useEffect(() => {
    // Start tracking when the component mounts
    updateStatus();

    return () => {
      clearTimeout(intervalId);
    };
  }, [statusIndex]);

  const handleTrackAgain = () => {
    // Reset to initial state
    setStatusIndex(0);
    setStatus(initialStatuses[0].stage);
    setProgress(0);

    // Clear any existing timeouts
    clearTimeout(intervalId);
    
    // Restart the status update
    updateStatus();
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Card
        sx={{
          width: '100%',
          boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
          borderRadius: '8px',
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            Real-Time Order Tracking
          </Typography>
          <Typography variant="h6" component="div" sx={{ margin: '16px 0' }}>
            Current Status: {status}
          </Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ marginBottom: 2 }} />
          <Typography variant="body2" color="text.secondary">
            Your order is currently in the "{status}" stage. Please wait for updates!
          </Typography>
          <Button variant="contained" color="primary" onClick={handleTrackAgain} sx={{ marginTop: 2 }}>
            Track Again
          </Button>
        </CardContent>
      </Card>

      {/* Map Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
          Delivery Location
        </Typography>
        <MapContainer center={deliveryLocation} zoom={15} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={deliveryLocation} icon={deliveryIcon}>
            <Popup>
              Your delivery is on its way to KL University, Guntur!
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Box>
  );
};

export default RealTimeTracking;
