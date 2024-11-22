import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Smart Waste Management</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ngo-registration">NGO Registration</Link></li>
        <li><Link to="/ngo-requests">NGO Requests</Link></li>
        <li><Link to="/user-dashboard">User Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
