import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import Home from './Components/Home';
import Restaurants from './Components/Restaurants';
import Order from './Components/Order'; 
import Reviews from './Components/Reviews';
import Login from './Components/Login';
import Signup from './Components/SignUp'; 
import Profile from './Components/Profile';
import MyOrders from './Components/MyOrder'; 
import Logout from './Components/logout'; 
import Footer from './Components/Footer'; 
import Aboutus from './Components/AboutUs';
import Privacy from './Components/Privacy';
import Contact from './Components/Contact';
import Terms from './Components/Terms';
import ForgotPassword from './Components/ForgotPassword';
import ScrollableCards from './Components/ScrollableCards';
import ExploreDishes from './Components/ExploreDishes';
import Menu1 from './Components/Menu1';
import Menu2 from './Components/Menu2';
import Menu3 from './Components/Menu3';
import Menu4 from './Components/Menu4';
import Payment from './Components/Payment';
import Notifications from './Components/Notifications';
import RealTimeTracking from './Components/RealTimeTracking ';

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
           <Route path="/terms" element={<Terms/>}/>
           <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
           <Route path="/details/:id" element={<Menu1 />} />
           <Route path="/details/2" element={<Menu2 />} />
           <Route path="/details/3" element={<Menu3 />} />
           <Route path="/details/4" element={<Menu4 />} />
           <Route path="/Payment" element={<Payment />} />
           <Route path='/notifications' element={<Notifications/>}/>
           <Route path='/RealTimeTracking' element={<RealTimeTracking/>}/>
          </Routes>
        </div>
<Footer/>
      </div>
    </Router>
  );
}

export default App;
