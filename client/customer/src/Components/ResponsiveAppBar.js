import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import food1 from './food3.png'; // Adjust the path to your logo
import food from './food2.png';

const ResponsiveAppBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home' || location.pathname === '/';

  return (
    <AppBar position="static" sx={{ background: isHomePage ? 'transparent' : 'white', boxShadow: 'none', position: 'relative' }}>
      {isHomePage && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '80vh', // Ensure this is high enough to cover your desired area
            backgroundImage: `url(${food})`,
        
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            zIndex: -1,
            
          }}
        />
      )}
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src={food} alt="Logo" style={{ height: '40px' }} />
        </IconButton>

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Link to="/restaurants" style={{ textDecoration: 'none', color: isHomePage ? 'orange' : 'red', margin: '0 15px' }}>
            <Button color="inherit">Restaurants</Button>
          </Link>
          <Link to="/order" style={{ textDecoration: 'none', color: isHomePage ? 'orange' : 'red', margin: '0 15px' }}>
            <Button color="inherit">Order</Button>
          </Link>
          <Link to="/reviews" style={{ textDecoration: 'none', color: isHomePage ? 'orange' : 'red', margin: '0 15px' }}>
            <Button color="inherit">Reviews</Button> {/* Added Reviews link */}
          </Link>
        </Box>

        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          sx={{
            mr: 2,
            '& .MuiInputBase-input': {
              color: isHomePage ? 'white' : 'orange',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: isHomePage ? 'white' : 'orange',
            },
          }}
        />

        <Link to="/login" style={{ textDecoration: 'none', color: isHomePage ? 'orange' : 'red' }}>
          <Button color="inherit">Login</Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none', marginLeft: '10px', color: isHomePage ? 'orange' : 'red' }}>
          <Button variant="outlined" color="inherit">Sign Up</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;
