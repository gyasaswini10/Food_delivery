import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import Home from './Components/Home';
import Restaurants from './Components/Restaurants';
import Order from './Components/Order'; 
import Reviews from './Components/Reviews';
import Login from './Components/Login';
import Signup from './Components/SignUp'; // Ensure this is the correct case
import Profile from './Components/Profile';
import MyOrders from './Components/MyOrder'; // Ensure this matches your file name
import Logout from './Components/logout'; // Ensure this matches your file name
import Footer from './Components/Footer'; // Ensure Footer is exported correctly
import Aboutus from './Components/AboutUs';
import Privacy from './Components/Privacy';
import Contact from './Components/Contact';
const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden' }}>
        <ResponsiveAppBar />
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/order" element={<Order />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/logout" element={<Logout />} />
           <Route path='/Aboutus' element={<Aboutus/>}/>
           <Route path='/Privacy' element={<Privacy/>}/>
           <Route path='/Contact' element={<Contact/>}/>
          </Routes>
        </div>
     
        <Footer />
      </div>
    </Router>
  );
}

export default App;
