import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import IceCreamCarousel from './components/Carousel';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Offers from './pages/Offers';
import Locations from './pages/Location';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProfilePage from './pages/ProfilePage';
import AdminDashboard from './pages/AdminDashboard';
import AdminMenuManagement from './pages/AdminMenuManagement';
import Signup from './pages/SignUp';
import SpinWheel from './pages/SpinWheel';
import FlavorRecommendation from './pages/FlavorRecommendation';
import FeedbackForm from './pages/Feedbackform';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/flavor-recommendation" element={<FlavorRecommendation />} />
        <Route path="/feedback" element={<FeedbackForm />} />

        {/* User-Specific Route */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-menu-management" element={<AdminMenuManagement />} />

        {/* Gamification (Optional Feature) */}
        <Route path="/spin-wheel" element={<SpinWheel />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;