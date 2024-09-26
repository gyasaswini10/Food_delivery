import React, { useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import food from './food4.png'; // Adjust the path to your logo
import logo from './food2.png';

function ResponsiveAppBar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/home' || location.pathname === '/';

  // Menu state for profile dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: isHomePage ? 'transparent' : 'white',
        boxShadow: isHomePage ? 'none' : '0 4px 8px rgba(0,0,0,0.1)',
        position: 'relative',
      }}
    >
      {isHomePage && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '80vh',
            backgroundImage: `url(${food})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            zIndex: -1,
          }}
        />
      )}
      <Toolbar
        sx={{
          padding: isHomePage ? '10px 20px' : '5px 10px',
          minHeight: '48px',
        }}
      >
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src={logo} alt="Logo" style={{ height: '30px' }} />
        </IconButton>

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          {/* Navigation Links */}
          <RouterLink to="/" style={{ textDecoration: 'none', color: 'black', margin: '0 4px' }}>
            <Button color="inherit" sx={{ fontSize: '12px', padding: '6px 8px', textTransform: 'none' }}>
              Home
            </Button>
          </RouterLink>
          <RouterLink to="/restaurants" style={{ textDecoration: 'none', color: 'black', margin: '0 4px' }}>
            <Button color="inherit" sx={{ fontSize: '12px', padding: '6px 8px', textTransform: 'none' }}>
              Restaurants
            </Button>
          </RouterLink>
          <RouterLink to="/order" style={{ textDecoration: 'none', color: 'black', margin: '0 4px' }}>
            <Button color="inherit" sx={{ fontSize: '12px', padding: '6px 8px', textTransform: 'none' }}>
              Order
            </Button>
          </RouterLink>
          <RouterLink to="/reviews" style={{ textDecoration: 'none', color: 'black', margin: '0 4px' }}>
            <Button color="inherit" sx={{ fontSize: '12px', padding: '6px 8px', textTransform: 'none' }}>
              Reviews
            </Button>
          </RouterLink>
        </Box>

        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          sx={{
            mr: 2,
            width: '150px', // Set to a fixed width
            '& .MuiInputBase-input': {
              color: 'black',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'black',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'black' }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Login and Sign Up Buttons */}
        <RouterLink to="/login" style={{ textDecoration: 'none', color: 'black' }}>
          <Button color="inherit" sx={{ fontSize: '12px', padding: '6px 8px', margin: '0 4px', textTransform: 'none' }}>
            Login
          </Button>
        </RouterLink>

        <Box sx={{ ml: 1 }}>
          <RouterLink to="/signup" style={{  color: 'black' }}>
            <Button
              sx={{
                
                color: 'black',
                fontSize: '12px',
                padding: '6px 8px',
               
                textTransform: 'none',
              }}
            >
              Sign Up
            </Button>
          </RouterLink>
        </Box>

        {/* Profile Icon with Menu */}
        <IconButton
          edge="end"
          aria-controls="profile-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleMenuOpen}
          color="inherit"
        >
          <AccountCircle sx={{ color: 'black', fontSize: '30px' }} />
        </IconButton>

        {/* Profile Menu */}
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{ 'aria-labelledby': 'profile-button' }}
        >
          <MenuItem component={RouterLink} to="/profile" onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem component={RouterLink} to="/my-orders" onClick={handleMenuClose}>My Orders</MenuItem>
          <MenuItem component={RouterLink} to="/logout" onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
