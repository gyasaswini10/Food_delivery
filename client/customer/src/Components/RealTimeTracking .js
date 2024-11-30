import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Button } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const deliveryLocation = {
  lat: 16.2995, 
  lng: 80.5032, 
};

const deliveryIcon = L.icon({
  iconUrl: 'https://img.icons8.com/ios-filled/50/000000/motorcycle.png', 
  iconSize: [30, 30], 
  iconAnchor: [15, 30], 
});

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
  const [mapPosition, setMapPosition] = useState(deliveryLocation);

  // Function to update status and move the bike icon
  const updateStatusAndMap = () => {
    if (statusIndex < initialStatuses.length) {
      // Update the status
      setStatus(initialStatuses[statusIndex].stage);
      setProgress((statusIndex + 1) * (100 / initialStatuses.length));
      
      // Move the map (bike icon) forward
      setMapPosition((prevPos) => ({
        lat: prevPos.lat + 0.0002, // Adjust movement speed
        lng: prevPos.lng + 0.0003, // Adjust movement speed
      }));
      
      // Move to the next stage
      setStatusIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Reset everything for a new tracking session
  const handleTrackAgain = () => {
    setStatusIndex(0);
    setStatus(initialStatuses[0].stage);
    setProgress(0);
    setMapPosition(deliveryLocation); // Reset map position to initial location
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
          <Button variant="contained" color="primary" onClick={updateStatusAndMap} sx={{ marginTop: 2 }}>
            Track Next Step
          </Button>
        </CardContent>
      </Card>

      {/* Map Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
          Delivery Location
        </Typography>
        <MapContainer center={mapPosition} zoom={15} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={mapPosition} icon={deliveryIcon}>
            <Popup>
              Your delivery is on its way to KL University, Guntur!
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
      
      {/* Reset Button */}
      <Button variant="outlined" color="secondary" onClick={handleTrackAgain} sx={{ marginTop: 2 }}>
        Reset Tracking
      </Button>
    </Box>
  );
};

export default RealTimeTracking;
