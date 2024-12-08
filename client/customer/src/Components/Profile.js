import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import image2 from "./Icon1.png"; // Use any image for the profile picture

const Profile = () => {
  // Static user details for display
  const [userDetails] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    city: "Sample City",
    country: "Sample Country",
    address: "123, Example Street",
  });

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
          width: "350px",
          borderRadius: "10px",
          overflow: "hidden",
          textAlign: "center",
          boxShadow:
            "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
          <img src={image2} alt="Profile" style={{ width: "40%", borderRadius: "5px" }} />
        </Box>
        <Typography variant="h5" component="h1" sx={{ mt: 2 }}>
          Account Details
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
          Full Name: {userDetails.fullName}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
          Email: {userDetails.email}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
          Phone: {userDetails.phone}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
          City: {userDetails.city}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
          Country: {userDetails.country}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
          Address: {userDetails.address}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Profile;
