import React, { useState } from 'react';
import './css/Dashboard.css';

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="dashboard">
      <nav className="navbar">
        <div className="logo">CompanyLogo</div>
        <div id="nav-toggle" onClick={handleToggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? 'responsive' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Dashboard;