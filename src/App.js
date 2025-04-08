import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Components
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

// // Pages
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import ContactUs from "./pages/ContactUs";
// import Menu from "./pages/Menu";
// import Offers from "./pages/Offers";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Location from "./pages/Location";
// import FlavourRecomment from "./pages/FlavourRecomment";
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminMenuManagement from "./pages/AdminMenuManagement";

// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/offers" element={<Offers />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/location" element={<Location />} />
//         <Route path="/flavour-recommend" element={<FlavourRecomment />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/admin-menu" element={<AdminMenuManagement />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

