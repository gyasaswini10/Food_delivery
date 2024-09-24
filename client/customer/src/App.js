import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import Home from './Components/Home';
import Restaurants from './Components/Restaurants';
import Order from './Components/Order'; // Create this component
import Reviews from './Components/Reviews'; // Import the Reviews component
import Login from './Components/Login';
import Signup from './Components/SignUp'; 
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
